import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ThemeAwareProjectImage } from './theme-aware-project-image';

const useThemeMock = vi.fn();

vi.mock('@/components/theme/theme-provider', () => ({
  useTheme: () => useThemeMock(),
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe('ThemeAwareProjectImage', () => {
  const image = {
    alt: 'Test project cover',
    width: 1920,
    height: 1080,
    light: {
      640: '/light/cover-640.webp',
      1024: '/light/cover-1024.webp',
      1440: '/light/cover-1440.webp',
      1920: '/light/cover-1920.webp',
    },
    dark: {
      640: '/dark/cover-640.webp',
      1024: '/dark/cover-1024.webp',
      1440: '/dark/cover-1440.webp',
      1920: '/dark/cover-1920.webp',
    },
  };

  it('renders the light theme image when resolvedTheme is light', async () => {
    useThemeMock.mockReturnValue({ resolvedTheme: 'light' });

    render(<ThemeAwareProjectImage image={image} sizes="100vw" />);

    await waitFor(() => expect(screen.getAllByRole('img', { name: /test project cover/i })).toHaveLength(1));
    const imageElement = screen.getByRole('img', { name: /test project cover/i });

    expect(imageElement).toHaveAttribute('src', '/light/cover-1920.webp');
    expect(imageElement).toHaveAttribute('srcset', expect.stringContaining('/light/cover-640.webp 640w'));
    expect(imageElement).toHaveAttribute('srcset', expect.stringContaining('/light/cover-1920.webp 1920w'));
  });

  it('renders the dark theme image when resolvedTheme is dark', async () => {
    useThemeMock.mockReturnValue({ resolvedTheme: 'dark' });

    render(<ThemeAwareProjectImage image={image} sizes="100vw" />);

    await waitFor(() => expect(screen.getAllByRole('img', { name: /test project cover/i })).toHaveLength(1));
    const imageElement = screen.getByRole('img', { name: /test project cover/i });

    expect(imageElement).toHaveAttribute('src', '/dark/cover-1920.webp');
    expect(imageElement).toHaveAttribute('srcset', expect.stringContaining('/dark/cover-640.webp 640w'));
    expect(imageElement).toHaveAttribute('srcset', expect.stringContaining('/dark/cover-1920.webp 1920w'));
  });

  it('updates the image source when the theme changes', async () => {
    useThemeMock.mockReturnValue({ resolvedTheme: 'light' });

    const { rerender } = render(<ThemeAwareProjectImage image={image} sizes="100vw" />);
    await waitFor(() => expect(screen.getAllByRole('img', { name: /test project cover/i })).toHaveLength(1));
    const firstImage = screen.getByRole('img', { name: /test project cover/i });
    expect(firstImage).toHaveAttribute('src', '/light/cover-1920.webp');

    useThemeMock.mockReturnValue({ resolvedTheme: 'dark' });
    rerender(<ThemeAwareProjectImage image={image} sizes="100vw" />);

    await waitFor(() => expect(screen.getAllByRole('img', { name: /test project cover/i })).toHaveLength(1));
    const secondImage = screen.getByRole('img', { name: /test project cover/i });
    expect(secondImage).toHaveAttribute('src', '/dark/cover-1920.webp');
    expect(secondImage).toHaveAttribute('alt', image.alt);
  });
});
