import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import EnglishRootLayout, { metadata as englishMetadata } from './(en)/layout';
import PortugueseRootLayout, { metadata as portugueseMetadata } from './(pt-BR)/layout';

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
  it('exposes the expected title and description', () => {
    expect(englishMetadata.title).toBe(
      'N3LX | Senior Product Designer | UX Strategy | Product Discovery | Design Systems | AI-assisted Product Design',
    );
    expect(englishMetadata.description).toBe(
      'Senior Product Designer e UX Lead especializado em produtos digitais, sistemas complexos, estratégia e experiências orientadas por tecnologia.',
    );
    expect(portugueseMetadata).toEqual(englishMetadata);
  });

  it('sets the document language in each root layout without client mutation', () => {
    const englishLayout = EnglishRootLayout({ children: null });
    const portugueseLayout = PortugueseRootLayout({ children: null });

    expect(englishLayout.props.lang).toBe('en');
    expect(portugueseLayout.props.lang).toBe('pt-BR');
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
