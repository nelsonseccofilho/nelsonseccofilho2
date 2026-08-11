import Link from 'next/link';
import { commonContent } from '@/content/i18n';
import type { Locale } from '@/i18n/locales';
import { getLocalizedPath } from '@/i18n/routes';

type PortfolioReturnLinkProps = {
  locale: Locale;
};

export function PortfolioReturnLink({ locale }: PortfolioReturnLinkProps) {
  const content = commonContent[locale].portfolioReturn;

  return (
    <Link
      className="inline-flex min-h-11 w-fit items-center gap-2 rounded-sm text-sm font-medium text-[var(--color-text-secondary)] no-underline underline-offset-4 transition-colors hover:text-[var(--color-brand-text)] hover:underline motion-reduce:transition-none"
      href={getLocalizedPath('home', locale)}
    >
      <svg
        className="size-4 shrink-0 fill-none stroke-current"
        data-icon="arrow-left"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M19 12H5" />
        <path d="m11 18-6-6 6-6" />
      </svg>
      <span>{content.label}</span>
    </Link>
  );
}
