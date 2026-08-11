import '@testing-library/jest-dom/vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { cleanup, render, screen, within } from '@testing-library/react';
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
    const homeLink = screen.getByRole('link', { name: 'N3LX home' });
    const contactLink = screen.getByRole('link', { name: /let.s talk/i });
    expect(homeLink).toHaveAttribute('href', '/en');
    expect(within(homeLink).getByText('3LX')).toBeInTheDocument();
    expect(homeLink.querySelector('.site-header__brand-mark')).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', WHATSAPP_CONTACT_URL);
    expect(contactLink.querySelector('[data-icon="send"]')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByRole('navigation', { name: 'Language' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Portuguese' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Portuguese' })).toHaveTextContent('PT-BR');
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('href', '/en');
    expect(screen.getByRole('link', { name: 'English' })).toHaveTextContent('EN');
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
  });

  it('resolves Header and shared labels from Portuguese content', () => {
    render(<SiteHeader content={ptBRCommon} locale="pt-BR" routeId="home" />);

    expect(screen.getByRole('link', { name: 'Página inicial — N3LX' })).toHaveAttribute('href', '/');
    const contactLink = screen.getByRole('link', { name: 'Vamos conversar' });
    expect(contactLink).toHaveAttribute('href', WHATSAPP_CONTACT_URL);
    expect(contactLink.querySelector('[data-icon="send"]')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByRole('navigation', { name: 'Idioma' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Português' })).toHaveTextContent('PT-BR');
    expect(screen.getByRole('link', { name: 'Inglês' })).toHaveAttribute('href', '/en');
    expect(screen.getByRole('button', { name: 'Alternar tema' })).toBeInTheDocument();
  });

  it('preserves the project route ID across locales', () => {
    const { getByRole } = render(<SiteHeader content={enCommon} locale="en" routeId="subiter" />);

    expect(getByRole('link', { name: 'Portuguese' })).toHaveAttribute('href', '/projetos/subiter');
    expect(getByRole('link', { name: 'English' })).toHaveAttribute('href', '/en/projects/subiter');
  });

  it('keeps a 2px optical gap between the N artwork and 3LX type without a responsive override', () => {
    render(<SiteHeader content={enCommon} locale="en" routeId="home" />);

    const homeLink = screen.getByRole('link', { name: 'N3LX home' });
    const mark = homeLink.querySelector(':scope > .site-header__brand-mark');
    const artwork = mark?.querySelector('rect');
    const type = homeLink.querySelector(':scope > .site-header__brand-type');
    const css = readFileSync(resolve(process.cwd(), 'src/app/globals.css'), 'utf8');
    const brandRules = [...css.matchAll(/\.site-header__brand\s*{([^}]+)}/g)];
    const gapDeclarations = [...brandRules[0][1].matchAll(/gap:\s*([^;]+);/g)].map((match) => match[1]);

    expect([...homeLink.children]).toEqual([mark, type]);
    expect(mark).toHaveAttribute('viewBox', '0 0 128 128');
    expect(artwork).toHaveAttribute('width', '128');
    expect(artwork).toHaveAttribute('height', '128');
    expect(brandRules).toHaveLength(1);
    expect(gapDeclarations).toEqual(['2px']);
  });
});
