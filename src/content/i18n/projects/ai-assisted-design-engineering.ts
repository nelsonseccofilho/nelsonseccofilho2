import type { DictionaryByLocale, MetadataContent } from '@/content/i18n/types';
import { projectFacts } from '@/content/project-facts';

export const aiAssistedDesignEngineeringSharedFacts = {
  ...projectFacts['ai-assisted-design-engineering'],
  authorName: 'Nelson Secco',
  companyName: 'N3LX Digital Business',
  commitSha: '2910154799ed28416475a359a9ea536599f38451',
} as const;

type NarrativeSection = { title: string; intro: string };
type BulletSection = NarrativeSection & { bullets: readonly string[] };
type StepSection = NarrativeSection & { steps: readonly string[] };

export type AiAssistedDesignEngineeringCaseLocalizedContent = {
  metadata: MetadataContent;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    context: string;
    consultingContext: string;
  };
  sections: {
    operationalProblem: BulletSection;
    workflow: StepSection & { toolNote: string };
    evidenceBeforeDesign: NarrativeSection & {
      distinctions: readonly [string, string, string, string];
      provenance: string;
    };
    productUxAnalysis: BulletSection;
    artifactWork: StepSection;
    operatingPrinciples: NarrativeSection & {
      items: readonly { code: 'FACT ≠ INFERENCE ≠ ASSUMPTION' | 'PARITY BEFORE UX EVOLUTION' | 'REUSE → COMPOSE → EVOLVE → CREATE'; description: string }[];
    };
    runtime: NarrativeSection;
    publicFramework: NarrativeSection & { evidenceBoundary: string };
    continuity: NarrativeSection & { validation: string };
    driftDetection: NarrativeSection & {
      states: readonly { status: 'PASS' | 'FOUND' | 'PENDING'; description: string }[];
      evidenceRule: string;
    };
    versionedEvolution: NarrativeSection & { ciBoundary: string };
    trustBoundaries: NarrativeSection & {
      layers: readonly { id: 'public-framework' | 'private-runtime' | 'live-sources'; description: string }[];
      publicationRule: string;
    };
    outcomes: BulletSection & { evidenceBoundary: string };
    learnings: BulletSection;
  };
  cta: { title: string; description: string; githubLabel: string; consultingLabel: string };
};

