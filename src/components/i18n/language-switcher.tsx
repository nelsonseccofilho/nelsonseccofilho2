"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { CommonContent } from '@/content/i18n/types';
import { SUPPORTED_LOCALES, type Locale } from '@/i18n/locales';
import { getLocalizedPath, type RouteId } from '@/i18n/routes';
import { captureLocaleScrollContext, storeLocaleScrollContext } from '@/lib/section-navigation';

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
  const pathname = usePathname();

  function handleLocaleClick(targetLocale: Locale) {
    if (routeId !== 'home' || targetLocale === locale) {
      return;
    }

    if (pathname !== getLocalizedPath('home', locale)) {
      return;
    }

    const context = captureLocaleScrollContext();
    if (context) {
      storeLocaleScrollContext(context);
    }
  }

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
          onClick={() => handleLocaleClick(targetLocale)}
        >
          {targetLocale === 'pt-BR' ? 'PT-BR' : 'EN'}
        </Link>
      ))}
    </nav>
  );
}
