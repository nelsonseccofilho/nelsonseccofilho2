import '@testing-library/jest-dom/vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { WHATSAPP_CONTACT_URL } from '@/content/contact';
import { enCommon, ptBRCommon } from '@/content/i18n';
import { SiteHeader } from './site-header';

const usePathnameMock = vi.fn();

vi.mock('next/navigation', () => ({
  usePathname: () => usePathnameMock(),
}));

vi.mock('@/components/theme/theme-toggle', () => ({
  ThemeToggle: ({ labels }: { labels: { pendingLabel: string } }) => <button type="button">{labels.pendingLabel}</button>,
}));

describe('SiteHeader', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    usePathnameMock.mockReturnValue('/en');
  });

  it('renders English Header labels and localized Home links', () => {
    render(<SiteHeader content={enCommon} locale="en" routeId="home" />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    const homeLink = screen.getByRole('link', { name: 'N3LX home' });
    const contactLink = screen.getByRole('link', { name: "Let\u2019s talk on WhatsApp" });
    expect(homeLink).toHaveAttribute('href', '/en');
    expect(within(homeLink).getByText('3LX')).toBeInTheDocument();
    expect(homeLink.querySelector('.site-header__brand-mark')).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', WHATSAPP_CONTACT_URL);
    expect(contactLink.querySelector('[data-icon="send"]')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByRole('navigation', { name: 'Language' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Home sections' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/en#projects');
    expect(screen.getByRole('link', { name: 'How I work' })).toHaveAttribute('href', '/en#work-process');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/en#about');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/en#contact');
    expect(screen.queryByRole('link', { name: "Open Nelson Secco's resume in English" })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Portuguese' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Portuguese' })).toHaveTextContent('PT-BR');
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('href', '/en');
    expect(screen.getByRole('link', { name: 'English' })).toHaveTextContent('EN');
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
  });

  it('resolves Header and shared labels from Portuguese content', () => {
    usePathnameMock.mockReturnValue('/');

    render(<SiteHeader content={ptBRCommon} locale="pt-BR" routeId="home" />);

    expect(screen.getByRole('link', { name: 'Página inicial — N3LX' })).toHaveAttribute('href', '/');
    const contactLink = screen.getByRole('link', { name: 'Vamos conversar pelo WhatsApp' });
    expect(contactLink).toHaveAttribute('href', WHATSAPP_CONTACT_URL);
    expect(contactLink.querySelector('[data-icon="send"]')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByRole('navigation', { name: 'Idioma' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Seções da Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projetos' })).toHaveAttribute('href', '/#projects');
    expect(screen.getByRole('link', { name: 'Como trabalho' })).toHaveAttribute('href', '/#work-process');
    expect(screen.getByRole('link', { name: 'Sobre' })).toHaveAttribute('href', '/#about');
    expect(screen.getByRole('link', { name: 'Contato' })).toHaveAttribute('href', '/#contact');
    expect(screen.queryByRole('link', { name: 'Abrir currículo de Nelson Secco em português' })).not.toBeInTheDocument();
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

  it('keeps the header persistent contract as sticky with top 0', () => {
    const css = readFileSync(resolve(process.cwd(), 'src/app/globals.css'), 'utf8');
    const headerRule = css.match(/\.site-header\s*{([\s\S]*?)}/);

    expect(headerRule).not.toBeNull();
    expect(headerRule?.[1]).toMatch(/position:\s*sticky;/);
    expect(headerRule?.[1]).toMatch(/top:\s*0;/);
  });

  it('CTA has an aria-label with full WhatsApp context (EN)', () => {
    render(<SiteHeader content={enCommon} locale="en" routeId="home" />);

    const cta = screen.getByRole('link', { name: "Let\u2019s talk on WhatsApp" });
    expect(cta).toHaveAttribute('href', WHATSAPP_CONTACT_URL);
    expect(cta.querySelector('.site-header__cta-icon')).toBeInTheDocument();
  });

  it('CTA has an aria-label with full WhatsApp context (PT-BR)', () => {
    render(<SiteHeader content={ptBRCommon} locale="pt-BR" routeId="home" />);

    const cta = screen.getByRole('link', { name: 'Vamos conversar pelo WhatsApp' });
    expect(cta).toHaveAttribute('href', WHATSAPP_CONTACT_URL);
  });

  it('CTA label text has site-header__cta-label class for mobile hide CSS', () => {
    render(<SiteHeader content={enCommon} locale="en" routeId="home" />);

    const cta = screen.getByRole('link', { name: "Let\u2019s talk on WhatsApp" });
    const labelSpan = cta.querySelector('.site-header__cta-label');
    expect(labelSpan).toBeInTheDocument();
    expect(labelSpan).toHaveTextContent("Let\u2019s talk");
    expect(labelSpan).toHaveAttribute('aria-hidden', 'true');
  });

  it('mobile CSS hides CTA label text below 480px', () => {
    const css = readFileSync(resolve(process.cwd(), 'src/app/globals.css'), 'utf8');

    expect(css).toMatch(/\.site-header__cta-label\s*\{[^}]*display:\s*none/);
  });

  it('N3LX scrolls to top (smooth) when clicked on Home PT-BR', () => {
    usePathnameMock.mockReturnValue('/');
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));
    const scrollTo = vi.fn();
    vi.stubGlobal('scrollTo', scrollTo);

    render(<SiteHeader content={ptBRCommon} locale="pt-BR" routeId="home" />);
    fireEvent.click(screen.getByRole('link', { name: 'Página inicial — N3LX' }));

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'smooth' });
  });

  it('N3LX scrolls to top (smooth) when clicked on Home EN', () => {
    usePathnameMock.mockReturnValue('/en');
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));
    const scrollTo = vi.fn();
    vi.stubGlobal('scrollTo', scrollTo);

    render(<SiteHeader content={enCommon} locale="en" routeId="home" />);
    fireEvent.click(screen.getByRole('link', { name: 'N3LX home' }));

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'smooth' });
  });

  it('N3LX uses instant scroll when reduced motion is preferred', () => {
    usePathnameMock.mockReturnValue('/en');
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }));
    const scrollTo = vi.fn();
    vi.stubGlobal('scrollTo', scrollTo);

    render(<SiteHeader content={enCommon} locale="en" routeId="home" />);
    fireEvent.click(screen.getByRole('link', { name: 'N3LX home' }));

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'auto' });
  });

  it('N3LX does not call scrollTo when clicked from a project page', () => {
    usePathnameMock.mockReturnValue('/en/projects/horizon-his');
    const scrollTo = vi.fn();
    vi.stubGlobal('scrollTo', scrollTo);

    render(<SiteHeader content={enCommon} locale="en" routeId="horizon-his" />);
    fireEvent.click(screen.getByRole('link', { name: 'N3LX home' }));

    expect(scrollTo).not.toHaveBeenCalled();
  });

  it('N3LX brand link href is Home PT-BR and preserves accessible name', () => {
    render(<SiteHeader content={ptBRCommon} locale="pt-BR" routeId="home" />);

    const brandLink = screen.getByRole('link', { name: 'Página inicial — N3LX' });
    expect(brandLink).toHaveAttribute('href', '/');
  });

  it('N3LX brand link href is Home EN and preserves accessible name', () => {
    render(<SiteHeader content={enCommon} locale="en" routeId="home" />);

    const brandLink = screen.getByRole('link', { name: 'N3LX home' });
    expect(brandLink).toHaveAttribute('href', '/en');
  });
});
