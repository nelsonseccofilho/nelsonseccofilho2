import { describe, expect, it } from 'vitest';
import { metadata } from './layout';

describe('layout metadata', () => {
  it('exposes the expected title and description', () => {
    expect(metadata.title).toBe(
      'N3LX | Senior Product Designer | UX Strategy | Product Discovery | Design Systems | AI-assisted Product Design',
    );
    expect(metadata.description).toBe(
      'Senior Product Designer e UX Lead especializado em produtos digitais, sistemas complexos, estratégia e experiências orientadas por tecnologia.',
    );
  });
});
