import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Children, isValidElement, type ReactNode } from 'react';
import { describe, expect, it } from 'vitest';
import { AnalyticsProvider } from '@/components/analytics/analytics-provider';
import { SiteFooter } from '@/components/layout/site-footer';
import { ThemeInitializationScript } from '@/components/theme/theme-initialization-script';
import { AppThemeProvider } from '@/components/theme/theme-provider';
import EnglishFooterLayout from './(en)/(with-footer)/layout';
import PortugueseFooterLayout from './(pt-BR)/(with-footer)/layout';
import EnglishRootLayout, { metadata as englishMetadata } from './(en)/layout';
import PortugueseRootLayout, { metadata as portugueseMetadata } from './(pt-BR)/layout';

function countElements(node: ReactNode, type: unknown): number {
  if (!isValidElement(node)) return 0;

  const children = (node.props as { children?: ReactNode }).children;
  return (
    Number(node.type === type) +
    Children.toArray(children).reduce<number>((total, child) => total + countElements(child, type), 0)
  );
}

function relativeLuminance(hex: string) {
  const channels = hex
    .slice(1)
    .match(/.{2}/g)!
    .map((channel) => Number.parseInt(channel, 16) / 255)
    .map((channel) => (channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4));

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrastRatio(foreground: string, background: string) {
  const foregroundLuminance = relativeLuminance(foreground);
  const backgroundLuminance = relativeLuminance(background);

  return (Math.max(foregroundLuminance, backgroundLuminance) + 0.05) / (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);
}

describe('layout metadata', () => {
  it('exposes locale-aware titles and descriptions', () => {
    expect(englishMetadata.title).toBe('Nelson Secco — Senior Product Designer & UX Consultant');
    expect(englishMetadata.description).toMatch(/software-development background.*UX Consultant/i);
    expect(portugueseMetadata.title).toBe('Nelson Secco — Senior Product Designer & UX Consultant');
    expect(portugueseMetadata.description).toMatch(/background em desenvolvimento de software.*UX Consultant/i);
    expect(portugueseMetadata.description).not.toBe(englishMetadata.description);
  });

  it('sets the document language in each root layout without client mutation', () => {
    const englishLayout = EnglishRootLayout({ children: null });
    const portugueseLayout = PortugueseRootLayout({ children: null });

    expect(englishLayout.props.lang).toBe('en');
    expect(portugueseLayout.props.lang).toBe('pt-BR');
  });

  it('keeps root localized layouts responsible for providers/scripts but not footer landmarks', () => {
    const englishLayout = EnglishRootLayout({ children: null });
    const portugueseLayout = PortugueseRootLayout({ children: null });

    for (const layout of [englishLayout, portugueseLayout]) {
      expect(countElements(layout, AppThemeProvider)).toBe(1);
      expect(countElements(layout, AnalyticsProvider)).toBe(1);
      expect(countElements(layout, ThemeInitializationScript)).toBe(1);
      expect(countElements(layout, SiteFooter)).toBe(0);
    }
  });

  it('renders one global footer in the normal-page layout boundary for each locale', () => {
    const englishLayout = EnglishFooterLayout({ children: null });
    const portugueseLayout = PortugueseFooterLayout({ children: null });

    for (const layout of [englishLayout, portugueseLayout]) {
      expect(countElements(layout, SiteFooter)).toBe(1);
    }
  });
});

describe('dark theme text contrast', () => {
  it('keeps brand text variants readable on the darkest elevated surface', () => {
    const css = readFileSync(resolve(process.cwd(), 'src/app/globals.css'), 'utf8');
    const darkTheme = css.match(/\[data-theme='dark'\]\s*{([^}]+)}/)?.[1];
    const token = (name: string) => darkTheme?.match(new RegExp(`${name}:\\s*(#[0-9a-f]{6})`, 'i'))?.[1];
    const elevatedSurface = token('--color-surface-elevated');

    expect(elevatedSurface).toBeDefined();
    expect(contrastRatio(token('--color-brand-text')!, elevatedSurface!)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(token('--color-brand-text-active')!, elevatedSurface!)).toBeGreaterThanOrEqual(4.5);
  });
});
