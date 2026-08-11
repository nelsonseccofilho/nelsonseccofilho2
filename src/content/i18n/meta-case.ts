import type { DictionaryByLocale, MetadataContent } from './types';

export type PortfolioMetaCaseContent = {
  metadata: MetadataContent;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  heroMedia?: {
    src: string;
    alt: string;
  };
  sections: readonly {
    id: string;
    title: string;
    paragraphs: readonly string[];
    bullets?: readonly string[];
    placeholder?: boolean;
    media?: {
      src: string;
      alt: string;
    };
  }[];
  deployment: {
    title: string;
    steps: readonly { label: string; description: string }[];
    productionLabel: string;
    media?: {
      src: string;
      alt: string;
    };
  };
  professionalEvidence: {
    title: string;
    bullets: readonly string[];
  };
  learnings: {
    title: string;
    bullets: readonly string[];
  };
};

const ptBR: PortfolioMetaCaseContent = {
  metadata: {
    title: 'Construindo este portfólio | Nelson Secco',
    description: 'Um meta-case sobre Product Design, Engenharia, desenvolvimento assistido por IA e validação em produção.',
  },
  eyebrow: 'Meta-case autoral',
  title: 'Construindo este portfólio',
  subtitle: 'Product Design × Engineering × AI-assisted development',
  intro: 'Este portfólio começou como um problema de posicionamento. A hipótese era que o próprio produto poderia demonstrar, em vez de apenas descrever, minha capacidade de conectar Design, Produto e Engenharia.',
  heroMedia: {
    src: '/assets/projects/building-this-portfolio/hero/hero-building-this-portfolio-workspace.png',
    alt: 'Workspace com VS Code, localhost, terminal e colaboração assistida por IA durante a construção do portfólio.',
  },
  sections: [
    {
      id: 'why-rebuild',
      title: 'Por que reconstruir o portfólio',
      paragraphs: ['A apresentação anterior já não representava plenamente a convergência atual entre Product Design, UX, conhecimento de desenvolvimento de software, colaboração com Engenharia, implementação e fluxos assistidos por IA. O objetivo deixou de ser apenas mostrar projetos: era tornar visível como penso, estruturo decisões, construo e valido.'],
    },
    {
      id: 'hypothesis',
      title: 'A hipótese de produto',
      paragraphs: ['Tratei o portfólio como um produto: conteúdo primeiro, evidências claras, duas línguas, acessibilidade, responsividade, manutenção técnica e validação contínua. A implementação deveria sustentar o posicionamento profissional, não funcionar apenas como sua embalagem.'],
      bullets: ['Conteúdo primeiro e narrativa orientada por evidências', 'PT-BR canônico e experiência equivalente em inglês', 'Componentes compartilhados, comportamento acessível e critérios testáveis'],
      placeholder: true,
      media: {
        src: '/assets/projects/building-this-portfolio/evidence/evidence-github-repository.png',
        alt: 'Evidência do repositório GitHub do projeto, usada como base da hipótese de produto.',
      },
    },
    {
      id: 'code-first',
      title: 'Código como meio de design neste projeto',
      paragraphs: ['Não houve telas finais previamente desenhadas no Figma. As decisões passaram por discussão, implementação, renderização no navegador, crítica humana, testes e refinamento. Isso não torna o Figma obsoleto nem define um método universal: neste produto, o código foi um dos meios de design. Figma continua relevante para documentação, referências e materiais de apoio.'],
      bullets: ['Objetivo → hipótese → implementação → render', 'Revisão humana → teste → refinamento', 'Commit → deploy → validação em produção'],
      media: {
        src: '/assets/projects/building-this-portfolio/narrative/narrative-code-as-design-medium.png',
        alt: 'Fluxo de trabalho mostrando código como meio de design entre decisão, implementação e validação.',
      },
    },
    {
      id: 'product-decisions',
      title: 'Decisões de Produto e UX',
      paragraphs: ['A arquitetura bilíngue, a hierarquia editorial da Home, a ordem dos cases, a navegação sem hierarquias artificiais, o Evidence System, os temas Light/Dark e o refinamento de escaneabilidade do SUBITER são decisões do produto — não apenas detalhes de interface.'],
    },
    {
      id: 'architecture',
      title: 'Arquitetura a serviço da qualidade',
      paragraphs: ['Next.js App Router, React e TypeScript sustentam rotas e dicionários tipados. Componentes compartilhados e tokens semânticos mantêm consistência. Tailwind CSS é o padrão atual para UI nova e migrada; shadcn/ui e primitivas Radix são usados onde resolvem interação e acessibilidade de forma significativa.'],
      placeholder: true,
      media: {
        src: '/assets/projects/building-this-portfolio/source-exports/netlify-build-settings.png',
        alt: 'Configuração de Build Settings no Netlify usada para garantir consistência de ambiente e publicação.',
      },
    },
    {
      id: 'quality',
      title: 'Qualidade como trabalho de produto',
      paragraphs: [
        'Velocidade de implementação foi acompanhada por gates explícitos: testes automatizados, typecheck, lint, build de produção, QA responsivo, Light/Dark, localização PT-BR/EN, teclado, movimento reduzido, contraste, revisão visual humana e validação do deploy em produção.',
        'Após a publicação, o portfólio passou a contar com Microsoft Clarity como camada de observação comportamental. Heatmaps, gravações de sessão e padrões de interação passam a apoiar novas revisões de UX com evidências de uso real, mantendo analytics condicionado à escolha do visitante. O ciclo se expande para Design → implementação → validação automatizada → produção → observação comportamental → refinamento.',
      ],
      media: {
        src: '/assets/projects/building-this-portfolio/evidence/evidence-qa-findings.png',
        alt: 'Evidência de QA e validação responsiva usada para revisar UX, acessibilidade e qualidade técnica.',
      },
    },
    {
      id: 'documentation',
      title: 'Documentação e convenções',
      paragraphs: ['Conventional Commits organiza o histórico semântico. BEM permanece na arquitetura CSS original/legada, enquanto Tailwind é o padrão de UI atual. A documentação evoluiu junto com decisões e implementação; ela apoia colaboração, não a substitui.'],
      media: {
        src: '/assets/projects/building-this-portfolio/evidence/evidence-decisions-documentation.png',
        alt: 'Documento de decisões do projeto usado como referência de convenções e governança técnica.',
      },
    },
    {
      id: 'ux-review',
      title: 'Revisão de UX e acessibilidade',
      paragraphs: ['As revisões de UX foram orientadas por princípios de usabilidade e referências publicadas pela Nielsen Norman Group (NN/g). A acessibilidade foi tratada por revisão, validação de contraste, QA de teclado e critérios relevantes orientados pela WCAG quando avaliados — sem alegação de certificação ou endosso.'],
      media: {
        src: '/assets/projects/building-this-portfolio/narrative/narrative-responsive-validation.png',
        alt: 'Cenários de validação responsiva em múltiplas larguras para revisão de usabilidade e acessibilidade.',
      },
    },
    {
      id: 'human-qa',
      title: 'Revisão humana mudou o produto',
      paragraphs: ['A crítica visual e semântica encontrou problemas que a validação automatizada, sozinha, não encontraria. Alguns exemplos documentam como decisões foram revistas sem perder o escopo.'],
      bullets: ['Uma falsa hierarquia de breadcrumb virou o link contextual “← Todos os projetos”.', 'Evidência principal e complementar receberam pesos distintos; na DASA, o disclosure foi validado no ciclo 4 → 8 → 4.', 'O lightbox passou a derivar sua largura das dimensões intrínsecas da mídia.', 'O SUBITER ganhou melhor medida narrativa, lista semântica de responsabilidades e callouts editoriais contidos.', 'Tokens Dark foram corrigidos de 3,83:1 e 3,86:1 para 4,61:1 e 4,72:1, com teste de regressão.'],
    },
    {
      id: 'ai-collaboration',
      title: 'Colaboração assistida por IA',
      paragraphs: [
        'A IA participou de diferentes etapas do trabalho, mas não como uma camada autônoma de decisão. Usei ChatGPT para discutir problemas, organizar contexto, criticar alternativas e transformar decisões em tarefas mais claras; Codex no VS Code para trabalhar diretamente sobre o repositório; e GitHub Copilot Pro+ como outra camada de assistência integrada ao ambiente de desenvolvimento.',
        'Com o avanço do projeto, aprendi que o resultado dependia menos de simplesmente “usar IA” e mais de definir bem o problema, fornecer contexto suficiente, controlar o escopo e validar o que era produzido.',
        'As ferramentas aceleraram partes da execução. Decisões de produto, direção de UX, critérios de qualidade, revisão visual, validação factual e aprovação final continuaram sob minha responsabilidade.',
      ],
      media: {
        src: '/assets/projects/building-this-portfolio/narrative/narrative-human-ai-workflow.png',
        alt: 'Evidência de colaboração humano-IA aplicada ao workflow de execução e revisão no VS Code.',
      },
    },
    {
      id: 'ai-operations',
      title: 'Operando o workflow de IA',
      paragraphs: [
        'Construir o portfólio também significou aprender a operar o sistema ao redor das ferramentas. Configurei ChatGPT Plus, VS Code, Codex, Git, GitHub e GitHub Copilot Pro+, além de autenticação, permissões, fluxo do repositório e ambientes local e de produção.',
        'A escolha do agente e do nível de capacidade também fez parte da operação do projeto. Tarefas foram distribuídas entre diferentes ferramentas conforme complexidade, disponibilidade e custo, preservando os mesmos critérios humanos de revisão e qualidade.',
        'Ao longo do trabalho, deixei de tratar toda tarefa como se exigisse a maior capacidade disponível. Problemas de arquitetura, refactors amplos, debugging difícil e auditorias justificavam mais capacidade de raciocínio; mudanças menores e bem delimitadas podiam ser executadas com configurações proporcionais ao problema.',
        '57 commits · 4 dias de atividade · ~22h de trabalho identificável.',
        'Reconstruídas a partir da atividade Git entre 7 e 10 de agosto de 2026, incluindo implementação, refinamento e validação.',
        'Essa estimativa técnica não representa o esforço intelectual total do projeto: ela não mede discovery anterior, conversas e planejamento fora do Git, trabalho em Figma sem commits nem a fase futura de imagem/art direction definida na D-022.',
        'Esse limite não foi tratado como um obstáculo a contornar aumentando gastos, mas como uma restrição operacional. Passei a trabalhar com tarefas menores, escopo mais explícito, inspeção do repositório antes da implementação, separação entre execução e validação e escolha de capacidade proporcional à complexidade.',
        'O aprendizado principal foi que trabalhar bem com IA envolve também administrar contexto, capacidade, custo e critérios de aceitação. A ferramenta pode executar parte do trabalho; a responsabilidade por decidir o que fazer, por que fazer e quando considerar concluído continua humana.',
      ],
    },
    {
      id: 'cost-operations',
      title: 'Custo operacional do experimento',
      paragraphs: [
        'A documentação pública de custo prioriza somente valores com atribuição explícita neste projeto. Não há publicação de preço inferido a partir de transações ambíguas nem extrapolação de mensalidade sem vínculo comprovável com a operação.',
      ],
      bullets: [
        'Ferramentas de IA: consumo operacional documentado por capacidade e créditos (captura de 10 de agosto de 2026), sem publicar valor monetário não atribuível com precisão.',
        'Hospedagem: Netlify, no ambiente atual de produção.',
        'Desenvolvimento e validação realizados diretamente pelo autor, com revisão humana responsável por escopo, qualidade e aprovação final.',
      ],
    },
  ],
  deployment: {
    title: 'Do localhost à produção',
    steps: [
      { label: 'Problema', description: 'A aplicação funcionava localmente, mas o ciclo inicial de deploy encontrou incompatibilidade entre o runtime disponível e os requisitos atuais do Next.js.' },
      { label: 'Diagnóstico', description: 'A configuração de build/runtime do ambiente de produção precisava ser explicitada e validada.' },
      { label: 'Decisão', description: 'Fixar uma versão suportada do Node para tornar o ambiente reproduzível.' },
      { label: 'Implementação', description: 'O arquivo .nvmrc passou a declarar Node 22 no commit 588996f.' },
      { label: 'Validação', description: 'O build de produção foi executado e o deploy público no Netlify foi verificado.' },
      { label: 'Resultado', description: 'O portfólio ficou disponível em produção; “funciona localmente” não foi considerado o fim da implementação.' },
    ],
    productionLabel: 'Ver repositório no GitHub ↗',
    media: {
      src: '/assets/projects/building-this-portfolio/source-exports/netlify-production-deploy.png',
      alt: 'Deploy publicado no Netlify evidenciando a transição de localhost para produção.',
    },
  },
  professionalEvidence: {
    title: 'O que este trabalho demonstra',
    bullets: ['Prática de Senior Product Design e execução hands-on', 'Pensamento de produto e de sistemas', 'Conhecimento de desenvolvimento e colaboração com Engenharia', 'Disciplina de testes, acessibilidade e revisão crítica', 'Consciência de produção e troubleshooting técnico sem inflar o trabalho como DevOps ou SRE'],
  },
  learnings: {
    title: 'Aprendizados deste projeto',
    bullets: ['Código pode ser um meio de design.', 'Design e implementação podem acontecer mais próximos.', 'Validação automatizada e crítica humana cobrem riscos diferentes.', 'Velocidade só gera valor quando acompanhada por controles de qualidade.', 'Produção expõe restrições que o localhost não revela.', 'Usar IA de forma eficaz exigiu aprender a operar o sistema ao redor dela — não apenas pedir que uma IA gerasse código.', 'IA amplia a capacidade de execução, mas não substitui julgamento profissional.'],
  },
};

