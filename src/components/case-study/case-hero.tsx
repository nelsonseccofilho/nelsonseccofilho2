import { CaseMetadata } from './case-metadata';
import { MediaPlaceholder } from '@/components/media/media-placeholder';

type CaseHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  supportingCopy?: string;
  metadata?: Array<{
    label: string;
    value: string;
  }>;
  placeholderLabel?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export function CaseHero({ eyebrow, title, description, supportingCopy, metadata = [], placeholderLabel, image }: CaseHeroProps) {
  const titleId = 'case-hero-title';

  return (
    <section className="py-[clamp(2.5rem,5vw,5rem)]" aria-labelledby={titleId}>
      <div className="layout-container grid gap-8 md:gap-10 xl:gap-12">
        <div className="aspect-video overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
          {image ? (
            // Native images keep case-hero media lightweight and preserve approved editorial assets.
            // eslint-disable-next-line @next/next/no-img-element
            <img className="h-full w-full object-cover" src={image.src} alt={image.alt} loading="lazy" />
          ) : (
            <MediaPlaceholder label={placeholderLabel ?? ''} variant="hero" />
          )}
        </div>
        <div className="grid gap-5 md:gap-6">
          <p className="m-0 text-sm font-semibold tracking-[0.18em] text-[var(--color-brand-text)] uppercase">{eyebrow}</p>
          <h1 id={titleId} className="m-0 max-w-[14ch] text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] font-bold tracking-[-0.05em] text-[var(--color-text-primary)] md:max-w-[16ch]">
            {title}
          </h1>
          <p className="m-0 max-w-[60rem] text-[clamp(1.05rem,1.8vw,1.35rem)] leading-[1.65] text-[var(--color-text-secondary)]">{description}</p>
          {supportingCopy ? <p className="m-0 max-w-[60rem] text-[clamp(1.05rem,1.8vw,1.35rem)] leading-[1.65] text-[var(--color-text-secondary)]">{supportingCopy}</p> : null}
          {metadata.length > 0 ? <CaseMetadata items={metadata} /> : null}
        </div>
      </div>
    </section>
  );
}
