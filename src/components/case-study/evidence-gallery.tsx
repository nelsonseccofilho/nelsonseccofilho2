'use client';

import { useId, useState } from 'react';
import { EvidenceViewer, type EvidenceImage, type EvidenceViewerLabels } from '@/components/case-study/evidence-viewer';

export type EvidenceGalleryItem = {
  image: EvidenceImage;
};

type EvidenceGalleryProps = {
  items: readonly EvidenceGalleryItem[];
  labels: EvidenceViewerLabels & {
    viewAllArtifactsLabel: string;
    showLessLabel: string;
  };
  initiallyVisibleCount?: number;
};

export function EvidenceGallery({ items, labels, initiallyVisibleCount = items.length }: EvidenceGalleryProps) {
  const [expanded, setExpanded] = useState(false);
  const galleryId = useId();
  const hasDisclosure = items.length > initiallyVisibleCount;
  const visibleItems = expanded ? items : items.slice(0, initiallyVisibleCount);

  return (
    <div className="grid gap-4">
      <ul id={galleryId} className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:gap-4 xl:grid-cols-4">
        {visibleItems.map((item) => (
          <li key={item.image.src} className="min-w-0">
            <EvidenceViewer image={item.image} labels={labels} compact />
          </li>
        ))}
      </ul>

      {hasDisclosure ? (
        <button
          type="button"
          aria-controls={galleryId}
          aria-expanded={expanded}
          className="inline-flex min-h-11 w-fit min-w-48 items-center justify-center whitespace-nowrap rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-2 text-sm font-semibold text-[var(--color-text-primary)] opacity-100 transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand-text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] motion-reduce:transition-none"
          onClick={() => setExpanded((current) => !current)}
        >
          <span>{expanded ? labels.showLessLabel : `${labels.viewAllArtifactsLabel} (${items.length})`}</span>
        </button>
      ) : null}
    </div>
  );
}
