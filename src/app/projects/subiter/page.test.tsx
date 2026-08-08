import '@testing-library/jest-dom/vitest';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import SubiterPage from './page';

vi.mock('next-themes', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

describe('SubiterPage', () => {
  it('renders the approved SUBITER case content with safe navigation and external article link', async () => {
    render(<SubiterPage />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: /turning operational complexity into a structured inspection experience/i })).toBeInTheDocument();

    const hero = screen.getByRole('region', { name: /turning operational complexity into a structured inspection experience/i });
    expect(within(hero).getByText('UX Lead / Senior Product Designer')).toBeInTheDocument();
    expect(within(hero).getByText('Production')).toBeInTheDocument();
    expect(
      await within(hero).findByRole('img', { name: /editorial interface composition with inspection workflow grid, trend line and review summary panels/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2, name: /introducing marina — ai inside the product/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /supporting a real international inspection operation/i })).toBeInTheDocument();
    expect(screen.getAllByText(/national geographic delfina/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/were delivered to production and became part of subiter’s operational product ecosystem/i)).toBeInTheDocument();
    expect(screen.getByText(/the contribution was also formally recognized by the company/i)).toBeInTheDocument();
    expect(screen.getByText(/i wrote an article for subiter presenting the product vision/i)).toBeInTheDocument();
    expect(screen.queryByText(/production adoption is presented/i)).not.toBeInTheDocument();

    const delfinaLink = screen.getByRole('link', { name: /view national geographic delfina/i });
    expect(delfinaLink).toHaveAttribute('href', 'https://www.expeditions.com/ships/national-geographic-delfina');
    expect(delfinaLink).toHaveAttribute('target', '_blank');
    expect(delfinaLink).toHaveAttribute('rel', 'noreferrer');

    const articleLink = screen.getByRole('link', { name: /read the article on subiter’s website/i });
    expect(articleLink).toHaveAttribute('href', 'https://www.subiter.com/post/portal-web-da-subiter-rastreabilidade-e-intelig%C3%AAncia-na-ind%C3%BAstria-4-0');
    expect(articleLink).toHaveAttribute('target', '_blank');
    expect(articleLink).toHaveAttribute('rel', 'noreferrer');

    const navigation = screen.getByRole('navigation', { name: /case navigation/i });
    const backLink = within(navigation).getByRole('link', { name: /← back to projects/i });
    expect(backLink).toHaveAttribute('href', '/');

    expect(screen.queryByText(/inspectly/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/altuseye/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/th drone/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/roi/i)).not.toBeInTheDocument();
  });
});