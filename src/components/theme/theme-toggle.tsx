'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { enCommon } from '@/content/i18n';
import type { CommonContent } from '@/content/i18n/types';

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

type ThemeToggleProps = { labels?: CommonContent['themeToggle'] };

export function ThemeToggle({ labels = enCommon.themeToggle }: ThemeToggleProps = {}) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const themeReady = mounted && (resolvedTheme === 'light' || resolvedTheme === 'dark');
  const isDark = themeReady && resolvedTheme === 'dark';
  const label = themeReady ? (isDark ? labels.activateLightLabel : labels.activateDarkLabel) : labels.pendingLabel;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {!themeReady ? null : isDark ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v2" />
            <path d="M12 19v2" />
            <path d="M4.93 4.93l1.41 1.41" />
            <path d="M17.66 17.66l1.41 1.41" />
            <path d="M3 12h2" />
            <path d="M19 12h2" />
            <path d="M4.93 19.07l1.41-1.41" />
            <path d="M17.66 6.34l1.41-1.41" />
            <circle cx="12" cy="12" r="3.5" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
          </svg>
        )}
      </span>
    </button>
  );
}
