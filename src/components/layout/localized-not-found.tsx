import { SiteHeader } from '@/components/layout/site-header';
import { PortfolioReturnLink } from '@/components/navigation/portfolio-return-link';
import type { CommonContent } from '@/content/i18n/types';
import type { Locale } from '@/i18n/locales';

type LocalizedNotFoundProps = {
  content: CommonContent;
  locale: Locale;
};

export function LocalizedNotFound({ content, locale }: LocalizedNotFoundProps) {
  return (
    <>
      <SiteHeader content={content} locale={locale} routeId="home" />
      <main className="grid min-h-[calc(100dvh-5.25rem)] items-center py-[clamp(3rem,9vw,8rem)]">
        <div className="layout-container w-full">
          <div className="grid max-w-[60rem] gap-5">
            <p className="m-0 text-sm font-semibold tracking-[0.18em] text-[var(--color-brand-text)] uppercase">{content.notFound.code}</p>
            <h1 className="m-0 max-w-[16ch] text-[clamp(3.25rem,8vw,7rem)] leading-[0.95] font-bold tracking-[-0.045em] text-[var(--color-text-primary)]">
              {content.notFound.title}
            </h1>
            <p className="m-0 max-w-[42rem] text-[clamp(1rem,1.6vw,1.2rem)] leading-[1.7] text-[var(--color-text-secondary)]">
              {content.notFound.description}
            </p>
            <nav className="mt-2" aria-label={content.portfolioReturn.accessibilityLabel}>
              <PortfolioReturnLink locale={locale} />
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
