import Link from 'next/link';
import { AnalyticsLink } from '@/components/analytics/analytics-link';
import { LanguageSwitcher } from '@/components/i18n/language-switcher';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { SendIcon } from '@/components/ui/send-icon';
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
          <svg className="site-header__brand-mark" viewBox="0 0 128 128" aria-hidden="true" focusable="false">
            <rect width="128" height="128" rx="30" />
            <path d="M34 92V36h14l32 34V36h14v56H80L48 58v34z" />
          </svg>
          <span className="site-header__brand-type">3LX</span>
        </Link>
        <div className="site-header__actions">
          <AnalyticsLink
            className="whatsapp-action site-header__cta"
            href={WHATSAPP_CONTACT_URL}
            target="_blank"
            rel="noreferrer"
            eventName="contact_whatsapp_click"
            data-clarity-mask="true"
          >
            <SendIcon className="site-header__cta-icon" />
            <span>{content.header.contactLabel}</span>
          </AnalyticsLink>
          <LanguageSwitcher content={content.languageSwitcher} locale={locale} routeId={routeId} />
          <ThemeToggle labels={content.themeToggle} />
        </div>
      </div>
    </header>
  );
}
