import { describe, expect, it } from 'vitest';
import { getWhatsAppContactUrl } from './contact';

describe('contextual WhatsApp contact', () => {
  it.each([
    ['pt-BR', 'Olá Nelson, vi seu portfólio e gostaria de conversar sobre um projeto.', 'consultoria para integrar IA ao processo de Product Design'],
    ['en', "Hi Nelson, I saw your portfolio and I'd like to talk about a project.", "consulting on integrating AI into my team's Product Design process"],
  ] as const)('preserves general contact and adds a distinct %s AI consulting message', (locale, generalMessage, consultingContext) => {
    const general = new URL(getWhatsAppContactUrl(locale));
    const consulting = new URL(getWhatsAppContactUrl(locale, 'ai-consulting'));
    expect(general.origin).toBe('https://wa.me');
    expect(consulting.origin).toBe(general.origin);
    expect(consulting.pathname).toBe('/5512981241764');
    expect(general.pathname).toBe(consulting.pathname);
    expect(general.searchParams.get('text')).toBe(generalMessage);
    expect(consulting.searchParams.get('text')).toContain(consultingContext);
    expect(consulting.searchParams.get('text')).not.toBe(generalMessage);
    expect([...consulting.searchParams.keys()]).toEqual(['text']);
  });
});
