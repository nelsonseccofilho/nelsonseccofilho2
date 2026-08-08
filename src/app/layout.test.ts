import { describe, expect, it } from 'vitest';
import EnglishRootLayout, { metadata as englishMetadata } from './(en)/layout';
import PortugueseRootLayout, { metadata as portugueseMetadata } from './(pt-BR)/layout';

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
