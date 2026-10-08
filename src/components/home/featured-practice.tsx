import Link from 'next/link';
import type { HomeContent } from '@/content/i18n/types';

type FeaturedPracticeProps = {
  content: HomeContent['featuredPractice'];
  href: string;
};

export function FeaturedPractice({ content, href }: FeaturedPracticeProps) {
  return (
    <article
      className="grid gap-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-[clamp(1.25rem,3vw,2.5rem)] md:grid-cols-12 md:items-center md:gap-8"
      aria-labelledby="featured-practice-title"
    >
      <div className="grid content-center gap-3 md:col-span-5">
        <p className="m-0 text-sm font-semibold tracking-[0.18em] text-[var(--color-brand-text)] uppercase">
          {content.eyebrow}
        </p>
        <h3
          id="featured-practice-title"
          className="m-0 text-[clamp(1.4rem,2.2vw,2rem)] leading-[1.08] font-bold tracking-[-0.025em] text-[var(--color-text-primary)]"
        >
          {content.title}
        </h3>
        <p className="m-0 text-[clamp(0.95rem,1.25vw,1rem)] leading-[1.6] text-[var(--color-text-secondary)]">
          {content.description}
        </p>
        <Link className="text-link text-link--hit-area w-fit" href={href}>
          {content.actionLabel}
        </Link>
      </div>
      <ol className="m-0 grid list-none grid-cols-2 gap-3 p-0 md:col-span-7 xl:grid-cols-4">
        {content.steps.map((step, index) => (
          <li
            key={step.title}
            className="grid content-start gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 sm:p-4"
          >
            <span
              className="text-xs font-semibold tracking-[0.12em] text-[var(--color-brand-text)]"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <h4 className="m-0 text-sm leading-[1.3] font-bold text-[var(--color-text-primary)] sm:text-base">
              {step.title}
            </h4>
            <p className="m-0 text-sm leading-[1.5] text-[var(--color-text-secondary)]">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </article>
  );
}
