import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { SiteFooter } from './site-footer';

afterEach(cleanup);

describe('SiteFooter', () => {
  it('renders English footer navigation and copyright', () => {
    render(<SiteFooter locale="en" />);

    const footer = screen.getByRole('contentinfo');
    const nav = within(footer).getByRole('navigation', { name: 'Footer navigation' });

    expect(within(nav).getByRole('link', { name: /nelsonseccofilho@gmail.com/i })).toHaveAttribute('href', 'mailto:nelsonseccofilho@gmail.com');
    expect(within(nav).getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/nelsonseccofilho/');
    expect(within(nav).getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/nelsonseccofilho');
    expect(within(nav).getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '/en/privacy');
    expect(screen.getByText(/N3LX Digital Business\. All rights reserved\./i)).toBeInTheDocument();
    const resumeTrigger = within(nav).getByRole('button', { name: "Open Nelson Secco's resume in English" });
    expect(resumeTrigger).toBeInTheDocument();
    expect(resumeTrigger).toHaveTextContent('Resume');
    fireEvent.click(resumeTrigger);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    const iframe = screen.getByTitle('Resume \u2014 Nelson Secco');
    expect(iframe).toHaveAttribute('src', '/assets/resume/N3LX_EN.pdf');
  });

  it('renders Portuguese footer navigation and copyright', () => {
    render(<SiteFooter locale="pt-BR" />);

    const footer = screen.getByRole('contentinfo');
    const nav = within(footer).getByRole('navigation', { name: 'Navegação de rodapé' });

    expect(within(nav).getByRole('link', { name: /nelsonseccofilho@gmail.com/i })).toHaveAttribute('href', 'mailto:nelsonseccofilho@gmail.com');
    expect(within(nav).getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/nelsonseccofilho/');
    expect(within(nav).getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/nelsonseccofilho');
    expect(within(nav).getByRole('link', { name: 'Privacidade' })).toHaveAttribute('href', '/privacidade');
    expect(screen.getByText(/N3LX Digital Business\. Todos os direitos reservados\./i)).toBeInTheDocument();
    const resumeTrigger = within(nav).getByRole('button', { name: 'Abrir curr\u00edculo de Nelson Secco em portugu\u00eas' });
    expect(resumeTrigger).toBeInTheDocument();
    expect(resumeTrigger).toHaveTextContent('Curr\u00edculo');
    fireEvent.click(resumeTrigger);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    const iframe = screen.getByTitle('Curr\u00edculo \u2014 Nelson Secco');
    expect(iframe).toHaveAttribute('src', '/assets/resume/N3LX_PT-BR.pdf');
  });
});
