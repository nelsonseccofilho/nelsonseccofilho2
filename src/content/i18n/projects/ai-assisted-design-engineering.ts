import type { DictionaryByLocale, MetadataContent } from '@/content/i18n/types';
import { projectFacts } from '@/content/project-facts';

const repository = projectFacts['ai-assisted-design-engineering'].externalUrls.repository;
export const aiAssistedDesignEngineeringSharedFacts = {
  ...projectFacts['ai-assisted-design-engineering'],
  authorName: 'Nelson Secco',
  companyName: 'N3LX Digital Business',
  commitSha: '2910154799ed28416475a359a9ea536599f38451',
  releaseVersion: 'v3.9.0',
  releaseDate: '2026-10-24',
  releaseSource: '795cedc5737ae023371f5aca477db20a6f2d635b',
  inspectedMainSource: 'e82549d7546558786c46caefd189906cf24aba88',
  inspectedAt: '2026-10-26',
  sources: {
    release: repository + '/releases/tag/v3.9.0',
    releases: repository + '/releases',
    main: repository + '/tree/e82549d7546558786c46caefd189906cf24aba88',
    rationale: repository + '/blob/e82549d7546558786c46caefd189906cf24aba88/docs/RATIONALE.md',
    runtime: repository + '/tree/e82549d7546558786c46caefd189906cf24aba88/runtime',
    validation: repository + '/blob/e82549d7546558786c46caefd189906cf24aba88/runtime/docs/contracts/VALIDATION_AND_CLOSURE.md',
  },
} as const;
type NarrativeSection = { title: string; intro: string };
type Description = { title: string; description: string };
export type AiAssistedDesignEngineeringCaseLocalizedContent = {
  evidence: {
    establishesLabel: string; doesNotEstablishLabel: string;
    items: Readonly<Record<'ingestion' | 'runtime' | 'readme' | 'commit', { title: string; alt: string; establishes: string; doesNotEstablish: string }>>;
  };
  diagramLabels: {
    workflowPhases: readonly [string, string, string, string];
    evidenceStates: readonly [string, string, string, string, string];
    artifactReturn: string;
    trustLayers: readonly [string, string, string];
  };
  metadata: MetadataContent;
  hero: { eyebrow: string; title: string; description: string; context: string; consultingContext: string };
  details: { workflow: string; evidence: string; history: string };
  sections: {
    problem: NarrativeSection & { bullets: readonly string[] };
    evolution: NarrativeSection & { decisions: readonly Description[]; sourceLabel: string };
    architecture: NarrativeSection & {
      layers: readonly { id: 'public-framework' | 'private-runtime' | 'ai-session'; description: string }[];
      sources: readonly Description[]; example: string; sourceLabel: string;
    };
    principles: NarrativeSection & {
      items: readonly { code: string; description: string }[];
      evidenceIntro: string; distinctions: readonly [string, string, string, string];
    };
    application: NarrativeSection & { bullets: readonly string[]; boundary: string; workflowIntro: string; steps: readonly string[] };
    outcomes: NarrativeSection & { results: readonly Description[]; learningTitle: string; learnings: readonly string[]; sourceLabel: string };
    publicFramework: NarrativeSection & {
      release: string; current: string; limitation: string; evidenceBoundary: string;
      releaseLabel: string; currentLabel: string; releasesLabel: string; next: string;
    };
  };
  cta: { title: string; description: string; githubLabel: string; consultingLabel: string };
};

