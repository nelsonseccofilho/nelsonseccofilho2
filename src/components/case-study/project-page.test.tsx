import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { projectFacts } from '@/content/project-facts';
import { aiAssistedDesignEngineeringCaseContent } from '@/content/i18n/projects/ai-assisted-design-engineering';

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
  ] as const)('renders the structured %s case with equivalent locale links', (locale, thesis, portugueseLabel, englishLabel) => {
    render(<ProjectPage locale={locale} projectId="ai-assisted-design-engineering" />);
    expect(screen.getByRole('heading', { level: 1, name: thesis })).toBeInTheDocument();
    expect(screen.getByText(thesis)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: portugueseLabel })).toHaveAttribute('href', '/projetos/ai-assisted-design-engineering');
    expect(screen.getByRole('link', { name: englishLabel })).toHaveAttribute('href', '/en/projects/ai-assisted-design-engineering');
    expect(getProjectMetadata('ai-assisted-design-engineering', locale).title).toMatch(/AI-Assisted Design Engineering Operating System/);
    expect(screen.getAllByRole('img')).toHaveLength(4);
  });

  it.each(['pt-BR', 'en'] as const)('preserves the approved narrative order, CTAs and both navigation mechanisms in %s', (locale) => {
    const content = aiAssistedDesignEngineeringCaseContent[locale];
    render(<ProjectPage locale={locale} projectId="ai-assisted-design-engineering" />);
    const main = screen.getByRole('main');
    expect(within(main).getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(within(main).getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent)).toEqual([
      ...Object.values(content.sections).map((section) => section.title),
      content.cta.title,
    ]);
    for (const section of Object.values(content.sections)) {
      const region = within(main).getByRole('region', { name: section.title });
      expect(within(region).getByText(section.intro)).toBeInTheDocument();
    }
    for (const key of ['workflow', 'artifactWork'] as const) {
      const section = content.sections[key];
      const region = within(main).getByRole('region', { name: section.title });
      const lists = within(region).getAllByRole('list');
      for (const list of lists) expect(list.tagName).toBe('OL');
      const nodes = section.steps.map((step) => within(region).getByText(step));
      for (let index = 1; index < nodes.length; index += 1) {
        expect(nodes[index - 1].compareDocumentPosition(nodes[index]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
      }
    }
    expect(within(main).getByText(content.hero.context)).toBeInTheDocument();
    expect(within(main).getByText(content.hero.consultingContext)).toBeInTheDocument();
    expect(within(main).getByRole('link', { name: content.cta.githubLabel })).toHaveAttribute('href', projectFacts['ai-assisted-design-engineering'].externalUrls.repository);
    expect(within(main).getByRole('link', { name: content.cta.consultingLabel })).toHaveAttribute('href', locale === 'pt-BR' ? '/#contact' : '/en#contact');
    const returnLabel = locale === 'pt-BR' ? 'Portfólio' : 'Portfolio';
    const returnLinks = within(main).getAllByRole('link', { name: returnLabel });
    expect(returnLinks).toHaveLength(2);
    for (const link of returnLinks) expect(link).toHaveAttribute('href', locale === 'pt-BR' ? '/' : '/en');
    expect(within(main).getAllByRole('navigation')).toHaveLength(2);
    expect(within(main).getAllByRole('img')).toHaveLength(4);
    expect(main.querySelectorAll('picture')).toHaveLength(4);
  });

  it.each(['pt-BR', 'en'] as const)('renders the four semantic system diagrams in %s', (locale) => {
    const content = aiAssistedDesignEngineeringCaseContent[locale];
    render(<ProjectPage locale={locale} projectId="ai-assisted-design-engineering" />);
    const workflow = screen.getByRole('region', { name: content.sections.workflow.title });
    const lists = within(workflow).getAllByRole('list');
    expect(lists).toHaveLength(4);
    content.diagramLabels.workflowPhases.forEach((phase, index) => {
      expect(within(workflow).getByText(phase)).toBeInTheDocument();
      expect(lists[index]).toHaveAccessibleName(phase);
      expect(within(lists[index]).getAllByRole('listitem').map((item) => item.textContent)).toEqual(content.sections.workflow.steps.slice(index * 3, index * 3 + 3));
    });
    const evidence = screen.getByRole('region', { name: content.sections.evidenceBeforeDesign.title });
    expect(within(evidence).getAllByRole('listitem')).toHaveLength(5);
    for (const text of [...content.diagramLabels.evidenceStates, ...content.sections.evidenceBeforeDesign.distinctions, content.sections.evidenceBeforeDesign.provenance]) {
      expect(within(evidence).getByText(text)).toBeInTheDocument();
    }
    const artifact = screen.getByRole('region', { name: content.sections.artifactWork.title });
    expect(within(artifact).getAllByRole('listitem')).toHaveLength(7);
    expect(within(artifact).getByText(content.diagramLabels.artifactReturn, { exact: false })).toBeInTheDocument();
    const trust = screen.getByRole('region', { name: content.sections.trustBoundaries.title });
    expect(within(trust).getAllByRole('term')).toHaveLength(3);
    expect(within(trust).getAllByRole('definition')).toHaveLength(3);
    for (const label of content.diagramLabels.trustLayers) expect(within(trust).getByText(label)).toBeInTheDocument();
    for (const layer of content.sections.trustBoundaries.layers) expect(within(trust).getByText(layer.description)).toBeInTheDocument();
    expect(within(trust).getByText(content.sections.trustBoundaries.publicationRule)).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(4);
    expect(document.querySelectorAll('picture')).toHaveLength(4);
  });

  it.each(['pt-BR', 'en'] as const)('places approved responsive public evidence next to its supporting claim in %s', (locale) => {
    const content = aiAssistedDesignEngineeringCaseContent[locale];
    render(<ProjectPage locale={locale} projectId="ai-assisted-design-engineering" />);
    const placements = [
      ['ingestion', 'evidenceBeforeDesign', 'github-evidence-ingestion'],
      ['runtime', 'runtime', 'github-runtime-tree'],
      ['readme', 'publicFramework', 'github-readme'],
      ['commit', 'versionedEvolution', 'github-commit-291015'],
    ] as const;
    for (const [family, sectionKey, filename] of placements) {
      const item = content.evidence.items[family];
      const region = screen.getByRole('region', { name: content.sections[sectionKey].title });
      expect(item.alt.trim()).not.toBe('');
      if (family === 'commit') {
        expect(within(region).getByText(item.establishes)).toHaveTextContent('2910154799ed28416475a359a9ea536599f38451');
      }
      const img = within(region).getByRole('img', { name: item.alt });
      const prefix = '/assets/projects/ai-assisted-design-engineering/evidence/' + filename;
      expect(img).toHaveAttribute('src', prefix + '-1920.webp');
      expect(img).toHaveAttribute('width', '1920');
      expect(img).toHaveAttribute('height', '1080');
      for (const width of [640, 1024, 1440, 1920]) expect(img.getAttribute('srcset')).toContain(prefix + '-' + width + '.webp ' + width + 'w');
      expect(img.getAttribute('sizes')).toBeTruthy();
      const source = img.closest('picture')?.querySelector('source');
      expect(source).toHaveAttribute('srcset', prefix + '-mobile-640.webp');
      expect(source).toHaveAttribute('media', '(max-width: 767px)');
      expect(source).toHaveAttribute('width', '640');
      expect(source).toHaveAttribute('height', '800');
      for (const text of [item.title, item.establishes, item.doesNotEstablish, content.evidence.establishesLabel, content.evidence.doesNotEstablishLabel]) expect(within(region).getByText(text)).toBeInTheDocument();
    }
    const main = screen.getByRole('main');
    expect(main.innerHTML).not.toMatch(/source-exports|\.png|figma\.com/i);
  });
});
