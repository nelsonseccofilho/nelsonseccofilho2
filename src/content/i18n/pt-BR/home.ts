import type { HomeContent } from '../types';

export const ptBRHome = {
  metadata: {
    title: 'N3LX | Senior Product Designer',
    description: 'Product Design para sistemas digitais complexos, da estratégia e descoberta à entrega.',
  },
  hero: {
    eyebrow: 'Senior Product Designer',
    title: 'Design de produtos digitais para sistemas complexos.',
    description: 'Conecto estratégia de produto, UX e tecnologia para transformar problemas complexos em experiências digitais claras e escaláveis.',
    disciplines: ['Estratégia de UX', 'Product Discovery', 'Design Systems', 'Product Design assistido por IA'],
  },
  featuredCases: {
    title: 'Cases em destaque',
    projects: [
      {
        routeId: 'horizon-his',
        description: 'Protótipo navegável de alta fidelidade para um sistema de informação hospitalar complexo, validado com stakeholders clínicos e especialistas do domínio e apresentado na Hospitalar 2025.',
        tags: ['Healthtech', 'Liderança em UX', 'Estratégia de Produto'],
        tagsLabel: 'Tags do HORIZON HIS',
        image: { alt: 'Interface do protótipo de um sistema de informação hospitalar mostrando o fluxo de triagem e painéis com dados clínicos gerados.' },
      },
      {
        routeId: 'subiter',
        description: 'Liderança de Product Design para uma plataforma de inspeção em produção que conecta fluxos operacionais, rastreabilidade e revisão assistida por IA.',
        tags: ['Sistemas Complexos', 'Inspeções', 'Fluxos assistidos por IA'],
        tagsLabel: 'Tags do SUBITER',
        image: { alt: 'Composição editorial de interface com grade do fluxo de inspeção, linha de tendência e painéis de resumo da revisão.' },
      },
      {
        routeId: 'rede-dcc',
        description: 'Design de interação para uma escolha financeira em uma jornada de pagamento com estados transacionais, pontos de decisão e tratamento de exceções.',
        tags: ['Pagamentos', 'Design de Interação', 'Estados Transacionais'],
        tagsLabel: 'Tags do REDE DCC 1.0',
        image: { alt: 'Composição de interfaces de pagamento mostrando estados do fluxo de transação e telas de confirmação.' },
      },
      {
        routeId: 'dasa-canal-do-consultor',
        description: 'Product Design orientado por discovery, traduzindo pesquisa em regras de negócio para uma jornada complexa de agendamento de consultores e uma estrutura de decisão de produto.',
        tags: ['Pesquisa e Discovery', 'Product Design', 'Regras de Negócio'],
        tagsLabel: 'Tags do DASA — Canal do Consultor',
        image: { alt: 'Representação editorial de uma jornada de consulta que traduz pesquisa em regras de decisão e estratégia de produto.' },
      },
    ],
  },
  selectedWork: {
    eyebrow: 'Trabalho selecionado',
    title: 'Design systems para mobilidade',
    description: 'Estudos de UI responsiva e design system para ConnectCar / Freeflow. A capa é uma representação editorial.',
    tags: ['Mobilidade', 'UI Responsiva', 'Design Systems'],
    image: { alt: 'Representação editorial de estudos de componentes responsivos e referências de design system para ConnectCar / Freeflow.' },
  },
  seniority: {
    eyebrow: 'Como eu trabalho',
    title: 'Da estratégia à entrega',
    pillars: [
      { title: 'Estratégia', description: 'Alinho intenção de produto, contexto do serviço e necessidades das pessoas para orientar decisões de produto e interface.' },
      { title: 'Sistemas Complexos', description: 'Traduzo fluxos intrincados em estruturas de produto coerentes e legíveis.' },
      { title: 'Entrega', description: 'Transformo conceitos em decisões prontas para entrega, com handoff claro e suporte à implementação.' },
      { title: 'Discovery', description: 'Uso pesquisa, síntese e crítica para reduzir ambiguidades e aprimorar escolhas de produto.' },
      { title: 'Design Systems', description: 'Construo padrões reutilizáveis que escalam entre equipes, pontos de contato e evoluções futuras do produto.' },
    ],
  },
  about: {
    title: 'Sobre',
    paragraphs: [
      'Sou Senior Product Designer com mais de 12 anos de experiência na construção de produtos digitais e mais de 8 anos dedicados a UX e Product Design.',
      'Atuo de forma hands-on do Discovery à entrega, transformando problemas complexos, regras de negócio e necessidades de usuários em experiências claras, consistentes e viáveis — conectando Design, Produto e Engenharia.',
      'Ao longo da minha trajetória, trabalhei em produtos para empresas como Embraer, Santander, Bradesco, DASA, REDE, ConnectCar e Salux, além de startups como TerraMagna e NOALVO, posteriormente reconhecidas entre as 100 Startups to Watch.',
      'Meu background em Front-end e o uso de IA e automação complementam minha prática de Design, permitindo explorar, prototipar e validar soluções com maior velocidade sem abrir mão do pensamento crítico e da qualidade da experiência.',
    ],
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Vamos construir algo relevante.',
    description: 'Tem um desafio complexo de produto ou uma oportunidade de colaboração? Vamos conversar.',
    primaryActionLabel: 'Fale comigo pelo WhatsApp',
  },
  accessibility: {
    home: 'Página inicial — N3LX', mainNavigation: 'Navegação principal', caseNavigation: 'Navegação do estudo de caso',
    featuredCases: 'Cases em destaque', secondaryContactLinks: 'Links secundários de contato', hero: 'Apresentação',
    professionalDisciplines: 'Disciplinas profissionais', selectedWorkTags: 'Tags do ConnectCar / Freeflow',
    seniority: 'Senioridade e proposta de valor', about: 'Sobre', contact: 'Contato',
  },
} as const satisfies HomeContent;