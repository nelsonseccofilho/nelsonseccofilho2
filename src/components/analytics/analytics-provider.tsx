'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/components/theme/theme-provider';
import type { CommonContent } from '@/content/i18n/types';
import type { Locale } from '@/i18n/locales';
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  getRouteAnalyticsEvent,
  initializeClarity,
  isClarityInitialized,
  revokeClarityConsent,
  setClarityContextTag,
  trackClarityEvent,
  type AnalyticsConsent,
  type PortfolioAnalyticsEvent,
} from './clarity';

type AnalyticsContextValue = {
  chooseConsent: (consent: Exclude<AnalyticsConsent, 'unknown'>) => void;
  copy: CommonContent['privacy'] | undefined;
  openPrivacyPreferences: () => void;
  shouldShowPreferences: boolean;
  trackEvent: (eventName: PortfolioAnalyticsEvent) => void;
};

const AnalyticsContext = createContext<AnalyticsContextValue>({
  chooseConsent: () => {},
  copy: undefined,
  openPrivacyPreferences: () => {},
  shouldShowPreferences: false,
  trackEvent: () => {},
});

function readStoredConsent(): AnalyticsConsent {
  try {
    const storedConsent = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    return storedConsent === 'granted' || storedConsent === 'declined' ? storedConsent : 'unknown';
  } catch {
    return 'unknown';
  }
}

function persistConsent(consent: Exclude<AnalyticsConsent, 'unknown'>) {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, consent);
  } catch {
    // The choice still applies to the current page when storage is unavailable.
  }
}

const subscribeToConsent = () => () => {};
const getServerConsentSnapshot = () => 'loading' as const;

type AnalyticsProviderProps = {
  children: React.ReactNode;
  copy: CommonContent['privacy'];
  locale: Locale;
};

export function AnalyticsProvider({ children, copy, locale }: AnalyticsProviderProps) {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const storedConsent = useSyncExternalStore(subscribeToConsent, readStoredConsent, getServerConsentSnapshot);
  const [selectedConsent, setSelectedConsent] = useState<AnalyticsConsent | undefined>(undefined);
  const [isPreferenceOpen, setIsPreferenceOpen] = useState(false);
  const lastTrackedPath = useRef<string | undefined>(undefined);
  const isPreferenceLoaded = storedConsent !== 'loading';
  const consent = selectedConsent ?? (isPreferenceLoaded ? storedConsent : 'unknown');

  useEffect(() => {
    if (!isPreferenceLoaded || consent !== 'granted') return;

    initializeClarity({
      consent,
      hostname: window.location.hostname,
      nodeEnv: process.env.NODE_ENV,
      projectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
    });
  }, [consent, isPreferenceLoaded]);

  useEffect(() => {
    if (!isClarityInitialized()) return;
    setClarityContextTag('locale', locale);
  }, [consent, locale]);

  useEffect(() => {
    if (!isClarityInitialized() || !resolvedTheme) return;
    setClarityContextTag('theme', resolvedTheme);
  }, [consent, resolvedTheme]);

  useEffect(() => {
    if (!isClarityInitialized() || pathname === lastTrackedPath.current) return;

    const eventName = getRouteAnalyticsEvent(pathname);
    if (eventName) trackClarityEvent(eventName);
    lastTrackedPath.current = pathname;
  }, [consent, pathname]);

  const chooseConsent = useCallback((nextConsent: Exclude<AnalyticsConsent, 'unknown'>) => {
    if (nextConsent === 'granted') {
      persistConsent(nextConsent);
      setSelectedConsent(nextConsent);
      setIsPreferenceOpen(false);
      return;
    }

    const requiresReload = revokeClarityConsent();
    persistConsent(nextConsent);
    setSelectedConsent(nextConsent);
    setIsPreferenceOpen(false);

    if (requiresReload) window.location.reload();
  }, []);

  const openPrivacyPreferences = useCallback(() => {
    setIsPreferenceOpen(true);

    const revealPreferences = () => {
      const preferences = document.getElementById('analytics-consent-preferences');
      preferences?.focus({ preventScroll: true });
      preferences?.scrollIntoView?.({ block: 'center' });
    };

    if (typeof window.requestAnimationFrame === 'function') window.requestAnimationFrame(revealPreferences);
    else window.setTimeout(revealPreferences, 0);
  }, []);
  const trackEvent = useCallback((eventName: PortfolioAnalyticsEvent) => trackClarityEvent(eventName), []);

  const shouldShowPreferences = isPreferenceLoaded && (consent === 'unknown' || isPreferenceOpen);
  const contextValue = useMemo(
    () => ({ chooseConsent, copy, openPrivacyPreferences, shouldShowPreferences, trackEvent }),
    [chooseConsent, copy, openPrivacyPreferences, shouldShowPreferences, trackEvent],
  );

  return <AnalyticsContext.Provider value={contextValue}>{children}</AnalyticsContext.Provider>;
}

export function AnalyticsConsentSurface() {
  const { chooseConsent, copy, shouldShowPreferences } = useAnalytics();

  return (
    <div data-analytics-consent-slot="true">
      {shouldShowPreferences && copy ? (
        <div className="layout-container py-[clamp(1.5rem,3vw,2.5rem)]">
          <section
            id="analytics-consent-preferences"
            className="grid max-w-[44rem] gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] sm:p-6"
            aria-labelledby="privacy-preferences-title"
            tabIndex={-1}
          >
            <div className="grid gap-2">
              <h2 id="privacy-preferences-title" className="m-0 text-lg leading-tight font-bold text-[var(--color-text-primary)]">
                {copy.title}
              </h2>
              <p className="m-0 text-sm leading-relaxed text-[var(--color-text-secondary)]">{copy.description}</p>
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
          </section>
        </div>
      ) : null}
    </div>
  );
}

export function useAnalytics() {
  return useContext(AnalyticsContext);
}
