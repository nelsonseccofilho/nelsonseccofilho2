import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import SubiterPage from './page';

vi.mock('@/components/theme/theme-provider', () => ({
  useTheme: () => ({ resolvedTheme: 'light' }),
}));

describe('SubiterPage', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the English SUBITER editorial case with locale-aware navigation', async () => {
    render(<SubiterPage locale="en" />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: /turning operational complexity into a structured inspection experience/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1, name: /transformando complexidade operacional/i })).not.toBeInTheDocument();

    const hero = screen.getByRole('region', { name: /turning operational complexity into a structured inspection experience/i });
    expect(within(hero).getByText('UX Lead / Senior Product Designer')).toBeInTheDocument();
    expect(within(hero).getByText('Production')).toBeInTheDocument();
    expect(within(hero).getByRole('img', { name: 'Cover being rebuilt' })).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2, name: /introducing marina — ai inside the product/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /supporting a real international inspection operation/i })).toBeInTheDocument();
    const role = screen.getByRole('heading', { level: 2, name: /hands-on design leadership/i }).closest('section');
    expect(role).not.toBeNull();
    const responsibilities = within(role!).getByRole('list', { name: /my responsibilities included/i });
    expect(within(responsibilities).getAllByRole('listitem')).toHaveLength(6);
    expect(within(responsibilities).getByText(/supporting prioritization alongside engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/as subiter's digital and operational capabilities evolved/i)).toBeInTheDocument();
    expect(screen.getAllByText(/national geographic delfina/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/were delivered to production and became part of subiter[’']s operational product ecosystem/i)).toBeInTheDocument();
    expect(screen.getByText(/the contribution was also formally recognized by the company/i)).toBeInTheDocument();
    expect(screen.getByText(/i wrote an article for subiter presenting the product vision/i)).toBeInTheDocument();
    expect(screen.queryByText(/production adoption is presented/i)).not.toBeInTheDocument();
    expect(screen.getByText('Editorial representation, not a literal product screenshot.')).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: 'Evidence visual being rebuilt' })).toHaveLength(3);
    expect(screen.queryByRole('button', { name: /^Open enlarged image:/ })).not.toBeInTheDocument();

    const delfinaLink = screen.getByRole('link', { name: /view national geographic delfina/i });
    expect(delfinaLink).toHaveAttribute('href', 'https://www.expeditions.com/ships/national-geographic-delfina');
    expect(delfinaLink).toHaveAttribute('target', '_blank');
    expect(delfinaLink).toHaveAttribute('rel', 'noreferrer');

    const articleLink = screen.getByRole('link', { name: /read the article on subiter[’']s website/i });
    expect(articleLink).toHaveAttribute('href', 'https://www.subiter.com/post/portal-web-da-subiter-rastreabilidade-e-intelig%C3%AAncia-na-ind%C3%BAstria-4-0');
    expect(articleLink).toHaveAttribute('target', '_blank');
    expect(articleLink).toHaveAttribute('rel', 'noreferrer');

    expect(screen.getByRole('link', { name: 'Portuguese' })).toHaveAttribute('href', '/projetos/subiter');
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('href', '/en/projects/subiter');
    expect(screen.getByRole('link', { name: 'English' })).toHaveAttribute('aria-current', 'page');

    const navigation = screen.getByRole('navigation', { name: /case study navigation/i });
    const backLink = within(navigation).getByRole('link', { name: 'Portfolio' });
    expect(backLink).toHaveAttribute('href', '/en');

    expect(screen.queryByText(/inspectly/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/altuseye/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/th drone/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/roi/i)).not.toBeInTheDocument();
  });

  it('renders the Portuguese SUBITER editorial case without English fallback', async () => {
    render(<SubiterPage locale="pt-BR" />);

    expect(screen.getByRole('heading', { level: 1, name: /transformando complexidade operacional em uma experi[eê]ncia estruturada de inspe[cç][aã]o/i })).toBeInTheDocument();
    expect(screen.getByText(/lideran[cç]a de product design para uma plataforma web em produ[cç][aã]o/i)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1, name: /turning operational complexity into a structured inspection experience/i })).not.toBeInTheDocument();

    const hero = screen.getByRole('region', { name: /transformando complexidade operacional em uma experi[eê]ncia estruturada de inspe[cç][aã]o/i });
    expect(within(hero).getByText('UX Lead / Senior Product Designer')).toBeInTheDocument();
    expect(within(hero).getByText('Produção')).toBeInTheDocument();
    expect(within(hero).getByRole('img', { name: 'Capa em reconstrução' })).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2, name: /introduzindo marina — ia dentro do produto/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /apoiando uma opera[cç][aã]o internacional real de inspe[cç][aã]o/i })).toBeInTheDocument();
    const role = screen.getByRole('heading', { level: 2, name: /lideran[cç]a de design hands-on/i }).closest('section');
    expect(role).not.toBeNull();
    const responsibilities = within(role!).getByRole('list', { name: /minhas responsabilidades inclu[ií]ram/i });
    expect(within(responsibilities).getAllByRole('listitem')).toHaveLength(6);
    expect(within(responsibilities).getByText(/apoiar prioriza[cç][aã]o junto a engenharia/i)).toBeInTheDocument();
    expect(screen.getByText(/as capacidades digitais e operacionais da subiter/i)).toBeInTheDocument();
    expect(screen.getByText(/foram entregues em produ[cç][aã]o e passaram a integrar o ecossistema operacional/i)).toBeInTheDocument();
    expect(screen.getByText(/a contribui[cç][aã]o tamb[eé]m foi formalmente reconhecida pela empresa/i)).toBeInTheDocument();
    expect(screen.getByText(/escrevi um artigo para a subiter apresentando a vis[aã]o de produto/i)).toBeInTheDocument();
    expect(screen.getByText('Representação editorial, não uma captura literal do produto.')).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: 'Evidência visual em reconstrução' })).toHaveLength(3);

    const delfinaLink = screen.getByRole('link', { name: /ver national geographic delfina/i });
    expect(delfinaLink).toHaveAttribute('href', 'https://www.expeditions.com/ships/national-geographic-delfina');
    expect(delfinaLink).toHaveAttribute('target', '_blank');
    expect(delfinaLink).toHaveAttribute('rel', 'noreferrer');

    const articleLink = screen.getByRole('link', { name: /ler o artigo no site da subiter/i });
    expect(articleLink).toHaveAttribute('href', 'https://www.subiter.com/post/portal-web-da-subiter-rastreabilidade-e-intelig%C3%AAncia-na-ind%C3%BAstria-4-0');
    expect(articleLink).toHaveAttribute('target', '_blank');
    expect(articleLink).toHaveAttribute('rel', 'noreferrer');

    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('href', '/projetos/subiter');
    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Inglês' })).toHaveAttribute('href', '/en/projects/subiter');

    const navigation = screen.getByRole('navigation', { name: /navega[cç][aã]o do estudo de caso/i });
    const backLink = within(navigation).getByRole('link', { name: 'Portfólio' });
    expect(backLink).toHaveAttribute('href', '/');

    expect(screen.queryByText(/read the article on subiter's website/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/editorial representation, not a literal product screenshot/i)).not.toBeInTheDocument();
  });
});
