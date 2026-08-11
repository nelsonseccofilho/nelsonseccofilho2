import { PortfolioReturnLink } from '@/components/navigation/portfolio-return-link';
import { commonContent } from '@/content/i18n';
import type { Locale } from '@/i18n/locales';

export function PortfolioReturnNavigation({ locale }: { locale: Locale }) {
  const content = commonContent[locale].portfolioReturn;

  return (
    <nav className="py-3 sm:py-4" aria-label={content.accessibilityLabel}>
      <div className="layout-container">
        <PortfolioReturnLink locale={locale} />
      </div>
    </nav>
  );
}
