import type { Metadata } from 'next';
import { CaseNavigation } from '@/components/case-study/case-navigation';
import { SiteHeader } from '@/components/layout/site-header';
import { PortfolioReturnNavigation } from '@/components/navigation/portfolio-return-navigation';
import { commonContent } from '@/content/i18n';
import { aiAssistedDesignEngineeringCaseContent } from '@/content/i18n/projects/ai-assisted-design-engineering';
import type { Locale } from '@/i18n/locales';

export const metadataByLocale: Readonly<Record<Locale, Metadata>> = {
  'pt-BR': aiAssistedDesignEngineeringCaseContent['pt-BR'].metadata,
  en: aiAssistedDesignEngineeringCaseContent.en.metadata,
};

// Minimal registry implementation; the full case composition belongs to the visual sprint.
export default function AiAssistedDesignEngineeringPage({ locale = 'pt-BR' }: { locale?: Locale }) {
  const content = aiAssistedDesignEngineeringCaseContent[locale];

  return (
    <>
      <SiteHeader content={commonContent[locale]} locale={locale} routeId="ai-assisted-design-engineering" />
      <main className="case-study">
        <PortfolioReturnNavigation locale={locale} />
        <header className="layout-container">
          <h1>{content.hero.eyebrow}</h1>
          <p>{content.hero.title}</p>
          <p>{content.hero.description}</p>
        </header>
        <CaseNavigation locale={locale} projectId="ai-assisted-design-engineering" />
      </main>
    </>
  );
}
