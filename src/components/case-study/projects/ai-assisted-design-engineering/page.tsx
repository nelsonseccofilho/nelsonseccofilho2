import styles from './case.module.css';
import { WorkflowDiagram, EvidenceLadder, TrustArchitecture } from './system-diagrams';
import type { Metadata } from 'next';
import { AnalyticsLink } from '@/components/analytics/analytics-link';
import { getWhatsAppClickEvent } from '@/components/analytics/clarity';
import { BackToTop } from '@/components/case-study/back-to-top';
import { CaseNavigation } from '@/components/case-study/case-navigation';
import { EvidenceViewer } from '@/components/case-study/evidence-viewer';
import { CaseSection } from '@/components/case-study/case-section';
import { SiteHeader } from '@/components/layout/site-header';
import { PortfolioReturnNavigation } from '@/components/navigation/portfolio-return-navigation';
import { SendIcon } from '@/components/ui/send-icon';
import { getWhatsAppContactUrl } from '@/content/contact';
import { commonContent } from '@/content/i18n';
import { aiAssistedDesignEngineeringCaseContent, aiAssistedDesignEngineeringSharedFacts } from '@/content/i18n/projects/ai-assisted-design-engineering';
import type { Locale } from '@/i18n/locales';
import { getLocalizedPath } from '@/i18n/routes';

function createCaseMetadata(locale: Locale): Metadata {
  const copy = aiAssistedDesignEngineeringCaseContent[locale].metadata;
  const origin = 'https://nelsonsecco.netlify.app';
  const url = origin + getLocalizedPath('ai-assisted-design-engineering', locale);
  return {
    ...copy,
    authors: [{ name: aiAssistedDesignEngineeringSharedFacts.authorName }],
    alternates: {
      canonical: url,
      languages: {
        'pt-BR': origin + getLocalizedPath('ai-assisted-design-engineering', 'pt-BR'),
        en: origin + getLocalizedPath('ai-assisted-design-engineering', 'en'),
      },
    },
    openGraph: {
      ...copy,
      type: 'article',
      url,
      siteName: 'Nelson Secco',
      locale: locale === 'pt-BR' ? 'pt_BR' : 'en_US',
      alternateLocale: locale === 'pt-BR' ? 'en_US' : 'pt_BR',
    },
    twitter: { card: 'summary', ...copy },
  };
}

export const metadataByLocale: Readonly<Record<Locale, Metadata>> = {
  'pt-BR': createCaseMetadata('pt-BR'),
  en: createCaseMetadata('en'),
};

const evidenceFamilies = {
  ingestion: 'github-evidence-ingestion',
  runtime: 'github-runtime-tree',
  readme: 'github-readme',
  commit: 'github-commit-291015',
} as const;

function PublicEvidence({ family, locale }: { family: keyof typeof evidenceFamilies; locale: Locale }) {
  const evidence = aiAssistedDesignEngineeringCaseContent[locale].evidence;
  const item = evidence.items[family];
  const prefix = '/assets/projects/ai-assisted-design-engineering/evidence/' + evidenceFamilies[family];
  const sizes = family === 'readme'
    ? '(min-width: 1600px) 1440px, (min-width: 1024px) calc(100vw - 128px), (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)'
    : '(min-width: 1200px) 1024px, (min-width: 1024px) calc(100vw - 96px), (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)';
  return (
    <div className={family === 'readme' ? 'grid gap-5' : 'grid max-w-[64rem] gap-5'}>
      <EvidenceViewer
        image={{
          src: prefix + '-1920.webp',
          alt: item.alt,
          responsive: {
            srcSet: [640, 1024, 1440, 1920].map((width) => prefix + '-' + width + '.webp ' + width + 'w').join(', '),
            sizes,
            width: 1920,
            height: 1080,
            mobile: { src: prefix + '-mobile-640.webp', width: 640, height: 800, media: '(max-width: 767px)' },
          },
        }}
        labels={commonContent[locale].evidenceViewer}
        caption={item.title}
      />
      <dl className="m-0 grid max-w-[48rem] gap-4">
        <div className="grid gap-1">
          <dt className="font-semibold text-[var(--color-text-primary)]">{evidence.establishesLabel}</dt>
          <dd className={`case-section__copy ${styles.evidence__description}`}>{item.establishes}</dd>
        </div>
        <div className="grid gap-1">
          <dt className="font-semibold text-[var(--color-text-primary)]">{evidence.doesNotEstablishLabel}</dt>
          <dd className={`case-section__copy ${styles.evidence__description}`}>{item.doesNotEstablish}</dd>
        </div>
      </dl>
    </div>
  );
}

