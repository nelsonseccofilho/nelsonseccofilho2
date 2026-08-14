import { beforeEach, describe, expect, it, vi } from 'vitest';

const clarityMock = vi.hoisted(() => ({
  consentV2: vi.fn(),
  event: vi.fn(),
  init: vi.fn(),
  setTag: vi.fn(),
}));

vi.mock('@microsoft/clarity', () => ({ default: clarityMock }));

const productionEnvironment = {
  consent: 'granted' as const,
  hostname: 'nelsonsecco.netlify.app',
  nodeEnv: 'production',
  projectId: 'configured-project-id',
};

beforeEach(() => {
  vi.clearAllMocks();
  vi.resetModules();
});

describe('Clarity production contract', () => {
  it('initializes exactly once with configuration and grants analytics only', async () => {
    const { initializeClarity, setClarityContextTag, trackClarityEvent } = await import('./clarity');

    expect(initializeClarity(productionEnvironment)).toBe(true);
    expect(initializeClarity(productionEnvironment)).toBe(false);
    expect(clarityMock.init).toHaveBeenCalledOnce();
    expect(clarityMock.init).toHaveBeenCalledWith('configured-project-id');
    expect(clarityMock.consentV2).toHaveBeenCalledOnce();
    expect(clarityMock.consentV2).toHaveBeenCalledWith({
      ad_Storage: 'denied',
      analytics_Storage: 'granted',
    });

    setClarityContextTag('locale', 'pt-BR');
    trackClarityEvent('portfolio_case_open');
    trackClarityEvent('contact_email_click:footer');
    trackClarityEvent('github_click:meta-case-repository');
    expect(clarityMock.setTag).toHaveBeenCalledWith('locale', 'pt-BR');
    expect(clarityMock.event).toHaveBeenCalledWith('portfolio_case_open');
    expect(clarityMock.event).toHaveBeenCalledWith('contact_email_click:footer');
    expect(clarityMock.event).toHaveBeenCalledWith('github_click:meta-case-repository');
  });

  it('builds the approved contextual event names exactly', async () => {
    const {
      getCaseNavigationProjectOpenEvent,
      getFeaturedProjectOpenEvent,
      getMobileNavSelectEvent,
      getResumeDownloadEvent,
      getResumeOpenEvent,
      getWhatsAppClickEvent,
    } = await import('./clarity');

    expect((['hero', 'footer'] as const).map(getResumeOpenEvent)).toEqual(['resume_open:hero', 'resume_open:footer']);
    expect((['hero', 'footer'] as const).map(getResumeDownloadEvent)).toEqual(['resume_download:hero', 'resume_download:footer']);
    expect((['header', 'contact'] as const).map(getWhatsAppClickEvent)).toEqual([
      'contact_whatsapp_click:header',
      'contact_whatsapp_click:contact',
    ]);
    expect((['projects', 'work-process', 'portfolio', 'about', 'contact'] as const).map(getMobileNavSelectEvent)).toEqual([
      'mobile_nav_select:projects',
      'mobile_nav_select:work-process',
      'mobile_nav_select:portfolio',
      'mobile_nav_select:about',
      'mobile_nav_select:contact',
    ]);
    expect((['horizon-his', 'subiter', 'rede-dcc', 'dasa-canal-do-consultor'] as const).map(getFeaturedProjectOpenEvent)).toEqual([
      'project_open:horizon-his:featured-projects',
      'project_open:subiter:featured-projects',
      'project_open:rede-dcc:featured-projects',
      'project_open:dasa-canal-do-consultor:featured-projects',
    ]);
    expect((['subiter', 'rede-dcc', 'dasa-canal-do-consultor'] as const).map(getCaseNavigationProjectOpenEvent)).toEqual([
      'project_open:subiter:case-navigation',
      'project_open:rede-dcc:case-navigation',
      'project_open:dasa-canal-do-consultor:case-navigation',
    ]);
  });

  it('keeps event tracking as a no-op before initialization', async () => {
    const { trackClarityEvent } = await import('./clarity');

    trackClarityEvent('mobile_nav_open');

    expect(clarityMock.event).not.toHaveBeenCalled();
  });

  it('keeps event tracking as a no-op after an ineligible initialization attempt', async () => {
    const { initializeClarity, trackClarityEvent } = await import('./clarity');

    expect(initializeClarity({ ...productionEnvironment, hostname: 'localhost' })).toBe(false);
    trackClarityEvent('contact_whatsapp_click:header');

    expect(clarityMock.init).not.toHaveBeenCalled();
    expect(clarityMock.event).not.toHaveBeenCalled();
  });

  it.each([
    ['localhost', { ...productionEnvironment, hostname: 'localhost' }],
    ['loopback', { ...productionEnvironment, hostname: '127.0.0.1' }],
    ['Netlify preview', { ...productionEnvironment, hostname: 'deploy-preview-42--nelsonsecco.netlify.app' }],
    ['test environment', { ...productionEnvironment, nodeEnv: 'test' }],
    ['missing project ID', { ...productionEnvironment, projectId: undefined }],
    ['declined consent', { ...productionEnvironment, consent: 'declined' as const }],
  ])('does not initialize for %s', async (_scenario, environment) => {
    const { initializeClarity } = await import('./clarity');

    expect(initializeClarity(environment)).toBe(false);
    expect(clarityMock.init).not.toHaveBeenCalled();
    expect(clarityMock.consentV2).not.toHaveBeenCalled();
  });

  it('denies both storage purposes when active consent is revoked', async () => {
    const { initializeClarity, revokeClarityConsent } = await import('./clarity');

    initializeClarity(productionEnvironment);
    expect(revokeClarityConsent()).toBe(true);
    expect(clarityMock.consentV2).toHaveBeenLastCalledWith({
      ad_Storage: 'denied',
      analytics_Storage: 'denied',
    });
  });

  it('maps only portfolio and meta-case routes to high-value events', async () => {
    const { getRouteAnalyticsEvent } = await import('./clarity');

    expect(getRouteAnalyticsEvent('/projetos/horizon-his')).toBe('portfolio_case_open');
    expect(getRouteAnalyticsEvent('/en/projects/dasa-canal-do-consultor')).toBe('portfolio_case_open');
    expect(getRouteAnalyticsEvent('/construindo-este-portfolio')).toBe('portfolio_meta_case_open');
    expect(getRouteAnalyticsEvent('/en/building-this-portfolio')).toBe('portfolio_meta_case_open');
    expect(getRouteAnalyticsEvent('/en')).toBeUndefined();
  });
});
