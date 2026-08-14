import { BackToTop } from '@/components/case-study/back-to-top';
import { CaseHero } from '@/components/case-study/case-hero';
import { AnalyticsLink } from '@/components/analytics/analytics-link';
import { SiteHeader } from '@/components/layout/site-header';
import { MediaPlaceholder } from '@/components/media/media-placeholder';
import { PortfolioReturnLink } from '@/components/navigation/portfolio-return-link';
import { GITHUB_PORTFOLIO_REPOSITORY_URL } from '@/content/contact';
import { commonContent } from '@/content/i18n';
import { portfolioMetaCaseContent } from '@/content/i18n/meta-case';
import type { Locale } from '@/i18n/locales';

export function PortfolioMetaCasePage({ locale }: { locale: Locale }) {
  const common = commonContent[locale];
  const content = portfolioMetaCaseContent[locale];

  return (
    <>
      <SiteHeader content={common} locale={locale} routeId="building-portfolio" />
      <main>
        <nav className="layout-container pt-6" aria-label={common.portfolioReturn.accessibilityLabel}>
          <PortfolioReturnLink locale={locale} />
        </nav>
        <article>
          <CaseHero
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.subtitle}
            supportingCopy={content.intro}
            image={content.heroMedia}
            placeholderLabel={common.mediaPlaceholders.visual}
          />

          <section id="executive-entry" className="py-[clamp(2.5rem,5vw,5rem)]" aria-labelledby="executive-entry-title">
            <div className="layout-container grid gap-6 border-t border-[var(--color-border)] pt-[clamp(2rem,4vw,3.5rem)] md:grid-cols-12 md:gap-8">
              <h2 id="executive-entry-title" className="m-0 text-[clamp(1.6rem,2.8vw,2.5rem)] leading-[1.08] font-bold text-[var(--color-text-primary)] md:col-span-4">
                {content.executiveEntry.title}
              </h2>
              <dl className="m-0 grid max-w-[52rem] border-b border-[var(--color-border)] md:col-span-8">
                {content.executiveEntry.items.map((item) => (
                  <div key={item.label} className="grid gap-2 border-t border-[var(--color-border)] py-4 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[minmax(7rem,9rem)_minmax(0,1fr)] sm:gap-5">
                    <dt className="text-sm leading-[1.5] font-semibold tracking-[0.12em] text-[var(--color-brand-text)] uppercase">
                      {item.label}
                    </dt>
                    <dd className="m-0 max-w-[44rem] text-[1rem] leading-[1.7] text-[var(--color-text-secondary)]">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {content.sections.map((section, index) => (
            <section key={section.id} id={section.id} className="py-[clamp(2.5rem,5vw,5rem)]" aria-labelledby={`${section.id}-title`}>
              <div className="layout-container grid gap-6 border-t border-[var(--color-border)] pt-[clamp(2rem,4vw,3.5rem)] md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <span className="text-sm font-semibold tracking-[0.14em] text-[var(--color-brand-text)] tabular-nums" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h2 id={`${section.id}-title`} className="mt-3 mb-0 text-[clamp(1.6rem,2.8vw,2.5rem)] leading-[1.08] font-bold text-[var(--color-text-primary)]">{section.title}</h2>
                </div>
                <div className="grid max-w-[52rem] gap-5 md:col-span-8">
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="m-0 text-[1rem] leading-[1.75] text-[var(--color-text-secondary)]">{paragraph}</p>)}
                  {section.bullets ? (
                    <ul className="m-0 grid gap-3 pl-5 text-[1rem] leading-[1.65] text-[var(--color-text-secondary)]">
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  ) : null}
                  {section.media ? (
                    <div className="aspect-video overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="h-full w-full object-contain object-center" src={section.media.src} alt={section.media.alt} loading="lazy" />
                    </div>
                  ) : null}
                  {section.placeholder && !section.media ? (
                    <div className="aspect-video overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
                      <MediaPlaceholder label={common.mediaPlaceholders.evidence} variant="evidence" />
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          ))}

          <section className="py-[clamp(2.5rem,5vw,5rem)]" aria-labelledby="deployment-title">
            <div className="layout-container grid gap-8 border-t border-[var(--color-border)] pt-[clamp(2rem,4vw,3.5rem)] md:grid-cols-12">
              <h2 id="deployment-title" className="m-0 text-[clamp(1.6rem,2.8vw,2.5rem)] leading-[1.08] font-bold text-[var(--color-text-primary)] md:col-span-4">{content.deployment.title}</h2>
              <div className="grid gap-6 md:col-span-8">
                <dl className="m-0 grid gap-0 border-b border-[var(--color-border)]">
                  {content.deployment.steps.map((step) => (
                    <div key={step.label} className="grid gap-2 border-t border-[var(--color-border)] py-5 sm:grid-cols-[8rem_1fr] sm:gap-5">
                      <dt className="font-semibold text-[var(--color-brand-text)]">{step.label}</dt>
                      <dd className="m-0 leading-[1.7] text-[var(--color-text-secondary)]">{step.description}</dd>
                    </div>
                  ))}
                </dl>
                {content.deployment.media ? (
                  <div className="aspect-video overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="h-full w-full object-contain object-center" src={content.deployment.media.src} alt={content.deployment.media.alt} loading="lazy" />
                  </div>
                ) : null}
                <AnalyticsLink
                  className="text-link text-link--hit-area"
                  href={GITHUB_PORTFOLIO_REPOSITORY_URL}
                  target="_blank"
                  rel="noreferrer"
                  eventName="github_repository_click"
                >
                  {content.deployment.productionLabel}
                </AnalyticsLink>
              </div>
            </div>
          </section>

          {[content.professionalEvidence, content.learnings].map((section) => (
            <section key={section.title} className="py-[clamp(2.5rem,5vw,5rem)]">
              <div className="layout-container grid gap-6 border-t border-[var(--color-border)] pt-[clamp(2rem,4vw,3.5rem)] md:grid-cols-12 md:gap-8">
                <h2 className="m-0 text-[clamp(1.6rem,2.8vw,2.5rem)] leading-[1.08] font-bold text-[var(--color-text-primary)] md:col-span-4">{section.title}</h2>
                <ul className="m-0 grid max-w-[52rem] gap-3 pl-5 leading-[1.65] text-[var(--color-text-secondary)] md:col-span-8">
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </section>
          ))}
        </article>
        <BackToTop label={common.backToTop.label} accessibilityLabel={common.backToTop.accessibilityLabel} />
      </main>
    </>
  );
}
