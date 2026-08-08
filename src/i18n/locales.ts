export const SUPPORTED_LOCALES = ['pt-BR', 'en'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'pt-BR';
export const CANONICAL_LOCALE: Locale = 'pt-BR';

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.some((locale) => locale === value);
}
