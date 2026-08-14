import Clarity from '@microsoft/clarity';
import type { ProjectRouteId } from '@/content/i18n/types';
import type { HomeSectionId } from '@/lib/section-navigation';

export const ANALYTICS_CONSENT_STORAGE_KEY = 'portfolio.analytics-consent';

export type AnalyticsConsent = 'unknown' | 'declined' | 'granted';
export type ClarityContextTag = 'locale' | 'theme';
export type ResumeAnalyticsSurface = 'hero' | 'footer';
export type WhatsAppAnalyticsSurface = 'header' | 'contact';
export type CaseNavigationProjectId = Exclude<ProjectRouteId, 'horizon-his'>;

export type PortfolioAnalyticsEvent =
  | 'portfolio_case_open'
  | 'portfolio_meta_case_open'
  | `resume_open:${ResumeAnalyticsSurface}`
  | `resume_download:${ResumeAnalyticsSurface}`
  | `contact_whatsapp_click:${WhatsAppAnalyticsSurface}`
  | 'contact_email_click:footer'
  | 'linkedin_click:footer'
  | 'github_click:footer-profile'
  | 'github_click:meta-case-repository'
  | 'mobile_nav_open'
  | `mobile_nav_select:${HomeSectionId}`
  | `project_open:${ProjectRouteId}:featured-projects`
  | `project_open:${CaseNavigationProjectId}:case-navigation`;

type ClarityEnvironment = {
  consent: AnalyticsConsent;
  hostname: string;
  nodeEnv: string | undefined;
  projectId: string | undefined;
};

const APPROVED_PRODUCTION_HOSTS = new Set(['nelsonsecco.netlify.app']);

let initialized = false;

export function getResumeOpenEvent(surface: ResumeAnalyticsSurface): PortfolioAnalyticsEvent {
  return `resume_open:${surface}`;
}

export function getResumeDownloadEvent(surface: ResumeAnalyticsSurface): PortfolioAnalyticsEvent {
  return `resume_download:${surface}`;
}

export function getWhatsAppClickEvent(surface: WhatsAppAnalyticsSurface): PortfolioAnalyticsEvent {
  return `contact_whatsapp_click:${surface}`;
}

export function getMobileNavSelectEvent(destination: HomeSectionId): PortfolioAnalyticsEvent {
  return `mobile_nav_select:${destination}`;
}

export function getFeaturedProjectOpenEvent(projectId: ProjectRouteId): PortfolioAnalyticsEvent {
  return `project_open:${projectId}:featured-projects`;
}

export function getCaseNavigationProjectOpenEvent(projectId: CaseNavigationProjectId): PortfolioAnalyticsEvent {
  return `project_open:${projectId}:case-navigation`;
}

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
