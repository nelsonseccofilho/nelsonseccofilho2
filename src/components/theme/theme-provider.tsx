'use client';

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextValue = {
  resolvedTheme: Theme | undefined;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  resolvedTheme: undefined,
  setTheme: () => {},
});

function readDocumentTheme(): Theme | undefined {
  if (typeof document === 'undefined') return undefined;

  const theme = document.documentElement.getAttribute('data-theme');
  return theme === 'light' || theme === 'dark' ? theme : undefined;
}

function readStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  try {
    return window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

function applyDocumentTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
}

function withoutColorTransitions(update: () => void) {
  const style = document.createElement('style');
  style.appendChild(
    document.createTextNode('*,*::before,*::after{-webkit-transition:none!important;transition:none!important}'),
  );
  document.head.appendChild(style);

  update();
  window.getComputedStyle(document.body);

  window.setTimeout(() => style.remove(), 1);
}

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [resolvedTheme, setResolvedTheme] = useState<Theme | undefined>(() => readDocumentTheme() ?? readStoredTheme());

  const setTheme = useCallback((theme: Theme) => {
    withoutColorTransitions(() => applyDocumentTheme(theme));
    try {
      window.localStorage.setItem('theme', theme);
    } catch {
      // The selected theme still applies when storage is unavailable.
    }
    setResolvedTheme(theme);
  }, []);

  useLayoutEffect(() => {
    const initialTheme = readDocumentTheme() ?? readStoredTheme();
    applyDocumentTheme(initialTheme);
  }, []);

  useEffect(() => {
    const syncThemeAcrossTabs = (event: StorageEvent) => {
      if (event.key !== 'theme') return;

      const theme = event.newValue === 'dark' ? 'dark' : 'light';
      applyDocumentTheme(theme);
      setResolvedTheme(theme);
    };

    window.addEventListener('storage', syncThemeAcrossTabs);
    return () => window.removeEventListener('storage', syncThemeAcrossTabs);
  }, []);

  return <ThemeContext.Provider value={{ resolvedTheme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
