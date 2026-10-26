import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { projectFacts } from '@/content/project-facts';
import { aiAssistedDesignEngineeringCaseContent } from '@/content/i18n/projects/ai-assisted-design-engineering';
import { getWhatsAppContactUrl } from '@/content/contact';

const { notFoundMock, trackEventMock } = vi.hoisted(() => ({
  trackEventMock: vi.fn(),
  notFoundMock: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND');
  }),
}));

vi.mock('@/components/analytics/analytics-provider', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/components/analytics/analytics-provider')>();
  return { ...actual, useAnalytics: () => ({ trackEvent: trackEventMock }) };
});

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
  vi.restoreAllMocks();
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
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
  it('preserves both public routes and localized metadata', async () => {
    const project = 'ai-assisted-design-engineering';
    expect(isProjectRouteId(project)).toBe(true);
    expect(portugueseProjectParams()).toContainEqual({ project });
    expect(englishProjectParams()).toContainEqual({ project });
    for (const locale of ['pt-BR', 'en'] as const) {
      const metadata = getProjectMetadata(project, locale);
      expect(metadata.title).toMatch(/AI-Assisted Design Engineering Operating System/);
      expect(metadata.description).toBe(aiAssistedDesignEngineeringCaseContent[locale].metadata.description);
      const publicPath = locale === 'pt-BR' ? '/projetos/ai-assisted-design-engineering' : '/en/projects/ai-assisted-design-engineering';
      expect(metadata.alternates?.canonical).toBe('https://nelsonsecco.netlify.app' + publicPath);
      expect(metadata.alternates?.languages).toHaveProperty('pt-BR');
      expect(metadata.alternates?.languages).toHaveProperty('en');
      expect(metadata.openGraph).toMatchObject({ title: metadata.title, description: metadata.description, url: 'https://nelsonsecco.netlify.app' + publicPath });
      expect(metadata.twitter).toMatchObject({ card: 'summary', title: metadata.title, description: metadata.description });
    }
    expect(await portugueseProjectMetadata({ params: Promise.resolve({ project }) })).toEqual(getProjectMetadata(project, 'pt-BR'));
    expect(await englishProjectMetadata({ params: Promise.resolve({ project }) })).toEqual(getProjectMetadata(project, 'en'));
  });

  it.each(['pt-BR', 'en'] as const)('presents authorship, the editorial sequence and evidence limits in %s', (locale) => {
    const content = aiAssistedDesignEngineeringCaseContent[locale];
    render(<ProjectPage locale={locale} projectId="ai-assisted-design-engineering" />);
    const main = screen.getByRole('main');
    expect(within(main).getByRole('heading', { level: 1, name: content.hero.title })).toBeInTheDocument();
    expect(within(main).getAllByRole('heading', { level: 2 }).map((h) => h.textContent)).toEqual([
      ...Object.values(content.sections).map((section) => section.title), content.cta.title,
    ]);
    for (const section of Object.values(content.sections)) {
      expect(within(screen.getByRole('region', { name: section.title })).getByText(section.intro)).toBeInTheDocument();
    }
    for (const copy of [content.hero.context, content.hero.consultingContext, content.sections.application.boundary,
      content.sections.publicFramework.limitation, content.sections.publicFramework.evidenceBoundary]) {
      expect(within(main).getByText(copy)).toBeVisible();
    }
    const architecture = screen.getByRole('region', { name: content.sections.architecture.title });
    for (const layer of content.sections.architecture.layers) expect(within(architecture).getByText(layer.description)).toBeVisible();
    for (const source of content.sections.architecture.sources) expect(within(architecture).getByText(source.description)).toBeVisible();
    for (const result of content.sections.outcomes.results) expect(within(main).getByText(result.description)).toBeVisible();
    expect(main.innerHTML).not.toMatch(/source-exports|figma\.com/i);
    expect(main.textContent).not.toMatch(/\d+\s*%/);
  });

  it.each(['pt-BR', 'en'] as const)('preserves locale links, consulting behavior, analytics and return navigation in %s', (locale) => {
    const content = aiAssistedDesignEngineeringCaseContent[locale];
    render(<ProjectPage locale={locale} projectId="ai-assisted-design-engineering" />);
    expect(screen.getByRole('link', { name: locale === 'pt-BR' ? 'Português' : 'Portuguese' })).toHaveAttribute('href', '/projetos/ai-assisted-design-engineering');
    expect(screen.getByRole('link', { name: locale === 'pt-BR' ? 'Inglês' : 'English' })).toHaveAttribute('href', '/en/projects/ai-assisted-design-engineering');
    const consulting = screen.getByRole('link', { name: content.cta.consultingLabel });
    expect(consulting).toHaveAttribute('href', getWhatsAppContactUrl(locale, 'ai-consulting'));
    expect(consulting).toHaveAttribute('target', '_blank');
    expect(consulting).toHaveAttribute('rel', 'noreferrer');
    expect(consulting).toHaveAttribute('data-clarity-mask', 'true');
    expect(consulting).toHaveClass('whatsapp-action');
    fireEvent.click(consulting);
    expect(trackEventMock).toHaveBeenLastCalledWith('contact_whatsapp_click:ai-consulting');
    expect(screen.getByRole('link', { name: content.cta.githubLabel })).toHaveAttribute('href', projectFacts['ai-assisted-design-engineering'].externalUrls.repository);
    const returnLinks = within(screen.getByRole('main')).getAllByRole('link', { name: locale === 'pt-BR' ? 'Portfólio' : 'Portfolio' });
    expect(returnLinks).toHaveLength(2);
    for (const link of returnLinks) expect(link).toHaveAttribute('href', locale === 'pt-BR' ? '/' : '/en');
  });

  it.each(['pt-BR', 'en'] as const)('keeps technical examples in native disclosures and historical evidence qualified in %s', (locale) => {
    const content = aiAssistedDesignEngineeringCaseContent[locale];
    render(<ProjectPage locale={locale} projectId="ai-assisted-design-engineering" />);
    for (const summary of Object.values(content.details)) {
      const disclosure = screen.getByText(summary).closest('details');
      expect(disclosure).not.toHaveAttribute('open');
      expect(disclosure?.querySelector('summary')).toHaveTextContent(summary);
    }
    const workflow = screen.getByText(content.details.workflow).closest('details')!;
    const lists = workflow.querySelectorAll('ol');
    expect(lists).toHaveLength(4);
    content.diagramLabels.workflowPhases.forEach((phase, index) => {
      expect(lists[index]).toHaveAccessibleName(phase);
      expect(Array.from(lists[index].children).map((li) => li.textContent)).toEqual(content.sections.application.steps.slice(index * 3, index * 3 + 3));
    });
    const history = screen.getByText(content.details.history).closest('details')!;
    expect(history.querySelectorAll('picture')).toHaveLength(4);
    for (const [family, filename] of [
      ['ingestion', 'github-evidence-ingestion'], ['runtime', 'github-runtime-tree'],
      ['readme', 'github-readme'], ['commit', 'github-commit-291015'],
    ] as const) {
      const item = content.evidence.items[family];
      const img = within(history).getByAltText(item.alt);
      const prefix = '/assets/projects/ai-assisted-design-engineering/evidence/' + filename;
      expect(img).toHaveAttribute('src', prefix + '-1920.webp');
      expect(img).toHaveAttribute('width', '1920');
      for (const width of [640, 1024, 1440, 1920]) expect(img.getAttribute('srcset')).toContain(prefix + '-' + width + '.webp ' + width + 'w');
      expect(img.closest('picture')?.querySelector('source')).toHaveAttribute('media', '(max-width: 767px)');
      expect(within(history).getByText(item.establishes)).toBeInTheDocument();
      expect(within(history).getByText(item.doesNotEstablish)).toBeInTheDocument();
    }
  });

  it.each([['pt-BR', 'Voltar ao topo'], ['en', 'Back to top']] as const)('provides a working back-to-top action in %s', (locale, label) => {
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    render(<ProjectPage locale={locale} projectId="ai-assisted-design-engineering" />);
    expect(screen.queryByRole('button', { name: label })).not.toBeInTheDocument();
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 600 });
    fireEvent.scroll(window);
    fireEvent.click(screen.getByRole('button', { name: label }));
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
