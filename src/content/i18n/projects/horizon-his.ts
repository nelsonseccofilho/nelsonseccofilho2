import type { DictionaryByLocale } from '@/content/i18n/types';

export const horizonHisSharedFacts = {
  routeId: 'horizon-his',
  projectName: 'HORIZON HIS',
  companyName: 'SALUX',
  year: '2025',
  eventName: 'Hospitalar 2025',
  establishedPlatforms: ['MV', 'Tasy'] as const,
} as const;

type HorizonHisCaseLocalizedContent = {
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
      bullets: readonly string[];
    };
    journeys: {
      title: string;
      intro: string;
      overviewAlt: string;
      overviewCaption: string;
      overviewParagraph: string;
      detailAlt: string;
    };
    choices: {
      title: string;
      intro: string;
      paragraph: string;
    };
    prototype: {
      title: string;
      intro: string;
      imageAlt: string;
    };
    validation: {
      title: string;
      intro: string;
      imageAlt: string;
      caption: string;
    };
    hospitalar: {
      title: string;
      intro: string;
      imageAlt: string;
      caption: string;
    };
    outcome: {
      title: string;
      intro: string;
      highlightsLabel: string;
      bullets: readonly string[];
    };
    learning: {
      title: string;
      intro: string;
      paragraph: string;
    };
  };
};

