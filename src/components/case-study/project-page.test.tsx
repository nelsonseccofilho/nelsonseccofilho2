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

import { getProjectMetadata, isProjectRouteId, ProjectPage, projectRouteIds } from './project-page';
import { generateStaticParams as portugueseProjectParams, generateMetadata as portugueseProjectMetadata } from '@/app/(pt-BR)/(with-footer)/projetos/[project]/page';
import { generateStaticParams as englishProjectParams, generateMetadata as englishProjectMetadata } from '@/app/(en)/(with-footer)/en/projects/[project]/page';

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


describe('AI-assisted Design Engineering registry integration', () => {
  it('registers the new case in both existing dynamic route generators', async () => {
    const project = 'ai-assisted-design-engineering';
    expect(isProjectRouteId(project)).toBe(true);
    expect(projectRouteIds).toContain(project);
    expect(portugueseProjectParams()).toContainEqual({ project });
    expect(englishProjectParams()).toContainEqual({ project });
    expect(await portugueseProjectMetadata({ params: Promise.resolve({ project }) })).toEqual(getProjectMetadata(project, 'pt-BR'));
    expect(await englishProjectMetadata({ params: Promise.resolve({ project }) })).toEqual(getProjectMetadata(project, 'en'));
  });

  it.each([
    ['pt-BR', 'Sessões de IA são temporárias. O trabalho de produto não é.', 'Português', 'Inglês'],
    ['en', 'AI sessions are temporary. Product work isn’t.', 'Portuguese', 'English'],
  ] as const)('renders the minimal %s case with equivalent locale links', (locale, thesis, portugueseLabel, englishLabel) => {
    render(<ProjectPage locale={locale} projectId="ai-assisted-design-engineering" />);
    expect(screen.getByRole('heading', { level: 1, name: 'AI-Assisted Design Engineering Operating System' })).toBeInTheDocument();
    expect(screen.getByText(thesis)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: portugueseLabel })).toHaveAttribute('href', '/projetos/ai-assisted-design-engineering');
    expect(screen.getByRole('link', { name: englishLabel })).toHaveAttribute('href', '/en/projects/ai-assisted-design-engineering');
    expect(getProjectMetadata('ai-assisted-design-engineering', locale).title).toMatch(/AI-Assisted Design Engineering Operating System/);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
