import type { Metadata } from 'next';
import { BackToTop } from '@/components/case-study/back-to-top';
import { CaseBreadcrumb } from '@/components/case-study/case-breadcrumb';
import { SiteHeader } from '@/components/layout/site-header';
import { CaseHero } from '@/components/case-study/case-hero';
import { CaseMedia } from '@/components/case-study/case-media';
import { CaseNavigation } from '@/components/case-study/case-navigation';
import { CaseSection } from '@/components/case-study/case-section';
import { horizonHisCaseContent, horizonHisSharedFacts } from '@/content/i18n/projects/horizon-his';
import { commonContent } from '@/content/i18n';
import type { Locale } from '@/i18n/locales';

export const metadata: Metadata = {
  title: 'HORIZON HIS — Product Design Case Study | Nelson Secco',
  description:
    'Product Design case study showing how SALUX’s HORIZON HIS vision became a high-fidelity navigable prototype presented at Hospitalar 2025.',
};

export default function HorizonHisPage({ locale = 'en' }: { locale?: Locale }) {
  const common = commonContent[locale];
  const content = horizonHisCaseContent[locale];

  return (
    <>
      <SiteHeader content={common} locale={locale} routeId="horizon-his" />
      <main className="case-study">
        <CaseBreadcrumb locale={locale} projectId="horizon-his" />
        <CaseHero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          description={content.hero.description}
          metadata={[...content.hero.metadata]}
          image={{
            alt: content.hero.imageAlt,
            width: horizonHisSharedFacts.heroImage.width,
            height: horizonHisSharedFacts.heroImage.height,
            light: horizonHisSharedFacts.heroImage.light,
            dark: horizonHisSharedFacts.heroImage.dark,
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
                src: horizonHisSharedFacts.assets.journeyOverview,
                alt: content.sections.journeys.overviewAlt,
              }}
              caption={content.sections.journeys.overviewCaption}
            />
            <p className="case-section__copy">{content.sections.journeys.overviewParagraph}</p>
            <div className="case-section__detail-grid">
              <CaseMedia
                image={{
                  src: horizonHisSharedFacts.assets.journeyDetail01,
                  alt: content.sections.journeys.detailAlt,
                }}
              />
              <CaseMedia
                image={{
                  src: horizonHisSharedFacts.assets.journeyDetail02,
                  alt: content.sections.journeys.detailAlt,
                }}
              />
              <CaseMedia
                image={{
                  src: horizonHisSharedFacts.assets.journeyDetail03,
                  alt: content.sections.journeys.detailAlt,
                }}
              />
              <CaseMedia
                image={{
                  src: horizonHisSharedFacts.assets.journeyDetail04,
                  alt: content.sections.journeys.detailAlt,
                }}
              />
            </div>
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
          <CaseMedia
            image={{
              src: horizonHisSharedFacts.assets.triagePrototype,
              alt: content.sections.prototype.imageAlt,
            }}
          />
        </CaseSection>

        <CaseSection
          id="validation"
          title={content.sections.validation.title}
          intro={content.sections.validation.intro}
        >
          <CaseMedia
            image={{
              src: horizonHisSharedFacts.assets.caseResultsSlide,
              alt: content.sections.validation.imageAlt,
            }}
            caption={content.sections.validation.caption}
          />
        </CaseSection>

        <CaseSection
          id="hospitalar"
          title={content.sections.hospitalar.title}
          intro={content.sections.hospitalar.intro}
        >
          <CaseMedia
            image={{
              src: horizonHisSharedFacts.assets.prototypeAndInteractionMap,
              alt: content.sections.hospitalar.imageAlt,
            }}
            caption={content.sections.hospitalar.caption}
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
