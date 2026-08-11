import type { Metadata } from 'next';
import { BackToTop } from '@/components/case-study/back-to-top';
import { PortfolioReturnNavigation } from '@/components/navigation/portfolio-return-navigation';
import { SiteHeader } from '@/components/layout/site-header';
import { CaseHero } from '@/components/case-study/case-hero';
import { EvidenceGallery } from '@/components/case-study/evidence-gallery';
import { CaseMedia } from '@/components/case-study/case-media';
import { CaseNavigation } from '@/components/case-study/case-navigation';
import { CaseSection } from '@/components/case-study/case-section';
import { horizonHisCaseContent } from '@/content/i18n/projects/horizon-his';
import { commonContent } from '@/content/i18n';
import type { Locale } from '@/i18n/locales';

export const metadataByLocale: Readonly<Record<Locale, Metadata>> = {
  'pt-BR': {
    title: 'HORIZON HIS — Case de Product Design | Nelson Secco',
    description: 'Case de Product Design sobre a transformação da visão do HORIZON HIS da SALUX em um protótipo navegável de alta fidelidade apresentado na Hospitalar 2025.',
  },
  en: {
    title: 'HORIZON HIS — Product Design Case Study | Nelson Secco',
    description: 'Product Design case study showing how SALUX’s HORIZON HIS vision became a high-fidelity navigable prototype presented at Hospitalar 2025.',
  },
};

export default function HorizonHisPage({ locale = 'en' }: { locale?: Locale }) {
  const common = commonContent[locale];
  const content = horizonHisCaseContent[locale];
  const journeyDetails = [
    {
      image: {
        src: '/assets/projects/horizon-his/narrative/narrative-patient-list.png',
        alt:
          locale === 'pt-BR'
            ? 'Recorte narrativo de lista de pacientes e estados de triagem no HORIZON HIS.'
            : 'Narrative crop of patient-list and triage states in HORIZON HIS.',
      },
    },
    {
      image: {
        src: '/assets/projects/horizon-his/narrative/narrative-vital-signs-monitoring.png',
        alt:
          locale === 'pt-BR'
            ? 'Recorte narrativo do monitoramento de sinais vitais na jornada clínica.'
            : 'Narrative crop of vital-sign monitoring in the clinical journey.',
      },
    },
    {
      image: {
        src: '/assets/projects/horizon-his/narrative/narrative-prescription-workflow.png',
        alt:
          locale === 'pt-BR'
            ? 'Recorte narrativo do fluxo de prescrição em uma etapa da experiência.'
            : 'Narrative crop of prescription workflow in a key experience step.',
      },
    },
    {
      image: {
        src: '/assets/projects/horizon-his/narrative/narrative-integrated-management.png',
        alt:
          locale === 'pt-BR'
            ? 'Recorte narrativo de gestão integrada conectando módulos operacionais do HIS.'
            : 'Narrative crop of integrated management connecting HIS operational modules.',
      },
    },
  ] as const;

  return (
    <>
      <SiteHeader content={common} locale={locale} routeId="horizon-his" />
      <main className="case-study">
        <PortfolioReturnNavigation locale={locale} />
        <CaseHero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          description={content.hero.description}
          metadata={[...content.hero.metadata]}
          image={{
            src: '/assets/projects/horizon-his/hero/hero-hospitalar-overview.png',
            alt: content.hero.imageAlt,
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
          id="challenge"
          title={content.sections.challenge.title}
          intro={content.sections.challenge.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.challenge.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="role"
          title={content.sections.role.title}
          intro={content.sections.role.intro}
        >
          <ul className="case-bullets" aria-label={content.sections.role.responsibilitiesLabel}>
            {content.sections.role.bullets.map((bullet) => (
              <li key={bullet} className="case-bullets__item">
                {bullet}
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection
          id="journeys"
          title={content.sections.journeys.title}
          intro={content.sections.journeys.intro}
          mediaFirst
        >
          <div className="case-section__stack">
            <CaseMedia
              image={{
                src: '/assets/projects/horizon-his/hero/hero-platform-highlight.png',
                alt: content.sections.journeys.overviewAlt,
              }}
              caption={content.sections.journeys.overviewCaption}
              viewerLabels={common.evidenceViewer}
            />
            <p className="case-section__copy">{content.sections.journeys.overviewParagraph}</p>
            <EvidenceGallery items={journeyDetails} labels={common.evidenceViewer} />
          </div>
        </CaseSection>

        <CaseSection
          id="choices"
          title={content.sections.choices.title}
          intro={content.sections.choices.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.choices.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="prototype"
          title={content.sections.prototype.title}
          intro={content.sections.prototype.intro}
        >
          <></>
        </CaseSection>

        <CaseSection
          id="validation"
          title={content.sections.validation.title}
          intro={content.sections.validation.intro}
        >
          <></>
        </CaseSection>

        <CaseSection
          id="hospitalar"
          title={content.sections.hospitalar.title}
          intro={content.sections.hospitalar.intro}
        >
          <CaseMedia
            image={{
              src: '/assets/projects/horizon-his/evidence/evidence-3d-showcase.png',
              alt: content.sections.hospitalar.imageAlt,
            }}
            caption={content.sections.hospitalar.caption}
            viewerLabels={common.evidenceViewer}
          />
        </CaseSection>

        <CaseSection
          id="outcome"
          title={content.sections.outcome.title}
          intro={content.sections.outcome.intro}
        >
          <ul className="case-bullets" aria-label={content.sections.outcome.highlightsLabel}>
            {content.sections.outcome.bullets.map((bullet) => (
              <li key={bullet} className="case-bullets__item">
                {bullet}
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection
          id="learning"
          title={content.sections.learning.title}
          intro={content.sections.learning.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.learning.paragraph}</p>
          </div>
        </CaseSection>

        <CaseNavigation locale={locale} projectId="horizon-his" />
        <BackToTop label={common.backToTop.label} accessibilityLabel={common.backToTop.accessibilityLabel} />
      </main>
    </>
  );
}
