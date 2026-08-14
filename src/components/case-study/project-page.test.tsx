import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { projectFacts } from '@/content/project-facts';

const { notFoundMock } = vi.hoisted(() => ({
  notFoundMock: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND');
  }),
}));

vi.mock('next/navigation', () => ({
  notFound: notFoundMock,
  usePathname: () => '/',
}));

vi.mock('@/components/theme/theme-provider', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

import { getProjectMetadata, ProjectPage, projectRouteIds } from './project-page';

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe('localized project page registry', () => {
  it('keeps route IDs aligned with ProjectFactsMap', () => {
    expect(projectRouteIds).toEqual(Object.keys(projectFacts));
  });

  it('rejects invalid project IDs', () => {
    expect(() => getProjectMetadata('invalid-project', 'en')).toThrow('NEXT_NOT_FOUND');
    expect(notFoundMock).toHaveBeenCalledOnce();
  });

  it('renders the same Horizon HIS identity with Portuguese route controls', () => {
    render(<ProjectPage locale="pt-BR" projectId="horizon-his" />);

    expect(screen.getByRole('heading', { level: 1, name: /transformando uma vis[aã]o complexa de his/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('href', '/projetos/horizon-his');
    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Inglês' })).toHaveAttribute('href', '/en/projects/horizon-his');
    const caseNavigation = screen.getByRole('navigation', { name: 'Navegação do estudo de caso' });
    expect(within(caseNavigation).getByRole('link', { name: 'Portfólio' })).toHaveAttribute('href', '/');
  });

  it('returns locale-specific case metadata', () => {
    expect(getProjectMetadata('horizon-his', 'pt-BR').title).toMatch(/Case de Product Design/);
    expect(getProjectMetadata('horizon-his', 'en').title).toMatch(/Product Design Case Study/);
    expect(getProjectMetadata('dasa-canal-do-consultor', 'pt-BR').description).toMatch(/pesquisa em saúde/);
    expect(getProjectMetadata('dasa-canal-do-consultor', 'en').description).toMatch(/healthcare consultation research/);
  });

  it.each(projectRouteIds)('uses the shared collection link without artificial hierarchy for %s', (projectId) => {
    render(<ProjectPage locale="en" projectId={projectId} />);

    const collectionNavigation = screen.getByRole('navigation', { name: 'Portfolio navigation' });
    expect(within(collectionNavigation).getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', '/en');
    expect(within(collectionNavigation).queryByRole('list')).not.toBeInTheDocument();
    expect(collectionNavigation.querySelector('[aria-current]')).not.toBeInTheDocument();
    expect(within(collectionNavigation).queryByText(projectFacts[projectId].projectName)).not.toBeInTheDocument();
  });
});
