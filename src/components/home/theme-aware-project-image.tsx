'use client';

import { useMemo, useSyncExternalStore } from 'react';
import { useTheme } from '@/components/theme/theme-provider';

type ResponsiveSources = Record<number, string>;

type ThemeAwareProjectImageProps = {
  image: {
    alt: string;
    width: number;
    height: number;
    light: ResponsiveSources;
    dark: ResponsiveSources;
  };
  sizes: string;
};

function useMounted() {
  return useSyncExternalStore(() => () => {}, () => true, () => false);
}

function buildSrcSet(sources: ResponsiveSources) {
  return Object.entries(sources)
    .map(([width, src]) => `${src} ${width}w`)
    .sort((left, right) => parseInt(left.split(' ')[1], 10) - parseInt(right.split(' ')[1], 10))
    .join(', ');
}

export function ThemeAwareProjectImage({ image, sizes }: ThemeAwareProjectImageProps) {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  const theme = mounted && (resolvedTheme === 'light' || resolvedTheme === 'dark') ? resolvedTheme : null;

  const srcSet = useMemo(() => {
    if (!theme) return undefined;
    const sources = theme === 'dark' ? image.dark : image.light;
    return buildSrcSet(sources);
  }, [image.dark, image.light, theme]);

  const src = useMemo(() => {
    if (!theme) return undefined;
    const sources = theme === 'dark' ? image.dark : image.light;
    return sources[1920] ?? sources[1440] ?? sources[1024] ?? sources[640];
  }, [image.dark, image.light, theme]);

  if (!theme || !src || !srcSet) {
    return <div className="project-card__image" aria-hidden="true" />;
  }

  // Using a plain <img> is intentional here to preserve direct responsive source selection
  // and avoid rendering both theme variants during hydration.
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="project-card__image" src={src} srcSet={srcSet} sizes={sizes} width={image.width} height={image.height} alt={image.alt} />;
}
