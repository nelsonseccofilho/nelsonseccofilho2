import Clarity from '@microsoft/clarity';

export const ANALYTICS_CONSENT_STORAGE_KEY = 'portfolio.analytics-consent';

export type AnalyticsConsent = 'unknown' | 'declined' | 'granted';
export type ClarityContextTag = 'locale' | 'theme';
export type PortfolioAnalyticsEvent =
  | 'portfolio_case_open'
  | 'portfolio_meta_case_open'
  | 'contact_whatsapp_click'
  | 'contact_linkedin_click'
  | 'contact_github_click'
  | 'github_repository_click';

type ClarityEnvironment = {
  consent: AnalyticsConsent;
  hostname: string;
  nodeEnv: string | undefined;
  projectId: string | undefined;
};

const APPROVED_PRODUCTION_HOSTS = new Set(['nelsonsecco.netlify.app']);

let initialized = false;

export function isClarityEnvironmentEligible({ consent, hostname, nodeEnv, projectId }: ClarityEnvironment) {
  return Boolean(
    consent === 'granted' &&
      nodeEnv === 'production' &&
      projectId?.trim() &&
      APPROVED_PRODUCTION_HOSTS.has(hostname),
  );
}

export function initializeClarity(environment: ClarityEnvironment) {
  if (initialized || !isClarityEnvironmentEligible(environment)) return false;

  Clarity.init(environment.projectId!.trim());
  Clarity.consentV2({ ad_Storage: 'denied', analytics_Storage: 'granted' });
  initialized = true;
  return true;
}

export function isClarityInitialized() {
  return initialized;
}

export function setClarityContextTag(key: ClarityContextTag, value: string) {
  if (!initialized) return;
  Clarity.setTag(key, value);
}

export function trackClarityEvent(eventName: PortfolioAnalyticsEvent) {
  if (!initialized) return;
  Clarity.event(eventName);
}

export function revokeClarityConsent() {
  if (!initialized) return false;

  Clarity.consentV2({ ad_Storage: 'denied', analytics_Storage: 'denied' });
  initialized = false;
  return true;
}

export function getRouteAnalyticsEvent(pathname: string): PortfolioAnalyticsEvent | undefined {
  if (pathname === '/construindo-este-portfolio' || pathname === '/en/building-this-portfolio') {
    return 'portfolio_meta_case_open';
  }

  if (/^\/(?:en\/projects|projetos)\/[^/]+\/?$/.test(pathname)) {
    return 'portfolio_case_open';
  }

  return undefined;
}
