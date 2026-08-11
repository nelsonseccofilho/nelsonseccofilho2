import type { Metadata } from 'next';
import { BackToTop } from '@/components/case-study/back-to-top';
import { PortfolioReturnNavigation } from '@/components/navigation/portfolio-return-navigation';
import { CaseHero } from '@/components/case-study/case-hero';
import { EvidenceGallery } from '@/components/case-study/evidence-gallery';
import { CaseMedia } from '@/components/case-study/case-media';
import { CaseNavigation } from '@/components/case-study/case-navigation';
import { CaseSection } from '@/components/case-study/case-section';
import { commonContent } from '@/content/i18n';
import { dasaCanalDoConsultorCaseContent } from '@/content/i18n/projects/dasa-canal-do-consultor';
import type { Locale } from '@/i18n/locales';
import { SiteHeader } from '@/components/layout/site-header';

export const metadataByLocale: Readonly<Record<Locale, Metadata>> = {
  'pt-BR': {
    title: 'DASA — Canal do Consultor — Case de Product Design | Nelson Secco',
    description: 'Case de Product Design orientado por Discovery sobre a tradução de pesquisa em saúde em regras de negócio, prioridades e direcionamento para implementação.',
  },
  en: {
    title: 'DASA — Canal do Consultor — Product Design Case Study | Nelson Secco',
    description: 'Discovery-led Product Design case study on translating healthcare consultation research into business rules, priorities and implementation direction.',
  },
};

export default function DasaCanalDoConsultorPage({ locale = 'en' }: { locale?: Locale }) {
  const common = commonContent[locale];
  const content = dasaCanalDoConsultorCaseContent[locale];
  const diagrams = Array.from({ length: 8 }, (_, index) => ({
    id: `dasa-diagram-${index + 1}`,
    placeholderLabel: common.mediaPlaceholders.evidence,
  }));

  return (
    <>
      <SiteHeader content={common} locale={locale} routeId="dasa-canal-do-consultor" />
      <main className="case-study">
        <PortfolioReturnNavigation locale={locale} />
        <CaseHero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          description={content.hero.description}
          metadata={[...content.hero.metadata]}
          placeholderLabel={common.mediaPlaceholders.cover}
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
            placeholderLabel={common.mediaPlaceholders.evidence}
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
