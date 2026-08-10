import type { DictionaryByLocale } from '@/content/i18n/types';

export const subiterSharedFacts = {
  routeId: 'subiter',
  projectName: 'SUBITER',
  companyName: 'Subiter',
  domain: 'Deep Tech / Industrial Inspection',
  period: '2025–2026',
  productName: 'Subiter Web Portal',
  aiAssistantName: 'Marina',
  status: 'Production',
  articleTitle: 'Portal Web da Subiter: Rastreabilidade e inteligência na indústria 4.0',
  articleUrl: 'https://www.subiter.com/post/portal-web-da-subiter-rastreabilidade-e-intelig%C3%AAncia-na-ind%C3%BAstria-4-0',
  delfinaUrl: 'https://www.expeditions.com/ships/national-geographic-delfina',
  operationLocation: 'Ecuador',
  operationAssetName: 'National Geographic Delfina',
  operationRegion: 'Galápagos',
  heroImage: {
    width: 1920,
    height: 1080,
    light: {
      640: '/assets/projects/subiter/cover/light/cover-640.webp',
      1024: '/assets/projects/subiter/cover/light/cover-1024.webp',
      1440: '/assets/projects/subiter/cover/light/cover-1440.webp',
      1920: '/assets/projects/subiter/cover/light/cover-1920.webp',
    },
    dark: {
      640: '/assets/projects/subiter/cover/dark/cover-640.webp',
      1024: '/assets/projects/subiter/cover/dark/cover-1024.webp',
      1440: '/assets/projects/subiter/cover/dark/cover-1440.webp',
      1920: '/assets/projects/subiter/cover/dark/cover-1920.webp',
    },
  },
  assets: {
    inspectionMap: '/assets/projects/subiter/editorial/inspection-map-1400.webp',
    postInspectionFlow: '/assets/projects/subiter/editorial/post-inspection-flow-1400.webp',
    aiReview: '/assets/projects/subiter/editorial/ai-review-1400.webp',
  },
} as const;

type SubiterCaseLocalizedContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    metadata: readonly {
      label: string;
      value: string;
    }[];
    imageAlt: string;
  };
  sections: {
    context: {
      title: string;
      intro: string;
      paragraph: string;
    };
    challenge: {
      title: string;
      intro: string;
      paragraph: string;
    };
    role: {
      title: string;
      intro: string;
      responsibilitiesLabel: string;
      responsibilities: readonly string[];
    };
    users: {
      title: string;
      usersLabel: string;
      bullets: readonly {
        label: string;
        description: string;
      }[];
    };
    productStructure: {
      title: string;
      intro: string;
      imageAlt: string;
      caption: string;
    };
    inspectionLifecycle: {
      title: string;
      intro: string;
      imageAlt: string;
      caption: string;
    };
    marina: {
      title: string;
      intro: string;
      paragraph: string;
      imageAlt: string;
      caption: string;
    };
    aiAssistedProductWork: {
      title: string;
      intro: string;
      paragraph: string;
    };
    designContinuity: {
      title: string;
      intro: string;
      paragraph: string;
    };
    production: {
      title: string;
      intro: string;
      paragraph: string;
    };
    internationalOperation: {
      title: string;
      intro: string;
      paragraph: string;
      linkLabel: string;
    };
    outcome: {
      title: string;
      intro: string;
      paragraph: string;
    };
    publishedPerspective: {
      title: string;
      intro: string;
      articleTitle: string;
      linkLabel: string;
    };
    learning: {
      title: string;
      intro: string;
      paragraph: string;
    };
  };
};

