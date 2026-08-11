import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { PortfolioReturnNavigation } from './portfolio-return-navigation';

afterEach(cleanup);

describe('PortfolioReturnLink', () => {
  it('returns Portuguese readers to the portfolio root with one decorative left arrow', () => {
    render(<PortfolioReturnNavigation locale="pt-BR" />);

    const navigation = screen.getByRole('navigation', { name: 'Navegação para o portfólio' });
    const link = within(navigation).getByRole('link', { name: 'Portfólio' });
    expect(link).toHaveAttribute('href', '/');
    expect(link.querySelector('[data-icon="arrow-left"]')).toHaveAttribute('aria-hidden', 'true');
    expect(link).not.toHaveTextContent('←');
  });

  it('returns English readers to the localized portfolio root without legacy wording', () => {
    render(<PortfolioReturnNavigation locale="en" />);

    const navigation = screen.getByRole('navigation', { name: 'Portfolio navigation' });
    const link = within(navigation).getByRole('link', { name: 'Portfolio' });
    expect(link).toHaveAttribute('href', '/en');
    expect(navigation).not.toHaveTextContent(/Go to portfolio|Back to portfolio/i);
  });
});