export const aiAssistedDesignEngineeringCaseContent = {
  "pt-BR": {
    "diagramLabels": {
      "workflowPhases": [
        "Contexto",
        "Evidência e decisão",
        "Design e execução",
        "Validação e continuidade"
      ],
      "trustLayers": [
        "Framework operacional",
        "Runtime por projeto",
        "Sessão de IA"
      ],
      "evidenceStates": [
        "Gravação",
        "Transcrição",
        "Requisito aprovado",
        "Implementação",
        "Conclusão validada"
      ],
      "artifactReturn": "QA → retornar à inspeção do artefato"
    },
    "metadata": {
      "title": "AI-Assisted Design Engineering Operating System — Case de Product Design | Nelson Secco",
      "description": "Nelson Secco apresenta o framework que criou para conectar Product Design, Design Systems e IA com evidências, continuidade e responsabilidade humana."
    },
    "hero": {
      "eyebrow": "AI-Assisted Design Engineering Operating System",
      "title": "Sessões de IA são temporárias. O trabalho de produto não é.",
      "description": "Criei um framework operacional para conectar Product Design, Design Systems e Engenharia em fluxos assistidos por IA — com evidências, continuidade e responsabilidade humana.",
      "context": "Sou Nelson Secco, Senior Product Designer e UX Consultant. Transformei problemas recorrentes da minha prática em um método genérico, reutilizável e versionado para orientar a colaboração entre profissionais e agentes de IA.",
      "consultingContext": "Hoje, utilizo o framework como base operacional em atividades profissionais reais, com adaptações específicas por projeto. Este case apresenta o método público; contextos e evidências de clientes permanecem privados."
    },
    "details": {
      "workflow": "Aprofundar: um fluxo genérico de trabalho",
      "evidence": "Aprofundar: da fonte à conclusão",
      "history": "Consultar capturas históricas do framework público"
    },
    "sections": {
      "problem": {
        "title": "O custo de recomeçar a cada conversa",
        "intro": "O trabalho atravessa dias, decisões e ferramentas. Quando o contexto fica apenas no chat, o profissional precisa reconstruir o que já foi combinado antes de continuar.",
        "bullets": [
          "Instruções repetidas e decisões que se perdem entre sessões.",
          "Fontes conflitantes e suposições que passam a ser tratadas como fatos.",
          "Mudanças que se afastam do comportamento aprovado ou duplicam o Design System.",
          "Responsabilidades ambíguas e dificuldade para saber o que foi concluído e o que ainda exige revisão."
        ]
      },
      "evolution": {
        "title": "Da experimentação a um método reutilizável",
        "intro": "A evolução exigiu desenhar como o trabalho continua, quem decide e quais fontes sustentam cada ação. Três decisões estruturam essa passagem.",
        "decisions": [
          {
            "title": "Separar regra, contexto e estado",
            "description": "Consolidar princípios estáveis no framework, manter o contexto no projeto e registrar o ponto de retomada. Cada nova sessão encontra responsabilidades distintas em vez de um único prompt sobrecarregado."
          },
          {
            "title": "Projetar a continuidade",
            "description": "Organizar frentes de trabalho, sessões e decisões em registros persistentes. O próximo agente precisa reconciliar esses registros com as fontes e com o artefato atual antes de agir."
          },
          {
            "title": "Evoluir com critérios",
            "description": "Versionar o método, explicitar permissões e definir validação e encerramento. Uma melhoria no framework passa por análise própria antes de ser adotada em cada projeto."
          }
        ],
        "sourceLabel": "Ler o raciocínio de design no repositório público"
      },
      "architecture": {
        "title": "Um método, três responsabilidades",
        "intro": "O framework governa o trabalho. O runtime preserva o estado de cada projeto. A sessão executa uma tarefa delimitada. A responsabilidade pelas decisões permanece com as pessoas.",
        "layers": [
          {
            "id": "public-framework",
            "description": "Regras genéricas de colaboração: evidências, escopo, permissões, qualidade e continuidade. É a camada pública e reutilizável."
          },
          {
            "id": "private-runtime",
            "description": "Registros persistentes de objetivo, decisões, referências e próximo passo. Workstreams organizam frentes de trabalho; sessões registram cada período de execução. O contexto real fica no ambiente autorizado do projeto."
          },
          {
            "id": "ai-session",
            "description": "Agentes inspecionam, propõem e executam dentro do escopo permitido. Ao terminar a sessão, registram o que mudou, o que foi verificado e como continuar."
          }
        ],
        "sources": [
          {
            "title": "Fontes primárias",
            "description": "Requisitos e aprovações conservam sua origem. O runtime mantém referências e contexto, sem substituir a evidência."
          },
          {
            "title": "Design System canônico",
            "description": "Componentes, tokens e padrões aprovados orientam a composição. Mudanças compartilhadas exigem análise de impacto e ownership explícito."
          },
          {
            "title": "Artefato atual",
            "description": "A interface, o arquivo de design ou o código mostram o estado real. Um relato anterior precisa ser reconciliado com esse estado."
          }
        ],
        "example": "Exemplo genérico: antes de alterar um componente, conferir a referência aprovada, inspecionar a instância atual, delimitar quem pode modificá-la e registrar a validação no local responsável pela mudança.",
        "sourceLabel": "Explorar a estrutura pública de runtime"
      },
      "principles": {
        "title": "Autonomia com responsabilidade humana",
        "intro": "A IA amplia a capacidade de análise e execução. Direção de produto, interpretação de aprovações e responsabilidade final continuam humanas.",
        "items": [
          {
            "code": "Responsabilidade humana",
            "description": "Pessoas definem objetivos, avaliam consequências e aprovam decisões de produto."
          },
          {
            "code": "Evidência antes da inferência",
            "description": "Uma fonte primária verificável tem prioridade sobre uma interpretação conveniente."
          },
          {
            "code": "FACT ≠ INFERENCE ≠ ASSUMPTION",
            "description": "Separar o observado, o interpretado e o que ainda precisa de confirmação."
          },
          {
            "code": "PARITY BEFORE UX EVOLUTION",
            "description": "Preservar o comportamento aprovado antes de propor mudanças na experiência."
          },
          {
            "code": "REUSE → COMPOSE → EVOLVE → CREATE",
            "description": "Inspecionar e reutilizar a base canônica antes de criar novos padrões."
          },
          {
            "code": "Ownership das alterações",
            "description": "Quem responde pelo arquivo ou artefato alterado também mantém seu registro de mudança."
          },
          {
            "code": "Continuidade persistente",
            "description": "Objetivo, decisões e próximo passo precisam sobreviver à memória temporária da conversa."
          },
          {
            "code": "Validação proporcional ao risco",
            "description": "Executar as verificações necessárias e reutilizar evidências ainda válidas, preservando os critérios obrigatórios."
          },
          {
            "code": "Conclusão com critérios",
            "description": "Definir o aceite antes dos testes e separar execução, evidência e aprovação humana."
          }
        ],
        "evidenceIntro": "Uma transcrição ajuda a recuperar uma conversa. A passagem para requisito, implementação e conclusão exige revisão e evidência em cada etapa.",
        "distinctions": [
          "gravação ≠ transcrição",
          "transcrição ≠ requisito aprovado",
          "requisito aprovado ≠ implementação",
          "implementação ≠ conclusão validada"
        ]
      },
      "application": {
        "title": "Da metodologia à aplicação profissional",
        "intro": "Utilizo o framework como base operacional na minha prática profissional, com adaptações de governança, ferramentas e confidencialidade a cada projeto.",
        "bullets": [
          "O método público fornece princípios e contratos reutilizáveis.",
          "A configuração do projeto define fontes autorizadas, Design System, responsáveis e limites de atuação.",
          "A execução profissional aplica esses critérios a tarefas concretas, com inspeção, revisão e validação."
        ],
        "boundary": "O uso profissional é uma declaração do autor. Este case não apresenta dados, interfaces ou resultados de clientes como evidência pública.",
        "workflowIntro": "Esta sequência é uma demonstração genérica derivada da documentação pública, sem representar um projeto de cliente.",
        "steps": [
          "Definir objetivo",
          "Delimitar escopo",
          "Localizar fontes",
          "Revisar evidências",
          "Registrar decisões",
          "Analisar Produto e UX",
          "Inspecionar o artefato",
          "Compor com o Design System",
          "Executar no escopo autorizado",
          "Validar critérios",
          "Revisar com responsáveis",
          "Registrar o próximo passo"
        ]
      },
      "outcomes": {
        "title": "O que foi construído — e o que ainda precisa ser demonstrado",
        "intro": "O resultado público é um framework versionado que torna explícitas as regras de colaboração, a estrutura de continuidade e os limites de atuação.",
        "results": [
          {
            "title": "Demonstrado publicamente",
            "description": "Método, arquitetura de runtime, contratos e histórico de releases podem ser inspecionados no repositório público."
          },
          {
            "title": "Relatado pelo autor",
            "description": "Uso como base operacional em atividades profissionais reais, com adaptações específicas. A documentação pública não comprova de forma independente as operações privadas."
          },
          {
            "title": "Benefícios a mensurar",
            "description": "Reduzir retrabalho, esforço de retomada e inconsistências é um objetivo do método. Este case não apresenta medição comparativa de produtividade ou eficácia geral dos agentes."
          }
        ],
        "learningTitle": "Limitações que orientam a evolução",
        "learnings": [
          "Contexto recuperado pode estar incompleto ou desatualizado. A retomada exige conferir as fontes aplicáveis e reconciliar o estado antes de alterar um artefato.",
          "Conversa, documentação e artefato podem divergir. Registros preservam a intenção; a inspeção confirma a implementação atual.",
          "Revalidar tudo a cada passo aumenta o custo sem necessariamente mudar a decisão. Critérios prévios e evidência ainda válida ajudam a delimitar o encerramento.",
          "Autonomia sem limites claros deixa responsabilidades ambíguas. Escopo, permissões e ownership precisam anteceder a execução.",
          "Testes aprovados sustentam apenas o que foi verificado. Não equivalem à aprovação humana nem demonstram, por si só, a eficácia dos agentes."
        ],
        "sourceLabel": "Consultar o contrato público de validação e encerramento"
      },
      "publicFramework": {
        "title": "Um framework público em evolução",
        "intro": "O método continua experimental e em evolução. A documentação, as decisões e os releases permitem acompanhar o que foi publicado e o que ainda está em desenvolvimento.",
        "release": "Release publicado: v3.9.0, de 24 de outubro de 2026. Acrescenta três ferramentas opcionais de leitura e apoio à revisão de contexto, coerência de relatos de ações e ciclos de trabalho.",
        "current": "Após esse release, o main recebeu mudanças adicionais de admissão de fontes e validação proporcional. A referência consultada neste case é de 26 de outubro de 2026; essas mudanças não fazem parte da tag v3.9.0 nem atualizam automaticamente projetos adotantes.",
        "limitation": "O registro do v3.9.0 relata QA local executado pelo mantenedor. CI hospedada não foi verificada. Isso não comprova autenticação independente das ações de ferramentas, eficácia geral dos agentes ou aceitação dos pilotos opcionais.",
        "evidenceBoundary": "As capturas abaixo são registros históricos. Elas comprovam a existência da documentação nas versões capturadas; não comprovam de forma independente operações privadas nem indicam a versão atual.",
        "releaseLabel": "Consultar o release v3.9.0",
        "currentLabel": "Ver a fonte posterior consultada",
        "releasesLabel": "Acompanhar o histórico de releases",
        "next": "Próximos passos: continuar refinando as regras a partir de limitações verificáveis e ampliar a avaliação independente. Novas hipóteses dependem de evidência antes de serem apresentadas como resultados."
      }
    },
    "cta": {
      "title": "Vamos estruturar seu próximo desafio de produto?",
      "description": "Converse sobre Product Design, Design Systems e Design Engineering com IA, considerando o contexto, os critérios de qualidade e a responsabilidade da sua equipe.",
      "githubLabel": "Explorar o framework no GitHub",
      "consultingLabel": "Conversar sobre consultoria com IA"
    },
    "evidence": {
      "establishesLabel": "O que esta evidência comprova",
      "doesNotEstablishLabel": "O que ela não comprova",
      "items": {
        "ingestion": {
          "title": "Ingestão de evidências no framework público",
          "alt": "Documento público de ingestão de evidências com as distinções entre gravação, transcrição, requisito, implementação e conclusão validada.",
          "establishes": "O framework público documenta estados distintos de evidência e exige preservação da proveniência em cada transição.",
          "doesNotEstablish": "Não comprova ingestão ou aprovação em projetos privados de clientes, nem transforma transcrição automática em verdade."
        },
        "runtime": {
          "title": "Estrutura persistente de Project Runtime",
          "alt": "Árvore pública de runtime com diretórios de evidências, sessões, workstreams e registros operacionais.",
          "establishes": "O repositório documenta uma estrutura persistente de runtime com evidências, sessões, workstreams, relatórios e operadores, além do README ou de um prompt.",
          "doesNotEstablish": "Não expõe nem comprova conteúdos, configurações ou operações de runtimes privados de clientes."
        },
        "readme": {
          "title": "README do repositório público",
          "alt": "README do framework público mostrando a versão e a pergunta central sobre continuidade no trabalho de produto assistido por IA.",
          "establishes": "O repositório público de Nelson apresenta a proposta do framework, a versão registrada na captura e a pergunta central sobre preservar intenção, contexto, evidência, responsabilidade, qualidade e continuidade entre sessões temporárias.",
          "doesNotEstablish": "Não comprova de forma independente adoção ou operações confidenciais de clientes; a versão mostrada é um registro da captura, não uma declaração sobre a versão atual."
        },
        "commit": {
          "title": "Evolução versionada — commit 291015",
          "alt": "Commit público 291015 com alterações no README e na documentação de ingestão de evidências e transcrição local.",
          "establishes": "O commit 2910154799ed28416475a359a9ea536599f38451 registra alterações reais e versionadas no framework e em sua documentação.",
          "doesNotEstablish": "Não comprova hosted CI PASS, ganho de produtividade ou execução de operações privadas de clientes."
        }
      }
    }
  },
  "en": {
    "diagramLabels": {
      "workflowPhases": [
        "Context",
        "Evidence and decisions",
        "Design and execution",
        "Validation and continuity"
      ],
      "trustLayers": [
        "Operating framework",
        "Project runtime",
        "AI session"
      ],
      "evidenceStates": [
        "Recording",
        "Transcript",
        "Approved requirement",
        "Implementation",
        "Validated completion"
      ],
      "artifactReturn": "QA → return to artifact inspection"
    },
    "metadata": {
      "title": "AI-Assisted Design Engineering Operating System — Product Design Case Study | Nelson Secco",
      "description": "Nelson Secco presents the framework he created to connect Product Design, Design Systems and AI through evidence, continuity and human accountability."
    },
    "hero": {
      "eyebrow": "AI-Assisted Design Engineering Operating System",
      "title": "AI sessions are temporary. Product work isn’t.",
      "description": "I created an operating framework to connect Product Design, Design Systems and Engineering in AI-assisted workflows — with evidence, continuity and human accountability.",
      "context": "I’m Nelson Secco, a Senior Product Designer and UX Consultant. I turned recurring challenges in my practice into a reusable, versioned method for collaboration between professionals and AI agents.",
      "consultingContext": "I now use the framework as an operational baseline in real professional work, adapted to each engagement. This case presents the public method; client context and evidence remain private."
    },
    "details": {
      "workflow": "Explore a generic workflow",
      "evidence": "Explore the path from source to completion",
      "history": "View historical captures of the public framework"
    },
    "sections": {
      "problem": {
        "title": "The cost of starting over in every conversation",
        "intro": "Product work spans days, decisions and tools. When context lives only in a chat, the professional has to reconstruct previous agreements before continuing.",
        "bullets": [
          "Repeated instructions and decisions lost between sessions.",
          "Conflicting sources and assumptions that begin to pass as facts.",
          "Changes that drift from approved behavior or duplicate the Design System.",
          "Unclear responsibilities and uncertainty about what is complete and what still needs review."
        ]
      },
      "evolution": {
        "title": "From experiments to a reusable method",
        "intro": "Progress meant designing how work continues, who decides and which sources support each action. Three design decisions underpin that transition.",
        "decisions": [
          {
            "title": "Separate rules, context and state",
            "description": "Keep stable principles in the framework, context within the project and a record of where to resume. Each new session encounters distinct responsibilities rather than one overloaded prompt."
          },
          {
            "title": "Design for continuity",
            "description": "Organize workstreams, sessions and decisions in persistent records. The next agent must reconcile those records with primary sources and the current artifact before acting."
          },
          {
            "title": "Evolve against explicit criteria",
            "description": "Version the method, define permissions and establish validation and closure criteria. Framework improvements require a separate assessment before adoption in each project."
          }
        ],
        "sourceLabel": "Read the design rationale in the public repository"
      },
      "architecture": {
        "title": "One method, three responsibilities",
        "intro": "The framework governs the work. The runtime preserves each project’s state. The session executes a bounded task. People remain accountable for decisions.",
        "layers": [
          {
            "id": "public-framework",
            "description": "Generic collaboration rules covering evidence, scope, permissions, quality and continuity. This is the public, reusable layer."
          },
          {
            "id": "private-runtime",
            "description": "Persistent records of objectives, decisions, references and next steps. Workstreams organize ongoing work; sessions record each period of execution. Real context stays within the project’s authorized environment."
          },
          {
            "id": "ai-session",
            "description": "Agents inspect, propose and execute within permitted scope. At session end, they record what changed, what was verified and how to continue."
          }
        ],
        "sources": [
          {
            "title": "Primary sources",
            "description": "Requirements and approvals retain their provenance. The runtime preserves references and context without replacing the evidence."
          },
          {
            "title": "Canonical Design System",
            "description": "Approved components, tokens and patterns guide composition. Shared changes require impact assessment and explicit ownership."
          },
          {
            "title": "Current artifact",
            "description": "The interface, design file or code shows the actual state. Earlier reports must be reconciled with that state."
          }
        ],
        "example": "Generic example: before changing a component, check the approved reference, inspect the current instance, establish who may modify it and record validation where the change belongs.",
        "sourceLabel": "Explore the public runtime structure"
      },
      "principles": {
        "title": "Autonomy with human accountability",
        "intro": "AI extends the capacity for analysis and execution. Product direction, interpretation of approvals and final accountability remain human responsibilities.",
        "items": [
          {
            "code": "Human accountability",
            "description": "People define objectives, assess consequences and approve product decisions."
          },
          {
            "code": "Evidence before inference",
            "description": "Verifiable primary evidence takes precedence over a convenient interpretation."
          },
          {
            "code": "FACT ≠ INFERENCE ≠ ASSUMPTION",
            "description": "Separate observations, interpretations and what still needs confirmation."
          },
          {
            "code": "PARITY BEFORE UX EVOLUTION",
            "description": "Preserve approved behavior before proposing changes to the experience."
          },
          {
            "code": "REUSE → COMPOSE → EVOLVE → CREATE",
            "description": "Inspect and reuse the canonical foundation before creating new patterns."
          },
          {
            "code": "Change ownership",
            "description": "The owner of the changed file or artifact also maintains its change record."
          },
          {
            "code": "Persistent continuity",
            "description": "Objectives, decisions and next steps must outlast the conversation’s temporary memory."
          },
          {
            "code": "Risk-proportionate validation",
            "description": "Run necessary checks and reuse still-valid evidence while preserving mandatory acceptance criteria."
          },
          {
            "code": "Explicit completion criteria",
            "description": "Define acceptance before testing and distinguish execution, evidence and human approval."
          }
        ],
        "evidenceIntro": "A transcript helps recover a conversation. Progressing to requirements, implementation and completion requires review and evidence at each transition.",
        "distinctions": [
          "recording ≠ transcript",
          "transcript ≠ approved requirement",
          "approved requirement ≠ implementation",
          "implementation ≠ validated completion"
        ]
      },
      "application": {
        "title": "From methodology to professional practice",
        "intro": "I use the framework as an operational baseline in professional practice, adapting governance, tools and confidentiality safeguards to each engagement.",
        "bullets": [
          "The public method provides reusable principles and contracts.",
          "Project configuration defines authorized sources, the Design System, responsibilities and execution boundaries.",
          "Professional execution applies these criteria to concrete tasks through inspection, review and validation."
        ],
        "boundary": "Professional use is reported by the author. This case does not present client data, interfaces or results as public evidence.",
        "workflowIntro": "This sequence is a generic demonstration derived from public documentation, rather than a depiction of a client engagement.",
        "steps": [
          "Define the objective",
          "Bound the scope",
          "Locate sources",
          "Review evidence",
          "Record decisions",
          "Analyze Product and UX",
          "Inspect the artifact",
          "Compose with the Design System",
          "Execute within authorized scope",
          "Validate acceptance criteria",
          "Review with accountable people",
          "Record the next step"
        ]
      },
      "outcomes": {
        "title": "What has been built — and what still needs evidence",
        "intro": "The public outcome is a versioned framework that makes collaboration rules, continuity structures and execution boundaries explicit.",
        "results": [
          {
            "title": "Publicly inspectable",
            "description": "The method, runtime architecture, contracts and release history can be examined in the public repository."
          },
          {
            "title": "Reported by the author",
            "description": "Use as an operational baseline in real professional work, adapted to each context. Public documentation does not independently establish private operations."
          },
          {
            "title": "Benefits to measure",
            "description": "Reducing rework, restart effort and inconsistency is an objective of the method. This case presents no comparative measurement of productivity or general agent effectiveness."
          }
        ],
        "learningTitle": "Limitations that guide further development",
        "learnings": [
          "Recovered context can be incomplete or outdated. Resuming work requires checking applicable sources and reconciling state before changing an artifact.",
          "Conversation, documentation and artifacts can diverge. Records preserve intent; inspection establishes the current implementation.",
          "Rechecking everything at every step adds cost without necessarily changing a decision. Prior criteria and still-valid evidence help define when to stop.",
          "Unbounded autonomy leaves responsibilities unclear. Scope, permissions and ownership must precede execution.",
          "Passing tests support only what was checked. They do not constitute human approval or, on their own, demonstrate agent effectiveness."
        ],
        "sourceLabel": "Read the public validation and closure contract"
      },
      "publicFramework": {
        "title": "A public framework that continues to evolve",
        "intro": "The method remains experimental and evolving. Documentation, decisions and releases show what has been published and what is still under development.",
        "release": "Published release: v3.9.0, dated October 24, 2026. It adds three optional read-only helpers for source delivery, action-report consistency and supervised work cycles.",
        "current": "After that release, main received additional source-admission and risk-proportionate validation changes. This case references a snapshot inspected on October 26, 2026; those changes are outside the v3.9.0 tag and do not automatically update adopting projects.",
        "limitation": "The v3.9.0 record reports maintainer-executed local QA. Hosted CI was not verified. This does not establish independent authentication of tool actions, general agent effectiveness or acceptance of optional pilots.",
        "evidenceBoundary": "The captures below are historical records. They establish the existence of documentation at the captured revisions; they do not independently prove private operations or indicate the current version.",
        "releaseLabel": "Read the v3.9.0 release",
        "currentLabel": "View the later source snapshot",
        "releasesLabel": "Follow the release history",
        "next": "Next steps: refine the rules against verifiable limitations and broaden independent evaluation. New hypotheses need evidence before they can be presented as outcomes."
      }
    },
    "cta": {
      "title": "Let’s structure your next product challenge",
      "description": "Discuss Product Design, Design Systems and AI-assisted Design Engineering around your team’s context, quality criteria and accountability.",
      "githubLabel": "Explore the framework on GitHub",
      "consultingLabel": "Discuss AI consulting"
    },
    "evidence": {
      "establishesLabel": "What this evidence establishes",
      "doesNotEstablishLabel": "What it does not establish",
      "items": {
        "ingestion": {
          "title": "Evidence ingestion in the public framework",
          "alt": "Public evidence-ingestion document distinguishing recording, transcript, requirement, implementation, and validated completion.",
          "establishes": "The public framework documents distinct evidence states and requires provenance to be preserved at every transition.",
          "doesNotEstablish": "It does not prove ingestion or approval in private client projects, or turn machine transcription into truth."
        },
        "runtime": {
          "title": "Persistent Project Runtime structure",
          "alt": "Public runtime tree with directories for evidence, sessions, workstreams, and operational records.",
          "establishes": "The repository documents a persistent runtime structure with evidence, sessions, workstreams, reports, and operators beyond a README or prompt.",
          "doesNotEstablish": "It neither exposes nor proves the contents, configurations, or operations of private client runtimes."
        },
        "readme": {
          "title": "Public repository README",
          "alt": "Public framework README showing its version and central question about continuity in AI-assisted product work.",
          "establishes": "Nelson’s public repository presents the framework proposition, the version recorded in the capture, and the central question about preserving intent, context, evidence, ownership, quality, and continuity across temporary sessions.",
          "doesNotEstablish": "It does not independently prove adoption or confidential client operations; the displayed version is a capture record, not a statement about the current version."
        },
        "commit": {
          "title": "Versioned evolution — commit 291015",
          "alt": "Public commit 291015 showing changes to the README and evidence-ingestion and local-transcription documentation.",
          "establishes": "Commit 2910154799ed28416475a359a9ea536599f38451 records real, versioned changes to the framework and its documentation.",
          "doesNotEstablish": "It does not prove hosted CI PASS, productivity gains, or execution of private client operations."
        }
      }
    }
  }
} as const satisfies DictionaryByLocale<AiAssistedDesignEngineeringCaseLocalizedContent>;
