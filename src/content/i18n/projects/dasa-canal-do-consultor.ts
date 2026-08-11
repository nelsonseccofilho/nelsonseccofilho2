import type { DictionaryByLocale } from '@/content/i18n/types';

export const dasaCanalDoConsultorSharedFacts = {
  routeId: 'dasa-canal-do-consultor',
  projectName: 'DASA — Canal do Consultor',
  clientName: 'DASA',
  companyName: 'Môre Talent Tech',
  year: '2022',
  coreTeam: 'PM/PO · UX Researcher · Product Designer · Lead Developer',
  deliverable: 'Discovery-to-delivery decision structure',
  scope: 'Canal do Consultor / MV Soul / Feegow / Tasy',
  status: 'Existing pilot and future backlog input',
  researchFacts: {
    participantsInterviewed: 37,
    nacsVisitedCount: 3,
    nacsVisited: 'RJ, SP and Brasília',
    systemsAnalyzedCount: 4,
    systemsAnalyzedList: 'Canal do Consultor, MV Soul, Feegow and Tasy',
    researchQuotesMapped: 290,
    businessRulesAndFeaturesMapped: 57,
  },
} as const;

type DasaCanalDoConsultorCaseLocalizedContent = {
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
    researchScale: {
      title: string;
      intro: string;
      bulletsLabel: string;
      bullets: readonly string[];
    };
    evidenceBoard: {
      title: string;
      intro: string;
      imageAlt: string;
      caption: string;
    };
    diagrams: {
      title: string;
      intro: string;
      diagram01EcosystemAlt: string;
      diagram02ResearchScaleAlt: string;
      diagram03DiscoveryProcessAlt: string;
      diagram04ResearchToRulesAlt: string;
      diagram05InformationFragmentationAlt: string;
      diagram06ThemeMapAlt: string;
      diagram07ComplexityExamplesAlt: string;
      diagram08DiscoveryDeliveryAlt: string;
    };
    validation: {
      title: string;
      intro: string;
      bulletsLabel: string;
      bullets: readonly string[];
    };
    rulesToDelivery: {
      title: string;
      intro: string;
      paragraph01: string;
      paragraph02: string;
    };
    confidentiality: {
      title: string;
      intro: string;
      paragraph: string;
    };
  };
};

