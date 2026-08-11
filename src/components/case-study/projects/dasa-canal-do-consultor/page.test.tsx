import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { HomePage } from '@/components/home/home-page';
import DasaCanalDoConsultorPage from './page';

vi.mock('@/components/theme/theme-provider', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

describe('DasaCanalDoConsultorPage', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the English DASA discovery narrative with confidentiality-safe claims', async () => {
    render(<DasaCanalDoConsultorPage locale="en" />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: /translating healthcare discovery into a structured product decision system/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1, name: /traduzindo discovery em sa[uú]de/i })).not.toBeInTheDocument();

    const hero = screen.getByRole('region', { name: /translating healthcare discovery into a structured product decision system/i });
    expect(within(hero).getByText('Product Designer')).toBeInTheDocument();
    expect(within(hero).getByText('DASA')).toBeInTheDocument();
    expect(within(hero).getByText('Môre Talent Tech')).toBeInTheDocument();
    expect(within(hero).getByText('2022')).toBeInTheDocument();
    expect(within(hero).getByText('PM/PO · UX Researcher · Product Designer · Lead Developer')).toBeInTheDocument();
    expect(within(hero).getByText('Canal do Consultor / MV Soul / Feegow / Tasy')).toBeInTheDocument();
    expect(within(hero).getByText('Existing pilot and future backlog input')).toBeInTheDocument();
    expect(within(hero).getByRole('img', { name: 'Cover being rebuilt' })).toBeInTheDocument();

    expect(screen.getByText('37 participants interviewed')).toBeInTheDocument();
    expect(screen.getByText('3 NACs visited — RJ, SP and Brasília')).toBeInTheDocument();
    expect(screen.getByText('4 systems analyzed')).toBeInTheDocument();
    expect(screen.getByText('Canal do Consultor, MV Soul, Feegow and Tasy')).toBeInTheDocument();
    expect(screen.getByText('290 research quotes mapped')).toBeInTheDocument();
    expect(screen.getByText('57 business rules and features mapped')).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2, name: /discovery diagrams and synthesis artifacts/i })).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: 'Evidence visual being rebuilt' })).toHaveLength(5);
    const viewAllArtifacts = screen.getByRole('button', { name: 'View all artifacts (8)' });
    expect(viewAllArtifacts).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('img', { name: /diagram showing the discovery to delivery narrative and handoff structure/i })).not.toBeInTheDocument();
    fireEvent.click(viewAllArtifacts);
    expect(screen.getAllByRole('img', { name: 'Evidence visual being rebuilt' })).toHaveLength(9);
    expect(screen.getByRole('button', { name: 'Show less' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.queryByRole('button', { name: /^Open enlarged image:/ })).not.toBeInTheDocument();

    expect(screen.getByText('Validation with NAC coordinators')).toBeInTheDocument();
    expect(screen.getByText('Validation with consultants')).toBeInTheDocument();
    expect(screen.getByText('Validation with the Canal do Consultor tribe')).toBeInTheDocument();
    expect(screen.getByText(/front-end and back-end alignment/i)).toBeInTheDocument();
    expect(screen.getByText(/interface and api decisions/i)).toBeInTheDocument();
    expect(screen.getByText(/supporting alignment before delivery discussions/i)).toBeInTheDocument();
    expect(screen.getAllByText(/existing pilot/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/generated input for future backlog definition/i)).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2, name: /confidentiality and publication boundaries/i })).toBeInTheDocument();
    expect(screen.getByText(/all visuals on this page/i)).toBeInTheDocument();
    expect(screen.getByText(/do not reveal production ui screens/i)).toBeInTheDocument();
    expect(screen.getByText('Editorial reconstruction used for portfolio communication.')).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: 'Evidence visual being rebuilt' })).toHaveLength(9);

    expect(screen.getByRole('link', { name: 'Portuguese' })).toHaveAttribute('href', '/projetos/dasa-canal-do-consultor');
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('href', '/en/projects/dasa-canal-do-consultor');
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('aria-current', 'page');

    const navigation = screen.getByRole('navigation', { name: /case study navigation/i });
    const backLink = within(navigation).getByRole('link', { name: 'Portfolio' });
    expect(backLink).toHaveAttribute('href', '/en');
    expect(within(navigation).queryByText(/next case/i)).not.toBeInTheDocument();

    expect(screen.queryByText(/nationwide rollout/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/all dasa hospitals/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/roi/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/revenue impact/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/cost reduction/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/adoption metrics/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/exclusive authorship/i)).not.toBeInTheDocument();
  });

  it('renders the Portuguese DASA editorial content without English fallback', async () => {
    render(<DasaCanalDoConsultorPage locale="pt-BR" />);

    expect(screen.getByRole('heading', { level: 1, name: /traduzindo discovery em sa[uú]de para um sistema estruturado de decis[oõ]es de produto/i })).toBeInTheDocument();
    expect(screen.getByText(/trabalho de product design conectando pesquisa em larga escala/i)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1, name: /translating healthcare discovery into a structured product decision system/i })).not.toBeInTheDocument();

    const hero = screen.getByRole('region', { name: /traduzindo discovery em sa[uú]de para um sistema estruturado de decis[oõ]es de produto/i });
    expect(within(hero).getByText('Product Designer')).toBeInTheDocument();
    expect(within(hero).getByText('DASA')).toBeInTheDocument();
    expect(within(hero).getByText('Môre Talent Tech')).toBeInTheDocument();
    expect(within(hero).getByText('2022')).toBeInTheDocument();
    expect(within(hero).getByText('PM/PO · UX Researcher · Product Designer · Lead Developer')).toBeInTheDocument();
    expect(within(hero).getByText('Canal do Consultor / MV Soul / Feegow / Tasy')).toBeInTheDocument();
    expect(within(hero).getByText('Piloto existente e insumos para backlog futuro')).toBeInTheDocument();

    expect(screen.getByText('37 participantes entrevistados')).toBeInTheDocument();
    expect(screen.getByText('3 NACs visitados — RJ, SP e Brasília')).toBeInTheDocument();
    expect(screen.getByText('4 sistemas analisados')).toBeInTheDocument();
    expect(screen.getByText('Canal do Consultor, MV Soul, Feegow e Tasy')).toBeInTheDocument();
    expect(screen.getByText('290 quotes de pesquisa mapeados')).toBeInTheDocument();
    expect(screen.getByText('57 regras de negócio e funcionalidades mapeadas')).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2, name: /diagramas de discovery e artefatos de s[ií]ntese/i })).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: 'Evidência visual em reconstrução' })).toHaveLength(5);
    const viewAllArtifacts = screen.getByRole('button', { name: 'Ver todos os artefatos (8)' });
    expect(viewAllArtifacts).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('img', { name: /diagrama mostrando a narrativa de discovery para delivery e a estrutura de handoff/i })).not.toBeInTheDocument();
    fireEvent.click(viewAllArtifacts);
    expect(screen.getAllByRole('img', { name: 'Evidência visual em reconstrução' })).toHaveLength(9);
    expect(screen.getByRole('button', { name: 'Mostrar menos' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.queryByRole('button', { name: /^Abrir imagem ampliada:/ })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /^Open enlarged image:/ })).not.toBeInTheDocument();

    expect(screen.getByText('Validação com coordenadores de NAC')).toBeInTheDocument();
    expect(screen.getByText('Validação com consultores')).toBeInTheDocument();
    expect(screen.getByText('Validação com a tribo do Canal do Consultor')).toBeInTheDocument();
    expect(screen.getByText(/alinhamento entre front-end e back-end/i)).toBeInTheDocument();
    expect(screen.getByText(/decis[oõ]es de interface e api/i)).toBeInTheDocument();
    expect(screen.getByText(/apoiando alinhamento antes das discuss[oõ]es de entrega/i)).toBeInTheDocument();
    expect(screen.getByText(/gerou insumos para defini[cç][aã]o de backlog futuro/i)).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2, name: /confidencialidade e limites de publica[cç][aã]o/i })).toBeInTheDocument();
    expect(screen.getByText(/n[aã]o revelam telas de ui de produ[cç][aã]o/i)).toBeInTheDocument();
    expect(screen.getByText('Reconstrução editorial usada para comunicação no portfólio.')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('href', '/projetos/dasa-canal-do-consultor');
    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Inglês' })).toHaveAttribute('href', '/en/projects/dasa-canal-do-consultor');

    const navigation = screen.getByRole('navigation', { name: /navega[cç][aã]o do estudo de caso/i });
    const backLink = within(navigation).getByRole('link', { name: 'Portfólio' });
    expect(backLink).toHaveAttribute('href', '/');

    expect(screen.queryByText(/editorial reconstruction used for portfolio communication/i)).not.toBeInTheDocument();
  });

  it('wires the Home DASA card to the DASA route', () => {
    render(<HomePage locale="en" />);

    const featuredCases = screen.getByRole('region', { name: /featured projects/i });
    const dasaLink = within(featuredCases).getByRole('link', { name: /dasa — canal do consultor/i });
    expect(dasaLink).toHaveAttribute('href', '/en/projects/dasa-canal-do-consultor');
  });
});
