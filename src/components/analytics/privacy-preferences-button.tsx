'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useAnalytics } from './analytics-provider';

type PrivacyPreferencesButtonProps = {
  closeLabel: string;
  label: string;
};

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function PrivacyPreferencesButton({ closeLabel, label }: PrivacyPreferencesButtonProps) {
  const { chooseConsent, copy, isPrivacyPreferencesOpen, setPrivacyPreferencesOpen } = useAnalytics();

  return (
    <Dialog open={isPrivacyPreferencesOpen} onOpenChange={setPrivacyPreferencesOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="contact__secondary-link inline-flex min-h-11 cursor-pointer items-center border-x-0 border-t-0 bg-transparent px-0 text-base font-[inherit]"
        >
          {label}
        </button>
      </DialogTrigger>
      {copy ? (
        <DialogContent className="gap-4 rounded-[var(--radius-xl)] border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)] sm:max-w-[44rem]">
          <div className="grid grid-cols-[1fr_auto] items-start gap-4">
            <div className="grid gap-2">
              <DialogTitle className="text-lg leading-tight font-bold">{copy.title}</DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {copy.description}
              </DialogDescription>
            </div>
            <DialogClose asChild>
              <button
                type="button"
                aria-label={closeLabel}
                className="inline-flex size-9 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand-text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] motion-reduce:transition-none"
              >
                <CloseIcon />
              </button>
            </DialogClose>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-transparent px-4 py-2 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand-text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] motion-reduce:transition-none"
              onClick={() => chooseConsent('declined')}
            >
              {copy.declineLabel}
            </button>
            <button
              type="button"
              className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-transparent px-4 py-2 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand-text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] motion-reduce:transition-none"
              onClick={() => chooseConsent('granted')}
            >
              {copy.allowLabel}
            </button>
          </div>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}
