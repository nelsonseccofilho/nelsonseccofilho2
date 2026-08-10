'use client';

import { useState, type CSSProperties, type ReactNode, type SyntheticEvent } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

export type EvidenceImage = {
  alt: string;
  src: string;
};

export type EvidenceViewerLabels = {
  openImageLabel: string;
  closeImageLabel: string;
  enlargedImageLabel: string;
};

type EvidenceViewerProps = {
  image: EvidenceImage;
  labels: EvidenceViewerLabels;
  caption?: ReactNode;
  className?: string;
  compact?: boolean;
  loading?: 'eager' | 'lazy';
};

function ExpandIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
      <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function EvidenceViewer({ image, labels, caption, className, compact = false, loading = 'lazy' }: EvidenceViewerProps) {
  const [intrinsicSize, setIntrinsicSize] = useState<{ width: number; height: number } | null>(null);
  const handleImageLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;

    if (naturalWidth > 0 && naturalHeight > 0) {
      setIntrinsicSize((current) =>
        current?.width === naturalWidth && current.height === naturalHeight
          ? current
          : { width: naturalWidth, height: naturalHeight },
      );
    }
  };
  const dialogWidth = intrinsicSize
    ? `min(calc(100vw - 2rem), ${intrinsicSize.width + 48}px, calc((100dvh - 7rem) * ${intrinsicSize.width / intrinsicSize.height} + 3rem))`
    : 'calc(100vw - 2rem)';
  const dialogStyle = { '--evidence-dialog-width': dialogWidth } as CSSProperties;

  return (
    <Dialog>
      <figure className={cn('case-media', className)} data-evidence-size={compact ? 'compact' : 'full'}>
        <DialogTrigger asChild>
          <button
            type="button"
            aria-label={`${labels.openImageLabel}: ${image.alt}`}
            className="group block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left text-foreground"
          >
            <span
              className={cn(
                'case-media__frame relative block transition-colors group-hover:border-primary group-focus-visible:border-primary',
                compact && 'aspect-[4/3] !rounded-[var(--radius-lg)]',
              )}
            >
              {/* Native images keep SVG and raster evidence at its source fidelity. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={cn('case-media__image', compact && '!h-full !w-full object-contain p-2 sm:p-3')}
                src={image.src}
                alt={image.alt}
                loading={loading}
                onLoad={handleImageLoad}
              />
              <span
                aria-hidden="true"
                className="absolute right-2 bottom-2 inline-flex size-8 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm transition-transform group-hover:scale-105 sm:right-3 sm:bottom-3"
              >
                <ExpandIcon />
              </span>
            </span>
          </button>
        </DialogTrigger>
        {caption ? <figcaption className="case-media__caption">{caption}</figcaption> : null}
      </figure>

      <DialogContent
        className="max-h-[calc(100dvh-1rem)] !w-[calc(100vw-1rem)] !max-w-[calc(100vw-1rem)] gap-3 overflow-hidden rounded-[var(--radius-lg)] border-border bg-background p-2 text-foreground shadow-2xl motion-reduce:transition-none sm:!w-[var(--evidence-dialog-width)] sm:!max-w-[calc(100vw-2rem)] sm:p-4"
        style={dialogStyle}
      >
        <DialogTitle className="sr-only">{labels.enlargedImageLabel}</DialogTitle>
        <DialogDescription className="sr-only">{typeof caption === 'string' ? caption : image.alt}</DialogDescription>
        <div className="mx-auto min-h-0 w-fit max-w-full overflow-auto overscroll-contain rounded-[var(--radius-md)] bg-secondary p-1 [touch-action:pinch-zoom] sm:p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="mx-auto max-h-[calc(100dvh-7rem)] w-auto max-w-[calc(100vw-3rem)] object-contain sm:max-w-[calc(100vw-5rem)]"
            src={image.src}
            alt={image.alt}
            onLoad={handleImageLoad}
          />
        </div>
        {caption ? <p className="m-0 w-0 min-w-full pr-12 text-sm leading-relaxed text-muted-foreground">{caption}</p> : null}
        <DialogClose asChild>
          <button
            type="button"
            aria-label={labels.closeImageLabel}
            className="absolute top-2 right-2 inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none sm:top-4 sm:right-4"
          >
            <CloseIcon />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
