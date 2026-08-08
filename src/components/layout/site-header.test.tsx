import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { WHATSAPP_CONTACT_URL } from '@/content/contact';
import { enCommon, ptBRCommon } from '@/content/i18n';
import { SiteHeader } from './site-header';

vi.mock('@/components/theme/theme-toggle', () => ({
  ThemeToggle: ({ labels }: { labels: { pendingLabel: string } }) => <button type="button">{labels.pendingLabel}</button>,
}));

describe('SiteHeader', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders English Header labels and localized Home links', () => {
    render(<SiteHeader content={enCommon} locale="en" routeId="home" />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /n3lx/i })).toHaveAttribute('href', '/en');
    expect(screen.getByRole('link', { name: /let.s talk/i })).toHaveAttribute('href', WHATSAPP_CONTACT_URL);
    expect(screen.getByRole('navigation', { name: 'Language' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Portuguese' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('href', '/en');
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
  });

  it('resolves Header and shared labels from Portuguese content', () => {
    render(<SiteHeader content={ptBRCommon} locale="pt-BR" routeId="home" />);

    expect(screen.getByRole('link', { name: 'Página inicial — N3LX' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Vamos conversar' })).toHaveAttribute('href', WHATSAPP_CONTACT_URL);
    expect(screen.getByRole('navigation', { name: 'Idioma' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Inglês' })).toHaveAttribute('href', '/en');
    expect(screen.getByRole('button', { name: 'Alternar tema' })).toBeInTheDocument();
  });

  it('preserves the project route ID across locales', () => {
    const { getByRole } = render(<SiteHeader content={enCommon} locale="en" routeId="subiter" />);

    expect(getByRole('link', { name: 'Portuguese' })).toHaveAttribute('href', '/projetos/subiter');
    expect(getByRole('link', { name: 'English' })).toHaveAttribute('href', '/en/projects/subiter');
  });
});
