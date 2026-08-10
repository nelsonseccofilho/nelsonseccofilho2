import type { Metadata } from 'next';
import { BackToTop } from '@/components/case-study/back-to-top';
import { CaseBreadcrumb } from '@/components/case-study/case-breadcrumb';
import { CaseHero } from '@/components/case-study/case-hero';
import { CaseMedia } from '@/components/case-study/case-media';
import { CaseNavigation } from '@/components/case-study/case-navigation';
import { CaseSection } from '@/components/case-study/case-section';
import { commonContent } from '@/content/i18n';
import { subiterCaseContent, subiterSharedFacts } from '@/content/i18n/projects/subiter';
import type { Locale } from '@/i18n/locales';
import { SiteHeader } from '@/components/layout/site-header';

export const metadata: Metadata = {
  title: 'SUBITER — Product Design Case Study | Nelson Secco',
  description:
    'Product Design case study about structuring Subiter Web Portal inspection operations with traceability, AI assistance and production delivery.',
};

export default function SubiterPage({ locale = 'en' }: { locale?: Locale }) {
  const common = commonContent[locale];
  const content = subiterCaseContent[locale];

  return (
    <>
      <SiteHeader content={common} locale={locale} routeId="subiter" />
      <main className="case-study">
        <CaseBreadcrumb locale={locale} projectId="subiter" />
        <CaseHero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          description={content.hero.description}
          metadata={[...content.hero.metadata]}
          image={{
            alt: content.hero.imageAlt,
            width: subiterSharedFacts.heroImage.width,
            height: subiterSharedFacts.heroImage.height,
            light: subiterSharedFacts.heroImage.light,
            dark: subiterSharedFacts.heroImage.dark,
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
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.role.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection id="users" title={content.sections.users.title}>
          <ul className="case-bullets" aria-label={content.sections.users.usersLabel}>
            {content.sections.users.bullets.map((bullet) => (
              <li key={bullet.label} className="case-bullets__item">
                <strong>{bullet.label}</strong> {bullet.description}
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection
          id="product-structure"
          title={content.sections.productStructure.title}
          intro={content.sections.productStructure.intro}
        >
          <CaseMedia
            image={{
              src: subiterSharedFacts.assets.inspectionMap,
              alt: content.sections.productStructure.imageAlt,
            }}
            caption={content.sections.productStructure.caption}
            viewerLabels={common.evidenceViewer}
          />
        </CaseSection>

        <CaseSection
          id="inspection-lifecycle"
          title={content.sections.inspectionLifecycle.title}
          intro={content.sections.inspectionLifecycle.intro}
        >
          <CaseMedia
            image={{
              src: subiterSharedFacts.assets.postInspectionFlow,
              alt: content.sections.inspectionLifecycle.imageAlt,
            }}
            caption={content.sections.inspectionLifecycle.caption}
            viewerLabels={common.evidenceViewer}
          />
        </CaseSection>

        <CaseSection
          id="marina"
          title={content.sections.marina.title}
          intro={content.sections.marina.intro}
        >
          <div className="case-section__stack">
            <p className="case-section__copy">{content.sections.marina.paragraph}</p>
            <CaseMedia
              image={{
                src: subiterSharedFacts.assets.aiReview,
                alt: content.sections.marina.imageAlt,
              }}
              caption={content.sections.marina.caption}
              viewerLabels={common.evidenceViewer}
            />
          </div>
        </CaseSection>

        <CaseSection
          id="ai-assisted-product-work"
          title={content.sections.aiAssistedProductWork.title}
          intro={content.sections.aiAssistedProductWork.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.aiAssistedProductWork.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="design-continuity"
          title={content.sections.designContinuity.title}
          intro={content.sections.designContinuity.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.designContinuity.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="production"
          title={content.sections.production.title}
          intro={content.sections.production.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.production.paragraph}</p>
          </div>
        </CaseSection>

        <CaseSection
          id="international-operation"
          title={content.sections.internationalOperation.title}
          intro={content.sections.internationalOperation.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.internationalOperation.paragraph}</p>
            <p className="case-section__copy">
              <a className="contact__secondary-link" href={subiterSharedFacts.delfinaUrl} target="_blank" rel="noreferrer">
                {content.sections.internationalOperation.linkLabel}
              </a>
            </p>
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
          id="published-perspective"
          title={content.sections.publishedPerspective.title}
          intro={content.sections.publishedPerspective.intro}
        >
          <div className="case-section__text-block">
            <p className="case-section__copy">{content.sections.publishedPerspective.articleTitle}</p>
            <p className="case-section__copy">
              <a
                className="contact__secondary-link"
                href={subiterSharedFacts.articleUrl}
                target="_blank"
                rel="noreferrer"
              >
                {content.sections.publishedPerspective.linkLabel}
              </a>
            </p>
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

        <CaseNavigation locale={locale} projectId="subiter" />
        <BackToTop label={common.backToTop.label} accessibilityLabel={common.backToTop.accessibilityLabel} />
      </main>
    </>
  );
}
