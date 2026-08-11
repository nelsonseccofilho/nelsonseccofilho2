import Link from 'next/link';
import type { CommonContent } from '@/content/i18n/types';
import { SUPPORTED_LOCALES, type Locale } from '@/i18n/locales';
import { getLocalizedPath, type RouteId } from '@/i18n/routes';

type LanguageSwitcherProps = {
  content: CommonContent['languageSwitcher'];
  locale: Locale;
  routeId: RouteId;
};

const localeLabels: Readonly<Record<Locale, keyof Pick<CommonContent['languageSwitcher'], 'portugueseLabel' | 'englishLabel'>>> = {
  'pt-BR': 'portugueseLabel',
  en: 'englishLabel',
};

export function LanguageSwitcher({ content, locale, routeId }: LanguageSwitcherProps) {
  return (
    <nav className="language-switcher" aria-label={content.label}>
      {SUPPORTED_LOCALES.map((targetLocale) => (
        <Link
          key={targetLocale}
          className="language-switcher__link"
          href={getLocalizedPath(routeId, targetLocale)}
          hrefLang={targetLocale}
          aria-current={targetLocale === locale ? 'page' : undefined}
          aria-label={content[localeLabels[targetLocale]]}
        >
          {targetLocale === 'pt-BR' ? 'PT-BR' : 'EN'}
        </Link>
      ))}
    </nav>
  );
}
