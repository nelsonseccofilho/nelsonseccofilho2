import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import HorizonHisPage from './page';

vi.mock('@/components/theme/theme-provider', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

describe('HorizonHisPage', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the English editorial case with localized controls and preserved factual boundaries', async () => {
    render(<HorizonHisPage locale="en" />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: /turning a complex his vision into a navigable product experience/i })).toBeInTheDocument();
    expect(screen.getByText(/product design-led prototype for salux's next hospital information system/i)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1, name: /transformando uma visao complexa/i })).not.toBeInTheDocument();

    const hero = screen.getByRole('region', { name: /turning a complex his vision into a navigable product experience/i });
    expect(within(hero).getByText('UX Lead / Product Designer')).toBeInTheDocument();
    expect(within(hero).getByText('Healthtech / Hospital Information System')).toBeInTheDocument();
    expect(within(hero).getByText('2025')).toBeInTheDocument();
    expect(within(hero).getByText('Presented at Hospitalar 2025')).toBeInTheDocument();
    expect(within(hero).getByText('Presented and reviewed')).toBeInTheDocument();
    expect(within(hero).getByRole('img', { name: /editorial composition featuring the horizon his prototype interface in a clinical journey/i })).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2, name: /salux's next hospital information system/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /the product experience at hospitalar 2025/i })).toBeInTheDocument();
    expect(screen.getByText(/presented to and reviewed with the CEO/i)).toHaveTextContent(/materialized and discussed/i);
    expect(screen.getByText('High-fidelity prototype and interaction-map evidence.')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /^Open enlarged image:/ })).toHaveLength(6);
    expect(screen.queryByRole('img', { name: 'Evidence visual being rebuilt' })).not.toBeInTheDocument();
    expect(document.querySelectorAll('[data-placeholder-variant="gallery"]')).toHaveLength(0);

    expect(screen.getByRole('link', { name: 'Portuguese' })).toHaveAttribute('href', '/projetos/horizon-his');
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('href', '/en/projects/horizon-his');
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('aria-current', 'page');

    const navigation = screen.getByRole('navigation', { name: /case study navigation/i });
    expect(within(navigation).getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', '/en');
    expect(within(navigation).getByRole('link', { name: /next project.*subiter/i })).toHaveAttribute('href', '/en/projects/subiter');
    expect(screen.queryByText(/3 months/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/validated|validation/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/approved by the presidency/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/roi/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/production deployment/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/user adoption/i)).not.toBeInTheDocument();
  });

  it('renders the Portuguese editorial case without falling back to English', async () => {
    render(<HorizonHisPage locale="pt-BR" />);

    expect(screen.getByRole('heading', { level: 1, name: /transformando uma vis[aã]o complexa de his em uma experi[eê]ncia de produto naveg[aá]vel/i })).toBeInTheDocument();
    expect(screen.getByText(/prot[oó]tipo naveg[aá]vel de alta fidelidade, conduzido por product design/i)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1, name: /turning a complex his vision into a navigable product experience/i })).not.toBeInTheDocument();

    const hero = screen.getByRole('region', { name: /transformando uma vis[aã]o complexa de his em uma experi[eê]ncia de produto naveg[aá]vel/i });
    expect(within(hero).getByText('UX Lead / Product Designer')).toBeInTheDocument();
    expect(within(hero).getByText('Healthtech / Sistema de Informação Hospitalar')).toBeInTheDocument();
    expect(within(hero).getByText('2025')).toBeInTheDocument();
    expect(within(hero).getByText('Apresentado na Hospitalar 2025')).toBeInTheDocument();
    expect(within(hero).getByText('Protótipo apresentado e revisado')).toBeInTheDocument();
    expect(within(hero).getByRole('img', { name: /composição editorial com a interface do protótipo horizon his em uma jornada clínica/i })).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2, name: /pr[oó]ximo sistema de informa[cç][aã]o hospitalar da salux/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /a experi[eê]ncia de produto na hospitalar 2025/i })).toBeInTheDocument();
    expect(screen.getByText(/apresentados e revisados com o CEO/i)).toHaveTextContent(/materializada e discutida/i);
    expect(screen.getByText('Evidência do protótipo de alta fidelidade e do mapa de interação.')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /^Abrir imagem ampliada:/ })).toHaveLength(6);
    expect(screen.queryByRole('img', { name: 'Evidência visual em reconstrução' })).not.toBeInTheDocument();
    expect(document.querySelectorAll('[data-placeholder-variant="gallery"]')).toHaveLength(0);

    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('href', '/projetos/horizon-his');
    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Inglês' })).toHaveAttribute('href', '/en/projects/horizon-his');

    const navigation = screen.getByRole('navigation', { name: /navega[cç][aã]o do estudo de caso/i });
    expect(within(navigation).getByRole('link', { name: 'Portfólio' })).toHaveAttribute('href', '/');

    expect(screen.queryByText(/executive presentation evidence/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/validado|validada|validação|validar/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/high-fidelity prototype and interaction-map evidence/i)).not.toBeInTheDocument();
  });
});
