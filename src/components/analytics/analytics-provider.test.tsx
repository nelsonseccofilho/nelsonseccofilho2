import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { enCommon } from '@/content/i18n/en/common';
import { ptBRCommon } from '@/content/i18n/pt-BR/common';
import { AnalyticsConsentSurface, AnalyticsProvider } from './analytics-provider';
import { ANALYTICS_CONSENT_STORAGE_KEY } from './clarity';
import { PrivacyPreferencesButton } from './privacy-preferences-button';

const clarityMock = vi.hoisted(() => ({
  consentV2: vi.fn(),
  event: vi.fn(),
  init: vi.fn(),
  setTag: vi.fn(),
}));

vi.mock('@microsoft/clarity', () => ({ default: clarityMock }));
vi.mock('next/navigation', () => ({ usePathname: () => '/' }));
vi.mock('@/components/theme/theme-provider', () => ({ useTheme: () => ({ resolvedTheme: 'light' }) }));

function renderProvider(locale: 'pt-BR' | 'en' = 'pt-BR') {
  const common = locale === 'pt-BR' ? ptBRCommon : enCommon;

  return render(
    <AnalyticsProvider copy={common.privacy} locale={locale}>
      <main>
        <section aria-label="Hero">Portfolio</section>
        <AnalyticsConsentSurface />
        <section aria-label="Featured projects">Projects</section>
      </main>
      <PrivacyPreferencesButton label={common.privacy.manageLabel} />
    </AnalyticsProvider>,
  );
}

beforeEach(() => {
  window.localStorage.clear();
  vi.clearAllMocks();
});

afterEach(cleanup);

describe('AnalyticsProvider consent UX', () => {
  it('shows PT-BR preferences for unknown consent without initializing Clarity', async () => {
    renderProvider();

    expect(await screen.findByRole('heading', { name: 'Privacidade e experiência' })).toBeInTheDocument();
    expect(screen.getByText(/analytics só é ativado se você permitir/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Recusar' })).toHaveClass('min-h-11');
    expect(screen.getByRole('button', { name: 'Permitir analytics' })).toHaveClass('min-h-11');
    const preferences = screen.getByRole('region', { name: 'Privacidade e experiência' });
    const slot = document.querySelector('[data-analytics-consent-slot="true"]');
    const hero = screen.getByRole('region', { name: 'Hero' });
    const featuredProjects = screen.getByRole('region', { name: 'Featured projects' });
    expect(preferences).not.toHaveClass('fixed');
    expect(hero.compareDocumentPosition(slot!) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(slot!.compareDocumentPosition(featuredProjects) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(clarityMock.init).not.toHaveBeenCalled();
  });

  it('persists a decline and keeps Clarity inactive', async () => {
    renderProvider();

    fireEvent.click(await screen.findByRole('button', { name: 'Recusar' }));
    expect(window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY)).toBe('declined');
    await waitFor(() => expect(screen.queryByRole('heading', { name: 'Privacidade e experiência' })).not.toBeInTheDocument());
    expect(document.querySelector('[data-analytics-consent-slot="true"]')).toBeEmptyDOMElement();
    expect(clarityMock.init).not.toHaveBeenCalled();
  });

  it('persists a grant but never initializes Clarity on localhost or under tests', async () => {
    renderProvider();

    fireEvent.click(await screen.findByRole('button', { name: 'Permitir analytics' }));
    expect(window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY)).toBe('granted');
    await waitFor(() => expect(screen.queryByRole('heading', { name: 'Privacidade e experiência' })).not.toBeInTheDocument());
    expect(document.querySelector('[data-analytics-consent-slot="true"]')).toBeEmptyDOMElement();
    expect(clarityMock.init).not.toHaveBeenCalled();
    expect(clarityMock.consentV2).not.toHaveBeenCalled();
  });

  it('reopens a stored preference from the secondary public control', async () => {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, 'declined');
    renderProvider();

    await waitFor(() => expect(screen.queryByRole('heading', { name: 'Privacidade e experiência' })).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole('button', { name: 'Privacidade' }));
    expect(await screen.findByRole('heading', { name: 'Privacidade e experiência' })).toBeInTheDocument();
  });

  it('renders semantic English copy', async () => {
    renderProvider('en');

    expect(await screen.findByRole('heading', { name: 'Privacy and experience' })).toBeInTheDocument();
    expect(screen.getByText(/analytics is only enabled if you allow it/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Decline' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Allow analytics' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Privacy' })).toBeInTheDocument();
  });
});
