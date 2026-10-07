import { WorkflowDiagram, EvidenceLadder, ArtifactLoop, TrustArchitecture } from './system-diagrams';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CaseNavigation } from '@/components/case-study/case-navigation';
import { EvidenceViewer } from '@/components/case-study/evidence-viewer';
import { CaseSection } from '@/components/case-study/case-section';
import { SiteHeader } from '@/components/layout/site-header';
import { PortfolioReturnNavigation } from '@/components/navigation/portfolio-return-navigation';
import { commonContent } from '@/content/i18n';
import { aiAssistedDesignEngineeringCaseContent, aiAssistedDesignEngineeringSharedFacts } from '@/content/i18n/projects/ai-assisted-design-engineering';
import type { Locale } from '@/i18n/locales';
import { getLocalizedPath } from '@/i18n/routes';

export const metadataByLocale: Readonly<Record<Locale, Metadata>> = {
  'pt-BR': aiAssistedDesignEngineeringCaseContent['pt-BR'].metadata,
  en: aiAssistedDesignEngineeringCaseContent.en.metadata,
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
          <dd className="case-section__copy">{item.establishes}</dd>
        </div>
        <div className="grid gap-1">
          <dt className="font-semibold text-[var(--color-text-primary)]">{evidence.doesNotEstablishLabel}</dt>
          <dd className="case-section__copy">{item.doesNotEstablish}</dd>
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

export default function AiAssistedDesignEngineeringPage({ locale = 'pt-BR' }: { locale?: Locale }) {
  const content = aiAssistedDesignEngineeringCaseContent[locale];
  const sections = content.sections;

  return (
    <>
      <SiteHeader content={commonContent[locale]} locale={locale} routeId="ai-assisted-design-engineering" />
      <main className="case-study">
        <PortfolioReturnNavigation locale={locale} />
        <header className="py-[clamp(2.5rem,5vw,5rem)]">
          <div className="layout-container grid gap-8 md:gap-10">
            <div className="grid gap-5 md:gap-6">
              <p className="m-0 text-sm font-semibold tracking-[0.18em] text-[var(--color-brand-text)] uppercase">{content.hero.eyebrow}</p>
              <h1 className="m-0 max-w-[20ch] text-[clamp(2.5rem,5vw,5rem)] leading-[1.02] font-bold tracking-[-0.05em] text-[var(--color-text-primary)]">{content.hero.title}</h1>
              <p className="m-0 max-w-[60rem] text-[clamp(1.05rem,1.8vw,1.35rem)] leading-[1.65] text-[var(--color-text-secondary)]">{content.hero.description}</p>
            </div>
            <div className="case-section__text-block">
              <p className="case-section__copy">{content.hero.context}</p>
              <p className="case-section__copy">{content.hero.consultingContext}</p>
            </div>
          </div>
        </header>

        <CaseSection id="operational-problem" title={sections.operationalProblem.title} intro={sections.operationalProblem.intro}>
          <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2">
            {sections.operationalProblem.bullets.map((bullet) => (
              <li key={bullet} className="border-t border-[var(--color-border)] pt-4 text-[1.05rem] leading-[1.7] text-[var(--color-text-secondary)]">{bullet}</li>
            ))}
          </ul>
        </CaseSection>

        <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
          <CaseSection id="workflow" title={sections.workflow.title} intro={sections.workflow.intro}>
            <WorkflowDiagram steps={sections.workflow.steps} phases={content.diagramLabels.workflowPhases} />
            <p className="case-section__copy max-w-[48rem]">{sections.workflow.toolNote}</p>
          </CaseSection>
        </div>

        <CaseSection id="evidence-before-design" title={sections.evidenceBeforeDesign.title} intro={sections.evidenceBeforeDesign.intro}>
          <EvidenceLadder states={content.diagramLabels.evidenceStates} distinctions={sections.evidenceBeforeDesign.distinctions} />
          <p className="case-section__copy">{sections.evidenceBeforeDesign.provenance}</p>
          <PublicEvidence family="ingestion" locale={locale} />
        </CaseSection>

        <CaseSection id="product-ux-analysis" title={sections.productUxAnalysis.title} intro={sections.productUxAnalysis.intro}>
          <NarrativeList items={sections.productUxAnalysis.bullets} />
        </CaseSection>

        <CaseSection id="artifact-work" title={sections.artifactWork.title} intro={sections.artifactWork.intro}>
          <ArtifactLoop steps={sections.artifactWork.steps} returnLabel={content.diagramLabels.artifactReturn} />
        </CaseSection>

        <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
          <CaseSection id="operating-principles" title={sections.operatingPrinciples.title} intro={sections.operatingPrinciples.intro}>
            <dl className="m-0 grid max-w-[60rem] gap-6">
              {sections.operatingPrinciples.items.map((item) => (
                <div key={item.code} className="grid gap-2 border-t border-[var(--color-border)] pt-5">
                  <dt className="text-[clamp(1.05rem,2vw,1.5rem)] leading-[1.5] font-semibold text-[var(--color-text-primary)]">{item.code}</dt>
                  <dd className="case-section__copy max-w-[48rem]">{item.description}</dd>
                </div>
              ))}
            </dl>
          </CaseSection>
        </div>

        <CaseSection id="runtime" title={sections.runtime.title}>
          <div className="case-section__text-block"><p className="case-section__copy">{sections.runtime.intro}</p></div>
          <PublicEvidence family="runtime" locale={locale} />
        </CaseSection>

        <CaseSection id="public-framework" title={sections.publicFramework.title} intro={sections.publicFramework.intro}>
          <div className="case-section__text-block"><p className="case-section__copy">{sections.publicFramework.evidenceBoundary}</p></div>
          <PublicEvidence family="readme" locale={locale} />
        </CaseSection>

        <CaseSection id="continuity" title={sections.continuity.title} intro={sections.continuity.intro}>
          <div className="case-section__text-block"><p className="case-section__copy">{sections.continuity.validation}</p></div>
        </CaseSection>

        <CaseSection id="drift-detection" title={sections.driftDetection.title} intro={sections.driftDetection.intro}>
          <dl className="m-0 grid gap-5 md:grid-cols-3">
            {sections.driftDetection.states.map((state) => (
              <div key={state.status} className="grid content-start gap-2 border-t border-[var(--color-border)] pt-4">
                <dt className="font-semibold text-[var(--color-text-primary)]">{state.status}</dt>
                <dd className="case-section__copy">{state.description}</dd>
              </div>
            ))}
          </dl>
          <p className="case-section__copy max-w-[48rem]">{sections.driftDetection.evidenceRule}</p>
        </CaseSection>

        <CaseSection id="versioned-evolution" title={sections.versionedEvolution.title} intro={sections.versionedEvolution.intro}>
          <div className="case-section__text-block"><p className="case-section__copy">{sections.versionedEvolution.ciBoundary}</p></div>
          <PublicEvidence family="commit" locale={locale} />
        </CaseSection>

        <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
          <CaseSection id="trust-boundaries" title={sections.trustBoundaries.title} intro={sections.trustBoundaries.intro}>
            <TrustArchitecture layers={sections.trustBoundaries.layers} labels={content.diagramLabels.trustLayers} />
            <p className="case-section__copy max-w-[48rem]">{sections.trustBoundaries.publicationRule}</p>
          </CaseSection>
        </div>

        <CaseSection id="outcomes" title={sections.outcomes.title} intro={sections.outcomes.intro}>
          <NarrativeList items={sections.outcomes.bullets} />
          <p className="case-section__copy max-w-[48rem]">{sections.outcomes.evidenceBoundary}</p>
        </CaseSection>

        <CaseSection id="learnings" title={sections.learnings.title} intro={sections.learnings.intro}>
          <NarrativeList items={sections.learnings.bullets} />
        </CaseSection>

        <CaseSection id="case-contact" title={content.cta.title} intro={content.cta.description}>
          <div className="flex flex-wrap items-center gap-4">
            <a className="text-link text-link--hit-area" href={aiAssistedDesignEngineeringSharedFacts.externalUrls.repository} target="_blank" rel="noreferrer">{content.cta.githubLabel}</a>
            <Link className="text-link text-link--hit-area" href={`${getLocalizedPath('home', locale)}#contact`}>{content.cta.consultingLabel}</Link>
          </div>
        </CaseSection>
        <CaseNavigation locale={locale} projectId="ai-assisted-design-engineering" />
      </main>
    </>
  );
}