export const aiAssistedDesignEngineeringCaseContent = {
  "pt-BR": {
    "metadata": {
      "title": "AI-Assisted Design Engineering Operating System — Case de Product Design | Nelson Secco",
      "description": "Um modelo operacional persistente e orientado por evidências para Product Designers e agentes de IA, usado como base de trabalho na N3LX Digital Business."
    },
    "hero": {
      "eyebrow": "AI-Assisted Design Engineering Operating System",
      "title": "Sessões de IA são temporárias. O trabalho de produto não é.",
      "description": "Um modelo operacional persistente e orientado por evidências para Product Designers e agentes de IA.",
      "context": "O framework evoluiu do fluxo real de Product Design assistido por IA de Nelson para um sistema operacional versionado.",
      "consultingContext": "Usado como base operacional em projetos reais de clientes por meio da N3LX Digital Business, adaptado às restrições de confidencialidade, evidências, governança e ferramentas de cada projeto."
    },
    "sections": {
      "operationalProblem": {
        "title": "Quando a sessão termina, o trabalho continua",
        "intro": "Conversas temporárias precisam de fontes duráveis para preservar intenção, evidências e responsabilidade.",
        "bullets": [
          "Perda de contexto entre conversas.",
          "Evidências antigas ou interpretações sem origem passam a orientar decisões.",
          "Design drift altera comportamentos aprovados.",
          "O estado da conversa não equivale ao estado atual do artefato.",
          "Design System drift cria padrões locais e duplicações.",
          "Responsabilidades e escopos de mutação ficam ambíguos.",
          "Requisitos perdem o vínculo com suas fontes e aprovações.",
          "Limites de sessão interrompem a continuidade operacional."
        ]
      },
      "workflow": {
        "title": "Da reunião ao handoff persistente",
        "intro": "Cada transição preserva a origem da evidência e exige o nível de revisão adequado.",
        "steps": [
          "Reunião com stakeholders",
          "Gravação aprovada",
          "Transcrição local",
          "Revisão humana da evidência",
          "Evidence ID, requisito ou decisão",
          "Análise de Produto/UX",
          "Inspeção do artefato",
          "Execução com Figma MCP no escopo autorizado",
          "QA estrutural e visual",
          "Revisão com stakeholders",
          "Refinamento",
          "Handoff persistente"
        ],
        "toolNote": "OBS Studio e WhisperX são exemplos do fluxo local de ingestão de evidências, não dependências obrigatórias do framework."
      },
      "evidenceBeforeDesign": {
        "title": "Evidência antes do design",
        "intro": "Uma transcrição exige revisão humana; ela não transforma automaticamente uma fala em requisito aprovado.",
        "distinctions": [
          "gravação ≠ transcrição",
          "transcrição ≠ requisito aprovado",
          "requisito aprovado ≠ implementação",
          "implementação ≠ conclusão validada"
        ],
        "provenance": "Cada transição deve preservar a proveniência."
      },
      "productUxAnalysis": {
        "title": "Análise crítica de Produto e UX",
        "intro": "As evidências do projeto vêm primeiro. Boas práticas externas ajudam a analisar o problema, mas não substituem contexto, aprovação ou julgamento de produto.",
        "bullets": [
          "Classificar fatos, inferências e suposições.",
          "Reconhecer dúvidas e evidência insuficiente antes de propor mudanças."
        ]
      },
      "artifactWork": {
        "title": "Trabalhar com o artefato real",
        "intro": "O artefato atual é a fonte do estado de implementação; o relato de uma conversa não substitui uma nova inspeção.",
        "steps": [
          "Inspecionar",
          "Comparar",
          "Classificar",
          "Planejar",
          "Modificar no escopo autorizado",
          "Reinspecionar",
          "Executar QA"
        ]
      },
      "operatingPrinciples": {
        "title": "Princípios operacionais",
        "intro": "Regras explícitas mantêm análise, execução e validação conectadas.",
        "items": [
          {
            "code": "FACT ≠ INFERENCE ≠ ASSUMPTION",
            "description": "Distinguir o que foi observado, interpretado e ainda precisa ser confirmado."
          },
          {
            "code": "PARITY BEFORE UX EVOLUTION",
            "description": "Preservar o comportamento aprovado antes de propor evolução da experiência."
          },
          {
            "code": "REUSE → COMPOSE → EVOLVE → CREATE",
            "description": "Inspecionar e reutilizar a base canônica antes de criar novos padrões."
          }
        ]
      },
      "runtime": {
        "title": "Project Runtime",
        "intro": "O runtime preserva contexto operacional, evidências referenciadas, sessões, workstreams, decisões e handoffs. Ele sustenta continuidade sem substituir as fontes primárias ou o estado atual do artefato."
      },
      "publicFramework": {
        "title": "Método público e reutilizável",
        "intro": "O repositório público contém o método genérico, os contratos e a documentação reutilizável. As capturas reais comprovam a existência desse framework e de sua documentação.",
        "evidenceBoundary": "Capturas públicas não comprovam, de forma independente, operações confidenciais de clientes."
      },
      "continuity": {
        "title": "Continuidade entre conversas",
        "intro": "Quando uma sessão atinge seu limite, a próxima recupera objetivo, escopo, decisões, evidências e próximo passo a partir do runtime persistente.",
        "validation": "A continuidade entre conversas e runtime foi exercitada e validada em uso operacional real; os detalhes específicos de clientes permanecem privados."
      },
      "driftDetection": {
        "title": "Detectar drift sem inventar certeza",
        "intro": "Comparar evidência aprovada, registro persistente e estado atual do artefato permite classificar o que foi verificado e o que ainda está em aberto.",
        "states": [
          {
            "status": "PASS",
            "description": "O escopo inspecionado passou na verificação executada."
          },
          {
            "status": "FOUND",
            "description": "Uma divergência foi encontrada e precisa ser tratada."
          },
          {
            "status": "PENDING",
            "description": "A verificação ainda está pendente ou a evidência é insuficiente."
          }
        ],
        "evidenceRule": "Evidência insuficiente continua sendo evidência insuficiente; não equivale a PASS."
      },
      "versionedEvolution": {
        "title": "Versionado, não improvisado",
        "intro": "O commit público de referência registra a evolução do README, da ingestão de evidências e das orientações de transcrição local.",
        "ciBoundary": "Hosted CI indisponível não é representado como CI PASS. Uma validação só pode ser declarada quando realmente executada."
      },
      "trustBoundaries": {
        "title": "Framework público, runtime privado e fontes vivas",
        "intro": "Cada fonte preserva sua responsabilidade e seu limite de confiança.",
        "layers": [
          {
            "id": "public-framework",
            "description": "Método genérico e documentação reutilizável no repositório público."
          },
          {
            "id": "private-runtime",
            "description": "Contexto, stakeholders, evidências, referências de artefatos e histórico específicos de clientes em fontes privadas governadas."
          },
          {
            "id": "live-sources",
            "description": "Artefatos, aprovações e fontes primárias são reconciliados no escopo autorizado; o runtime mantém referências e continuidade."
          }
        ],
        "publicationRule": "Não expor identidades, URLs privadas, gravações, transcrições, conteúdos de runtime ou interfaces confidenciais para demonstrar adoção."
      },
      "outcomes": {
        "title": "Resultados qualitativos sustentados por evidência",
        "intro": "O método foi usado como base operacional em projetos reais, com adaptação a cada contexto.",
        "bullets": [
          "Continuidade entre conversas exercitada e validada em uso operacional.",
          "Reconciliação do artefato real com Figma MCP exercitada no runtime privado adotante.",
          "Método genérico e documentação pública preservados em um framework versionado."
        ],
        "evidenceBoundary": "As duas primeiras afirmações são confirmadas pelo autor; as capturas do GitHub comprovam o framework público, não as operações privadas. Não são apresentados KPIs inventados."
      },
      "learnings": {
        "title": "Aprendizados",
        "intro": "A continuidade depende de fontes persistentes e de julgamento humano, não apenas da memória da conversa.",
        "bullets": [
          "Revisão humana conecta evidência a requisito e decisão.",
          "Reinspeção evita confundir relato e estado do artefato.",
          "Adoção exige adaptar governança, ferramentas e confidencialidade ao projeto.",
          "Capturas reais comprovam existência; diagramas nativos explicam sistemas; representações editoriais protegem trabalho confidencial."
        ]
      }
    },
    "cta": {
      "title": "Explore o método ou converse sobre seu contexto",
      "description": "Conheça o framework público ou converse sobre Product Design e consultoria em UX pela N3LX Digital Business.",
      "githubLabel": "Explorar o framework no GitHub",
      "consultingLabel": "Conversar com a N3LX Digital Business"
    }
  },
  "en": {
    "metadata": {
      "title": "AI-Assisted Design Engineering Operating System — Product Design Case Study | Nelson Secco",
      "description": "A persistent, evidence-driven operating model for Product Designers and AI agents, used as an operational baseline through N3LX Digital Business."
    },
    "hero": {
      "eyebrow": "AI-Assisted Design Engineering Operating System",
      "title": "AI sessions are temporary. Product work isn’t.",
      "description": "A persistent, evidence-driven operating model for Product Designers and AI agents.",
      "context": "The framework evolved from Nelson’s real AI-assisted Product Design workflow into a versioned operating system.",
      "consultingContext": "Used as an operational baseline in real client engagements through N3LX Digital Business, adapted to each engagement’s confidentiality, evidence, governance, and tool constraints."
    },
    "sections": {
      "operationalProblem": {
        "title": "The session ends. The work continues.",
        "intro": "Temporary conversations need durable sources to preserve intent, evidence, and accountability.",
        "bullets": [
          "Context is lost between conversations.",
          "Outdated evidence or interpretations without provenance begin to guide decisions.",
          "Design drift changes approved behavior.",
          "Conversation state does not equal current artifact state.",
          "Design System drift introduces local patterns and duplication.",
          "Responsibilities and mutation scopes become ambiguous.",
          "Requirements lose their connection to sources and approvals.",
          "Session limits interrupt operational continuity."
        ]
      },
      "workflow": {
        "title": "From stakeholder meeting to persistent handoff",
        "intro": "Every transition preserves evidence provenance and requires an appropriate level of review.",
        "steps": [
          "Stakeholder meeting",
          "Approved recording",
          "Local transcription",
          "Human evidence review",
          "Evidence ID, requirement, or decision",
          "Product/UX analysis",
          "Artifact inspection",
          "Figma MCP execution within authorized scope",
          "Structural and visual QA",
          "Stakeholder review",
          "Refinement",
          "Persistent handoff"
        ],
        "toolNote": "OBS Studio and WhisperX are examples of the real local evidence-ingestion workflow, not mandatory framework dependencies."
      },
      "evidenceBeforeDesign": {
        "title": "Evidence before design",
        "intro": "A transcript requires human review; it does not automatically turn a statement into an approved requirement.",
        "distinctions": [
          "recording ≠ transcript",
          "transcript ≠ approved requirement",
          "approved requirement ≠ implementation",
          "implementation ≠ validated completion"
        ],
        "provenance": "Each transition must preserve provenance."
      },
      "productUxAnalysis": {
        "title": "Critical Product and UX analysis",
        "intro": "Project evidence comes first. External best practices support analysis but do not replace context, approval, or product judgment.",
        "bullets": [
          "Classify facts, inferences, and assumptions.",
          "Recognize open questions and insufficient evidence before proposing changes."
        ]
      },
      "artifactWork": {
        "title": "Work with the live artifact",
        "intro": "The current artifact is the source of implementation state; a conversation report does not replace a fresh inspection.",
        "steps": [
          "Inspect",
          "Compare",
          "Classify",
          "Plan",
          "Mutate within authorized scope",
          "Reinspect",
          "Run QA"
        ]
      },
      "operatingPrinciples": {
        "title": "Operating principles",
        "intro": "Explicit rules keep analysis, execution, and validation connected.",
        "items": [
          {
            "code": "FACT ≠ INFERENCE ≠ ASSUMPTION",
            "description": "Distinguish observations, interpretations, and what still needs confirmation."
          },
          {
            "code": "PARITY BEFORE UX EVOLUTION",
            "description": "Preserve approved behavior before proposing UX evolution."
          },
          {
            "code": "REUSE → COMPOSE → EVOLVE → CREATE",
            "description": "Inspect and reuse the canonical foundation before creating new patterns."
          }
        ]
      },
      "runtime": {
        "title": "Project Runtime",
        "intro": "The runtime preserves operational context, evidence references, sessions, workstreams, decisions, and handoffs. It supports continuity without replacing primary sources or current artifact state."
      },
      "publicFramework": {
        "title": "A public, reusable method",
        "intro": "The public repository contains the generic method, contracts, and reusable documentation. Real screenshots establish the existence of this framework and its documentation.",
        "evidenceBoundary": "Public screenshots do not independently prove confidential client operations."
      },
      "continuity": {
        "title": "Cross-chat continuity",
        "intro": "When a session reaches its limit, the next one recovers the objective, scope, decisions, evidence, and next action from the persistent runtime.",
        "validation": "Cross-chat/runtime continuity was exercised and validated in real operational use; client-specific details remain private."
      },
      "driftDetection": {
        "title": "Detect drift without inventing certainty",
        "intro": "Comparing approved evidence, persistent records, and current artifact state distinguishes what was checked from what remains unresolved.",
        "states": [
          {
            "status": "PASS",
            "description": "The inspected scope passed the check that was actually executed."
          },
          {
            "status": "FOUND",
            "description": "A discrepancy was found and requires attention."
          },
          {
            "status": "PENDING",
            "description": "Verification is pending or evidence is insufficient."
          }
        ],
        "evidenceRule": "Insufficient evidence remains insufficient evidence; it is not PASS."
      },
      "versionedEvolution": {
        "title": "Versioned, not improvised",
        "intro": "The reference public commit records the evolution of the README, evidence ingestion, and local transcription guidance.",
        "ciBoundary": "Unavailable hosted CI is not represented as CI PASS. Validation can only be claimed when it was actually executed."
      },
      "trustBoundaries": {
        "title": "Public framework, private runtime, and live sources",
        "intro": "Each source retains its responsibility and trust boundary.",
        "layers": [
          {
            "id": "public-framework",
            "description": "Generic method and reusable documentation in the public repository."
          },
          {
            "id": "private-runtime",
            "description": "Client-specific context, stakeholders, evidence, artifact references, and history in governed private sources."
          },
          {
            "id": "live-sources",
            "description": "Artifacts, approvals, and primary sources are reconciled within authorized scope; the runtime preserves references and continuity."
          }
        ],
        "publicationRule": "Do not disclose identities, private URLs, recordings, transcripts, runtime contents, or confidential interfaces to demonstrate adoption."
      },
      "outcomes": {
        "title": "Evidence-backed qualitative outcomes",
        "intro": "The method was used as an operational baseline in real engagements, adapted to each context.",
        "bullets": [
          "Cross-chat continuity exercised and validated in operational use.",
          "Live artifact reconciliation with Figma MCP exercised in the private adopting runtime.",
          "Generic method and public documentation preserved in a versioned framework."
        ],
        "evidenceBoundary": "The first two statements are owner-confirmed; GitHub screenshots establish the public framework, not private operations. No invented KPIs are presented."
      },
      "learnings": {
        "title": "Learnings",
        "intro": "Continuity depends on persistent sources and human judgment, not conversation memory alone.",
        "bullets": [
          "Human review connects evidence to requirements and decisions.",
          "Reinspection prevents confusion between reports and artifact state.",
          "Adoption requires adapting governance, tools, and confidentiality to each engagement.",
          "Real screenshots prove existence; native diagrams explain systems; editorial representations protect confidential work."
        ]
      }
    },
    "cta": {
      "title": "Explore the method or discuss your context",
      "description": "Explore the public framework or discuss Product Design and UX consulting through N3LX Digital Business.",
      "githubLabel": "Explore the framework on GitHub",
      "consultingLabel": "Contact N3LX Digital Business"
    }
  }
} as const satisfies DictionaryByLocale<AiAssistedDesignEngineeringCaseLocalizedContent>;
