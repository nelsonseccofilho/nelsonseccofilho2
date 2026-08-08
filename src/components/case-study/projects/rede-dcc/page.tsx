import type { Metadata } from 'next';
import { CaseHero } from '@/components/case-study/case-hero';
import { CaseMedia } from '@/components/case-study/case-media';
import { CaseNavigation } from '@/components/case-study/case-navigation';
import { CaseSection } from '@/components/case-study/case-section';
import { commonContent } from '@/content/i18n';
import { redeDccCaseContent, redeDccSharedFacts } from '@/content/i18n/projects/rede-dcc';
import type { Locale } from '@/i18n/locales';
import { getLocalizedPath } from '@/i18n/routes';
import { SiteHeader } from '@/components/layout/site-header';

export const metadata: Metadata = {
  title: 'REDE DCC 1.0 — Product Design Case Study | Nelson Secco',
  description:
    'Interaction Design case study for a Dynamic Currency Conversion payment journey implemented in REDE’s product.',
};

export default function RedeDccPage({ locale = 'en' }: { locale?: Locale }) {
  const common = commonContent[locale];
  const content = redeDccCaseContent[locale];

  return (
    <>
      <SiteHeader content={common} locale={locale} routeId="rede-dcc" />
      <main className="case-study">
        <CaseHero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          description={content.hero.description}
          metadata={[...content.hero.metadata]}
          image={{
            alt: content.hero.imageAlt,
            width: redeDccSharedFacts.heroImage.width,
            height: redeDccSharedFacts.heroImage.height,
            light: redeDccSharedFacts.heroImage.light,
            dark: redeDccSharedFacts.heroImage.dark,
          }}
        />

        <CaseSection
          id="international-payments"
          title={content.sections.internationalPayments.title}
          intro={content.sections.internationalPayments.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.internationalPayments.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="high-stakes-choice"
          title={content.sections.highStakesChoice.title}
          intro={content.sections.highStakesChoice.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.highStakesChoice.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="end-to-end-design"
          title={content.sections.endToEndDesign.title}
          intro={content.sections.endToEndDesign.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.endToEndDesign.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="international-cardholders"
          title={content.sections.internationalCardholders.title}
          intro={content.sections.internationalCardholders.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.internationalCardholders.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="bilingual-structure"
          title={content.sections.bilingualStructure.title}
          intro={content.sections.bilingualStructure.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.bilingualStructure.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="transaction-states"
          title={content.sections.transactionStates.title}
          intro={content.sections.transactionStates.intro}
        >
          <CaseMedia
            image={{
              src: redeDccSharedFacts.assets.transactionStateSequence,
              alt: content.sections.transactionStates.imageAlt,
            }}
            caption={content.sections.transactionStates.caption}
          />
        </CaseSection>

        <CaseSection
          id="clarity-before-progression"
          title={content.sections.clarityBeforeProgression.title}
          intro={content.sections.clarityBeforeProgression.intro}
        >
          <div className="case-section__stack">
            <div className="case-section__detail-grid">
              <CaseMedia
                image={{
                  src: redeDccSharedFacts.assets.currencyChoice,
                  alt: content.sections.clarityBeforeProgression.currencyChoiceAlt,
                }}
              />
              <CaseMedia
                image={{
                  src: redeDccSharedFacts.assets.pinEntry,
                  alt: content.sections.clarityBeforeProgression.pinEntryAlt,
                }}
              />
              <CaseMedia
                image={{
                  src: redeDccSharedFacts.assets.processing,
                  alt: content.sections.clarityBeforeProgression.processingAlt,
                }}
              />
              <CaseMedia
                image={{
                  src: redeDccSharedFacts.assets.approvalReceipt,
                  alt: content.sections.clarityBeforeProgression.approvalReceiptAlt,
                }}
              />
            </div>
          </div>
        </CaseSection>

        <CaseSection
          id="no-prototype"
          title={content.sections.noPrototype.title}
          intro={content.sections.noPrototype.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.noPrototype.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="review"
          title={content.sections.review.title}
          intro={content.sections.review.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.review.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="delivery"
          title={content.sections.delivery.title}
          intro={content.sections.delivery.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.delivery.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="outcome"
          title={content.sections.outcome.title}
          intro={content.sections.outcome.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.outcome.paragraph}</p>
          </div>
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

        <CaseNavigation
          label={common.caseNavigation.backLabel}
          href={getLocalizedPath('home', locale)}
          accessibilityLabel={common.accessibility.caseNavigation}
        />
      </main>
    </>
  );
}
