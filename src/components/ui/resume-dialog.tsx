'use client';

import { useRef, useState } from 'react';
import { useAnalytics } from '@/components/analytics/analytics-provider';
import {
  getResumeDownloadEvent,
  getResumeOpenEvent,
  type ResumeAnalyticsSurface,
} from '@/components/analytics/clarity';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export type ResumeDialogLabels = {
  triggerLabel: string;
  triggerAriaLabel: string;
  dialogTitle: string;
  closeLabel: string;
  downloadLabel: string;
  loadingLabel: string;
  openLabel: string;
  previewHelpLabel: string;
};

type ResumeDialogProps = {
  pdfHref: string;
  labels: ResumeDialogLabels;
  surface: ResumeAnalyticsSurface;
  triggerClassName?: string;
};

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ResumeDialog({ pdfHref, labels, surface, triggerClassName }: ResumeDialogProps) {
  const { trackEvent } = useAnalytics();
  const [loaded, setLoaded] = useState(false);
  const isOpenRef = useRef(false);

  function handleOpenChange(open: boolean) {
    if (open && !isOpenRef.current) {
      trackEvent(getResumeOpenEvent(surface));
    }

    isOpenRef.current = open;
    if (!open) {
      setLoaded(false);
    }
  }

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button type="button" className={triggerClassName} aria-label={labels.triggerAriaLabel}>
          {labels.triggerLabel}
        </button>
      </DialogTrigger>
      <DialogContent
        className="flex flex-col gap-0 overflow-hidden rounded-[var(--radius-lg)] border-border bg-background p-0 text-foreground shadow-2xl motion-reduce:transition-none w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] h-[calc(100dvh-2rem)] max-h-[calc(100dvh-2rem)] sm:w-[min(56rem,calc(100vw-3rem))] sm:max-w-[min(56rem,calc(100vw-3rem))] sm:h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-4rem)]"
      >
        <div className="flex flex-shrink-0 flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5 sm:py-4">
          <DialogTitle className="text-sm font-semibold text-foreground sm:text-base">
            {labels.dialogTitle}
          </DialogTitle>
          <div className="flex items-center gap-2">
            <a
              href={pdfHref}
              download
              onClick={() => trackEvent(getResumeDownloadEvent(surface))}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none sm:text-sm"
            >
              {labels.downloadLabel}
            </a>
            <DialogClose asChild>
              <button
                type="button"
                aria-label={labels.closeLabel}
                className="inline-flex size-11 flex-shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
              >
                <CloseIcon />
              </button>
            </DialogClose>
          </div>
        </div>
        <div className="resume-preview-help">
          <p className="m-0 text-sm text-muted-foreground">{labels.previewHelpLabel}</p>
          <a className="text-link text-link--hit-area" href={pdfHref} target="_blank" rel="noreferrer">
            {labels.openLabel}
          </a>
        </div>
        <div className="relative flex min-h-0 flex-1 flex-col">
          {!loaded && (
            <p
              aria-live="polite"
              className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground"
            >
              {labels.loadingLabel}
            </p>
          )}
          <iframe
            src={pdfHref}
            title={labels.dialogTitle}
            className="size-full border-0"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
