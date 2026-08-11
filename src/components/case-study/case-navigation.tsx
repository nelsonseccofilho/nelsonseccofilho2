import Link from 'next/link';
import { PortfolioReturnLink } from '@/components/navigation/portfolio-return-link';
import { commonContent, homeContent } from '@/content/i18n';
import type { ProjectRouteId } from '@/content/i18n/types';
import { projectFacts } from '@/content/project-facts';
import type { Locale } from '@/i18n/locales';
import { getLocalizedPath } from '@/i18n/routes';

type CaseNavigationProps = {
  locale: Locale;
  projectId: ProjectRouteId;
};

export function CaseNavigation({ locale, projectId }: CaseNavigationProps) {
  const common = commonContent[locale];
  const featuredProjects = homeContent[locale].featuredCases.projects;
  const currentIndex = featuredProjects.findIndex((project) => project.routeId === projectId);
  const nextProjectId = featuredProjects[currentIndex + 1]?.routeId ?? null;

  return (
    <nav id="case-navigation" className="py-[clamp(2rem,4vw,4rem)]" aria-label={common.accessibility.caseNavigation}>
      <div className="layout-container grid gap-3 sm:grid-cols-2 sm:items-stretch">
        <PortfolioReturnLink locale={locale} />
        {nextProjectId ? (
          <Link
            href={getLocalizedPath(nextProjectId, locale)}
            className="grid min-h-11 content-center justify-items-center rounded-[var(--radius-pill)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-6 py-2 text-center text-[var(--color-text-primary)] no-underline transition-colors hover:border-[var(--color-brand)] hover:bg-[var(--color-surface)] hover:text-[var(--color-brand-text)] motion-reduce:transition-none sm:justify-self-end"
          >
            <span className="font-semibold">{common.caseNavigation.nextProjectLabel} →</span>
            <span className="text-xs text-[var(--color-text-secondary)]">{projectFacts[nextProjectId].projectName}</span>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
