import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AnalyticsProvider } from '@/components/analytics/analytics-provider';
import { ANALYTICS_CONSENT_STORAGE_KEY, initializeClarity } from '@/components/analytics/clarity';
import { commonContent } from '@/content/i18n';
import type { Locale } from '@/i18n/locales';
import { SiteFooter } from './site-footer';

const clarityMock = vi.hoisted(() => ({
  consentV2: vi.fn(),
  event: vi.fn(),
  init: vi.fn(),
  setTag: vi.fn(),
}));

vi.mock('@microsoft/clarity', () => ({ default: clarityMock }));
vi.mock('next/navigation', () => ({ usePathname: () => '/' }));
vi.mock('@/components/theme/theme-provider', () => ({ useTheme: () => ({ resolvedTheme: 'light' }) }));

function renderFooter(locale: Locale) {
  return render(
    <AnalyticsProvider copy={commonContent[locale].privacy} locale={locale}>
      <SiteFooter locale={locale} />
    </AnalyticsProvider>,
  );
}

beforeEach(() => {
  window.localStorage.clear();
  window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, 'declined');
  vi.clearAllMocks();
});

afterEach(cleanup);

describe('SiteFooter', () => {
  it('opens English privacy preferences without navigating', async () => {
    renderFooter('en');

    const footer = screen.getByRole('contentinfo');
    const nav = within(footer).getByRole('navigation', { name: 'Footer navigation' });
    const emailLink = within(nav).getByRole('link', { name: /nelsonseccofilho@gmail.com/i });
    const linkedInLink = within(nav).getByRole('link', { name: 'LinkedIn' });
    const githubLink = within(nav).getByRole('link', { name: 'GitHub' });
    const resumeTrigger = within(nav).getByRole('button', { name: "Open Nelson Secco's resume in English" });
    const privacyTrigger = within(nav).getByRole('button', { name: 'Privacy' });

    expect(emailLink).toHaveAttribute('href', 'mailto:nelsonseccofilho@gmail.com');
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/nelsonseccofilho/');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/nelsonseccofilho');
    [emailLink, linkedInLink, githubLink, resumeTrigger, privacyTrigger].forEach((action) => {
      expect(action).toHaveClass('text-link', 'text-link--hit-area');
      expect(action).not.toHaveClass('site-footer__secondary-action');
    });
    expect(within(nav).queryByRole('link', { name: 'Privacy' })).not.toBeInTheDocument();
    expect(screen.getByText(/N3LX Digital Business\. All rights reserved\./i)).toBeInTheDocument();

    const pathnameBeforeClick = window.location.pathname;
    fireEvent.click(privacyTrigger);

    const privacyDialog = await screen.findByRole('dialog', { name: 'Privacy and experience' });
    expect(privacyDialog).toHaveTextContent(/analytics is only enabled if you allow it/i);
    expect(screen.getByRole('button', { name: 'Decline' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Allow analytics' })).toBeInTheDocument();
    expect(window.location.pathname).toBe(pathnameBeforeClick);
    fireEvent.click(screen.getByRole('button', { name: 'Close privacy preferences' }));

    expect(resumeTrigger).toBeInTheDocument();
    expect(resumeTrigger).toHaveTextContent('Resume');
    fireEvent.click(resumeTrigger);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    const iframe = screen.getByTitle('Resume \u2014 Nelson Secco');
    expect(iframe).toHaveAttribute('src', '/assets/resume/N3LX_EN.pdf');
  });

  it('opens Portuguese privacy preferences without navigating', async () => {
    renderFooter('pt-BR');

    const footer = screen.getByRole('contentinfo');
    const nav = within(footer).getByRole('navigation', { name: 'Navegação de rodapé' });

    expect(within(nav).getByRole('link', { name: /nelsonseccofilho@gmail.com/i })).toHaveAttribute('href', 'mailto:nelsonseccofilho@gmail.com');
    expect(within(nav).getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/nelsonseccofilho/');
    expect(within(nav).getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/nelsonseccofilho');
    expect(within(nav).queryByRole('link', { name: 'Privacidade' })).not.toBeInTheDocument();
    expect(screen.getByText(/N3LX Digital Business\. Todos os direitos reservados\./i)).toBeInTheDocument();

    const privacyTrigger = within(nav).getByRole('button', { name: 'Privacidade' });
    const pathnameBeforeClick = window.location.pathname;
    fireEvent.click(privacyTrigger);

    const privacyDialog = await screen.findByRole('dialog', { name: 'Privacidade e experiência' });
    expect(privacyDialog).toHaveTextContent(/analytics só é ativado se você permitir/i);
    expect(screen.getByRole('button', { name: 'Recusar' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Permitir analytics' })).toBeInTheDocument();
    expect(window.location.pathname).toBe(pathnameBeforeClick);
    fireEvent.click(screen.getByRole('button', { name: 'Fechar preferências de privacidade' }));

    const resumeTrigger = within(nav).getByRole('button', { name: 'Abrir curr\u00edculo de Nelson Secco em portugu\u00eas' });
    expect(resumeTrigger).toBeInTheDocument();
    expect(resumeTrigger).toHaveTextContent('Curr\u00edculo');
    fireEvent.click(resumeTrigger);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    const iframe = screen.getByTitle('Curr\u00edculo \u2014 Nelson Secco');
    expect(iframe).toHaveAttribute('src', '/assets/resume/N3LX_PT-BR.pdf');
  });

  it('tracks footer contact and Resume intentions without changing link behavior', () => {
    initializeClarity({
      consent: 'granted',
      hostname: 'nelsonsecco.netlify.app',
      nodeEnv: 'production',
      projectId: 'configured-project-id',
    });
    vi.clearAllMocks();
    renderFooter('en');

    const nav = screen.getByRole('navigation', { name: 'Footer navigation' });
    const email = within(nav).getByRole('link', { name: 'nelsonseccofilho@gmail.com' });
    const linkedIn = within(nav).getByRole('link', { name: 'LinkedIn' });
    const github = within(nav).getByRole('link', { name: 'GitHub' });

    expect(email).toHaveAttribute('href', 'mailto:nelsonseccofilho@gmail.com');
    expect(linkedIn).toHaveAttribute('target', '_blank');
    expect(linkedIn).toHaveAttribute('rel', 'noreferrer');
    expect(github).toHaveAttribute('target', '_blank');
    expect(github).toHaveAttribute('rel', 'noreferrer');
    [email, linkedIn, github].forEach((link) => expect(link).toHaveAttribute('data-clarity-mask', 'true'));

    fireEvent.click(email);
    fireEvent.click(linkedIn);
    fireEvent.click(github);
    fireEvent.click(within(nav).getByRole('button', { name: "Open Nelson Secco's resume in English" }));
    const download = screen.getByRole('link', { name: 'Download PDF' });
    expect(download).toHaveAttribute('href', '/assets/resume/N3LX_EN.pdf');
    expect(download).toHaveAttribute('download');
    fireEvent.click(download);

    expect(clarityMock.event.mock.calls).toEqual([
      ['contact_email_click:footer'],
      ['linkedin_click:footer'],
      ['github_click:footer-profile'],
      ['resume_open:footer'],
      ['resume_download:footer'],
    ]);
  });
});
