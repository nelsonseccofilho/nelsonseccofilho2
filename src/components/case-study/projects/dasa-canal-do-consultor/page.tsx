import type { Metadata } from 'next';
import { BackToTop } from '@/components/case-study/back-to-top';
import { CaseBreadcrumb } from '@/components/case-study/case-breadcrumb';
import { CaseHero } from '@/components/case-study/case-hero';
import { EvidenceGallery } from '@/components/case-study/evidence-gallery';
import { CaseMedia } from '@/components/case-study/case-media';
import { CaseNavigation } from '@/components/case-study/case-navigation';
import { CaseSection } from '@/components/case-study/case-section';
import { commonContent } from '@/content/i18n';
import { dasaCanalDoConsultorCaseContent, dasaCanalDoConsultorSharedFacts } from '@/content/i18n/projects/dasa-canal-do-consultor';
import type { Locale } from '@/i18n/locales';
import { SiteHeader } from '@/components/layout/site-header';

export const metadata: Metadata = {
  title: 'DASA — Canal do Consultor — Product Design Case Study | Nelson Secco',
  description:
    'Discovery-led Product Design case study on translating healthcare consultation research into business rules, priorities and implementation direction.',
};

export default function DasaCanalDoConsultorPage({ locale = 'en' }: { locale?: Locale }) {
  const common = commonContent[locale];
  const content = dasaCanalDoConsultorCaseContent[locale];
  const diagrams = [
    {
      src: dasaCanalDoConsultorSharedFacts.assets.diagram01Ecosystem,
      alt: content.sections.diagrams.diagram01EcosystemAlt,
    },
    {
      src: dasaCanalDoConsultorSharedFacts.assets.diagram02ResearchScale,
      alt: content.sections.diagrams.diagram02ResearchScaleAlt,
    },
    {
      src: dasaCanalDoConsultorSharedFacts.assets.diagram03DiscoveryProcess,
      alt: content.sections.diagrams.diagram03DiscoveryProcessAlt,
    },
    {
      src: dasaCanalDoConsultorSharedFacts.assets.diagram04ResearchToRules,
      alt: content.sections.diagrams.diagram04ResearchToRulesAlt,
    },
    {
      src: dasaCanalDoConsultorSharedFacts.assets.diagram05InformationFragmentation,
      alt: content.sections.diagrams.diagram05InformationFragmentationAlt,
    },
    {
      src: dasaCanalDoConsultorSharedFacts.assets.diagram06ThemeMap,
      alt: content.sections.diagrams.diagram06ThemeMapAlt,
    },
    {
      src: dasaCanalDoConsultorSharedFacts.assets.diagram07ComplexityExamples,
      alt: content.sections.diagrams.diagram07ComplexityExamplesAlt,
    },
    {
      src: dasaCanalDoConsultorSharedFacts.assets.diagram08DiscoveryDelivery,
      alt: content.sections.diagrams.diagram08DiscoveryDeliveryAlt,
    },
  ].map((image) => ({ image }));

  return (
    <>
      <SiteHeader content={common} locale={locale} routeId="dasa-canal-do-consultor" />
      <main className="case-study">
        <CaseBreadcrumb locale={locale} projectId="dasa-canal-do-consultor" />
        <CaseHero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          description={content.hero.description}
          metadata={[...content.hero.metadata]}
          image={{
            alt: content.hero.imageAlt,
            width: dasaCanalDoConsultorSharedFacts.heroImage.width,
            height: dasaCanalDoConsultorSharedFacts.heroImage.height,
            light: dasaCanalDoConsultorSharedFacts.heroImage.light,
            dark: dasaCanalDoConsultorSharedFacts.heroImage.dark,
          }}
        />

        <CaseSection
          id="context"
          title={content.sections.context.title}
          intro={content.sections.context.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.context.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="research-scale"
          title={content.sections.researchScale.title}
          intro={content.sections.researchScale.intro}
        >
          <ul className="case-bullets" aria-label={content.sections.researchScale.bulletsLabel}>
            {content.sections.researchScale.bullets.map((bullet) => (
              <li key={bullet} className="case-bullets__item">
                {bullet}
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection
          id="evidence-board"
          title={content.sections.evidenceBoard.title}
          intro={content.sections.evidenceBoard.intro}
        >
          <CaseMedia
            image={{
              src: dasaCanalDoConsultorSharedFacts.assets.evidenceBoard,
              alt: content.sections.evidenceBoard.imageAlt,
            }}
            caption={content.sections.evidenceBoard.caption}
            viewerLabels={common.evidenceViewer}
          />
        </CaseSection>

        <CaseSection
          id="diagrams"
          title={content.sections.diagrams.title}
          intro={content.sections.diagrams.intro}
        >
          <EvidenceGallery items={diagrams} labels={common.evidenceViewer} initiallyVisibleCount={4} />
        </CaseSection>

        <CaseSection
          id="validation"
          title={content.sections.validation.title}
          intro={content.sections.validation.intro}
        >
          <ul className="case-bullets" aria-label={content.sections.validation.bulletsLabel}>
            {content.sections.validation.bullets.map((bullet) => (
              <li key={bullet} className="case-bullets__item">
                {bullet}
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection
          id="rules-to-delivery"
          title={content.sections.rulesToDelivery.title}
          intro={content.sections.rulesToDelivery.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.rulesToDelivery.paragraph01}</p>
            <p className="case-section__copy">{content.sections.rulesToDelivery.paragraph02}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="confidentiality"
          title={content.sections.confidentiality.title}
          intro={content.sections.confidentiality.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.confidentiality.paragraph}</p>
          </div>
        </CaseSection>

        <CaseNavigation locale={locale} projectId="dasa-canal-do-consultor" />
        <BackToTop label={common.backToTop.label} accessibilityLabel={common.backToTop.accessibilityLabel} />
      </main>
    </>
  );
}