export const dasaCanalDoConsultorCaseContent = {
  'pt-BR': {
    hero: {
      eyebrow: dasaCanalDoConsultorSharedFacts.projectName,
      title: 'Traduzindo Discovery em saúde para um sistema estruturado de decisões de produto',
      description:
        'Trabalho de Product Design conectando pesquisa em larga escala, mapeamento de regras de negócio e priorização técnica para uma jornada complexa de consultores, preservando limites de confidencialidade.',
      metadata: [
        { label: 'Papel', value: 'Product Designer' },
        { label: 'Cliente', value: dasaCanalDoConsultorSharedFacts.clientName },
        { label: 'Empresa', value: dasaCanalDoConsultorSharedFacts.companyName },
        { label: 'Ano', value: dasaCanalDoConsultorSharedFacts.year },
        { label: 'Time principal', value: dasaCanalDoConsultorSharedFacts.coreTeam },
        { label: 'Entregável', value: 'Estrutura de decisão de Discovery à Delivery' },
        { label: 'Escopo', value: dasaCanalDoConsultorSharedFacts.scope },
        { label: 'Status', value: 'Piloto existente e insumos para backlog futuro' },
      ],
      imageAlt: 'Composição editorial do trabalho de discovery do Canal do Consultor com mapas, síntese e regras de negócio.',
    },
    sections: {
      context: {
        title: 'Contexto e desafio',
        intro:
          'O Canal do Consultor exigia uma jornada coerente entre pontos de contato clínicos e operacionais. O trabalho focou em transformar evidências fragmentadas em uma estrutura de decisão capaz de orientar a evolução do produto com entendimento compartilhado entre disciplinas.',
        paragraph:
          'O contexto de produto envolvia consultores da saúde navegando informações distribuídas em múltiplos sistemas, com regras, vocabulário e expectativas diferentes.',
      },
      researchScale: {
        title: 'Escala da pesquisa e cobertura do ecossistema',
        intro: 'O Discovery combinou mapeamento qualitativo e estrutural para estabelecer uma base defensável para decisões de produto.',
        bulletsLabel: 'Escala do discovery da DASA',
        bullets: [
          '37 participantes entrevistados',
          '3 NACs visitados — RJ, SP e Brasília',
          '4 sistemas analisados',
          'Canal do Consultor, MV Soul, Feegow e Tasy',
          '290 trechos de pesquisa mapeados',
          '57 regras de negócio e funcionalidades mapeadas',
        ],
      },
      evidenceBoard: {
        title: 'Painel editorial de evidências',
        intro:
          'Um painel de síntese seguro para confidencialidade foi usado para comunicar escala, dependências do ecossistema e lógica de decisão sem expor interfaces finais de produto.',
        imageAlt: 'Painel editorial resumindo escala da pesquisa, ecossistema, regras, temas e conexão com Delivery.',
        caption: 'Reconstrução editorial usada para comunicação no portfólio.',
      },
      diagrams: {
        title: 'Diagramas de Discovery e artefatos de síntese',
        intro: 'A síntese foi estruturada por diagramas complementares que conectavam contexto, evidências e implicações para entrega.',
        diagram01EcosystemAlt: 'Diagrama representando o ecossistema do Canal do Consultor e sistemas conectados.',
        diagram02ResearchScaleAlt: 'Diagrama resumindo a escala de pesquisa e cobertura de participantes do discovery.',
        diagram03DiscoveryProcessAlt: 'Diagrama descrevendo o processo de discovery, das entrevistas à síntese.',
        diagram04ResearchToRulesAlt: 'Diagrama conectando evidências de pesquisa a regras de negócio e funcionalidades mapeadas.',
        diagram05InformationFragmentationAlt: 'Diagrama ilustrando fragmentação de informações entre sistemas.',
        diagram06ThemeMapAlt: 'Diagrama de mapa de temas agrupando tópicos recorrentes de pesquisa e pontos de dor.',
        diagram07ComplexityExamplesAlt: 'Diagrama com exemplos representativos de complexidade na jornada de consultores.',
        diagram08DiscoveryDeliveryAlt: 'Diagrama mostrando a narrativa de Discovery para Delivery e a estrutura de handoff.',
      },
      validation: {
        title: 'Validação com stakeholders operacionais e de produto',
        intro:
          'Síntese e priorização foram validadas repetidamente com as pessoas mais próximas da operação e das decisões de produto.',
        bulletsLabel: 'Stakeholders de validação da DASA',
        bullets: [
          'Validação com coordenadores de NAC',
          'Validação com consultores',
          'Validação com a tribo do Canal do Consultor',
        ],
      },
      rulesToDelivery: {
        title: 'Da pesquisa às regras, do Discovery ao Delivery',
        intro: 'O principal resultado foi uma estrutura de decisão navegável conectando achados de discovery a prioridades de implementação.',
        paragraph01:
          'O alinhamento entre Front-end e Back-end foi construído por uma camada compartilhada de priorização para decisões de interface e API, apoiando alinhamento antes das discussões de entrega.',
        paragraph02: 'A estrutura apoiou um piloto existente e gerou insumos para definição de backlog futuro.',
      },
      confidentiality: {
        title: 'Confidencialidade e limites de publicação',
        intro: 'Este projeto evita intencionalmente expor interfaces finais confidenciais de produto.',
        paragraph:
          'Todos os visuais desta página são representações editoriais ou artefatos de síntese preparados para comunicação em portfólio e não revelam telas de UI de produção.',
      },
    },
  },
  en: {
    hero: {
      eyebrow: dasaCanalDoConsultorSharedFacts.projectName,
      title: 'Translating healthcare discovery into a structured product decision system',
      description:
        'Product Design work connecting large-scale research, business-rule mapping and technical prioritization for a complex consultant journey while preserving confidentiality constraints.',
      metadata: [
        { label: 'Role', value: 'Product Designer' },
        { label: 'Client', value: dasaCanalDoConsultorSharedFacts.clientName },
        { label: 'Company', value: dasaCanalDoConsultorSharedFacts.companyName },
        { label: 'Year', value: dasaCanalDoConsultorSharedFacts.year },
        { label: 'Core Team', value: dasaCanalDoConsultorSharedFacts.coreTeam },
        { label: 'Deliverable', value: dasaCanalDoConsultorSharedFacts.deliverable },
        { label: 'Scope', value: dasaCanalDoConsultorSharedFacts.scope },
        { label: 'Status', value: dasaCanalDoConsultorSharedFacts.status },
      ],
      imageAlt: 'Editorial composition of the Canal do Consultor discovery work with maps, synthesis, and business rules.',
    },
    sections: {
      context: {
        title: 'Context and challenge',
        intro:
          'Canal do Consultor required a coherent journey across clinical and operational touchpoints. The work focused on turning fragmented evidence into a decision structure that could guide product evolution with shared understanding across disciplines.',
        paragraph:
          'The product context involved healthcare consultants navigating information spread across multiple systems with different rules, vocabulary and expectations.',
      },
      researchScale: {
        title: 'Research scale and ecosystem coverage',
        intro: 'Discovery combined qualitative and structural mapping to establish a defensible baseline for product decisions.',
        bulletsLabel: 'DASA discovery scale',
        bullets: [
          '37 participants interviewed',
          '3 NACs visited — RJ, SP and Brasília',
          '4 systems analyzed',
          'Canal do Consultor, MV Soul, Feegow and Tasy',
          '290 research quotes mapped',
          '57 business rules and features mapped',
        ],
      },
      evidenceBoard: {
        title: 'Editorial evidence board',
        intro:
          'A confidentiality-safe synthesis board was used to communicate scale, ecosystem dependencies and decision logic without exposing final product interfaces.',
        imageAlt: 'Editorial board summarizing research scale, ecosystem, rules, themes, and the connection to Delivery.',
        caption: 'Editorial reconstruction used for portfolio communication.',
      },
      diagrams: {
        title: 'Discovery diagrams and synthesis artifacts',
        intro: 'The synthesis was structured through complementary diagrams linking context, evidence and delivery implications.',
        diagram01EcosystemAlt: 'Diagram representing the Canal do Consultor ecosystem and connected systems.',
        diagram02ResearchScaleAlt: 'Diagram summarizing the discovery research scale and participant coverage.',
        diagram03DiscoveryProcessAlt: 'Diagram describing the discovery process from interviews to synthesis.',
        diagram04ResearchToRulesAlt: 'Diagram connecting research evidence to mapped business rules and features.',
        diagram05InformationFragmentationAlt: 'Diagram illustrating information fragmentation across systems.',
        diagram06ThemeMapAlt: 'Theme map diagram clustering recurrent research topics and pain points.',
        diagram07ComplexityExamplesAlt: 'Diagram with representative complexity examples from the consultant journey.',
        diagram08DiscoveryDeliveryAlt: 'Diagram showing the Discovery to Delivery narrative and handoff structure.',
      },
      validation: {
        title: 'Validation across operational and product stakeholders',
        intro:
          'Synthesis and prioritization were repeatedly validated with the people closest to operations and product decisions.',
        bulletsLabel: 'DASA validation stakeholders',
        bullets: [
          'Validation with NAC coordinators',
          'Validation with consultants',
          'Validation with the Canal do Consultor tribe',
        ],
      },
      rulesToDelivery: {
        title: 'From research to rules, then from discovery to delivery',
        intro: 'The core outcome was a navigable decision structure that connected discovery findings to implementation priorities.',
        paragraph01:
          'Front-end and back-end teams worked from a shared prioritization layer for interface and API decisions, ensuring coordinated decisions before delivery discussions.',
        paragraph02: 'The structure supported an existing pilot and generated input for future backlog definition.',
      },
      confidentiality: {
        title: 'Confidentiality and publication boundaries',
        intro: 'This project intentionally avoids exposing confidential final-product interfaces.',
        paragraph:
          'All visuals on this page are editorial representations or synthesis artifacts prepared for portfolio communication and do not reveal production UI screens.',
      },
    },
  },
} as const satisfies DictionaryByLocale<DasaCanalDoConsultorCaseLocalizedContent>;
