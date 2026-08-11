import type { DictionaryByLocale } from '@/content/i18n/types';

export const redeDccSharedFacts = {
  routeId: 'rede-dcc',
  projectName: 'REDE DCC 1.0',
  clientName: 'REDE',
  companyName: 'Môre Talent Tech',
  domain: 'Payments / Dynamic Currency Conversion',
  year: '2023',
  engagement: '8 months',
  languages: 'Portuguese / English',
  deliverable: 'End-to-end transaction journey',
  status: 'Implemented in REDE\'s product',
} as const;

type RedeDccCaseLocalizedContent = {
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
    internationalPayments: {
      title: string;
      intro: string;
      paragraph: string;
    };
    highStakesChoice: {
      title: string;
      intro: string;
      paragraph: string;
    };
    endToEndDesign: {
      title: string;
      intro: string;
      paragraph: string;
    };
    internationalCardholders: {
      title: string;
      intro: string;
      paragraph: string;
    };
    bilingualStructure: {
      title: string;
      intro: string;
      paragraph: string;
    };
    transactionStates: {
      title: string;
      intro: string;
      imageAlt: string;
      caption: string;
    };
    clarityBeforeProgression: {
      title: string;
      intro: string;
      currencyChoiceAlt: string;
      pinEntryAlt: string;
      processingAlt: string;
      approvalReceiptAlt: string;
    };
    noPrototype: {
      title: string;
      intro: string;
      paragraph: string;
    };
    review: {
      title: string;
      intro: string;
      paragraph: string;
    };
    delivery: {
      title: string;
      intro: string;
      paragraph: string;
    };
    outcome: {
      title: string;
      intro: string;
      paragraph: string;
    };
    learning: {
      title: string;
      intro: string;
      paragraph: string;
    };
  };
};

