import type { HomeContent } from '../types';

export const ptBRHome = {
  metadata: {
    title: 'Nelson Secco — Senior Product Designer & UX Consultant',
    description: 'Senior Product Designer com background em desenvolvimento de software, também atuando como UX Consultant entre Design, Produto e Engenharia.',
  },
  hero: {
    name: 'Nelson Secco',
    eyebrow: 'Senior Product Designer',
    title: 'Design de produtos digitais para sistemas complexos.',
    description: 'Senior Product Designer com background em desenvolvimento de software, atuando de forma hands-on entre Design, Produto e Engenharia.',
    disciplines: ['Estratégia de UX', 'Product Discovery', 'Design Systems', 'Product Design assistido por IA'],
  },
  featuredCases: {
    title: 'Projetos em destaque',
    actionLabel: 'Ver projeto',
    projects: [
      {
        routeId: 'horizon-his',
        description: 'Protótipo navegável de alta fidelidade para um sistema de informação hospitalar complexo, validado com stakeholders clínicos e especialistas do domínio e apresentado na Hospitalar 2025.',
        tags: ['UX Lead / Product Designer', 'Healthtech', 'Estratégia de Produto'],
        tagsLabel: 'Tags do HORIZON HIS',
        image: { alt: 'Interface do protótipo de um sistema de informação hospitalar mostrando o fluxo de triagem e painéis com dados clínicos gerados.' },
      },
      {
        routeId: 'subiter',
        description: 'Liderança de Product Design para uma plataforma de inspeção em produção que conecta fluxos operacionais, rastreabilidade e revisão assistida por IA.',
        tags: ['UX Lead / Senior Product Designer', 'Deep Tech / Inspeção Industrial', 'Fluxos assistidos por IA'],
        tagsLabel: 'Tags do SUBITER',
        image: { alt: 'Composição editorial de interface com grade do fluxo de inspeção, linha de tendência e painéis de resumo da revisão.' },
      },
      {
        routeId: 'rede-dcc',
        description: 'Design de interação para uma escolha financeira em uma jornada de pagamento com estados transacionais, pontos de decisão e tratamento de exceções.',
        tags: ['Senior Product Designer', 'Pagamentos / Dynamic Currency Conversion', 'Design de Interação'],
        tagsLabel: 'Tags do REDE DCC 1.0',
        image: { alt: 'Composição de interfaces de pagamento mostrando estados do fluxo de transação e telas de confirmação.' },
      },
      {
        routeId: 'dasa-canal-do-consultor',
        description: 'Product Design orientado por discovery, traduzindo pesquisa em regras de negócio para uma jornada complexa de agendamento de consultores e uma estrutura de decisão de produto.',
        tags: ['Product Designer', 'Healthtech', 'Pesquisa e Regras de Negócio'],
        tagsLabel: 'Tags do DASA — Canal do Consultor',
        image: { alt: 'Representação editorial de uma jornada de consulta que traduz pesquisa em regras de decisão e estratégia de produto.' },
      },
    ],
  },
  selectedWork: {
    eyebrow: 'Trabalho selecionado',
    title: 'Design systems para mobilidade',
    description: 'Estudos de UI responsiva e design system para ConnectCar / Freeflow.',
    provenanceLabel: 'Representação editorial',
    tags: ['Mobilidade', 'UI Responsiva', 'Design Systems'],
    image: { alt: 'Representação editorial de estudos de componentes responsivos e referências de design system para ConnectCar / Freeflow.' },
  },
  seniority: {
    eyebrow: 'Como eu trabalho',
    title: 'Da descoberta à entrega',
    pillars: [
      { title: 'Discovery', description: 'Uso pesquisa, síntese e crítica para reduzir ambiguidades e aprimorar escolhas de produto.' },
      { title: 'Estratégia', description: 'Alinho intenção de produto, contexto do serviço e necessidades das pessoas para orientar decisões de produto e interface.' },
      { title: 'Sistemas Complexos', description: 'Traduzo fluxos intrincados em estruturas de produto coerentes e legíveis.' },
      { title: 'Design Systems', description: 'Construo padrões reutilizáveis que escalam entre equipes, pontos de contato e evoluções futuras do produto.' },
      { title: 'Entrega', description: 'Transformo conceitos em decisões prontas para entrega, com handoff claro e suporte à implementação.' },
    ],
  },
  about: {
    eyebrow: 'Perfil profissional',
    title: 'Sobre',
    positioning: [
      { title: 'Senior Product Designer', description: 'Produtos digitais e sistemas complexos com atuação hands-on em entrega.' },
      { title: 'UX Consultant', description: 'Projetos independentes com foco em estratégia de UX, discovery e direção de produto.' },
      { title: 'Produto × Engenharia', description: 'Continuidade entre decisões de produto e implementação com times multidisciplinares.' },
    ],
    highlights: ['Senior Product Designer', 'UX Consultant em projetos independentes', 'Design × Produto × Engenharia'],
    paragraphs: [
      'Sou Nelson Secco, Senior Product Designer, e também atuo como UX Consultant em projetos independentes. Trabalho na interseção entre Design, Produto e Engenharia. Minha trajetória combina experiência em UX e Product Design com um background em desenvolvimento de software, o que me permite compreender tanto a experiência que queremos criar quanto as condições técnicas necessárias para transformá-la em produto.',
      'Atuo de forma hands-on em produtos e sistemas complexos: investigo contextos, estruturo fluxos e regras, desenho interfaces e colaboro de perto com Engenharia até a implementação. Meu papel não é substituir especialidades, mas criar continuidade entre decisões de produto, qualidade da experiência e viabilidade técnica.',
      'Hoje também exploro uma forma de trabalho em que Design e implementação acontecem cada vez mais próximos, usando IA para apoiar análise, prototipação, desenvolvimento e validação. As ferramentas aceleram a execução, mas decisões, revisão crítica e critérios de qualidade continuam humanos. Este próprio portfólio foi construído dessa forma e é uma evidência prática de como trabalho hoje.',
    ],
    businessContext: 'Minha trajetória inclui produtos para Embraer, Santander, Bradesco, DASA, REDE, ConnectCar e Salux, além de startups como Subiter, TerraMagna e NOALVO, reconhecidas no 100 Startups to Watch, da revista PEGN. N3LX Digital Business é a estrutura empresarial pela qual conduzo projetos independentes de Product Design e consultoria em UX.',
    artisticEyebrow: 'Além de produto e tecnologia',
    artisticCopy: 'Fora do trabalho com produtos digitais, também componho e produzo música autoral como N3LX — outro espaço onde exploro criatividade, experimentação e construção.',
    artisticActionLabel: 'Ouvir N3LX no Spotify ↗',
  },
  metaCase: {
    eyebrow: 'Por trás deste portfólio',
    title: 'Este portfólio também é um produto.',
    description: 'Concebido e construído diretamente em código, ele evoluiu por ciclos de decisão, implementação, revisão humana, testes e validação em produção — conectando Product Design, Engenharia e desenvolvimento assistido por IA.',
    primaryActionLabel: 'Ver como foi construído →',
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Vamos construir algo relevante.',
    description: 'Tem um desafio complexo de produto, uma oportunidade em Product Design ou um projeto de consultoria em UX? Vamos conversar.',
    primaryActionLabel: 'Fale comigo pelo WhatsApp',
  },
  accessibility: {
    home: 'Página inicial — N3LX', mainNavigation: 'Navegação principal', caseNavigation: 'Navegação do estudo de caso',
    featuredCases: 'Projetos em destaque', secondaryContactLinks: 'Links secundários de contato', hero: 'Apresentação',
    professionalDisciplines: 'Disciplinas profissionais', selectedWorkTags: 'Tags do ConnectCar / Freeflow',
    seniority: 'Senioridade e proposta de valor', about: 'Sobre', contact: 'Contato',
  },
} as const satisfies HomeContent;
