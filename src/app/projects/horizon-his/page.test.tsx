import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import HorizonHisPage from './page';

vi.mock('next-themes', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

describe('HorizonHisPage', () => {
  it('renders a single case-study page with supported claims and no fake navigation', async () => {
    render(<HorizonHisPage />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: /turning a complex his vision into a navigable product experience/i })).toBeInTheDocument();
    expect(screen.getByText(/product design-led prototype for salux’s next hospital information system/i)).toBeInTheDocument();

    const hero = screen.getByRole('region', { name: /turning a complex his vision into a navigable product experience/i });
    expect(within(hero).getByText('UX Lead / Product Designer')).toBeInTheDocument();
    expect(within(hero).getByText('Healthtech / Hospital Information System')).toBeInTheDocument();
    expect(within(hero).getByText('2025')).toBeInTheDocument();
    expect(within(hero).getByText('High-fidelity navigable prototype')).toBeInTheDocument();
    expect(within(hero).getByText('Presented at Hospitalar 2025')).toBeInTheDocument();
    expect(within(hero).getByText('Validated prototype')).toBeInTheDocument();
    expect(
      await within(hero).findByRole('img', { name: /editorial composition featuring the horizon his prototype interface/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2, name: /salux’s next hospital information system/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /making a broad his vision tangible before full implementation/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /end-to-end product design ownership/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /selecting the journeys that made the vision understandable/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /building the experience, not the infrastructure around it/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /designing the product before committing to building it/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /presented to the ceo as the proposed hospitalar experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /the product experience at hospitalar 2025/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /from abstract vision to navigable product experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /high-fidelity prototyping as strategic product work/i })).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /overview of the horizon his journey map showing multiple connected interface flows and states/i })).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /detailed section of the horizon his journey map showing connected interface states/i })).toHaveLength(4);
    expect(screen.queryByRole('img', { name: /high-fidelity prototype and interaction map used to validate the horizon his vision/i })).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: /horizon his triage prototype screen with intake, vital signs, and generated data/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /photographic record of the prototype presentation at hospitalar 2025 with the kiosk in the background/i })).toBeInTheDocument();

    const navigation = screen.getByRole('navigation', { name: /case navigation/i });
    const backLink = within(navigation).getByRole('link', { name: /← back to projects/i });
    expect(backLink).toHaveAttribute('href', '/');
    expect(screen.queryByRole('link', { name: /next case/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/3 months/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/approved by the presidency/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/roi/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/production deployment/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/user adoption/i)).not.toBeInTheDocument();
  });
});