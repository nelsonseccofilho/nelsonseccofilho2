import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { projectFacts } from '@/content/project-facts';

const { notFoundMock } = vi.hoisted(() => ({
  notFoundMock: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND');
  }),
}));

vi.mock('next/navigation', () => ({
  notFound: notFoundMock,
}));

vi.mock('next-themes', () => ({
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
    expect(() => getProjectMetadata('invalid-project')).toThrow('NEXT_NOT_FOUND');
    expect(notFoundMock).toHaveBeenCalledOnce();
  });

  it('renders the same Horizon HIS identity with Portuguese route controls', () => {
    render(<ProjectPage locale="pt-BR" projectId="horizon-his" />);

    expect(screen.getByRole('heading', { level: 1, name: /transformando uma vis[aã]o complexa de his/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('href', '/projetos/horizon-his');
    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Inglês' })).toHaveAttribute('href', '/en/projects/horizon-his');
    expect(screen.getByRole('navigation', { name: 'Navegação do estudo de caso' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '← Voltar aos projetos' })).toHaveAttribute('href', '/');
  });
});