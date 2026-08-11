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
    trackClarityEvent('contact_github_click');
    trackClarityEvent('github_repository_click');
    expect(clarityMock.setTag).toHaveBeenCalledWith('locale', 'pt-BR');
    expect(clarityMock.event).toHaveBeenCalledWith('portfolio_case_open');
    expect(clarityMock.event).toHaveBeenCalledWith('contact_github_click');
    expect(clarityMock.event).toHaveBeenCalledWith('github_repository_click');
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
