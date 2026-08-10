import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AppThemeProvider, useTheme } from './theme-provider';

function ThemeProbe() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button type="button" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      {resolvedTheme ?? 'pending'}
    </button>
  );
}

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
  document.documentElement.style.colorScheme = '';
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe('AppThemeProvider', () => {
  it('does not render a script from the client provider tree', () => {
    const markup = renderToString(
      <AppThemeProvider>
        <span>Content</span>
      </AppThemeProvider>,
    );

    expect(markup).toBe('<span>Content</span>');
    expect(markup).not.toContain('<script');
  });

  it('reads the pre-hydration theme and persists theme changes', () => {
    vi.useFakeTimers();
    window.localStorage.setItem('theme', 'dark');

    render(
      <AppThemeProvider>
        <ThemeProbe />
      </AppThemeProvider>,
    );

    const toggle = screen.getByRole('button', { name: 'dark' });
    fireEvent.click(toggle);

    expect(toggle).toHaveTextContent('light');
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
    expect(document.documentElement.style.colorScheme).toBe('light');
    expect(window.localStorage.getItem('theme')).toBe('light');

    vi.runAllTimers();
  });

  it('synchronizes theme changes received from another tab', () => {
    render(
      <AppThemeProvider>
        <ThemeProbe />
      </AppThemeProvider>,
    );

    fireEvent(window, new StorageEvent('storage', { key: 'theme', newValue: 'dark' }));

    expect(screen.getByRole('button', { name: 'dark' })).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  });
});
