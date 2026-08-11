'use client';

import { useAnalytics } from './analytics-provider';

export function PrivacyPreferencesButton({ label }: { label: string }) {
  const { openPrivacyPreferences } = useAnalytics();

  return (
    <button
      type="button"
      className="contact__secondary-link inline-flex min-h-11 cursor-pointer items-center border-x-0 border-t-0 bg-transparent px-0 text-base font-[inherit]"
      onClick={openPrivacyPreferences}
    >
      {label}
    </button>
  );
}