export const subiterCaseContent = {
  'pt-BR': {
    hero: {
      eyebrow: subiterSharedFacts.projectName,
      title: 'Transformando complexidade operacional em uma experiência estruturada de inspeção',
      description:
        'Liderança de Product Design para uma plataforma web em produção que conecta dados de inspeção, rastreabilidade, IA e gestão operacional.',
      metadata: [
        { label: 'Papel', value: 'UX Lead / Senior Product Designer' },
        { label: 'Domínio', value: 'Deep Tech / Inspeção Industrial' },
        { label: 'Período', value: subiterSharedFacts.period },
        { label: 'Produto', value: subiterSharedFacts.productName },
        { label: 'IA', value: 'Marina — AI Assistant' },
        { label: 'Status', value: 'Produção' },
      ],
      imageAlt: 'Composição editorial de interface com grade de fluxo de inspeção, linha de tendência e painéis de resumo de revisão.',
    },
    sections: {
      context: {
        title: 'De dados de inspeção para gestão operacional',
        intro:
          'A Subiter é uma deep-tech que atua com tecnologias avançadas de inspeção para ativos industriais complexos. À medida que seu ecossistema digital evoluiu, o Web Portal se tornou uma camada importante para conectar dados de inspeção, relatórios, histórico de ativos e gestão operacional.',
        paragraph: 'Este case foca em estrutura de produto, continuidade e usabilidade operacional.',
      },
      challenge: {
        title: 'Ir além de relatórios de inspeção estáticos',
        intro:
          'As informações de inspeção precisavam atender diferentes pessoas ao longo da operação — clientes, inspetores e gestão — mantendo-se compreensíveis, rastreáveis e úteis além da entrega de um relatório isolado.',
        paragraph:
          'O desafio foi evoluir a experiência digital ao redor do ciclo de vida da inspeção, conectando necessidades operacionais, prioridades de negócio e viabilidade técnica.',
      },
      role: {
        title: 'Liderança de design hands-on da estrutura à entrega',
        intro:
          'Como UX Lead / Senior Product Designer, atuei de forma hands-on em estratégia de produto e execução de UX/UI para os produtos digitais da Subiter.',
        responsibilitiesLabel: 'Minhas responsabilidades incluíram:',
        responsibilities: [
          'evoluir o Web Portal',
          'estruturar arquitetura da informação e fluxos de usuário',
          'desenhar interfaces e padrões visuais',
          'aprimorar documentação do produto',
          'desenvolver componentes reutilizáveis e práticas de Design System',
          'apoiar priorização junto a Engenharia, especialistas de inspeção e liderança da empresa',
        ],
      },
      users: {
        title: 'Design para todo o ecossistema de inspeção',
        usersLabel: 'Perfis de usuários da Subiter',
        bullets: [
          {
            label: 'Clientes:',
            description: 'Acesso a informações, histórico e resultados relacionados às inspeções.',
          },
          {
            label: 'Inspetores / Time interno:',
            description: 'Fluxos operacionais de inspeção e gestão das informações de inspeção.',
          },
          {
            label: 'Gestão:',
            description: 'Visibilidade sobre ativos, dados operacionais e atividade de inspeção.',
          },
        ],
      },
      productStructure: {
        title: 'Dar estrutura a um sistema operacional complexo',
        intro:
          'Uma parte importante do trabalho de design envolveu traduzir processos de inspeção em uma estrutura digital coerente: ativos, inspeções, reinspeções, relatórios, usuários e informações operacionais precisavam funcionar juntos como parte do mesmo ecossistema de produto.',
        imageAlt: 'Representação editorial de um mapa de inspeção com ativos industriais e informações operacionais conectadas.',
        caption: 'Representação editorial, não uma captura literal do produto.',
      },
      inspectionLifecycle: {
        title: 'Conectando o ciclo de vida da inspeção',
        intro:
          'A experiência foi desenhada com foco em continuidade, não em entregáveis isolados. Resultados de inspeção podiam se tornar parte do histórico de um ativo, criando uma camada persistente de informação para apoiar inspeções futuras, relatórios e visibilidade operacional.',
        imageAlt: 'Representação editorial de um fluxo pós-inspeção em múltiplas etapas conectando registros e acompanhamento operacional.',
        caption: 'Representação editorial.',
      },
      marina: {
        title: 'Introduzindo Marina — IA dentro do produto',
        intro:
          'Com a evolução do Portal, a Marina foi introduzida como assistente de IA da Subiter, trazendo suporte conversacional para dentro da experiência do produto.',
        paragraph:
          'A Marina foi desenhada para apoiar usuários e gestão dentro do ecossistema de inspeção, ajudando a tornar informações complexas mais acessíveis e úteis durante fluxos operacionais.',
        imageAlt: 'Representação editorial de revisão assistida por IA integrada às operações de inspeção.',
        caption: 'Representação editorial. A Marina apoia fluxos de decisão e não substitui decisões humanas.',
      },
      aiAssistedProductWork: {
        title: 'Uso de IA além da interface',
        intro:
          'A IA também passou a fazer parte do fluxo mais amplo de produto, apoiando atividades como otimização de relatórios, imagens de embarcações, criação de tarefas, definição de regras de negócio e documentação de processos.',
        paragraph:
          'O objetivo não era substituir decisões de produto, mas usar IA como acelerador, mantendo conhecimento de domínio, julgamento de design e validação operacional no loop.',
      },
      designContinuity: {
        title: 'Construindo consistência enquanto o produto evoluía',
        intro:
          'Com a maturidade do produto, componentes reutilizáveis, padrões de interface, documentação e práticas de Design System ajudaram a estabelecer maior consistência e continuidade na experiência digital.',
        paragraph:
          'Essa base também melhorou a comunicação entre Product Design e Engenharia à medida que novas iniciativas eram priorizadas e entregues.',
      },
      production: {
        title: 'De decisões de design para um produto em operação',
        intro:
          'O Web Portal e as melhorias na experiência de relatórios de inspeção foram entregues em produção e passaram a integrar o ecossistema operacional de produto da Subiter.',
        paragraph:
          'Essa entrega conectou Web Portal e experiência de relatórios de inspeção dentro do mesmo ecossistema operacional.',
      },
      internationalOperation: {
        title: 'Apoiando uma operação internacional real de inspeção',
        intro:
          'Com a evolução das capacidades digitais e operacionais da Subiter, a empresa avançou para operações mais complexas, incluindo uma operação internacional no Ecuador envolvendo a inspeção do National Geographic Delfina.',
        paragraph:
          'O trabalho conectou o produto digital a um contexto real de inspeção além do Brasil, envolvendo um catamarã de expedição de luxo em operação nas Galápagos.',
        linkLabel: 'Ver National Geographic Delfina →',
      },
      outcome: {
        title: 'Uma base digital mais sólida para operações cada vez mais complexas',
        intro:
          'O trabalho ajudou a consolidar uma base digital mais estruturada para as operações de inspeção da Subiter, conectando experiência de produto, relatórios, rastreabilidade e IA em ambiente de produção.',
        paragraph:
          'A contribuição também foi formalmente reconhecida pela empresa pela organização, atenção aos detalhes, colaboração e apoio à continuidade do produto.',
      },
      publishedPerspective: {
        title: 'Escrevendo sobre o produto',
        intro:
          'Escrevi um artigo para a Subiter apresentando a visão de produto por trás do Web Portal e como dados de inspeção, rastreabilidade, experiência do usuário e IA se conectam na plataforma.',
        articleTitle: subiterSharedFacts.articleTitle,
        linkLabel: 'Ler o artigo no site da Subiter →',
      },
      learning: {
        title: 'Projetar onde produtos digitais encontram operações físicas',
        intro:
          'Trabalhar na Subiter reforçou que projetar produtos B2B complexos exige mais do que simplificar interfaces. Exige entender a operação por trás delas — pessoas, regras, dados e restrições do mundo físico — e traduzir essa complexidade em um sistema que as pessoas consigam realmente usar.',
        paragraph: 'Reflexão autoral, não uma claim de métrica de performance.',
      },
    },
  },
  en: {
    hero: {
      eyebrow: subiterSharedFacts.projectName,
      title: 'Turning operational complexity into a structured inspection experience',
      description:
        'Product Design leadership for a production web platform connecting inspection data, traceability, AI and operational management.',
      metadata: [
        { label: 'Role', value: 'UX Lead / Senior Product Designer' },
        { label: 'Domain', value: subiterSharedFacts.domain },
        { label: 'Period', value: subiterSharedFacts.period },
        { label: 'Product', value: subiterSharedFacts.productName },
        { label: 'AI', value: 'Marina — AI Assistant' },
        { label: 'Status', value: subiterSharedFacts.status },
      ],
      imageAlt: 'Editorial interface composition with inspection workflow grid, trend line and review summary panels.',
    },
    sections: {
      context: {
        title: 'From inspection data to operational management',
        intro:
          'Subiter is a deep-tech company working with advanced inspection technologies for complex industrial assets. As its digital ecosystem evolved, the Web Portal became an important layer connecting inspection data, reports, asset history and operational management.',
        paragraph: 'This case focuses on product structure, continuity and operational usability.',
      },
      challenge: {
        title: 'Moving beyond static inspection reports',
        intro:
          'Inspection information needed to serve different people across the operation — clients, inspectors and management — while remaining understandable, traceable and useful beyond the delivery of an individual report.',
        paragraph:
          'The challenge was to evolve the digital experience around the inspection lifecycle, connecting operational needs, business priorities and technical feasibility.',
      },
      role: {
        title: 'Hands-on design leadership from structure to delivery',
        intro:
          'As UX Lead / Senior Product Designer, I worked hands-on across product strategy and UX/UI execution for Subiter\'s digital products.',
        responsibilitiesLabel: 'My responsibilities included:',
        responsibilities: [
          'evolving the Web Portal',
          'structuring information architecture and user flows',
          'designing interfaces and visual patterns',
          'improving product documentation',
          'developing reusable components and Design System practices',
          'supporting prioritization alongside Engineering, inspection specialists and company leadership',
        ],
      },
      users: {
        title: 'Designing across the inspection ecosystem',
        usersLabel: 'Subiter user groups',
        bullets: [
          {
            label: 'Clients:',
            description: 'Access to information, history and results related to inspections.',
          },
          {
            label: 'Inspectors / Internal team:',
            description: 'Operational inspection workflows and management of inspection information.',
          },
          {
            label: 'Management:',
            description: 'Visibility across assets, operational data and inspection activity.',
          },
        ],
      },
      productStructure: {
        title: 'Giving structure to a complex operational system',
        intro:
          'A significant part of the design work involved translating inspection processes into a coherent digital structure: assets, inspections, re-inspections, reports, users and operational information needed to work together as part of the same product ecosystem.',
        imageAlt: 'Editorial representation of an inspection map with industrial assets and connected operational information.',
        caption: 'Editorial representation, not a literal product screenshot.',
      },
      inspectionLifecycle: {
        title: 'Connecting the inspection lifecycle',
        intro:
          'The experience was designed around continuity rather than isolated deliverables. Inspection results could become part of an asset\'s history, creating a persistent layer of information that supported follow-up inspections, reporting and operational visibility.',
        imageAlt: 'Editorial representation of a multi-step post-inspection flow connecting records and operational follow-up.',
        caption: 'Editorial representation.',
      },
      marina: {
        title: 'Introducing Marina — AI inside the product',
        intro:
          'As the Portal evolved, Marina was introduced as Subiter\'s AI assistant, bringing conversational assistance into the product experience.',
        paragraph:
          'Marina was designed to support users and management within the inspection ecosystem, helping make complex information more accessible and useful during operational workflows.',
        imageAlt: 'Editorial representation of AI-assisted review integrated into inspection operations.',
        caption: 'Editorial representation. Marina supports decision-making workflows and does not replace human decisions.',
      },
      aiAssistedProductWork: {
        title: 'Using AI beyond the interface',
        intro:
          'AI also became part of the broader product workflow, supporting activities such as report optimization, vessel imagery, task creation, business-rule definition and process documentation.',
        paragraph:
          'The goal was not to replace product decisions, but to use AI as an accelerator while keeping domain knowledge, design judgment and operational validation in the loop.',
      },
      designContinuity: {
        title: 'Building consistency while the product evolved',
        intro:
          'As the product matured, reusable components, interface patterns, documentation and Design System practices helped establish greater consistency and continuity across the digital experience.',
        paragraph:
          'This foundation also improved communication between Product Design and Engineering as new initiatives were prioritized and delivered.',
      },
      production: {
        title: 'From design decisions to a live product',
        intro:
          'The Web Portal and improvements to the inspection-report experience were delivered to production and became part of Subiter\'s operational product ecosystem.',
        paragraph:
          'This delivery connected the Web Portal and inspection-report experience within the same operational ecosystem.',
      },
      internationalOperation: {
        title: 'Supporting a real international inspection operation',
        intro:
          'As Subiter\'s digital and operational capabilities evolved, the company expanded into more complex engagements, including an international operation in Ecuador involving the inspection of the National Geographic Delfina.',
        paragraph:
          'The engagement connected the digital product work to a real-world inspection context beyond Brazil, involving a luxury expedition catamaran operating in the Galápagos.',
        linkLabel: 'View National Geographic Delfina →',
      },
      outcome: {
        title: 'A stronger digital foundation for increasingly complex operations',
        intro:
          'The work helped establish a more structured digital foundation around Subiter\'s inspection operations — connecting product experience, reporting, traceability and AI in a production environment.',
        paragraph:
          'The contribution was also formally recognized by the company for organization, attention to detail, collaboration and support for product continuity.',
      },
      publishedPerspective: {
        title: 'Writing about the product',
        intro:
          'I wrote an article for Subiter presenting the product vision behind the Web Portal and how inspection data, traceability, user experience and AI come together within the platform.',
        articleTitle: subiterSharedFacts.articleTitle,
        linkLabel: 'Read the article on Subiter\'s website →',
      },
      learning: {
        title: 'Designing where digital products meet physical operations',
        intro:
          'Working on Subiter reinforced that designing complex B2B products requires more than simplifying interfaces. It requires understanding the operation behind them — its people, rules, data and physical-world constraints — and translating that complexity into a system people can actually use.',
        paragraph: 'Author reflection, not a performance metric claim.',
      },
    },
  },
} as const satisfies DictionaryByLocale<SubiterCaseLocalizedContent>;
