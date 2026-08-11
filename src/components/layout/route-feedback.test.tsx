import '@testing-library/jest-dom/vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import EnglishLoading from '@/app/(en)/(with-footer)/en/building-this-portfolio/loading';
import EnglishNotFound from '@/app/(en)/not-found';
import PortugueseLoading from '@/app/(pt-BR)/(with-footer)/construindo-este-portfolio/loading';
import PortugueseNotFound from '@/app/(pt-BR)/not-found';

vi.mock('@/components/theme/theme-provider', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

afterEach(cleanup);

describe('localized route feedback', () => {
  it('exposes locale-aware loading labels with the decorative N mark', () => {
    const { rerender } = render(<PortugueseLoading />);

    expect(screen.getByText('Carregando conteúdo…')).toHaveClass('sr-only');
    expect(screen.getByRole('main')).toHaveAttribute('aria-busy', 'true');
    expect(document.querySelector('.route-loading__mark')).toHaveAttribute('aria-hidden', 'true');

    rerender(<EnglishLoading />);
    expect(screen.getByText('Loading content…')).toHaveClass('sr-only');
  });

  it('renders the Portuguese 404 with one explicit recovery action', () => {
    render(<PortugueseNotFound />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'Não encontramos esta página.' })).toBeInTheDocument();
    expect(screen.getByText('O endereço pode ter mudado ou esta página pode não existir mais.')).toBeInTheDocument();
    const portfolioLink = screen.getByRole('link', { name: 'Portfólio' });
    expect(portfolioLink).toHaveAttribute('href', '/');
    expect(portfolioLink.querySelector('[data-icon="arrow-left"]')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.queryByText(/Ir para o portfólio|Voltar ao portfólio/i)).not.toBeInTheDocument();
    expect(screen.getAllByRole('banner')).toHaveLength(1);
  });

  it('renders the English 404 with the correct locale recovery path', () => {
    render(<EnglishNotFound />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: "We couldn't find this page." })).toBeInTheDocument();
    expect(screen.getByText('The address may have changed, or this page may no longer exist.')).toBeInTheDocument();
    const portfolioLink = screen.getByRole('link', { name: 'Portfolio' });
    expect(portfolioLink).toHaveAttribute('href', '/en');
    expect(portfolioLink.querySelector('[data-icon="arrow-left"]')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.queryByText(/Go to portfolio|Back to portfolio/i)).not.toBeInTheDocument();
    expect(screen.getAllByRole('banner')).toHaveLength(1);
  });

  it('uses native notFound routes and disables loading motion when requested', () => {
    const portugueseCatchAll = readFileSync(resolve(process.cwd(), 'src/app/(pt-BR)/[...notFound]/page.tsx'), 'utf8');
    const englishCatchAll = readFileSync(resolve(process.cwd(), 'src/app/(en)/(with-footer)/en/[...notFound]/page.tsx'), 'utf8');
    const css = readFileSync(resolve(process.cwd(), 'src/app/globals.css'), 'utf8');

    expect(portugueseCatchAll).toContain('notFound();');
    expect(englishCatchAll).toContain('notFound();');
    expect(css).toMatch(/@media \(prefers-reduced-motion: reduce\)[\s\S]*\.route-loading__mark\s*{\s*animation: none;/);
  });
});
