import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { CaseBreadcrumb } from './case-breadcrumb';

afterEach(cleanup);

describe('CaseBreadcrumb', () => {
  it('renders Portuguese hierarchy and keeps the current project non-interactive', () => {
    render(<CaseBreadcrumb locale="pt-BR" projectId="dasa-canal-do-consultor" />);

    const breadcrumb = screen.getByRole('navigation', { name: 'Navegação estrutural' });
    expect(within(breadcrumb).getByRole('link', { name: 'Projetos' })).toHaveAttribute('href', '/#cases');
    expect(within(breadcrumb).queryByText('Início')).not.toBeInTheDocument();
    expect(within(breadcrumb).getByText('DASA — Canal do Consultor')).toHaveAttribute('aria-current', 'page');
    expect(within(breadcrumb).queryByRole('link', { name: 'DASA — Canal do Consultor' })).not.toBeInTheDocument();
    expect(Array.from(breadcrumb.querySelectorAll('a')).every((link) => !link.getAttribute('href')?.startsWith('/en'))).toBe(true);
  });

  it('renders English hierarchy without Portuguese route leakage', () => {
    render(<CaseBreadcrumb locale="en" projectId="horizon-his" />);

    const breadcrumb = screen.getByRole('navigation', { name: 'Breadcrumb' });
    expect(within(breadcrumb).getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/en#cases');
    expect(within(breadcrumb).queryByText('Home')).not.toBeInTheDocument();
    expect(within(breadcrumb).getByText('HORIZON HIS')).toHaveAttribute('aria-current', 'page');
    expect(Array.from(breadcrumb.querySelectorAll('a')).every((link) => link.getAttribute('href')?.startsWith('/en'))).toBe(true);
  });
});