function NarrativeList({ items, ordered = false }: { items: readonly string[]; ordered?: boolean }) {
  const List = ordered ? 'ol' : 'ul';
  return (
    <List className={`m-0 grid max-w-[48rem] gap-3 pl-6 text-[1.05rem] leading-[1.7] text-[var(--color-text-secondary)] ${ordered ? 'list-decimal' : 'list-disc'}`}>
      {items.map((item) => <li key={item} className="pl-1">{item}</li>)}
    </List>
  );
}


function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="text-link text-link--hit-area" href={href}>{children}</a>;
}

function DescriptionGrid({ items }: { items: readonly { title: string; description: string }[] }) {
  return (
    <dl className={styles['case-summary']}>
      {items.map((item) => (
        <div key={item.title} className={styles['case-summary__item']}>
          <dt className="font-semibold text-[var(--color-text-primary)]">{item.title}</dt>
          <dd className="case-section__copy">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function AiAssistedDesignEngineeringPage({ locale = 'pt-BR' }: { locale?: Locale }) {
  const content = aiAssistedDesignEngineeringCaseContent[locale];
  const sections = content.sections;
  const sources = aiAssistedDesignEngineeringSharedFacts.sources;

  return (
    <>
      <SiteHeader content={commonContent[locale]} locale={locale} routeId="ai-assisted-design-engineering" />
      <main className={'case-study ' + styles.editorial}>
        <PortfolioReturnNavigation locale={locale} />
        <header className="py-[clamp(2.5rem,5vw,5rem)]">
          <div className="layout-container grid gap-8 md:gap-10">
            <div className="grid gap-5 md:gap-6">
              <p className="m-0 text-sm font-semibold tracking-[0.18em] text-[var(--color-brand-text)] uppercase">{content.hero.eyebrow}</p>
              <h1 className="m-0 max-w-[20ch] text-[clamp(2.5rem,5vw,5rem)] leading-[1.02] font-bold tracking-[-0.05em] text-[var(--color-text-primary)]">{content.hero.title}</h1>
              <p className="m-0 max-w-[48rem] text-[clamp(1.05rem,1.8vw,1.35rem)] leading-[1.65] text-[var(--color-text-secondary)]">{content.hero.description}</p>
            </div>
            <div className="case-section__text-block">
              <p className="case-section__copy">{content.hero.context}</p>
              <p className="case-section__copy">{content.hero.consultingContext}</p>
            </div>
          </div>
        </header>

        <CaseSection id="operational-problem" title={sections.problem.title} intro={sections.problem.intro}>
          <NarrativeList items={sections.problem.bullets} />
        </CaseSection>

        <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
          <CaseSection id="versioned-evolution" title={sections.evolution.title} intro={sections.evolution.intro}>
            <ol className={styles['case-evolution']}>
              {sections.evolution.decisions.map((decision, index) => (
                <li key={decision.title}>
                  <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className={styles['case-evolution__title']}>{decision.title}</h3>
                  <p className="case-section__copy">{decision.description}</p>
                </li>
              ))}
            </ol>
            <SourceLink href={sources.rationale}>{sections.evolution.sourceLabel}</SourceLink>
          </CaseSection>
        </div>

        <CaseSection id="trust-boundaries" title={sections.architecture.title} intro={sections.architecture.intro}>
          <TrustArchitecture layers={sections.architecture.layers} labels={content.diagramLabels.trustLayers} />
          <DescriptionGrid items={sections.architecture.sources} />
          <p className="case-section__copy">{sections.architecture.example}</p>
          <SourceLink href={sources.runtime}>{sections.architecture.sourceLabel}</SourceLink>
        </CaseSection>

        <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
          <CaseSection id="operating-principles" title={sections.principles.title} intro={sections.principles.intro}>
            <dl className={styles['case-principles']}>
              {sections.principles.items.map((item) => (
                <div key={item.code} className={styles['case-summary__item']}>
                  <dt className="font-semibold text-[var(--color-text-primary)]">{item.code}</dt>
                  <dd className="case-section__copy">{item.description}</dd>
                </div>
              ))}
            </dl>
            <details className={styles['case-detail']}>
              <summary>{content.details.evidence}</summary>
              <div className={styles['case-detail__body']}>
                <p className="case-section__copy">{sections.principles.evidenceIntro}</p>
                <EvidenceLadder states={content.diagramLabels.evidenceStates} distinctions={sections.principles.distinctions} />
              </div>
            </details>
          </CaseSection>
        </div>

        <CaseSection id="professional-application" title={sections.application.title} intro={sections.application.intro}>
          <NarrativeList items={sections.application.bullets} />
          <p className="case-section__copy">{sections.application.boundary}</p>
          <details className={styles['case-detail']}>
            <summary>{content.details.workflow}</summary>
            <div className={styles['case-detail__body']}>
              <p className="case-section__copy">{sections.application.workflowIntro}</p>
              <WorkflowDiagram steps={sections.application.steps} phases={content.diagramLabels.workflowPhases} />
            </div>
          </details>
        </CaseSection>

        <CaseSection id="outcomes" title={sections.outcomes.title} intro={sections.outcomes.intro}>
          <DescriptionGrid items={sections.outcomes.results} />
          <h3 className={styles['case-evolution__title']}>{sections.outcomes.learningTitle}</h3>
          <NarrativeList items={sections.outcomes.learnings} />
          <SourceLink href={sources.validation}>{sections.outcomes.sourceLabel}</SourceLink>
        </CaseSection>

        <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
          <CaseSection id="public-framework" title={sections.publicFramework.title} intro={sections.publicFramework.intro}>
            <div className="case-section__text-block">
              <p className="case-section__copy">{sections.publicFramework.release}</p>
              <SourceLink href={sources.release}>{sections.publicFramework.releaseLabel}</SourceLink>
              <p className="case-section__copy">{sections.publicFramework.current}</p>
              <SourceLink href={sources.main}>{sections.publicFramework.currentLabel}</SourceLink>
              <p className="case-section__copy">{sections.publicFramework.limitation}</p>
              <p className="case-section__copy">{sections.publicFramework.next}</p>
              <SourceLink href={sources.releases}>{sections.publicFramework.releasesLabel}</SourceLink>
            </div>
            <p className="case-section__copy">{sections.publicFramework.evidenceBoundary}</p>
            <details className={styles['case-detail']}>
              <summary>{content.details.history}</summary>
              <div className={styles['case-detail__body']}>
                {(Object.keys(evidenceFamilies) as (keyof typeof evidenceFamilies)[]).map((family) => (
                  <PublicEvidence key={family} family={family} locale={locale} />
                ))}
              </div>
            </details>
          </CaseSection>
        </div>
        <CaseSection id="case-contact" title={content.cta.title} intro={content.cta.description}>
          <div className="flex flex-wrap items-center gap-4">
            <AnalyticsLink
              className="whatsapp-action contact__primary-link"
              href={getWhatsAppContactUrl(locale, 'ai-consulting')}
              target="_blank"
              rel="noreferrer"
              eventName={getWhatsAppClickEvent('ai-consulting')}
              data-clarity-mask="true"
            >
              <SendIcon className="contact__primary-icon" />
              <span>{content.cta.consultingLabel}</span>
            </AnalyticsLink>
            <a className="text-link text-link--hit-area" href={aiAssistedDesignEngineeringSharedFacts.externalUrls.repository} target="_blank" rel="noreferrer">{content.cta.githubLabel}</a>
          </div>
        </CaseSection>
        <CaseNavigation locale={locale} projectId="ai-assisted-design-engineering" />
      </main>
      <BackToTop label={commonContent[locale].backToTop.label} accessibilityLabel={commonContent[locale].backToTop.accessibilityLabel} />
    </>
  );
}
