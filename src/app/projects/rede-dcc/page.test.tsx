import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import HomePage from '@/app/page';
import RedeDccPage from './page';

vi.mock('next-themes', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

describe('RedeDccPage', () => {
  it('renders the approved REDE DCC case content and navigation contract', async () => {
    render(<RedeDccPage />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: /designing clarity across a multi-state payment journey/i })).toBeInTheDocument();

    const hero = screen.getByRole('region', { name: /designing clarity across a multi-state payment journey/i });
    expect(within(hero).getByText('Senior Product Designer')).toBeInTheDocument();
    expect(within(hero).getByText('2023')).toBeInTheDocument();
    expect(within(hero).getByText('Portuguese / English')).toBeInTheDocument();
    expect(within(hero).getByText('Implemented in REDE’s product')).toBeInTheDocument();
    expect(await within(hero).findByRole('img', { name: /payment interface composition showing transaction flow states and confirmation screens/i })).toBeInTheDocument();

    expect(screen.getByText(/international mastercard and visa cardholders using rede payment terminals in brazil/i)).toBeInTheDocument();
    expect(screen.getByText(/international cardholders using cards linked to foreign accounts/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /orchestrating the transaction states/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /knowing when not to prototype/i })).toBeInTheDocument();
    expect(screen.getByText(/a navigable prototype was not necessary for this delivery/i)).toBeInTheDocument();
    expect(screen.getByText(/implemented within rede’s existing payment ecosystem/i)).toBeInTheDocument();

    const navigation = screen.getByRole('navigation', { name: /case navigation/i });
    const backLink = within(navigation).getByRole('link', { name: /← back to projects/i });
    expect(backLink).toHaveAttribute('href', '/');

    expect(screen.queryByText(/roi/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/conversion uplift/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/revenue impact/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/terminal replacement-rate reduction/i)).not.toBeInTheDocument();
  });

  it('wires the Home REDE card to the REDE DCC case route', () => {
    render(<HomePage />);

    const featuredCases = screen.getByRole('region', { name: /featured cases/i });
    const redeDccLink = within(featuredCases).getByRole('link', { name: /rede dcc 1\.0/i });
    expect(redeDccLink).toHaveAttribute('href', '/projects/rede-dcc');
  });
});
