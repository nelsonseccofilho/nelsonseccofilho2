import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeAwareProjectImage } from './theme-aware-project-image';

type ResponsiveSources = Record<number, string>;

type ProjectCardImage = {
  alt: string;
  width: number;
  height: number;
  light: ResponsiveSources;
  dark: ResponsiveSources;
};

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  tags: readonly string[];
  tagsLabel?: string;
  image: ProjectCardImage;
  href?: string;
  actionLabel?: string;
};

const itemLayout: Record<string, string> = {
  'horizon-his': '2xl:col-span-8',
  subiter: '2xl:col-span-4',
  'rede-dcc': '2xl:col-span-5',
  'dasa-canal-do-consultor': '2xl:col-span-7',
};

export function ProjectCard({ id, title, description, tags, tagsLabel = `${title} tags`, image, href, actionLabel }: ProjectCardProps) {
  const titleId = `${id}-title`;
  const imageSizes = id === 'horizon-his'
    ? '(max-width: 767px) 100vw, (max-width: 1535px) 50vw, 66vw'
    : '(max-width: 767px) 100vw, (max-width: 1535px) 50vw, 58vw';

  const card = (
    <article className="grid h-full gap-5" aria-labelledby={titleId}>
      <div
        className={cn(
          'relative aspect-video overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-[border-color,background-color,box-shadow] duration-[var(--transition-fast)] group-hover:border-[var(--color-brand)] group-hover:shadow-[0_10px_24px_color-mix(in_srgb,var(--color-brand)_14%,transparent)] group-focus-visible:border-[var(--color-brand)] group-focus-visible:shadow-[0_10px_24px_color-mix(in_srgb,var(--color-brand)_14%,transparent)] group-active:border-[var(--color-brand-active)] group-active:bg-[var(--color-surface-elevated)] group-active:shadow-none',
          id === 'horizon-his' && '2xl:aspect-[16/9]',
          id === 'subiter' && '2xl:aspect-[4/3]',
        )}
      >
        <ThemeAwareProjectImage image={image} sizes={imageSizes} />
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
        <ul className="mt-1 flex list-none flex-wrap gap-2 p-0" aria-label={tagsLabel}>
          {tags.map((tag) => (
            <li key={tag} className="text-[0.82rem] leading-[1.4] font-semibold tracking-[0.08em] text-[var(--color-brand-text)] uppercase">
              {tag}
            </li>
          ))}
        </ul>
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
      {href ? (
        <Link
          href={href}
          className="group block h-full rounded-[var(--radius-xl)] text-inherit no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus)]"
        >
          {card}
        </Link>
      ) : (
        card
      )}
    </li>
  );
}
