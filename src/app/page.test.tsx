import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getWhatsAppContactUrl } from '@/content/contact';
import { HomePage } from '@/components/home/home-page';

const trackEventMock = vi.hoisted(() => vi.fn());

vi.mock('@/components/analytics/analytics-provider', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/components/analytics/analytics-provider')>();
  return {
    ...actual,
    useAnalytics: () => ({ trackEvent: trackEventMock }),
  };
});

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value });
  fireEvent.scroll(window);
}

describe('HomePage', () => {
  beforeEach(() => trackEventMock.mockClear());

  afterEach(() => {
    cleanup();
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
    vi.restoreAllMocks();
  });

  it('renders the new header, hero and featured cases composition', () => {
    render(<HomePage locale="en" />);

    const hero = screen.getByRole('region', { name: /introduction/i });
    const featuredCases = screen.getByRole('region', { name: /featured projects/i });
    const analyticsConsentSlot = document.querySelector('[data-analytics-consent-slot="true"]');
    expect(document.querySelectorAll('#cases')).toHaveLength(0);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(hero).toBeInTheDocument();
    expect(analyticsConsentSlot).toBeInTheDocument();
    expect(hero.compareDocumentPosition(analyticsConsentSlot!) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(analyticsConsentSlot!.compareDocumentPosition(featuredCases) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(screen.getByRole('heading', { level: 1, name: /designing digital products for complex systems\./i })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(within(hero).getByText('Nelson Secco')).toBeInTheDocument();
    expect(within(hero).getByText('Senior Product Designer')).toBeInTheDocument();
    expect(within(hero).getByRole('button', { name: "Open Nelson Secco's resume in English" })).toHaveClass('text-link', 'hero__resume-link');
    expect(within(hero).getByText('Resume')).toBeInTheDocument();
    expect(within(hero).queryByText('Senior Product Designer & UX Consultant')).not.toBeInTheDocument();
    expect(within(hero).getByText(/software-development background, working hands-on across design, product, and engineering/i)).toBeInTheDocument();
    expect(within(hero).getByText(/ux strategy/i)).toBeInTheDocument();
    expect(screen.getByText(/product discovery/i)).toBeInTheDocument();
    expect(within(hero).getByText('Design Systems')).toBeInTheDocument();
    expect(screen.getByText(/ai-assisted product design/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /featured projects/i })).toBeInTheDocument();
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
    expect(within(featuredCases).getByRole('link', { name: 'View HORIZON HIS project' })).toHaveAttribute('href', '/en/projects/horizon-his');
    expect(within(featuredCases).getByRole('link', { name: 'View SUBITER project' })).toHaveAttribute('href', '/en/projects/subiter');
    expect(within(featuredCases).getByRole('link', { name: 'View REDE DCC 1.0 project' })).toHaveAttribute('href', '/en/projects/rede-dcc');
    expect(within(featuredCases).getByRole('link', { name: 'View DASA \u2014 Canal do Consultor project' })).toHaveAttribute('href', '/en/projects/dasa-canal-do-consultor');
    expect(within(featuredCases).getAllByText('View project')).toHaveLength(4);
    expect(within(featuredCases).getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)).toEqual(['HORIZON HIS', 'SUBITER', 'REDE DCC 1.0', 'DASA — Canal do Consultor']);
    expect(within(featuredCases).getAllByRole('heading', { level: 3 })).toHaveLength(4);
    expect(screen.getByText(/discovery-led product design translating research/i)).toBeInTheDocument();
    expect(screen.getByText('Product Designer · Healthtech · Discovery and Business Rules')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /design systems for mobility/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /connectcar/i })).toBeInTheDocument();
    expect(screen.getByText(/responsive ui and design-system studies for connectcar \/ freeflow/i)).toBeInTheDocument();
    expect(screen.getByText('Editorial representation')).toBeInTheDocument();
    expect(screen.getAllByText('Design Systems')).toHaveLength(3);
    expect(screen.getByText('Mobility')).toBeInTheDocument();
    expect(screen.getByText('Responsive UI')).toBeInTheDocument();

    const senioritySection = screen.getByRole('region', { name: /from discovery to delivery/i });
    expect(senioritySection).toBeInTheDocument();
    expect(within(senioritySection).getByRole('heading', { level: 2, name: /from discovery to delivery/i })).toBeInTheDocument();
    expect(within(senioritySection).getByText(/how i work/i)).toBeInTheDocument();
    expect(within(senioritySection).getByRole('heading', { level: 3, name: 'Discovery' })).toBeInTheDocument();
    expect(within(senioritySection).getByRole('heading', { level: 3, name: 'Strategy' })).toBeInTheDocument();
    expect(within(senioritySection).getByRole('heading', { level: 3, name: 'Complex Systems' })).toBeInTheDocument();
    expect(within(senioritySection).getByRole('heading', { level: 3, name: 'Design Systems' })).toBeInTheDocument();
    expect(within(senioritySection).getByRole('heading', { level: 3, name: 'Delivery' })).toBeInTheDocument();
    const pillarList = within(senioritySection).getByRole('list');
    expect(pillarList.tagName).toBe('OL');
    const visualOrderNumbers = Array.from(pillarList.querySelectorAll(':scope > li > span'));
    expect(visualOrderNumbers.map((number) => number.textContent)).toEqual(['01', '02', '03', '04', '05']);
    visualOrderNumbers.forEach((number) => expect(number).toHaveAttribute('aria-hidden', 'true'));
    const pillarNames = within(senioritySection).getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent);
    expect(pillarNames).toEqual(['Discovery', 'Strategy', 'Complex Systems', 'Design Systems', 'Delivery']);
    expect(within(senioritySection).getAllByRole('heading', { level: 3 })).toHaveLength(5);

    const aboutSection = screen.getByRole('region', { name: /about/i });
    expect(aboutSection).toBeInTheDocument();
    expect(within(aboutSection).getByRole('heading', { level: 2, name: /about/i })).toBeInTheDocument();
    expect(within(aboutSection).getByText('Professional profile')).toBeInTheDocument();
    expect(within(aboutSection).getByText('Senior Product Designer')).toBeInTheDocument();
    expect(within(aboutSection).getByText('UX Consultant')).toBeInTheDocument();
    expect(within(aboutSection).getByText('Product × Engineering')).toBeInTheDocument();
    expect(within(aboutSection).getByText(/digital products and complex systems with hands-on delivery focus/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/independent engagements focused on ux strategy/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/connecting product decisions to implementation continuity/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/i’m nelson secco, a senior product designer who also works as a ux consultant/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/n3lx digital business is the business structure/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/outside of digital product work, i also write and produce original music as n3lx/i)).toBeInTheDocument();
    const spotifyLink = within(aboutSection).getByRole('link', { name: 'Listen to N3LX on Spotify ↗' });
    expect(spotifyLink).toHaveAttribute('href', 'https://open.spotify.com/intl-pt/artist/2ieIog7rXx1yWHaPyQhJvE');
    expect(spotifyLink).toHaveClass('text-link', 'text-link--hit-area');
    const metaCaseLink = screen.getByRole('link', { name: 'See how it was built →' });
    expect(metaCaseLink).toHaveAttribute('href', '/en/building-this-portfolio');
    expect(metaCaseLink).toHaveClass('text-link', 'text-link--hit-area');
    expect(screen.queryByRole('link', { name: /figma/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: /being rebuilt/i })).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: /hospital information system prototype interface showing triage workflow and generated clinical data panels/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /editorial interface composition with inspection workflow grid, trend line and review summary panels/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /payment interface composition showing transaction flow states and confirmation screens/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /editorial representation of a consultation journey translating research into decision rules/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /editorial representation of responsive component studies and design-system references for connectcar/i })).toBeInTheDocument();

    const contactSection = screen.getByRole('region', { name: /let['’]s build something meaningful/i });
    expect(contactSection).toBeInTheDocument();
    expect(within(contactSection).getByRole('heading', { level: 2, name: /let['’]s build something meaningful/i })).toBeInTheDocument();
    expect(within(contactSection).getByText(/a Product Design opportunity, or a UX consulting project/i)).toBeInTheDocument();
    const whatsappLink = within(contactSection).getByRole('link', { name: /talk to me on whatsapp/i });
    expect(whatsappLink).toHaveAttribute('href', getWhatsAppContactUrl('en'));
    expect(whatsappLink.querySelector('[data-icon="send"]')).toHaveAttribute('aria-hidden', 'true');
    const headerWhatsappLink = screen.getByRole('link', { name: "Let\u2019s talk on WhatsApp" });
    expect(headerWhatsappLink.querySelector('[data-icon="send"]')).toHaveAttribute('aria-hidden', 'true');
    expect(headerWhatsappLink).toHaveAttribute('data-clarity-mask', 'true');
    expect(document.querySelectorAll('[data-icon="send"]')).toHaveLength(2);
    expect(whatsappLink).toHaveAttribute('data-clarity-mask', 'true');
    expect(within(contactSection).queryByRole('navigation', { name: /secondary contact links/i })).not.toBeInTheDocument();
    expect(within(contactSection).queryByRole('link', { name: /nelsonseccofilho@gmail.com/i })).not.toBeInTheDocument();
    expect(within(contactSection).queryByRole('link', { name: 'LinkedIn' })).not.toBeInTheDocument();
    expect(within(contactSection).queryByRole('link', { name: 'GitHub' })).not.toBeInTheDocument();
    expect(within(contactSection).queryByRole('link', { name: "Open Nelson Secco's resume in English" })).not.toBeInTheDocument();
    expect(within(contactSection).queryByRole('link', { name: 'Privacy' })).not.toBeInTheDocument();

    expect(hero.compareDocumentPosition(featuredCases) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });

  it('tracks Contact WhatsApp and all four Featured Project intentions with exact keys', () => {
    render(<HomePage locale="en" />);

    const contactSection = screen.getByRole('heading', { level: 2, name: /let’s build something meaningful/i }).closest('section');
    expect(contactSection).not.toBeNull();
    fireEvent.click(within(contactSection!).getByRole('link', { name: 'Talk to me on WhatsApp' }));
    expect(trackEventMock).toHaveBeenLastCalledWith('contact_whatsapp_click:contact');
    expect(trackEventMock).not.toHaveBeenCalledWith('contact_whatsapp_click');

    trackEventMock.mockClear();
    const featuredProjects = screen.getByRole('region', { name: 'Featured projects' });
    const projectLinks = [
      ['View HORIZON HIS project', 'project_open:horizon-his:featured-projects'],
      ['View SUBITER project', 'project_open:subiter:featured-projects'],
      ['View REDE DCC 1.0 project', 'project_open:rede-dcc:featured-projects'],
      ['View DASA — Canal do Consultor project', 'project_open:dasa-canal-do-consultor:featured-projects'],
    ] as const;

    projectLinks.forEach(([accessibleName, eventName]) => {
      const link = within(featuredProjects).getByRole('link', { name: accessibleName });
      expect(link).toHaveAttribute('href');
      fireEvent.click(link);
      expect(trackEventMock).toHaveBeenLastCalledWith(eventName);
    });

    expect(trackEventMock).toHaveBeenCalledTimes(4);
  });

  it('renders canonical Portuguese content and localized project links', () => {
    render(<HomePage locale="pt-BR" />);

    expect(screen.getByRole('heading', { level: 1, name: 'Design de produtos digitais para sistemas complexos.' })).toBeInTheDocument();
    const hero = screen.getByRole('region', { name: /apresentação/i });
    expect(within(hero).getByText('Senior Product Designer')).toBeInTheDocument();
    expect(within(hero).getByRole('button', { name: 'Abrir currículo de Nelson Secco em português' })).toHaveClass('text-link', 'hero__resume-link');
    expect(within(hero).getByText('Currículo')).toBeInTheDocument();
    expect(within(hero).queryByText('Senior Product Designer & UX Consultant')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Projetos em destaque' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Página inicial — N3LX' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Vamos conversar pelo WhatsApp' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Português' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Inglês' })).toHaveAttribute('href', '/en');
    expect(screen.getByRole('link', { name: /horizon his/i })).toHaveAttribute('href', '/projetos/horizon-his');
    expect(screen.getByRole('link', { name: /subiter/i })).toHaveAttribute('href', '/projetos/subiter');
    expect(screen.getAllByText('Ver projeto')).toHaveLength(4);
    expect(screen.getByRole('link', { name: 'Ver projeto HORIZON HIS' })).toHaveAttribute('href', '/projetos/horizon-his');
    expect(screen.getByRole('link', { name: 'Ver projeto SUBITER' })).toHaveAttribute('href', '/projetos/subiter');
    expect(screen.getByRole('link', { name: 'Ver projeto REDE DCC 1.0' })).toHaveAttribute('href', '/projetos/rede-dcc');
    expect(screen.getByRole('link', { name: 'Ver projeto DASA \u2014 Canal do Consultor' })).toHaveAttribute('href', '/projetos/dasa-canal-do-consultor');
    expect(screen.getByText('Representação editorial')).toBeInTheDocument();
    const aboutSection = screen.getByRole('region', { name: /sobre/i });
    expect(within(aboutSection).getByText('Perfil profissional')).toBeInTheDocument();
    expect(within(aboutSection).getByText('Senior Product Designer')).toBeInTheDocument();
    expect(within(aboutSection).getByText('UX Consultant')).toBeInTheDocument();
    expect(within(aboutSection).getByText('Produto × Engenharia')).toBeInTheDocument();
    expect(within(aboutSection).getByText(/produtos digitais e sistemas complexos com atuação hands-on em entrega/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/projetos independentes com foco em estratégia de ux/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/continuidade entre decisões de produto e implementação/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/sou nelson secco, senior product designer/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/também atuo como ux consultant em projetos independentes/i)).toBeInTheDocument();
    expect(within(aboutSection).getByText(/n3lx digital business é a estrutura empresarial/i)).toBeInTheDocument();
    expect(within(aboutSection).getByRole('link', { name: 'Ouvir N3LX no Spotify ↗' })).toHaveClass('text-link', 'text-link--hit-area');
    expect(screen.getByRole('link', { name: 'Ver como foi construído →' })).toHaveClass('text-link', 'text-link--hit-area');
    expect(screen.getByRole('link', { name: 'Ver como foi construído →' })).toHaveAttribute('href', '/construindo-este-portfolio');
    const contactSection = screen.getByRole('region', { name: /vamos construir algo relevante/i });
    expect(within(contactSection).getByText(/uma oportunidade em Product Design ou um projeto de consultoria em UX/i)).toBeInTheDocument();
    const whatsappLink = within(contactSection).getByRole('link', { name: 'Fale comigo pelo WhatsApp' });
    expect(whatsappLink).toHaveAttribute('href', getWhatsAppContactUrl('pt-BR'));
    expect(whatsappLink.querySelector('[data-icon="send"]')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByRole('link', { name: 'Vamos conversar pelo WhatsApp' }).querySelector('[data-icon="send"]')).toHaveAttribute('aria-hidden', 'true');
    expect(document.querySelectorAll('[data-icon="send"]')).toHaveLength(2);
    expect(within(contactSection).queryByRole('navigation', { name: /links secundários de contato/i })).not.toBeInTheDocument();
    expect(within(contactSection).queryByRole('link', { name: /nelsonseccofilho@gmail.com/i })).not.toBeInTheDocument();
    expect(within(contactSection).queryByRole('link', { name: 'LinkedIn' })).not.toBeInTheDocument();
    expect(within(contactSection).queryByRole('link', { name: 'GitHub' })).not.toBeInTheDocument();
    expect(within(contactSection).queryByRole('link', { name: 'Abrir currículo de Nelson Secco em português' })).not.toBeInTheDocument();
    expect(within(contactSection).queryByRole('link', { name: 'Privacidade' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Alternar tema' })).toBeInTheDocument();
  });

  it.each([
    ['pt-BR', 'Voltar ao topo', '↑ Topo'],
    ['en', 'Back to top', '↑ Top'],
  ] as const)('reuses the localized BackToTop behavior on the %s Home', (locale, accessibilityLabel, visibleLabel) => {
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
    const initialLocation = window.location.href;

    render(<HomePage locale={locale} />);

    expect(screen.queryByRole('button', { name: accessibilityLabel })).not.toBeInTheDocument();
    setScrollY(600);

    const backToTop = screen.getByRole('button', { name: accessibilityLabel });
    expect(backToTop).toHaveTextContent(visibleLabel);
    expect(screen.getAllByRole('button', { name: accessibilityLabel })).toHaveLength(1);

    fireEvent.click(backToTop);
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    expect(window.location.href).toBe(initialLocation);
  });

  it('WhatsApp CTA message is localized to Portuguese in PT-BR Home', () => {
    render(<HomePage locale="pt-BR" />);

    const headerWhatsappLink = screen.getByRole('link', { name: 'Vamos conversar pelo WhatsApp' });
    const contactWhatsappLink = screen.getByRole('link', { name: 'Fale comigo pelo WhatsApp' });

    // Both Header and Contact use the same phone number
    expect(headerWhatsappLink.getAttribute('href')).toContain('5512981241764');
    expect(contactWhatsappLink.getAttribute('href')).toContain('5512981241764');

    // Both contain the Portuguese message (decoded)
    const ptMessage = 'Olá Nelson, vi seu portfólio e gostaria de conversar sobre um projeto.';
    expect(decodeURIComponent(new URL(headerWhatsappLink.getAttribute('href')!).searchParams.get('text')!)).toBe(ptMessage);
    expect(decodeURIComponent(new URL(contactWhatsappLink.getAttribute('href')!).searchParams.get('text')!)).toBe(ptMessage);
  });

  it('WhatsApp CTA message is localized to English in EN Home', () => {
    render(<HomePage locale="en" />);

    const headerWhatsappLink = screen.getByRole('link', { name: "Let\u2019s talk on WhatsApp" });
    const contactWhatsappLink = screen.getByRole('link', { name: /talk to me on whatsapp/i });

    // Both Header and Contact use the same phone number
    expect(headerWhatsappLink.getAttribute('href')).toContain('5512981241764');
    expect(contactWhatsappLink.getAttribute('href')).toContain('5512981241764');

    // Both contain the English message (decoded)
    const enMessage = "Hi Nelson, I saw your portfolio and I'd like to talk about a project.";
    expect(decodeURIComponent(new URL(headerWhatsappLink.getAttribute('href')!).searchParams.get('text')!)).toBe(enMessage);
    expect(decodeURIComponent(new URL(contactWhatsappLink.getAttribute('href')!).searchParams.get('text')!)).toBe(enMessage);
  });
});
