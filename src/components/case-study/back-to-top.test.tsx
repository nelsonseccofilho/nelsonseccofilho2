import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { BackToTop } from './back-to-top';

const originalMatchMedia = window.matchMedia;
const originalScrollTo = window.scrollTo;

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value });
  fireEvent.scroll(window);
}

beforeEach(() => {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
  Object.defineProperty(window, 'scrollTo', { configurable: true, value: vi.fn() });
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn().mockReturnValue({ matches: false }),
  });
});

afterEach(() => {
  cleanup();
  Object.defineProperty(window, 'scrollTo', { configurable: true, value: originalScrollTo });
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: originalMatchMedia });
});

describe('BackToTop', () => {
  it('is hidden at the page start and appears after the scroll threshold', () => {
    render(<BackToTop label="↑ Top" accessibilityLabel="Back to top" />);

    expect(screen.queryByRole('button', { name: 'Back to top' })).not.toBeInTheDocument();
    setScrollY(600);
    expect(screen.getByRole('button', { name: 'Back to top' })).toHaveTextContent('↑ Top');
  });

  it('returns to the top smoothly when motion is allowed', () => {
    render(<BackToTop label="↑ Topo" accessibilityLabel="Voltar ao topo" />);
    setScrollY(600);

    fireEvent.click(screen.getByRole('button', { name: 'Voltar ao topo' }));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('uses non-smooth scrolling when reduced motion is requested', () => {
    vi.mocked(window.matchMedia).mockReturnValue({ matches: true } as MediaQueryList);
    render(<BackToTop label="↑ Top" accessibilityLabel="Back to top" />);
    setScrollY(600);

    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
  });
});
