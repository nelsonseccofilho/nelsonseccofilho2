'use client';

import { type MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnalyticsLink } from '@/components/analytics/analytics-link';
import { HeaderSectionNav } from '@/components/layout/header-section-nav';
import { LanguageSwitcher } from '@/components/i18n/language-switcher';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { SendIcon } from '@/components/ui/send-icon';
import { getWhatsAppContactUrl } from '@/content/contact';
import { enCommon } from '@/content/i18n';
import type { CommonContent } from '@/content/i18n/types';
import { isReducedMotionPreferred } from '@/lib/section-navigation';
import type { Locale } from '@/i18n/locales';
import { getLocalizedPath, type RouteId } from '@/i18n/routes';

type SiteHeaderProps = {
  content?: CommonContent;
  locale?: Locale;
  routeId?: RouteId;
};

export function SiteHeader({ content = enCommon, locale = 'en', routeId = 'home' }: SiteHeaderProps = {}) {
  const homePath = getLocalizedPath('home', locale);
  const pathname = usePathname();

  function handleBrandClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== homePath) return;
    event.preventDefault();
    const behavior = isReducedMotionPreferred() ? 'auto' : 'smooth';
    window.scrollTo({ top: 0, left: 0, behavior });
  }

  return (
    <header className="site-header">
      <div className="layout-container site-header__inner">
        <div className="site-header__start">
          <Link href={homePath} className="site-header__brand" aria-label={content.accessibility.home} onClick={handleBrandClick}>
            <svg className="site-header__brand-mark" viewBox="0 0 128 128" aria-hidden="true" focusable="false">
              <rect width="128" height="128" rx="30" />
              <path d="M34 92V36h14l32 34V36h14v56H80L48 58v34z" />
            </svg>
            <span className="site-header__brand-type">3LX</span>
          </Link>
          <HeaderSectionNav links={content.header.sectionLinks} homePath={homePath} label={content.header.sectionsNavLabel} />
        </div>
        <div className="site-header__actions">
          <LanguageSwitcher content={content.languageSwitcher} locale={locale} routeId={routeId} />
          <AnalyticsLink
            className="whatsapp-action site-header__cta"
            href={getWhatsAppContactUrl(locale)}
            target="_blank"
            rel="noreferrer"
            eventName="contact_whatsapp_click"
            data-clarity-mask="true"
            aria-label={content.header.contactAriaLabel}
          >
            <SendIcon className="site-header__cta-icon" />
            <span className="site-header__cta-label" aria-hidden="true">{content.header.contactLabel}</span>
          </AnalyticsLink>
          <ThemeToggle labels={content.themeToggle} />
        </div>
      </div>
    </header>
  );
}