export const redeDccCaseContent = {
  'pt-BR': {
    hero: {
      eyebrow: redeDccSharedFacts.projectName,
      title: 'Projetando clareza em uma jornada de pagamento com múltiplos estados',
      description:
        'Design de Interação para uma experiência de Dynamic Currency Conversion que ajudou portadores de cartões internacionais a fazer uma escolha de moeda com clareza durante uma transação de pagamento ativa.',
      metadata: [
        { label: 'Papel', value: 'Senior Product Designer' },
        { label: 'Cliente', value: redeDccSharedFacts.clientName },
        { label: 'Empresa', value: redeDccSharedFacts.companyName },
        { label: 'Domínio', value: 'Pagamentos / Dynamic Currency Conversion' },
        { label: 'Ano', value: redeDccSharedFacts.year },
        { label: 'Engajamento', value: redeDccSharedFacts.engagement },
        { label: 'Idiomas', value: redeDccSharedFacts.languages },
        { label: 'Entregável', value: 'Jornada transacional ponta a ponta' },
        { label: 'Status', value: 'Implementado no produto da REDE' },
      ],
      imageAlt: 'Composição de interfaces de pagamento mostrando estados do fluxo de transação e telas de confirmação.',
    },
    sections: {
      internationalPayments: {
        title: 'Pagamentos internacionais no terminal',
        intro:
          'Nos últimos oito meses da minha atuação na Môre Talent Tech, trabalhei com a REDE em experiências de pagamento digital. Uma das iniciativas foi um serviço de Dynamic Currency Conversion para portadores internacionais de cartões Mastercard e Visa usando terminais de pagamento da REDE no Brasil.',
        paragraph: 'O foco foi tornar uma escolha financeira compreensível dentro de um fluxo transacional em tempo real.',
      },
      highStakesChoice: {
        title: 'Tornar clara uma escolha financeira em uma transação de alta criticidade',
        intro:
          'Portadores de cartões internacionais precisavam decidir se concluíam a compra em BRL ou em sua moeda de origem enquanto já estavam dentro de um fluxo de pagamento ativo.',
        paragraph:
          'A experiência precisava comunicar essa decisão com clareza em Português e Inglês, mantendo coerência ao longo de múltiplos estados transacionais, incluindo processamento, autorização, erros, aprovação e recusa.',
      },
      endToEndDesign: {
        title: 'Design de interação ponta a ponta',
        intro:
          'Como Senior Product Designer, estruturei a jornada ponta a ponta, os fluxos de interação e as interfaces da experiência de DCC, priorizando clareza, segurança e facilidade de uso.',
        paragraph:
          'Atuei em uma squad multidisciplinar, utilizando o Design System existente da REDE enquanto desenhava e documentava componentes adicionais necessários para a nova jornada.',
      },
      internationalCardholders: {
        title: 'Design para portadores internacionais de cartões',
        intro: 'A experiência foi desenhada para portadores internacionais de cartões vinculados a contas no exterior.',
        paragraph: 'A linguagem de interação precisava permanecer legível na velocidade do terminal.',
      },
      bilingualStructure: {
        title: 'Design em Português e Inglês',
        intro:
          'Idioma fazia parte do próprio design da transação. A experiência precisava permanecer compreensível para portadores internacionais de cartões, preservando a mesma estrutura de decisão, hierarquia e feedback transacional em Português e Inglês.',
        paragraph: 'A consistência entre idiomas protegia clareza e confiança durante o pagamento.',
      },
      transactionStates: {
        title: 'Orquestrando os estados transacionais',
        intro:
          'O que parecia uma escolha simples de moeda se desdobrava em uma jornada completa de pagamento: seleção de moeda, informação de conversão, entrada de PIN, processamento, autorização, aprovação ou recusa, erros e estados de comprovante.',
        imageAlt: 'Sequência curada de estados transacionais do DCC da REDE, da escolha de moeda até a conclusão.',
        caption: 'Sequência curada de estados transacionais usada para revisar a jornada completa.',
      },
      clarityBeforeProgression: {
        title: 'Clareza antes de progressão',
        intro:
          'Cada estado precisava comunicar o que estava acontecendo, qual decisão era necessária e o que a pessoa deveria esperar em seguida, sem prejudicar a velocidade típica de uma interação em terminal de pagamento.',
        currencyChoiceAlt: 'Estado transacional do DCC mostrando opções de escolha de moeda durante o pagamento.',
        pinEntryAlt: 'Estado transacional do DCC mostrando entrada de PIN após a seleção de moeda.',
        processingAlt: 'Estado transacional do DCC mostrando feedback de processamento e autorização.',
        approvalReceiptAlt: 'Estado transacional do DCC mostrando resultado de aprovação e comprovante.',
      },
      noPrototype: {
        title: 'Saber quando não prototipar',
        intro:
          'Um protótipo navegável não era necessário para esta entrega. O modelo de interação podia ser suficientemente revisado por meio dos estados transacionais estruturados, interfaces finais e validação com stakeholders.',
        paragraph:
          'Evitar prototipação desnecessária manteve o trabalho focado nos artefatos necessários para levar a jornada à implementação.',
      },
      review: {
        title: 'Revisão da jornada transacional completa',
        intro:
          'A experiência proposta, os estados e as interfaces foram apresentados e revisados com stakeholders antes da entrega, permitindo avaliar a sequência transacional completa como um sistema coerente, e não como telas isoladas.',
        paragraph: 'A revisão com stakeholders validou a continuidade em toda a sequência de pagamento.',
      },
      delivery: {
        title: 'Dos estados de interação ao produto final',
        intro:
          'A jornada de DCC foi documentada e entregue para implementação no produto da REDE, incluindo os estados transacionais necessários, comportamento de interface e componentes de suporte.',
        paragraph: 'A entrega cobriu integridade da jornada e detalhamento de especificação orientado à implementação.',
      },
      outcome: {
        title: 'Uma jornada completa para uma nova capacidade de pagamento',
        intro:
          'O trabalho transformou um novo requisito de conversão de moeda em uma jornada de pagamento bilíngue e estruturada, cobrindo toda a interação da escolha de moeda até a conclusão da transação.',
        paragraph:
          'O resultado foi uma experiência validada e documentada, implementada dentro do ecossistema de pagamentos já existente da REDE.',
      },
      learning: {
        title: 'Projetar os momentos entre decisões',
        intro:
          'Experiências de pagamento não são definidas apenas por sua ação principal. Processamento, espera, erros, autorização e confirmação também são partes igualmente importantes da experiência.',
        paragraph:
          'O DCC reforçou a importância de projetar estados transacionais como um sistema contínuo, e não como uma coleção de telas individuais.',
      },
    },
  },
  en: {
    hero: {
      eyebrow: redeDccSharedFacts.projectName,
      title: 'Designing clarity across a multi-state payment journey',
      description:
        'Interaction Design for a Dynamic Currency Conversion experience that helped international cardholders make a clear currency choice during an active payment transaction.',
      metadata: [
        { label: 'Role', value: 'Senior Product Designer' },
        { label: 'Client', value: redeDccSharedFacts.clientName },
        { label: 'Company', value: redeDccSharedFacts.companyName },
        { label: 'Domain', value: redeDccSharedFacts.domain },
        { label: 'Year', value: redeDccSharedFacts.year },
        { label: 'Engagement', value: redeDccSharedFacts.engagement },
        { label: 'Languages', value: redeDccSharedFacts.languages },
        { label: 'Deliverable', value: redeDccSharedFacts.deliverable },
        { label: 'Status', value: redeDccSharedFacts.status },
      ],
      imageAlt: 'Payment interface composition showing transaction flow states and confirmation screens.',
    },
    sections: {
      internationalPayments: {
        title: 'International payments at the terminal',
        intro:
          'During the final eight months of my time at Môre Talent Tech, I worked with REDE on digital payment experiences. One of the initiatives was a Dynamic Currency Conversion service for international Mastercard and Visa cardholders using REDE payment terminals in Brazil.',
        paragraph: 'The focus was to make a financial choice understandable inside a live transaction flow.',
      },
      highStakesChoice: {
        title: 'Making a financial choice clear inside a high-stakes transaction',
        intro:
          'International cardholders needed to decide whether to complete a purchase in BRL or in their home currency while already inside an active payment flow.',
        paragraph:
          'The experience needed to communicate that decision clearly across Portuguese and English while remaining coherent through multiple transactional states, including processing, authorization, errors, approval and decline.',
      },
      endToEndDesign: {
        title: 'End-to-end interaction design',
        intro:
          'As Senior Product Designer, I structured the end-to-end journey, interaction flows and interfaces for the DCC experience, prioritizing clarity, safety and ease of use.',
        paragraph:
          'I worked within a multidisciplinary squad, using REDE\'s existing Design System while designing and documenting additional components required by the new journey.',
      },
      internationalCardholders: {
        title: 'Designing for international cardholders',
        intro: 'The experience was designed for international cardholders using cards linked to foreign accounts.',
        paragraph: 'The interaction language had to remain legible at terminal speed.',
      },
      bilingualStructure: {
        title: 'Designing across Portuguese and English',
        intro:
          'Language was part of the transaction design itself. The experience needed to remain understandable for international cardholders while preserving the same decision structure, hierarchy and transactional feedback across Portuguese and English.',
        paragraph: 'Consistency between languages protected both clarity and confidence during payment.',
      },
      transactionStates: {
        title: 'Orchestrating the transaction states',
        intro:
          'What appeared to be a simple currency choice unfolded across a complete payment journey: currency selection, conversion information, PIN entry, processing, authorization, approval or decline, errors and receipt states.',
        imageAlt: 'Curated sequence of REDE DCC transaction states from currency selection to completion.',
        caption: 'Curated transaction-state sequence used to review the complete journey.',
      },
      clarityBeforeProgression: {
        title: 'Clarity before progression',
        intro:
          'Each state needed to communicate what was happening, what decision was required and what the user should expect next without disrupting the speed of a payment-terminal interaction.',
        currencyChoiceAlt: 'DCC transaction state showing currency choice options during payment.',
        pinEntryAlt: 'DCC transaction state showing PIN entry after currency selection.',
        processingAlt: 'DCC transaction state showing processing and authorization feedback.',
        approvalReceiptAlt: 'DCC transaction state showing approval and receipt outcome.',
      },
      noPrototype: {
        title: 'Knowing when not to prototype',
        intro:
          'A navigable prototype was not necessary for this delivery. The interaction model could be sufficiently reviewed through the structured transaction states, final interfaces and stakeholder validation.',
        paragraph:
          'Avoiding unnecessary prototyping kept the work focused on the artifacts required to move the journey toward implementation.',
      },
      review: {
        title: 'Reviewing the complete transaction journey',
        intro:
          'The proposed experience, states and interfaces were presented and reviewed with stakeholders before delivery, allowing the complete transaction sequence to be evaluated as a coherent system rather than as isolated screens.',
        paragraph: 'Stakeholder review validated continuity across the full payment sequence.',
      },
      delivery: {
        title: 'From interaction states to the final product',
        intro:
          'The DCC journey was documented and delivered for implementation in REDE\'s product, including the required transaction states, interface behavior and supporting components.',
        paragraph: 'Delivery covered both journey integrity and implementation-facing specification detail.',
      },
      outcome: {
        title: 'A complete journey for a new payment capability',
        intro:
          'The work transformed a new currency-conversion requirement into a structured, bilingual payment journey covering the complete interaction from currency choice through transaction completion.',
        paragraph: 'The result was a validated and documented experience implemented within REDE\'s existing payment ecosystem.',
      },
      learning: {
        title: 'Designing the moments between decisions',
        intro:
          'Payment experiences are not defined only by their main action. Processing, waiting, errors, authorization and confirmation are equally important parts of the experience.',
        paragraph:
          'DCC reinforced the importance of designing transactional states as one continuous system rather than a collection of individual screens.',
      },
    },
  },
} as const satisfies DictionaryByLocale<RedeDccCaseLocalizedContent>;
