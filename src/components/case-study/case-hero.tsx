import { CaseMetadata } from './case-metadata';
import { ThemeAwareProjectImage } from '@/components/home/theme-aware-project-image';

type ResponsiveSources = Record<number, string>;

type CaseHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  metadata: Array<{
    label: string;
    value: string;
  }>;
  image: {
    alt: string;
    width: number;
    height: number;
    light: ResponsiveSources;
    dark: ResponsiveSources;
  };
};

export function CaseHero({ eyebrow, title, description, metadata, image }: CaseHeroProps) {
  const titleId = 'case-hero-title';

  return (
    <section className="py-[clamp(2.5rem,5vw,5rem)]" aria-labelledby={titleId}>
      <div className="layout-container grid gap-8 md:gap-10 xl:gap-12">
        <div className="aspect-video overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
          <ThemeAwareProjectImage
            image={image}
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 92vw, (max-width: 1599px) 88vw, 1600px"
          />
        </div>
        <div className="grid gap-5 md:gap-6">
          <p className="m-0 text-sm font-semibold tracking-[0.18em] text-[var(--color-brand-text)] uppercase">{eyebrow}</p>
          <h1 id={titleId} className="m-0 max-w-[14ch] text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] font-bold tracking-[-0.05em] text-[var(--color-text-primary)] md:max-w-[16ch]">
            {title}
          </h1>
          <p className="m-0 max-w-[60rem] text-[clamp(1.05rem,1.8vw,1.35rem)] leading-[1.65] text-[var(--color-text-secondary)]">{description}</p>
          <CaseMetadata items={metadata} />
        </div>
      </div>
    </section>
  );
}
