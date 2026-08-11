import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { HomePage } from '@/components/home/home-page';
import RedeDccPage from './page';

vi.mock('@/components/theme/theme-provider', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

describe('RedeDccPage', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the English REDE DCC editorial case and locale-aware controls', async () => {
    render(<RedeDccPage locale="en" />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: /designing clarity across a multi-state payment journey/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1, name: /projetando clareza em uma jornada de pagamento/i })).not.toBeInTheDocument();

    const hero = screen.getByRole('region', { name: /designing clarity across a multi-state payment journey/i });
    expect(within(hero).getByText('Senior Product Designer')).toBeInTheDocument();
    expect(within(hero).getByText('2023')).toBeInTheDocument();
    expect(within(hero).getByText('Portuguese / English')).toBeInTheDocument();
    expect(within(hero).getByText(/Implemented in REDE[’']s product/i)).toBeInTheDocument();
    expect(within(hero).getByRole('img', { name: 'Cover being rebuilt' })).toBeInTheDocument();

    expect(screen.getByText(/international mastercard and visa cardholders using rede payment terminals in brazil/i)).toBeInTheDocument();
    expect(screen.getByText(/international cardholders using cards linked to foreign accounts/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /orchestrating the transaction states/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /knowing when not to prototype/i })).toBeInTheDocument();
    expect(screen.getByText(/a navigable prototype was not necessary for this delivery/i)).toBeInTheDocument();
    expect(screen.getByText(/implemented within rede[’']s existing payment ecosystem/i)).toBeInTheDocument();
    expect(screen.getByText('Curated transaction-state sequence used to review the complete journey.')).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: 'Evidence visual being rebuilt' })).toHaveLength(5);
    expect(screen.queryByRole('button', { name: /^Open enlarged image:/ })).not.toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Portuguese' })).toHaveAttribute('href', '/projetos/rede-dcc');
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('href', '/en/projects/rede-dcc');
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('aria-current', 'page');

    const navigation = screen.getByRole('navigation', { name: /case study navigation/i });
    const backLink = within(navigation).getByRole('link', { name: 'Portfolio' });
    expect(backLink).toHaveAttribute('href', '/en');

    expect(screen.queryByText(/roi/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/conversion uplift/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/revenue impact/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/terminal replacement-rate reduction/i)).not.toBeInTheDocument();
  });

  it('renders the Portuguese REDE DCC editorial case without English fallback', async () => {
    render(<RedeDccPage locale="pt-BR" />);

    expect(screen.getByRole('heading', { level: 1, name: /projetando clareza em uma jornada de pagamento com m[uú]ltiplos estados/i })).toBeInTheDocument();
    expect(screen.getByText(/design de intera[cç][aã]o para uma experi[eê]ncia de dynamic currency conversion/i)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1, name: /designing clarity across a multi-state payment journey/i })).not.toBeInTheDocument();

    const hero = screen.getByRole('region', { name: /projetando clareza em uma jornada de pagamento com m[uú]ltiplos estados/i });
    expect(within(hero).getByText('Senior Product Designer')).toBeInTheDocument();
    expect(within(hero).getByText('2023')).toBeInTheDocument();
    expect(within(hero).getByText('Portuguese / English')).toBeInTheDocument();
    expect(within(hero).getByText('Implementado no produto da REDE')).toBeInTheDocument();
    expect(within(hero).getByRole('img', { name: 'Capa em reconstrução' })).toBeInTheDocument();

    expect(screen.getByText(/mastercard e visa usando terminais de pagamento da rede no brasil/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /orquestrando os estados transacionais/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /saber quando n[aã]o prototipar/i })).toBeInTheDocument();
    expect(screen.getByText(/um prot[oó]tipo naveg[aá]vel n[aã]o era necess[aá]rio para esta entrega/i)).toBeInTheDocument();
    expect(screen.getByText(/implementada dentro do ecossistema de pagamentos j[aá] existente da rede/i)).toBeInTheDocument();
    expect(screen.getByText('Sequência curada de estados transacionais usada para revisar a jornada completa.')).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: 'Evidência visual em reconstrução' })).toHaveLength(5);

    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('href', '/projetos/rede-dcc');
    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Inglês' })).toHaveAttribute('href', '/en/projects/rede-dcc');

    const navigation = screen.getByRole('navigation', { name: /navega[cç][aã]o do estudo de caso/i });
    const backLink = within(navigation).getByRole('link', { name: 'Portfólio' });
    expect(backLink).toHaveAttribute('href', '/');

    expect(screen.queryByText(/curated transaction-state sequence used to review the complete journey/i)).not.toBeInTheDocument();
  });

  it('wires the Home REDE card to the REDE DCC case route', () => {
    render(<HomePage locale="en" />);

    const featuredCases = screen.getByRole('region', { name: /featured projects/i });
    const redeDccLink = within(featuredCases).getByRole('link', { name: /rede dcc 1\.0/i });
    expect(redeDccLink).toHaveAttribute('href', '/en/projects/rede-dcc');
  });
});
