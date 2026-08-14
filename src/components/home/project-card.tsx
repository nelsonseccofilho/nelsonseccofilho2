import Link from 'next/link';
import { AnalyticsNavigationLink } from '@/components/analytics/analytics-link';
import type { PortfolioAnalyticsEvent } from '@/components/analytics/clarity';
import { cn } from '@/lib/utils';
import { MediaPlaceholder } from '@/components/media/media-placeholder';

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  tags: readonly string[];
  tagsLabel?: string;
  placeholderLabel: string;
  image?: {
    src: string;
    alt: string;
  };
  href?: string;
  actionLabel?: string;
  actionAriaLabel?: string;
  analyticsEvent?: PortfolioAnalyticsEvent;
};

const itemLayout: Record<string, string> = {
  'horizon-his': '2xl:col-span-8',
  subiter: '2xl:col-span-4',
  'rede-dcc': '2xl:col-span-5',
  'dasa-canal-do-consultor': '2xl:col-span-7',
};

export function ProjectCard({
  id,
  title,
  description,
  tags,
  tagsLabel = `${title} tags`,
  placeholderLabel,
  image,
  href,
  actionLabel,
  actionAriaLabel,
  analyticsEvent,
}: ProjectCardProps) {
  const titleId = `${id}-title`;

  const card = (
    <article className="grid h-full gap-5" aria-labelledby={titleId}>
      <div
        className={cn(
          'relative aspect-video overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-[border-color,background-color,box-shadow] duration-[var(--transition-fast)] group-hover:border-[var(--color-brand)] group-hover:shadow-[0_10px_24px_color-mix(in_srgb,var(--color-brand)_14%,transparent)] group-focus-visible:border-[var(--color-brand)] group-focus-visible:shadow-[0_10px_24px_color-mix(in_srgb,var(--color-brand)_14%,transparent)] group-active:border-[var(--color-brand-active)] group-active:bg-[var(--color-surface-elevated)] group-active:shadow-none',
          id === 'horizon-his' && '2xl:aspect-[16/9]',
          id === 'subiter' && '2xl:aspect-[4/3]',
        )}
      >
        {image ? (
          // Native images keep project cards predictable with approved editorial assets.
          // eslint-disable-next-line @next/next/no-img-element
          <img className="project-card__image" src={image.src} alt={image.alt} loading="lazy" />
        ) : (
          <MediaPlaceholder label={placeholderLabel} variant="project-card" />
        )}
      </div>
      <div className="grid content-start gap-3">
        <h3
          id={titleId}
          className={cn(
            'm-0 text-[clamp(1.35rem,2vw,2rem)] leading-[1.05] font-bold text-[var(--color-text-primary)] transition-colors duration-[var(--transition-fast)] group-hover:text-[var(--color-brand-text)] group-focus-visible:text-[var(--color-brand-text)] group-active:text-[var(--color-brand-text-active)]',
            id === 'horizon-his' && '2xl:text-[clamp(2rem,2.4vw,2.75rem)]',
          )}
        >
          {title}
        </h3>
        <p className="m-0 max-w-[62rem] text-[clamp(1rem,1.4vw,1.15rem)] leading-[1.6] text-[var(--color-text-secondary)] transition-colors duration-[var(--transition-fast)]">
          {description}
        </p>
        <p className="m-0 text-[0.84rem] leading-[1.5] font-semibold text-[var(--color-text-secondary)]" aria-label={tagsLabel}>
          {tags.join(' · ')}
        </p>
        {href && actionLabel ? (
          <span className="mt-1 inline-flex min-h-11 w-fit items-center text-sm font-semibold text-[var(--color-text-primary)] transition-colors duration-[var(--transition-fast)] group-hover:text-[var(--color-brand-text)] group-focus-visible:text-[var(--color-brand-text)]">
            {actionLabel}
          </span>
        ) : null}
      </div>
    </article>
  );

  return (
    <li className={cn('min-w-0', itemLayout[id])}>
      {href && analyticsEvent ? (
        <AnalyticsNavigationLink
          href={href}
          eventName={analyticsEvent}
          aria-label={actionAriaLabel}
          className="group block h-full rounded-[var(--radius-xl)] text-inherit no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
        >
          {card}
        </AnalyticsNavigationLink>
      ) : href ? (
        <Link
          href={href}
          aria-label={actionAriaLabel}
          className="group block h-full rounded-[var(--radius-xl)] text-inherit no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
        >
          {card}
        </Link>
      ) : card}
    </li>
  );
}
