import Link from 'next/link';
import { commonContent } from '@/content/i18n';
import type { Locale } from '@/i18n/locales';
import { getHomeCasesPath } from '@/i18n/routes';

type CaseCollectionLinkProps = {
  locale: Locale;
};

export function CaseCollectionLink({ locale }: CaseCollectionLinkProps) {
  const common = commonContent[locale];

  return (
    <nav className="py-3 sm:py-4" aria-label={common.caseCollectionLink.accessibilityLabel}>
      <div className="layout-container">
        <Link
          className="inline-flex min-h-11 items-center rounded-sm text-sm font-medium text-[var(--color-text-secondary)] no-underline underline-offset-4 transition-colors hover:text-[var(--color-brand-text)] hover:underline motion-reduce:transition-none"
          href={getHomeCasesPath(locale)}
        >
          {common.caseNavigation.allProjectsLabel}
        </Link>
      </div>
    </nav>
  );
}
