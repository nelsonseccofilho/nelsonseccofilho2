import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { HomePage } from '@/components/home/home-page';

describe('HomePage', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the new header, hero and featured cases composition', () => {
    render(<HomePage locale="en" />);

    const hero = screen.getByRole('region', { name: /hero/i });
    const featuredCases = screen.getByRole('region', { name: /featured cases/i });

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(hero).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: /designing digital products for complex systems\./i })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(within(hero).getByText(/senior product designer/i)).toBeInTheDocument();
    expect(screen.getByText(/ux strategy/i)).toBeInTheDocument();
    expect(screen.getByText(/product discovery/i)).toBeInTheDocument();
    expect(within(hero).getByText('Design Systems')).toBeInTheDocument();
    expect(screen.getByText(/ai-assisted product design/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /featured cases/i })).toBeInTheDocument();
    expect(within(featuredCases).getByRole('heading', { level: 3, name: /horizon his/i })).toBeInTheDocument();
    const horizonLink = within(featuredCases).getByRole('link', { name: /horizon his/i });
    expect(horizonLink).toHaveAttribute('href', '/en/projects/horizon-his');
    const subiterLink = within(featuredCases).getByRole('link', { name: /subiter/i });
    expect(subiterLink).toHaveAttribute('href', '/en/projects/subiter');
    const redeDccLink = within(featuredCases).getByRole('link', { name: /rede dcc 1\.0/i });
    expect(redeDccLink).toHaveAttribute('href', '/en/projects/rede-dcc');
    const dasaLink = within(featuredCases).getByRole('link', { name: /dasa — canal do consultor/i });
    expect(dasaLink).toHaveAttribute('href', '/en/projects/dasa-canal-do-consultor');
    expect(within(featuredCases).getByRole('heading', { level: 3, name: /subiter/i })).toBeInTheDocument();
    expect(within(featuredCases).getByRole('heading', { level: 3, name: /rede dcc 1\.0/i })).toBeInTheDocument();
    expect(within(featuredCases).getByRole('heading', { level: 3, name: /dasa/i })).toBeInTheDocument();
    expect(within(featuredCases).getAllByRole('link')).toHaveLength(4);
    expect(within(featuredCases).getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)).toEqual(['HORIZON HIS', 'SUBITER', 'REDE DCC 1.0', 'DASA — Canal do Consultor']);
    expect(within(featuredCases).getAllByRole('heading', { level: 3 })).toHaveLength(4);
    expect(screen.getByText(/discovery-led product design translating research/i)).toBeInTheDocument();
    expect(screen.getByText('Research & Discovery')).toBeInTheDocument();
    expect(screen.getByText('Product Design')).toBeInTheDocument();
    expect(screen.getByText('Business Rules')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /design systems for mobility/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /connectcar/i })).toBeInTheDocument();
    expect(screen.getByText(/responsive ui and design-system studies for connectcar \/ freeflow/i)).toBeInTheDocument();
    expect(screen.getAllByText('Design Systems')).toHaveLength(3);
    expect(screen.getByText('Mobility')).toBeInTheDocument();
    expect(screen.getByText('Responsive UI')).toBeInTheDocument();

    const senioritySection = screen.getByRole('region', { name: /strategy through delivery/i });
    expect(senioritySection).toBeInTheDocument();
    expect(within(senioritySection).getByRole('heading', { level: 2, name: /strategy through delivery/i })).toBeInTheDocument();
    expect(within(senioritySection).getByText(/how i work/i)).toBeInTheDocument();
    expect(within(senioritySection).getByRole('heading', { level: 3, name: 'Strategy' })).toBeInTheDocument();
    expect(within(senioritySection).getByRole('heading', { level: 3, name: 'Complex Systems' })).toBeInTheDocument();
    expect(within(senioritySection).getByRole('heading', { level: 3, name: 'Delivery' })).toBeInTheDocument();
    expect(within(senioritySection).getByRole('heading', { level: 3, name: 'Discovery' })).toBeInTheDocument();
    expect(within(senioritySection).getByRole('heading', { level: 3, name: 'Design Systems' })).toBeInTheDocument();
    const pillarNames = within(senioritySection).getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent);
    expect(pillarNames).toEqual(['Strategy', 'Complex Systems', 'Delivery', 'Discovery', 'Design Systems']);
    expect(within(senioritySection).getAllByRole('heading', { level: 3 })).toHaveLength(5);

    const aboutSection = screen.getByRole('region', { name: /about/i });
    expect(aboutSection).toBeInTheDocument();
    expect(within(aboutSection).getByRole('heading', { level: 2, name: /about/i })).toBeInTheDocument();
    expect(within(aboutSection).getByText(/over 12 years of experience building digital products/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/more than 8 years focused on ux and product design/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/including terramagna and noalvo/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/without compromising critical thinking or experience quality/i)).toBeInTheDocument();

    const contactSection = screen.getByRole('region', { name: /let['’]s build something meaningful/i });
    expect(contactSection).toBeInTheDocument();
    expect(within(contactSection).getByRole('heading', { level: 2, name: /let['’]s build something meaningful/i })).toBeInTheDocument();
    const whatsappLink = within(contactSection).getByRole('link', { name: /talk to me on whatsapp/i });
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/5512981241764?text=Olá%20Nelson%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.');
    const emailLink = within(contactSection).getByRole('link', { name: /nelsonseccofilho@gmail.com/i });
    const linkedInLink = within(contactSection).getByRole('link', { name: /linkedin/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:nelsonseccofilho@gmail.com');
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/nelsonseccofilho/');
    expect(whatsappLink.compareDocumentPosition(emailLink) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(whatsappLink.compareDocumentPosition(linkedInLink) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(within(contactSection).queryByRole('link', { name: /placeholder/i })).not.toBeInTheDocument();

    expect(hero.compareDocumentPosition(featuredCases) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });

  it('renders canonical Portuguese content and localized project links', () => {
    render(<HomePage locale="pt-BR" />);

    expect(screen.getByRole('heading', { level: 1, name: 'Design de produtos digitais para sistemas complexos.' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Página inicial — N3LX' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Vamos conversar' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Inglês' })).toHaveAttribute('href', '/en');
    expect(screen.getByRole('link', { name: /horizon his/i })).toHaveAttribute('href', '/projetos/horizon-his');
    expect(screen.getByRole('link', { name: /subiter/i })).toHaveAttribute('href', '/projetos/subiter');
    const aboutSection = screen.getByRole('region', { name: /sobre/i });
    expect(within(aboutSection).getByText(/mais de 12 anos de experiência na construção de produtos digitais/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/mais de 8 anos dedicados a ux e product design/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/embraer, Santander, Bradesco, DASA, REDE, ConnectCar e Salux/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/sem abrir mão do pensamento crítico e da qualidade da experiência/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Alternar tema' })).toBeInTheDocument();
  });
});