const en: PortfolioMetaCaseContent = {
  metadata: {
    title: 'Building this portfolio | Nelson Secco',
    description: 'A meta-case about Product Design, Engineering, AI-assisted development, and production validation.',
  },
  eyebrow: 'Meta case study',
  title: 'Building this portfolio',
  subtitle: 'Product Design × Engineering × AI-assisted development',
  intro: 'This portfolio began as a positioning problem. The hypothesis was that the product itself could demonstrate, rather than merely describe, my ability to connect Design, Product, and Engineering.',
  heroMedia: {
    src: '/assets/projects/building-this-portfolio/hero/hero-building-this-portfolio-workspace.png',
    alt: 'Workspace evidence with VS Code, localhost, terminal, and AI-assisted collaboration during portfolio development.',
  },
  sections: [
    { id: 'why-rebuild', title: 'Why rebuild the portfolio', paragraphs: ['The previous presentation no longer fully represented my current convergence of Product Design, UX, software-development knowledge, Engineering collaboration, implementation, and AI-assisted workflows. The goal was no longer just to show projects: it was to make visible how I think, structure decisions, build, and validate.'] },
    {
      id: 'hypothesis',
      title: 'The product hypothesis',
      paragraphs: ['I treated the portfolio as a product: content first, clear evidence, two languages, accessibility, responsiveness, technical maintainability, and continuous validation. Its implementation needed to support the professional positioning, not merely package it.'],
      bullets: ['Content-first, evidence-led narrative', 'Canonical PT-BR routes and an equivalent English experience', 'Shared components, accessible behavior, and testable criteria'],
      placeholder: true,
      media: {
        src: '/assets/projects/building-this-portfolio/evidence/evidence-github-repository.png',
        alt: 'GitHub repository evidence used as the product-hypothesis baseline.',
      },
    },
    {
      id: 'code-first',
      title: 'Code as a design medium in this project',
      paragraphs: ['There were no final UI screens designed beforehand in Figma. Decisions moved through discussion, implementation, browser rendering, human critique, testing, and refinement. This does not make Figma obsolete or define a universal method: in this product, code was one of the design media. Figma remains relevant for documentation, references, and supporting materials.'],
      bullets: ['Objective → hypothesis → implementation → render', 'Human review → test → refinement', 'Commit → deploy → production validation'],
      media: {
        src: '/assets/projects/building-this-portfolio/narrative/narrative-code-as-design-medium.png',
        alt: 'Workflow evidence showing code as a design medium across implementation and validation loops.',
      },
    },
    { id: 'product-decisions', title: 'Product and UX decisions', paragraphs: ['The bilingual architecture, editorial Home hierarchy, case ordering, navigation without artificial hierarchies, Evidence System, Light/Dark themes, and SUBITER scannability refinement are product decisions—not merely interface details.'] },
    {
      id: 'architecture',
      title: 'Architecture in service of quality',
      paragraphs: ['Next.js App Router, React, and TypeScript support typed routes and dictionaries. Shared components and semantic tokens maintain consistency. Tailwind CSS is the current standard for new and migrated UI; shadcn/ui and Radix primitives are used where they meaningfully solve interaction and accessibility needs.'],
      placeholder: true,
      media: {
        src: '/assets/projects/building-this-portfolio/source-exports/netlify-build-settings.png',
        alt: 'Netlify Build Settings evidence used to stabilize environment and publishing.',
      },
    },
    {
      id: 'quality',
      title: 'Quality as product work',
      paragraphs: [
        'Implementation speed was paired with explicit gates: automated tests, typecheck, lint, production build, responsive QA, Light/Dark QA, PT-BR/EN localization, keyboard review, reduced-motion behavior, contrast validation, human visual review, and production deployment validation.',
        'After publication, Microsoft Clarity became a behavioral-observation layer for the portfolio. Heatmaps, session recordings, and interaction patterns can support future UX reviews with real-use evidence, while analytics remains conditional on the visitor’s choice. The loop expands to Design → implementation → automated validation → production → behavioral observation → refinement.',
      ],
      media: {
        src: '/assets/projects/building-this-portfolio/evidence/evidence-qa-findings.png',
        alt: 'QA and responsive-validation evidence used to assess UX, accessibility, and technical quality.',
      },
    },
    {
      id: 'documentation',
      title: 'Documentation and conventions',
      paragraphs: ['Conventional Commits organizes semantic history. BEM remains in the original/legacy CSS architecture, while Tailwind is the current UI standard. Documentation evolved alongside decisions and implementation; it supports collaboration rather than replacing it.'],
      media: {
        src: '/assets/projects/building-this-portfolio/evidence/evidence-decisions-documentation.png',
        alt: 'Project decision log evidence used as a source for conventions and implementation governance.',
      },
    },
    {
      id: 'ux-review',
      title: 'UX and accessibility review',
      paragraphs: ['UX reviews were informed by usability principles and research published by Nielsen Norman Group (NN/g). Accessibility work included review, contrast validation, keyboard QA, and relevant WCAG-oriented criteria where assessed—without claims of certification or endorsement.'],
      media: {
        src: '/assets/projects/building-this-portfolio/narrative/narrative-responsive-validation.png',
        alt: 'Responsive-validation evidence across representative viewports for UX and accessibility review.',
      },
    },
    { id: 'human-qa', title: 'Human review changed the product', paragraphs: ['Visual and semantic critique found issues that automated validation alone would not. A few examples document how decisions were revised without losing scope.'], bullets: ['A false breadcrumb hierarchy became the contextual “← All projects” link.', 'Primary and complementary evidence gained distinct weight; DASA disclosure was validated through 4 → 8 → 4.', 'The lightbox began deriving its width from intrinsic media dimensions.', 'SUBITER gained better narrative measure, a semantic responsibilities list, and restrained editorial callouts.', 'Dark tokens were corrected from 3.83:1 and 3.86:1 to 4.61:1 and 4.72:1, with a regression test.'] },
    {
      id: 'ai-collaboration',
      title: 'AI-assisted collaboration',
      paragraphs: [
        'AI supported different stages of the work, but not as an autonomous decision-making layer. I used ChatGPT to discuss problems, organize context, critique alternatives, and turn decisions into clearer tasks; Codex in VS Code to work directly on the repository; and GitHub Copilot Pro+ as another assistance layer integrated into the development environment.',
        'As the project evolved, I learned that results depended less on simply “using AI” and more on framing the problem well, providing enough context, controlling scope, and validating what was produced.',
        'The tools accelerated parts of execution. Product decisions, UX direction, quality criteria, visual review, factual validation, and final approval remained my responsibility.',
      ],
      media: {
        src: '/assets/projects/building-this-portfolio/narrative/narrative-human-ai-workflow.png',
        alt: 'Human-AI workflow evidence showing assisted collaboration under human review and approval.',
      },
    },
    {
      id: 'ai-operations',
      title: 'Operating the AI-assisted workflow',
      paragraphs: [
        'Building the portfolio also meant learning how to operate the system surrounding the tools. I configured ChatGPT Plus, VS Code, Codex, Git, GitHub, and GitHub Copilot Pro+, together with authentication, permissions, repository workflows, and local and production environments.',
        'Choosing the agent and capability level also became part of the project operation. Tasks were distributed across different tools according to complexity, availability, and cost, while preserving the same human review and quality criteria.',
        'Over time, I stopped treating every task as if it required the highest available capability. Architecture problems, broad refactors, difficult debugging, and audits justified greater reasoning capacity; smaller, well-scoped changes could use configurations proportional to the problem.',
        '57 commits · 4 days of activity · ~22 hours of identifiable work.',
        'Reconstructed from Git activity between August 7–10, 2026, covering implementation, refinement, and validation.',
        'This technical estimate is not a claim for the project’s total intellectual effort: it does not measure earlier discovery, conversations and planning outside Git, Figma work not represented by commits, or the future imagery/art-direction phase defined in D-022.',
        'I did not treat this constraint as something to solve by simply spending more. Instead, I refined task boundaries, made scope more explicit, inspected the repository before implementation, separated execution from validation, and selected capacity according to task complexity.',
        'The main lesson was that working effectively with AI also means managing context, capacity, cost, and acceptance criteria. A tool can execute part of the work; responsibility for deciding what to do, why to do it, and when it is complete remains human.',
      ],
    },
    {
      id: 'cost-operations',
      title: 'Operational cost of the experiment',
      paragraphs: [
        'Public cost documentation only includes values with explicit attribution inside this project. No price is published from ambiguous transactions, and no recurring fee is inferred without defensible evidence.',
      ],
      bullets: [
        'AI tooling: operational usage is documented through capacity and credit snapshots (August 10, 2026), without publishing non-attributable monetary values.',
        'Hosting: Netlify, for the current production environment.',
        'Development and validation were executed directly by the author, with human review responsible for scope, quality, and final approval.',
      ],
    },
  ],
  deployment: {
    title: 'From localhost to production',
    steps: [
      { label: 'Problem', description: 'The application worked locally, but the initial deployment cycle encountered incompatibility between the available runtime and current Next.js requirements.' },
      { label: 'Diagnosis', description: 'The production environment’s build/runtime configuration needed to be made explicit and validated.' },
      { label: 'Decision', description: 'Pin a supported Node version to make the environment reproducible.' },
      { label: 'Implementation', description: 'The .nvmrc file began declaring Node 22 in commit 588996f.' },
      { label: 'Validation', description: 'The production build ran and the public Netlify deployment was verified.' },
      { label: 'Result', description: 'The portfolio became available in production; “works locally” was not treated as the end of implementation.' },
    ],
    productionLabel: 'View repository on GitHub ↗',
    media: {
      src: '/assets/projects/building-this-portfolio/source-exports/netlify-production-deploy.png',
      alt: 'Published Netlify deployment evidence documenting the localhost-to-production transition.',
    },
  },
  professionalEvidence: {
    title: 'What this work demonstrates',
    bullets: ['Senior Product Design practice and hands-on execution', 'Product and systems thinking', 'Software-development knowledge and Engineering collaboration', 'Testing discipline, accessibility awareness, and critical review', 'Production awareness and technical troubleshooting without inflating the work into DevOps or SRE'],
  },
  learnings: {
    title: 'Learnings from this project',
    bullets: ['Code can be a design medium.', 'Design and implementation can happen closer together.', 'Automated validation and human critique address different risks.', 'Speed only creates value when paired with quality controls.', 'Production reveals constraints that localhost does not.', 'Using AI effectively required learning to operate the system around it—not merely asking an AI to generate code.', 'AI increases execution capacity but does not replace professional judgment.'],
  },
};

export const portfolioMetaCaseContent = { 'pt-BR': ptBR, en } as const satisfies DictionaryByLocale<PortfolioMetaCaseContent>;