export const horizonHisCaseContent = {
  'pt-BR': {
    hero: {
      eyebrow: horizonHisSharedFacts.projectName,
      title: 'Transformando uma visão complexa de HIS em uma experiência de produto navegável',
      description: 'Protótipo navegável de alta fidelidade, conduzido por Product Design, para o próximo sistema de informação hospitalar da SALUX.',
      metadata: [
        { label: 'Papel', value: 'UX Lead / Product Designer' },
        { label: 'Domínio', value: 'Healthtech / Sistema de Informação Hospitalar' },
        { label: 'Ano', value: horizonHisSharedFacts.year },
        { label: 'Entregável', value: 'Protótipo navegável de alta fidelidade' },
        { label: 'Contexto', value: 'Apresentado na Hospitalar 2025' },
        { label: 'Status', value: 'Protótipo validado' },
      ],
      imageAlt: 'Composição editorial com a interface do protótipo HORIZON HIS em uma jornada clínica.',
    },
    sections: {
      context: {
        title: 'Próximo Sistema de Informação Hospitalar da SALUX',
        intro:
          'A SALUX precisava materializar sua visão para um novo Sistema de Informação Hospitalar em um mercado com plataformas estabelecidas, como MV e Tasy. O objetivo desta fase era tornar essa visão tangível o suficiente para ser experimentada, discutida, validada e apresentada antes do compromisso com uma implementação completa em produção.',
        paragraph: 'O trabalho começou com uma pergunta estratégica de produto, não com um roadmap de produção.',
      },
      challenge: {
        title: 'Tornar tangível uma visão ampla de HIS antes da implementação completa',
        intro:
          'Um sistema de informação hospitalar pode reunir um grande número de fluxos, perfis de usuário, estados e dependências. O desafio era decidir o que precisava existir no protótipo para que a visão de produto se tornasse concreta, navegável e apresentável para a Hospitalar 2025.',
        paragraph: 'A fase precisava manter o foco em clareza, não em escopo prematuro de build.',
      },
      role: {
        title: 'Responsabilidade de Product Design ponta a ponta',
        intro:
          'Atuei como UX Lead na SALUX e como Product Designer diretamente responsável pelo HORIZON HIS. Nenhum outro Product Designer estava dedicado ao HORIZON, enquanto os demais designers que eu liderava permaneceram focados em outras iniciativas da SALUX. Esse foco me permitiu concentrar na visão do HIS.',
        responsibilitiesLabel: 'Responsabilidades no HORIZON',
        bullets: [
          'Seleção de jornadas',
          'Estrutura da experiência',
          'UX',
          'UI',
          'Estratégia de componentes',
          'Construção do protótipo',
          'Apresentação da visão de produto',
        ],
      },
      journeys: {
        title: 'Seleção das jornadas que tornaram a visão compreensível',
        intro:
          'O objetivo não era reproduzir todos os fluxos possíveis de HIS. A decisão de Product Design foi identificar as jornadas e estados necessários para comunicar como o HORIZON deveria se comportar como uma experiência de produto coerente.',
        overviewAlt: 'Visão geral do journey map do HORIZON HIS mostrando múltiplos fluxos e estados de interface conectados.',
        overviewCaption: 'Visão geral do journey map usada para comunicar escala e fluxos de produto conectados.',
        overviewParagraph:
          'A visão geral estabelece a amplitude. Os detalhes abaixo destacam áreas selecionadas da experiência mapeada em tamanho legível.',
        detailAlt: 'Detalhe do journey map do HORIZON HIS mostrando estados de interface conectados.',
      },
      choices: {
        title: 'Construindo a experiência, não a infraestrutura ao redor dela',
        intro:
          'Um Design System completo intencionalmente não foi a prioridade desta fase. O foco foi construir a base de componentes reutilizáveis necessária para consistência, priorizar jornadas e prototipação e manter a iteração rápida.',
        paragraph: 'Essa foi uma decisão de Product Design específica da fase, não uma afirmação geral sobre design systems.',
      },
      prototype: {
        title: 'Projetando o produto antes de comprometer a construção',
        intro:
          'O protótipo navegável de alta fidelidade tornou o HIS futuro tangível. Ele apoiou a experiência dos fluxos propostos, a compreensão dos comportamentos, a discussão da direção de produto e a validação da experiência antes da implementação completa.',
        imageAlt: 'Tela do protótipo de triagem do HORIZON HIS com recepção, sinais vitais e dados gerados.',
      },
      validation: {
        title: 'Apresentado ao CEO como a experiência proposta para a Hospitalar',
        intro:
          'A abordagem e o protótipo foram apresentados ao CEO como a direção de Product Design prevista para a Hospitalar 2025. O objetivo foi demonstrar que a experiência pretendida poderia ser materializada e validada sem tornar a implementação completa o primeiro passo.',
        imageAlt: 'Slide de resultados do case HORIZON HIS mostrando o protótipo e a narrativa de apoio.',
        caption: 'Evidência da apresentação executiva.',
      },
      hospitalar: {
        title: 'A experiência de produto na Hospitalar 2025',
        intro:
          'O HORIZON foi apresentado na Hospitalar 2025. A SALUX posicionou o HORIZON como produto principal no evento, e os visitantes do espaço da SALUX puderam experimentar a visão de produto.',
        imageAlt: 'Protótipo de alta fidelidade e mapa de interação usados para validar a visão do HORIZON HIS.',
        caption: 'Evidência do protótipo de alta fidelidade e do mapa de interação.',
      },
      outcome: {
        title: 'Da visão abstrata para uma experiência de produto navegável',
        intro:
          'A SALUX passou de uma ambição abstrata de HIS para uma experiência de produto concreta, que podia ser navegada, discutida, validada e apresentada.',
        highlightsLabel: 'Principais resultados do HORIZON',
        bullets: [
          'Jornadas selecionadas estruturadas',
          'Interface coerente criada',
          'Base de componentes reutilizáveis focada',
          'Protótipo navegável entregue',
          'Discussão executiva apoiada',
          'Apresentação na Hospitalar viabilizada',
        ],
      },
      learning: {
        title: 'Prototipação de alta fidelidade como trabalho estratégico de produto',
        intro:
          'A prototipação de alta fidelidade pode ser uma ferramenta estratégica de Product Design quando a principal incerteza está na própria experiência de produto. Uma fase de produto nem sempre exige a infraestrutura máxima possível; exige o nível de estrutura necessário para responder à pergunta atual de produto.',
        paragraph: 'Esta é uma reflexão autoral, não uma claim de negócio.',
      },
    },
  },
  en: {
    hero: {
      eyebrow: horizonHisSharedFacts.projectName,
      title: 'Turning a complex HIS vision into a navigable product experience',
      description: 'Product Design-led prototype for SALUX\'s next hospital information system.',
      metadata: [
        { label: 'Role', value: 'UX Lead / Product Designer' },
        { label: 'Domain', value: 'Healthtech / Hospital Information System' },
        { label: 'Year', value: horizonHisSharedFacts.year },
        { label: 'Deliverable', value: 'High-fidelity navigable prototype' },
        { label: 'Context', value: 'Presented at Hospitalar 2025' },
        { label: 'Status', value: 'Validated prototype' },
      ],
      imageAlt: 'Editorial composition featuring the HORIZON HIS prototype interface in a clinical journey.',
    },
    sections: {
      context: {
        title: 'SALUX\'s next Hospital Information System',
        intro:
          'SALUX wanted to materialize its vision for a new Hospital Information System in a market with established platforms such as MV and Tasy. The goal of this phase was to make that vision tangible enough to experience, discuss, validate and present before committing to a complete production implementation.',
        paragraph: 'The work started from a strategic product question, not from a production roadmap.',
      },
      challenge: {
        title: 'Making a broad HIS vision tangible before full implementation',
        intro:
          'A hospital information system can contain a large number of workflows, users, states and dependencies. The challenge was to decide what needed to exist in the prototype so the product vision could become concrete, navigable and presentable for Hospitalar 2025.',
        paragraph: 'The phase had to stay focused on clarity, not on premature build scope.',
      },
      role: {
        title: 'End-to-end Product Design ownership',
        intro:
          'I was UX Lead at SALUX and the Product Designer directly responsible for HORIZON HIS. No other Product Designer was dedicated to HORIZON, while the other designers I led remained focused on other SALUX initiatives. That focus allowed me to concentrate on the HIS vision.',
        responsibilitiesLabel: 'HORIZON responsibilities',
        bullets: [
          'Journey selection',
          'Experience structure',
          'UX',
          'UI',
          'Component strategy',
          'Prototype construction',
          'Product-vision presentation',
        ],
      },
      journeys: {
        title: 'Selecting the journeys that made the vision understandable',
        intro:
          'The goal was not to reproduce every possible HIS workflow. The Product Design decision was to identify the journeys and states necessary to communicate how HORIZON should behave as a coherent product experience.',
        overviewAlt: 'Overview of the HORIZON HIS journey map showing multiple connected interface flows and states.',
        overviewCaption: 'Journey-map overview used to communicate scale and connected product flows.',
        overviewParagraph:
          'The overview establishes breadth. The details below highlight selected areas of the mapped experience at a readable size.',
        detailAlt: 'Detailed section of the HORIZON HIS journey map showing connected interface states.',
      },
      choices: {
        title: 'Building the experience, not the infrastructure around it',
        intro:
          'A complete Design System was intentionally not the priority for this phase. The focus was to build the reusable component foundation necessary for consistency, prioritize journeys and prototype work, and keep iteration fast.',
        paragraph: 'This was a phase-specific Product Design decision, not a general statement about design systems.',
      },
      prototype: {
        title: 'Designing the product before committing to building it',
        intro:
          'The high-fidelity navigable prototype made the future HIS tangible. It supported experiencing proposed flows, understanding behavior, discussing product direction, and validating the experience before full implementation.',
        imageAlt: 'HORIZON HIS triage prototype screen with intake, vital signs, and generated data.',
      },
      validation: {
        title: 'Presented to the CEO as the proposed Hospitalar experience',
        intro:
          'The approach and prototype were presented to the CEO as the Product Design direction intended for Hospitalar 2025. The purpose was to demonstrate that the intended experience could be materialized and validated without making full implementation the first step.',
        imageAlt: 'HORIZON HIS case results slide showing the prototype and supporting narrative.',
        caption: 'Executive presentation evidence.',
      },
      hospitalar: {
        title: 'The product experience at Hospitalar 2025',
        intro:
          'HORIZON was presented at Hospitalar 2025. SALUX positioned HORIZON as its main product at the event, and visitors at the SALUX presence could experience the product vision.',
        imageAlt: 'High-fidelity prototype and interaction map used to validate the HORIZON HIS vision.',
        caption: 'High-fidelity prototype and interaction-map evidence.',
      },
      outcome: {
        title: 'From abstract vision to navigable product experience',
        intro: 'SALUX moved from an abstract HIS ambition to a concrete product experience that could be navigated, discussed, validated and presented.',
        highlightsLabel: 'HORIZON outcome highlights',
        bullets: [
          'Selected journeys structured',
          'Coherent interface created',
          'Focused reusable component foundation',
          'Navigable prototype delivered',
          'Executive discussion supported',
          'Hospitalar presentation enabled',
        ],
      },
      learning: {
        title: 'High-fidelity prototyping as strategic product work',
        intro:
          'High-fidelity prototyping can be a strategic Product Design tool when the primary uncertainty is the product experience itself. A product phase does not always require the maximum possible infrastructure; it requires the level of structure necessary to answer the current product question.',
        paragraph: 'This is author reflection, not a business claim.',
      },
    },
  },
} as const satisfies DictionaryByLocale<HorizonHisCaseLocalizedContent>;
