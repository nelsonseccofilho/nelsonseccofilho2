import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import HomePage from '@/app/page';
import DasaCanalDoConsultorPage from './page';

vi.mock('next-themes', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

describe('DasaCanalDoConsultorPage', () => {
  it('renders the approved DASA discovery narrative with confidentiality-safe claims', async () => {
    render(<DasaCanalDoConsultorPage />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: /translating healthcare discovery into a structured product decision system/i })).toBeInTheDocument();

    const hero = screen.getByRole('region', { name: /translating healthcare discovery into a structured product decision system/i });
    expect(within(hero).getByText('Product Designer')).toBeInTheDocument();
    expect(within(hero).getByText('DASA')).toBeInTheDocument();
    expect(within(hero).getByText('Môre Talent Tech')).toBeInTheDocument();
    expect(within(hero).getByText('2022')).toBeInTheDocument();
    expect(within(hero).getByText('PM/PO · UX Researcher · Product Designer · Lead Developer')).toBeInTheDocument();
    expect(within(hero).getByText('Canal do Consultor / MV Soul / Feegow / Tasy')).toBeInTheDocument();
    expect(within(hero).getByText('Existing pilot and future backlog input')).toBeInTheDocument();
    expect(
      await within(hero).findByRole('img', { name: /editorial composition of the canal do consultor discovery work with maps, synthesis, and business rules/i }),
    ).toBeInTheDocument();

    expect(screen.getByText('37 participants interviewed')).toBeInTheDocument();
    expect(screen.getByText('3 NACs visited — RJ, SP and Brasília')).toBeInTheDocument();
    expect(screen.getByText('4 systems analyzed')).toBeInTheDocument();
    expect(screen.getByText('Canal do Consultor, MV Soul, Feegow and Tasy')).toBeInTheDocument();
    expect(screen.getByText('290 research quotes mapped')).toBeInTheDocument();
    expect(screen.getByText('57 business rules and features mapped')).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2, name: /discovery diagrams and synthesis artifacts/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /diagram representing the canal do consultor ecosystem and connected systems/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /diagram showing the discovery to delivery narrative and handoff structure/i })).toBeInTheDocument();

    expect(screen.getByText('Validation with NAC coordinators')).toBeInTheDocument();
    expect(screen.getByText('Validation with consultants')).toBeInTheDocument();
    expect(screen.getByText('Validation with the Canal do Consultor tribe')).toBeInTheDocument();
    expect(screen.getByText(/front-end and back-end alignment/i)).toBeInTheDocument();
    expect(screen.getByText(/interface and api decisions/i)).toBeInTheDocument();
    expect(screen.getAllByText(/existing pilot/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/future backlog definition/i)).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2, name: /confidentiality and publication boundaries/i })).toBeInTheDocument();
    expect(screen.getByText(/do not reveal production ui screens/i)).toBeInTheDocument();

    const navigation = screen.getByRole('navigation', { name: /case navigation/i });
    const backLink = within(navigation).getByRole('link', { name: /← back to projects/i });
    expect(backLink).toHaveAttribute('href', '/');

    expect(screen.queryByText(/nationwide rollout/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/all dasa hospitals/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/roi/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/revenue impact/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/cost reduction/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/adoption metrics/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/exclusive authorship/i)).not.toBeInTheDocument();
  });

  it('wires the Home DASA card to the DASA route', () => {
    render(<HomePage />);

    const featuredCases = screen.getByRole('region', { name: /featured cases/i });
    const dasaLink = within(featuredCases).getByRole('link', { name: /dasa — canal do consultor/i });
    expect(dasaLink).toHaveAttribute('href', '/projects/dasa-canal-do-consultor');
  });
});