import Link from 'next/link';
import { LanguageSwitcher } from '@/components/i18n/language-switcher';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { WHATSAPP_CONTACT_URL } from '@/content/contact';
import { enCommon } from '@/content/i18n';
import type { CommonContent } from '@/content/i18n/types';
import type { Locale } from '@/i18n/locales';
import { getLocalizedPath, type RouteId } from '@/i18n/routes';

type SiteHeaderProps = {
  content?: CommonContent;
  locale?: Locale;
  routeId?: RouteId;
};

export function SiteHeader({ content = enCommon, locale = 'en', routeId = 'home' }: SiteHeaderProps = {}) {
  return (
    <header className="site-header">
      <div className="layout-container site-header__inner">
        <Link href={getLocalizedPath('home', locale)} className="site-header__brand" aria-label={content.accessibility.home}>
          N3LX
        </Link>
        <div className="site-header__actions">
          <a className="site-header__cta" href={WHATSAPP_CONTACT_URL} target="_blank" rel="noreferrer">
            {content.header.contactLabel}
          </a>
          <LanguageSwitcher content={content.languageSwitcher} locale={locale} routeId={routeId} />
          <ThemeToggle labels={content.themeToggle} />
        </div>
      </div>
    </header>
  );
}
