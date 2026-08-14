import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { projectRouteIds } from '@/components/case-study/project-page';
import { portfolioMetaCaseContent } from '@/content/i18n/meta-case';
import { getLocalizedPath } from '@/i18n/routes';
import { PortfolioMetaCasePage } from './portfolio-meta-case-page';

const trackEventMock = vi.hoisted(() => vi.fn());

vi.mock('@/components/analytics/analytics-provider', () => ({
  useAnalytics: () => ({ trackEvent: trackEventMock }),
}));

vi.mock('@/components/theme/theme-provider', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

afterEach(() => {
  cleanup();
  trackEventMock.mockClear();
});

describe('PortfolioMetaCasePage', () => {
  it('renders the authored Portuguese meta-case with verified production evidence', () => {
    render(<PortfolioMetaCasePage locale="pt-BR" />);

    expect(screen.getByRole('heading', { level: 1, name: 'Construindo este portfólio' })).toBeInTheDocument();
    expect(screen.getByText('Product Design × Engineering × AI-assisted development')).toBeInTheDocument();
    const hero = screen.getByRole('region', { name: 'Construindo este portfólio' });
    const executiveEntry = screen.getByRole('heading', { level: 2, name: 'Em resumo' }).closest('section');
    const firstDetailedSection = screen.getByRole('heading', { level: 2, name: 'Por que reconstruir o portfólio' }).closest('section');
    expect(executiveEntry).not.toBeNull();
    expect(Array.from(executiveEntry!.querySelectorAll('dt')).map((term) => term.textContent)).toEqual([
      'Problema',
      'Hipótese',
      'Abordagem',
      'Evidência',
      'Resultado',
    ]);
    expect(Array.from(executiveEntry!.querySelectorAll('dd')).map((definition) => definition.textContent)).toEqual(
      portfolioMetaCaseContent['pt-BR'].executiveEntry.items.map((item) => item.description),
    );
    expect(hero.compareDocumentPosition(executiveEntry!) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(executiveEntry!.compareDocumentPosition(firstDetailedSection!) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(screen.getByText(/o arquivo .nvmrc passou a declarar node 22 no commit 588996f/i)).toBeInTheDocument();
    const repositoryLink = screen.getByRole('link', { name: 'Ver repositório no GitHub ↗' });
    expect(repositoryLink).toHaveAttribute('href', 'https://github.com/nelsonseccofilho/nelsonseccofilho2');
    expect(repositoryLink).toHaveClass('text-link', 'text-link--hit-area');
    repositoryLink.click();
    expect(trackEventMock).toHaveBeenCalledOnce();
    expect(trackEventMock).toHaveBeenCalledWith('github_click:meta-case-repository');
    expect(trackEventMock).not.toHaveBeenCalledWith('github_repository_click');
    expect(screen.getByText(/referências publicadas pela Nielsen Norman Group \(NN\/g\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Microsoft Clarity como camada de observação comportamental/i)).toHaveTextContent(/analytics condicionado à escolha do visitante/i);
    expect(screen.getByText(/observação comportamental → refinamento/i)).toBeInTheDocument();
    expect(screen.getByText(/ordem dos projetos/i)).toBeInTheDocument();
    expect(screen.getByText(/link contextual “← Portfólio”/i)).toBeInTheDocument();
    const aiCollaboration = screen.getByRole('heading', { level: 2, name: 'Colaboração assistida por IA' }).closest('section');
    const aiOperations = screen.getByRole('heading', { level: 2, name: 'Operando o workflow de IA' }).closest('section');
    expect(aiCollaboration).not.toBeNull();
    expect(aiOperations).not.toBeNull();
    expect(within(aiCollaboration!).getByText(/ChatGPT para discutir problemas/i)).toBeInTheDocument();
    expect(within(aiCollaboration!).getByText(/Codex no VS Code para trabalhar diretamente sobre o repositório/i)).toBeInTheDocument();
    expect(within(aiCollaboration!).getByText(/GitHub Copilot Pro\+ como outra camada de assistência/i)).toBeInTheDocument();
    expect(within(aiCollaboration!).getByText(/aprovação final continuaram sob minha responsabilidade/i)).toBeInTheDocument();
    expect(within(aiOperations!).getByText(/Configurei ChatGPT Plus, VS Code, Codex, Git, GitHub e GitHub Copilot Pro\+/i)).toBeInTheDocument();
    expect(within(aiOperations!).getByText(/A escolha do agente e do nível de capacidade também fez parte da operação do projeto/i)).toBeInTheDocument();
    expect(within(aiOperations!).getByText(/Snapshot v1\.0 — histórico Git observado entre 7 e 11 de agosto de 2026; horas estimadas até 10 de agosto de 2026/i)).toHaveTextContent(/70 commits · 5 dias de atividade · ~22h de trabalho identificável até 10 de agosto/i);
    expect(within(aiOperations!).getByText(/histórico Git entre 7 e 11 de agosto de 2026/i)).toHaveTextContent(/estimativa de horas permanece limitada.*10 de agosto/i);
    expect(within(aiOperations!).getByText(/não representa o esforço intelectual total do projeto/i)).toHaveTextContent(/trabalho de imagem\/art direction definido na D-022/i);
    expect(screen.getByRole('heading', { level: 2, name: 'Custo operacional do experimento' })).toBeInTheDocument();
    expect(screen.getByText(/Hospedagem: Netlify, no ambiente atual de produção\./i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /workspace com vs code, localhost, terminal e colaboração assistida por ia/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /documento de decisões do projeto usado como referência de convenções e governança técnica/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /evidência de qa e validação responsiva usada para revisar ux, acessibilidade e qualidade técnica/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /figma/i })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Portfólio' })).toHaveAttribute('href', '/');
  });

  it('renders semantic English parity and keeps the meta-case outside client continuity', () => {
    render(<PortfolioMetaCasePage locale="en" />);

    expect(screen.getByRole('heading', { level: 1, name: 'Building this portfolio' })).toBeInTheDocument();
    const hero = screen.getByRole('region', { name: 'Building this portfolio' });
    const executiveEntry = screen.getByRole('heading', { level: 2, name: 'At a glance' }).closest('section');
    const firstDetailedSection = screen.getByRole('heading', { level: 2, name: 'Why rebuild the portfolio' }).closest('section');
    expect(executiveEntry).not.toBeNull();
    expect(Array.from(executiveEntry!.querySelectorAll('dt')).map((term) => term.textContent)).toEqual([
      'Problem',
      'Hypothesis',
      'Approach',
      'Evidence',
      'Result',
    ]);
    expect(Array.from(executiveEntry!.querySelectorAll('dd')).map((definition) => definition.textContent)).toEqual(
      portfolioMetaCaseContent.en.executiveEntry.items.map((item) => item.description),
    );
    expect(hero.compareDocumentPosition(executiveEntry!) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(executiveEntry!.compareDocumentPosition(firstDetailedSection!) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(screen.getByRole('heading', { level: 2, name: 'From localhost to production' })).toBeInTheDocument();
    expect(screen.getByText(/research published by Nielsen Norman Group \(NN\/g\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Microsoft Clarity became a behavioral-observation layer/i)).toHaveTextContent(/analytics remains conditional on the visitor’s choice/i);
    expect(screen.getByText(/behavioral observation → refinement/i)).toBeInTheDocument();
    expect(screen.getByText(/project ordering/i)).toBeInTheDocument();
    expect(screen.getByText(/contextual “← Portfolio” link/i)).toBeInTheDocument();
    const aiCollaboration = screen.getByRole('heading', { level: 2, name: 'AI-assisted collaboration' }).closest('section');
    const aiOperations = screen.getByRole('heading', { level: 2, name: 'Operating the AI-assisted workflow' }).closest('section');
    expect(aiCollaboration).not.toBeNull();
    expect(aiOperations).not.toBeNull();
    expect(within(aiCollaboration!).getByText(/ChatGPT to discuss problems/i)).toBeInTheDocument();
    expect(within(aiCollaboration!).getByText(/Codex in VS Code to work directly on the repository/i)).toBeInTheDocument();
    expect(within(aiCollaboration!).getByText(/GitHub Copilot Pro\+ as another assistance layer/i)).toBeInTheDocument();
    expect(within(aiCollaboration!).getByText(/final approval remained my responsibility/i)).toBeInTheDocument();
    expect(within(aiOperations!).getByText(/configured ChatGPT Plus, VS Code, Codex, Git, GitHub, and GitHub Copilot Pro\+/i)).toBeInTheDocument();
    expect(within(aiOperations!).getByText(/Choosing the agent and capability level also became part of the project operation/i)).toBeInTheDocument();
    expect(within(aiOperations!).getByText(/Snapshot v1\.0 — Git history observed August 7–11, 2026; hours estimated through August 10, 2026/i)).toHaveTextContent(/70 commits · 5 days of activity · ~22 hours of identifiable work through August 10/i);
    expect(within(aiOperations!).getByText(/Git history covering August 7 through 11, 2026/i)).toHaveTextContent(/hours estimate remains limited.*August 10/i);
    expect(within(aiOperations!).getByText(/not a claim for the project’s total intellectual effort/i)).toHaveTextContent(/imagery\/art-direction work defined in D-022/i);
    expect(within(aiOperations!).getByText(/responsibility for deciding what to do.*remains human/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /workspace evidence with vs code, localhost, terminal, and ai-assisted collaboration/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /project decision log evidence used as a source for conventions and implementation governance/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Operational cost of the experiment' })).toBeInTheDocument();
    expect(screen.getByText(/Hosting: Netlify, for the current production environment\./i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View repository on GitHub ↗' })).toHaveClass('text-link', 'text-link--hit-area');
    expect(screen.getByRole('link', { name: 'View repository on GitHub ↗' })).toHaveAttribute('href', 'https://github.com/nelsonseccofilho/nelsonseccofilho2');
    expect(screen.getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', '/en');
    expect(screen.queryByText(/Go to portfolio|Back to portfolio/i)).not.toBeInTheDocument();
    expect(projectRouteIds).not.toContain('building-portfolio');
  });

  it('publishes localized metadata and typed route equivalents', () => {
    expect(portfolioMetaCaseContent['pt-BR'].metadata.title).toBe('Construindo este portfólio | Nelson Secco');
    expect(portfolioMetaCaseContent.en.metadata.title).toBe('Building this portfolio | Nelson Secco');
    expect(getLocalizedPath('building-portfolio', 'pt-BR')).toBe('/construindo-este-portfolio');
    expect(getLocalizedPath('building-portfolio', 'en')).toBe('/en/building-this-portfolio');
  });

  it('keeps the five-dimension executive entry structurally equivalent without changing detailed sections', () => {
    const portugueseEntry = portfolioMetaCaseContent['pt-BR'].executiveEntry;
    const englishEntry = portfolioMetaCaseContent.en.executiveEntry;

    expect(portugueseEntry.items).toHaveLength(5);
    expect(englishEntry.items).toHaveLength(5);
    expect(portugueseEntry.items.map((item) => Object.keys(item))).toEqual(
      englishEntry.items.map((item) => Object.keys(item)),
    );
    expect(portfolioMetaCaseContent['pt-BR'].sections).toHaveLength(12);
    expect(portfolioMetaCaseContent.en.sections).toHaveLength(12);
    expect(portfolioMetaCaseContent['pt-BR'].sections.map((section) => section.id)).toEqual(
      portfolioMetaCaseContent.en.sections.map((section) => section.id),
    );
  });

  it('keeps the AI product and point-in-time capacity facts precise', () => {
    const publishedCopy = JSON.stringify(portfolioMetaCaseContent);

    expect(publishedCopy).not.toMatch(/GitHub Pro(?!\+)/);
    expect(publishedCopy).not.toMatch(/GitHub Copilot Pro(?!\+)/);
    expect(publishedCopy).toMatch(/Hospedagem: Netlify, no ambiente atual de produção\.|Hosting: Netlify, for the current production environment\./);
    expect(publishedCopy).not.toMatch(/US\$ 0|USD 0|USD 10|USD 29|USD 59|OPENAI|GITHUB INC/i);
    expect(publishedCopy).toMatch(/Snapshot v1\.0 — histórico Git observado entre 7 e 11 de agosto de 2026; horas estimadas até 10 de agosto de 2026\.|Snapshot v1\.0 — Git history observed August 7–11, 2026; hours estimated through August 10, 2026\./);
    expect(publishedCopy).toMatch(/70 commits · 5 dias de atividade · ~22h de trabalho identificável até 10 de agosto\.|70 commits · 5 days of activity · ~22 hours of identifiable work through August 10\./);
    expect(publishedCopy).toMatch(/histórico Git entre 7 e 11 de agosto de 2026|Git history covering August 7 through 11, 2026/);
  });
});
