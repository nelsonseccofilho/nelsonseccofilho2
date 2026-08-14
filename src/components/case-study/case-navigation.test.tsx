import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { ProjectRouteId } from '@/content/i18n/types';
import { CaseNavigation } from './case-navigation';

const trackEventMock = vi.hoisted(() => vi.fn());

vi.mock('@/components/analytics/analytics-provider', () => ({
  useAnalytics: () => ({ trackEvent: trackEventMock }),
}));

beforeEach(() => trackEventMock.mockClear());
afterEach(cleanup);

describe('CaseNavigation', () => {
  it.each([
    ['horizon-his', 'SUBITER', '/en/projects/subiter', 'project_open:subiter:case-navigation'],
    ['subiter', 'REDE DCC 1.0', '/en/projects/rede-dcc', 'project_open:rede-dcc:case-navigation'],
    ['rede-dcc', 'DASA — Canal do Consultor', '/en/projects/dasa-canal-do-consultor', 'project_open:dasa-canal-do-consultor:case-navigation'],
  ] as const)('continues from %s to the next project', (projectId, nextProjectName, nextHref, eventName) => {
    render(<CaseNavigation locale="en" projectId={projectId} />);

    const navigation = screen.getByRole('navigation', { name: 'Case study navigation' });
    expect(within(navigation).getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', '/en');
    const nextProjectLink = within(navigation).getByRole('link', { name: new RegExp(`Next project.*${nextProjectName}`, 'i') });
    expect(nextProjectLink).toHaveAttribute('href', nextHref);
    fireEvent.click(nextProjectLink);
    expect(trackEventMock).toHaveBeenCalledOnce();
    expect(trackEventMock).toHaveBeenCalledWith(eventName);
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
    expect(trackEventMock).not.toHaveBeenCalled();
  });
});
