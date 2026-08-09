import Link from 'next/link';
import { commonContent } from '@/content/i18n';
import { projectFacts } from '@/content/project-facts';
import type { ProjectRouteId } from '@/content/i18n/types';
import type { Locale } from '@/i18n/locales';
import { getHomeCasesPath } from '@/i18n/routes';

type CaseBreadcrumbProps = {
  locale: Locale;
  projectId: ProjectRouteId;
};

export function CaseBreadcrumb({ locale, projectId }: CaseBreadcrumbProps) {
  const common = commonContent[locale];
  const projectName = projectFacts[projectId].projectName;

  return (
    <nav className="min-w-0 py-4 sm:py-5" aria-label={common.breadcrumb.accessibilityLabel}>
      <div className="layout-container min-w-0">
        <ol className="m-0 flex min-w-0 list-none items-center gap-2 p-0 text-sm text-[var(--color-text-secondary)]">
          <li className="shrink-0">
            <Link className="rounded-sm underline-offset-4 hover:text-[var(--color-brand-text)] hover:underline" href={getHomeCasesPath(locale)}>
              {common.breadcrumb.projectsLabel}
            </Link>
          </li>
          <li className="shrink-0" aria-hidden="true">
            /
          </li>
          <li className="min-w-0" title={projectName}>
            <span className="block truncate text-[var(--color-text-primary)]" aria-current="page">
              {projectName}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
