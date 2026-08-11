import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import type { ProjectRouteId } from '@/content/i18n/types';
import { CaseNavigation } from './case-navigation';

afterEach(cleanup);

describe('CaseNavigation', () => {
  it.each([
    ['horizon-his', 'SUBITER', '/en/projects/subiter'],
    ['subiter', 'REDE DCC 1.0', '/en/projects/rede-dcc'],
    ['rede-dcc', 'DASA — Canal do Consultor', '/en/projects/dasa-canal-do-consultor'],
  ] as const)('continues from %s to the next project', (projectId, nextProjectName, nextHref) => {
    render(<CaseNavigation locale="en" projectId={projectId} />);

    const navigation = screen.getByRole('navigation', { name: 'Case study navigation' });
    expect(within(navigation).getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', '/en');
    expect(within(navigation).getByRole('link', { name: new RegExp(`Next project.*${nextProjectName}`, 'i') })).toHaveAttribute('href', nextHref);
  });

  it('preserves Portuguese routes and returns to the portfolio root', () => {
    render(<CaseNavigation locale="pt-BR" projectId="horizon-his" />);

    const navigation = screen.getByRole('navigation', { name: 'Navegação do estudo de caso' });
    expect(within(navigation).getByRole('link', { name: 'Portfólio' })).toHaveAttribute('href', '/');
    expect(within(navigation).getByRole('link', { name: /Próximo projeto.*SUBITER/i })).toHaveAttribute('href', '/projetos/subiter');
    expect(Array.from(navigation.querySelectorAll('a')).every((link) => !link.getAttribute('href')?.startsWith('/en'))).toBe(true);
  });

  it('does not invent a next project after DASA', () => {
    render(<CaseNavigation locale="en" projectId={'dasa-canal-do-consultor' satisfies ProjectRouteId} />);

    const navigation = screen.getByRole('navigation', { name: 'Case study navigation' });
    expect(within(navigation).getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', '/en');
    expect(within(navigation).queryByText(/Next project/i)).not.toBeInTheDocument();
    expect(within(navigation).getAllByRole('link')).toHaveLength(1);
  });
});
