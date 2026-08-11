import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { projectRouteIds } from '@/components/case-study/project-page';
import { portfolioMetaCaseContent } from '@/content/i18n/meta-case';
import { getLocalizedPath } from '@/i18n/routes';
import { PortfolioMetaCasePage } from './portfolio-meta-case-page';

vi.mock('@/components/theme/theme-provider', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

afterEach(cleanup);

describe('PortfolioMetaCasePage', () => {
  it('renders the authored Portuguese meta-case with verified production evidence', () => {
    render(<PortfolioMetaCasePage locale="pt-BR" />);

    expect(screen.getByRole('heading', { level: 1, name: 'Construindo este portfólio' })).toBeInTheDocument();
    expect(screen.getByText('Product Design × Engineering × AI-assisted development')).toBeInTheDocument();
    expect(screen.getByText(/o arquivo .nvmrc passou a declarar node 22 no commit 588996f/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ver repositório no GitHub ↗' })).toHaveAttribute('href', 'https://github.com/nelsonseccofilho/nelsonseccofilho2');
    expect(screen.getByText(/referências publicadas pela Nielsen Norman Group \(NN\/g\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Microsoft Clarity como camada de observação comportamental/i)).toHaveTextContent(/analytics condicionado à escolha do visitante/i);
    expect(screen.getByText(/observação comportamental → refinamento/i)).toBeInTheDocument();
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
    expect(within(aiOperations!).getByText(/57 commits · 4 dias de atividade · ~22h de trabalho identificável/i)).toBeInTheDocument();
    expect(within(aiOperations!).getByText(/atividade Git entre 7 e 10 de agosto de 2026/i)).toHaveTextContent(/implementação, refinamento e validação/i);
    expect(within(aiOperations!).getByText(/não representa o esforço intelectual total do projeto/i)).toHaveTextContent(/fase futura de imagem\/art direction definida na D-022/i);
    expect(screen.getByRole('heading', { level: 2, name: 'Custo operacional do experimento' })).toBeInTheDocument();
    expect(screen.getByText(/Hospedagem: Netlify, no ambiente atual de produção\./i)).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: 'Evidência visual em reconstrução' })).toHaveLength(2);
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /figma/i })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Portfólio' })).toHaveAttribute('href', '/');
  });

  it('renders semantic English parity and keeps the meta-case outside client continuity', () => {
    render(<PortfolioMetaCasePage locale="en" />);

    expect(screen.getByRole('heading', { level: 1, name: 'Building this portfolio' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'From localhost to production' })).toBeInTheDocument();
    expect(screen.getByText(/research published by Nielsen Norman Group \(NN\/g\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Microsoft Clarity became a behavioral-observation layer/i)).toHaveTextContent(/analytics remains conditional on the visitor’s choice/i);
    expect(screen.getByText(/behavioral observation → refinement/i)).toBeInTheDocument();
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
    expect(within(aiOperations!).getByText(/57 commits · 4 days of activity · ~22 hours of identifiable work/i)).toBeInTheDocument();
    expect(within(aiOperations!).getByText(/Git activity between August 7–10, 2026/i)).toHaveTextContent(/implementation, refinement, and validation/i);
    expect(within(aiOperations!).getByText(/not a claim for the project’s total intellectual effort/i)).toHaveTextContent(/future imagery\/art-direction phase defined in D-022/i);
    expect(within(aiOperations!).getByText(/responsibility for deciding what to do.*remains human/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Operational cost of the experiment' })).toBeInTheDocument();
    expect(screen.getByText(/Hosting: Netlify, for the current production environment\./i)).toBeInTheDocument();
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

  it('keeps the AI product and point-in-time capacity facts precise', () => {
    const publishedCopy = JSON.stringify(portfolioMetaCaseContent);

    expect(publishedCopy).not.toMatch(/GitHub Pro(?!\+)/);
    expect(publishedCopy).not.toMatch(/GitHub Copilot Pro(?!\+)/);
    expect(publishedCopy).toMatch(/Hospedagem: Netlify, no ambiente atual de produção\.|Hosting: Netlify, for the current production environment\./);
    expect(publishedCopy).not.toMatch(/US\$ 0|USD 0|USD 10|USD 29|USD 59|OPENAI|GITHUB INC/i);
    expect(publishedCopy).toMatch(/57 commits · 4 dias de atividade · ~22h de trabalho identificável\.|57 commits · 4 days of activity · ~22 hours of identifiable work\./);
    expect(publishedCopy).toMatch(/atividade Git entre 7 e 10 de agosto de 2026|Git activity between August 7–10, 2026/);
  });
});
