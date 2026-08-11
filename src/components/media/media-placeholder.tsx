import { cn } from '@/lib/utils';

type MediaPlaceholderProps = {
  label: string;
  variant: 'hero' | 'project-card' | 'selected-work' | 'evidence' | 'gallery';
  className?: string;
};

export function MediaPlaceholder({ label, variant, className }: MediaPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      data-media-placeholder
      data-placeholder-variant={variant}
      className={cn(
        'relative grid h-full min-h-40 w-full place-items-center overflow-hidden bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)]',
        'before:absolute before:inset-[12%] before:rounded-[var(--radius-lg)] before:border before:border-[var(--color-border)]',
        'after:absolute after:inset-0 after:bg-[linear-gradient(135deg,transparent_0%,color-mix(in_srgb,var(--color-brand)_6%,transparent)_50%,transparent_100%)]',
        variant === 'evidence' && 'aspect-video',
        variant === 'gallery' && 'aspect-[4/3] min-h-0 rounded-[var(--radius-lg)] border border-[var(--color-border)]',
        className,
      )}
    >
      <span className="relative z-10 max-w-[20ch] px-5 text-center text-xs font-semibold tracking-[0.12em] uppercase">
        {label}
      </span>
    </div>
  );
}
