import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { afterEach, describe, expect, it, vi } from 'vitest';

const { useThemeMock, setThemeMock } = vi.hoisted(() => ({
  useThemeMock: vi.fn(),
  setThemeMock: vi.fn(),
}));

vi.mock('next-themes', () => ({
  useTheme: useThemeMock,
}));

import { ThemeToggle } from './theme-toggle';

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  vi.restoreAllMocks();
});

describe('ThemeToggle', () => {
  it('renders theme-independent accessible markup on the server', () => {
    useThemeMock.mockReturnValue({
      theme: 'dark',
      resolvedTheme: 'dark',
      setTheme: setThemeMock,
    });

    const darkMarkup = renderToString(<ThemeToggle />);

    useThemeMock.mockReturnValue({
      theme: 'light',
      resolvedTheme: 'light',
      setTheme: setThemeMock,
    });

    const lightMarkup = renderToString(<ThemeToggle />);
    const container = document.createElement('div');
    container.innerHTML = darkMarkup;
    const button = within(container).getByRole('button', { name: 'Alternar tema' });

    expect(darkMarkup).toBe(lightMarkup);
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(button.querySelector('svg')).not.toBeInTheDocument();
  });

  it('hydrates theme-independent server markup before rendering the resolved client theme', () => {
    useThemeMock.mockReturnValue({
      theme: 'dark',
      resolvedTheme: 'dark',
      setTheme: setThemeMock,
    });

    const serverMarkup = renderToString(<ThemeToggle />);
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.innerHTML = serverMarkup;
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    useThemeMock.mockReturnValue({
      theme: 'light',
      resolvedTheme: 'light',
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />, { container, hydrate: true });

    const button = within(container).getByRole('button', { name: 'Ativar tema escuro' });
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(button.querySelector('svg')).toBeInTheDocument();
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it('renders a button with the correct light theme label', () => {
    useThemeMock.mockReturnValue({
      theme: 'light',
      resolvedTheme: 'light',
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Ativar tema escuro');
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('calls setTheme with dark when clicked in light mode', () => {
    useThemeMock.mockReturnValue({
      theme: 'light',
      resolvedTheme: 'light',
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole('button'));

    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });

  it('renders the correct label and calls setTheme with light when dark', () => {
    useThemeMock.mockReturnValue({
      theme: 'dark',
      resolvedTheme: 'dark',
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Ativar tema claro');
    expect(button).toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(button);
    expect(setThemeMock).toHaveBeenCalledWith('light');
  });
});
