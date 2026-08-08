# N3LX Portfolio — Project Rules

Permanent rules for design, engineering, content and collaboration.

Este é o documento normativo do projeto.

Qualquer pessoa ou agente trabalhando neste repositório deve obedecer estas regras.

Se uma regra precisar mudar, primeiro registrar a mudança em DECISIONS.md.

## 1. PRODUCT & UX

- Utilizar como referência princípios e boas práticas da Nielsen Norman Group.
- Clareza acima de ornamentação.
- Não esconder funções importantes.
- Não criar interações que dependam exclusivamente de hover.
- Sempre considerar feedback, estado, erro e recuperação.
- Priorizar reconhecimento sobre memorização.
- Reduzir carga cognitiva.
- Manter hierarquia visual clara.
- Não sacrificar usabilidade por estética.
- Touch target mínimo recomendado: 44 × 44px.
- Interfaces devem funcionar com teclado.

## 2. VISUAL DESIGN

Direção:

- premium;
- elegante;
- tecnológica;
- editorial;
- minimalista sem ser vazia.

Referências qualitativas:

OpenAI
Apple
Samsung

Nunca copiar layouts ou identidade dessas empresas.

Cor principal:

#107C10

Light Theme por padrão.

Dark Theme disponível.

Verde deve ser usado com disciplina.

## 3. RESPONSIVENESS

A aplicação deve ser fluida.

QA obrigatório nos presets:

- 1920 × 1080
- 1366 × 768
- 820 × 1180
- 440 × 956

Também considerar comportamento intermediário.

Não criar CSS específico para marcas/modelos de dispositivos.

Não aceitar overflow horizontal não intencional.

## 4. ACCESSIBILITY

Obrigatório:

- HTML semântico;
- heading hierarchy coerente;
- alt text;
- labels acessíveis;
- navegação por teclado;
- focus-visible;
- contraste adequado;
- aria somente quando necessário;
- não remover outline sem substituição;
- prefers-reduced-motion;
- não usar apenas cor para transmitir informação.

SVG decorativo deve ser escondido da árvore de acessibilidade quando apropriado.

## 5. CSS

CSS próprio segue:

https://getbem.com/

Convenção BEM:

- block
- block__element
- block--modifier

Exemplos:

- theme-toggle
- theme-toggle__icon
- project-card
- project-card__title
- project-card--featured

Regras:

- sem !important;
- sem inline style, salvo necessidade técnica justificada;
- evitar seletores excessivamente específicos;
- priorizar tokens semânticos;
- evitar valores mágicos;
- evitar abstrações prematuras.

## 6. DESIGN TOKENS

Usar tokens existentes antes de criar novos valores.

Categorias:

- brand;
- background;
- surface;
- text;
- border;
- focus;
- spacing;
- radius;
- transitions;
- containers.

Brand principal:

#107C10

Container máximo:

1600px

## 7. THEMING

Light é padrão.

Dark é opcional.

Theme Provider:

next-themes

attribute:

data-theme

enableSystem:

false

Alterações de tema não podem provocar:

- layout shift;
- quebra de hydration;
- flash visual excessivo;
- perda de contraste.

## 8. MOTION

Microinterações:

- rápidas;
- elegantes;
- discretas;
- funcionais.

Não criar animações apenas por decoração.

Sempre respeitar:

prefers-reduced-motion

Motion nunca pode impedir uma ação.

## 9. SEO

Obrigatório pensar em SEO desde a implementação.

Preservar:

- metadata;
- title;
- description;
- lang;
- conteúdo semanticamente indexável;
- headings corretos;
- URLs compreensíveis;
- alt text;
- Open Graph quando implementado;
- canonical quando aplicável.

Título principal atual:

N3LX | Senior Product Designer | UX Strategy | Product Discovery | Design Systems | AI-assisted Product Design

## 10. PERFORMANCE

Priorizar Core Web Vitals.

Evitar:

- JavaScript desnecessário;
- dependências grandes sem justificativa;
- imagens gigantes;
- layout shift;
- fontes bloqueantes;
- animações caras;
- client components sem necessidade.

Preferir Server Components quando não houver necessidade real de estado/interação no cliente.

## 11. IMAGES & ASSETS

Assets de produção devem ser locais.

Não depender de URLs temporárias do Figma.

Usar:

- formato adequado;
- compressão;
- dimensões adequadas;
- responsive images;
- lazy loading quando aplicável;
- alt text adequado.

Não usar imagens apenas como decoração se não acrescentarem valor.

## 12. TESTS

Regra fundamental:

Não construir funcionalidade sem teste correspondente quando ela possuir comportamento testável.

Antes de considerar uma etapa concluída:

- npm run typecheck
- npm run lint
- npm test
- npm run build

Testes devem validar:

- comportamento;
- acessibilidade;
- contratos importantes.

Evitar:

- snapshots frágeis;
- detalhes internos;
- test IDs quando consultas semânticas forem possíveis.

Preferir React Testing Library por:

- role
- name
- text
- label

Não alterar produção apenas para fazer teste passar quando o erro estiver no teste.

## 13. ENGINEERING

Stack oficial atual:

- Next.js
- React
- TypeScript
- Tailwind CSS 4
- Vitest
- React Testing Library
- next-themes

TypeScript deve permanecer strict.

Não adicionar dependência sem necessidade.

Não criar abstração antes de existir necessidade real.

Preservar Server Components como padrão no App Router.

Adicionar "use client" somente quando necessário.

## 14. GIT

Commits seguem:

https://www.conventionalcommits.org/

Formato:

type(scope): description

Tipos comuns:

- feat
- fix
- refactor
- test
- docs
- chore
- perf
- style

Exemplos:

- feat(theme): add accessible light and dark toggle
- fix(test): isolate theme toggle renders
- docs(planning): document project decisions

Não usar mensagens genéricas como:

- update
- changes
- fix stuff

## 15. OPERATIONAL WORKFLOW

Existem três terminais permanentes:

### PowerShell `npm`

Executa:

- npm install
- npm run typecheck
- npm run lint
- npm test
- npm run build

### PowerShell `run dev`

Executa exclusivamente:

- npm run dev

Fica aberto durante o desenvolvimento.

### PowerShell `git`

Executa exclusivamente comandos Git:

- git status
- git diff
- git add
- git commit
- git log
- git branch
- git switch
- git push

### VS Code Chat

Responsável por:

- criar arquivos;
- editar arquivos;
- remover arquivos;
- refatorar código.

O VS Code Chat NÃO deve:

- executar Git;
- executar npm;
- executar npx;
- executar comandos de terminal.

## 16. DEVELOPMENT PROCESS

Fluxo padrão:

Planejar
→ fornecer escopo ao VS Code Chat
→ agente altera arquivos
→ revisar diff
→ Keep
→ typecheck
→ lint
→ test
→ build
→ run dev
→ Visual QA
→ git status
→ stage seletivo
→ Conventional Commit

Não usar `git add .` automaticamente.

Preferir stage seletivo.

## 17. IMPLEMENTATION REVIEW & VALIDATION WORKFLOW

Toda unidade de implementação deve passar por revisão e validação antes de Git write.

Sequência obrigatória:

1. verificar escopo do working tree;
2. revisar código de produção;
3. revisar testes;
4. revisar integração;
5. revisar CSS/estilo quando aplicável;
6. executar `npm test`;
7. executar `npm run typecheck`;
8. executar `npm run lint`;
9. executar `npm run build`;
10. preparar RUN DEV visual QA quando UI for afetada;
11. fazer staging somente após validação;
12. revisar nomes dos arquivos staged com comando Git read-only;
13. revisar o diff staged completo;
14. fazer commit somente após staged filenames e staged diff passarem na revisão;
15. verificar `git status --short` após o commit.

Convenções de interação:

- comandos apresentados ao usuário devem identificar o contexto: GIT, NPM ou RUN DEV;
- comandos PowerShell devem ser fornecidos um por vez;
- não afirmar que Visual QA passou sem evidência visual renderizada;
- não misturar implementação, QA e commit em um único passo sem controle;
- commits devem permanecer coesos e limitados a uma unidade de implementação;
- segredos e configurações MCP locais nunca devem ser commitados.

## 18. LEGACY

A pasta:

_outofdate/

contém o portfólio anterior.

Ela:

- não participa da aplicação atual;
- não participa do lint;
- não participa dos testes;
- não deve ser usada como fonte automática de implementação;
- serve apenas como arquivo histórico/referência manual.

## 19. CONTENT INTEGRITY

Nunca ampliar claims profissionais sem evidência.

Distinguir explicitamente:

- benchmark;
- discovery;
- research;
- concept;
- prototype;
- validated prototype;
- implemented solution;
- production product.

Não apresentar benchmark como trabalho autoral.

Não transformar hipótese editorial em fato histórico.

## 20. SCOPE CONTROL

Não adicionar melhorias fora da tarefa atual por iniciativa própria.

Quando encontrar oportunidade fora do escopo:

- informar;
- registrar;
- implementar somente quando aprovada.

Uma tarefa deve modificar somente os arquivos necessários.

## 21. DOCUMENTATION

DECISIONS.md:
registra decisões e suas razões.

PROJECT_RULES.md:
registra regras permanentes.

Quando houver uma nova decisão importante:

1. implementar e validar;
2. registrar em DECISIONS.md;
3. atualizar PROJECT_RULES.md somente se a decisão criar ou modificar uma regra permanente.

Não duplicar conteúdo desnecessariamente entre os dois documentos.

## 22. AGENT EFFICIENCY & CREDIT BUDGET

Usar a menor validação que cubra com segurança a mudança atual.

Regras:

- Preferir leitura direcionada de arquivos em vez de buscas amplas no repositório.
- Não reler arquivos inalterados sem motivo específico.
- Encerrar exploração quando já houver evidência suficiente para decidir.
- Não rerodar validação já verde se nenhum código relevante mudou depois.
- Preferir testes focados durante implementação.
- Executar validação técnica completa apenas uma vez no checkpoint final apropriado.
- Escalar visual QA ao tamanho e risco da mudança.
- Evitar loops grandes e repetidos de Playwright e screenshots equivalentes.
- Preferir poucos cenários visuais representativos.
- Máximo de duas iterações automáticas de correção para o mesmo defeito.
- Se não resolver após duas iterações, parar e reportar.
- Se o VS Code sinalizar execução longa/continuação iterativa, parar e reportar progresso.
- Um comando PowerShell por vez.
- Nunca encadear comandos com `;` ou `&&`.

Níveis de validação:

- QUICK CHECK
	Usar para CTA, copy, link, pequeno ajuste de CSS e mudança local de baixo risco.
	Validação típica: teste focado quando relevante, desktop representativo, mobile representativo, apenas tema/estado afetado quando aplicável, pipeline completo apenas quando tecnicamente necessário no checkpoint final.

- FEATURE CHECK
	Usar para novo componente, nova rota, feature de UI relevante e mudança relevante de comportamento.
	Validação típica: testes relevantes, `npm run typecheck`, `npm run lint`, `npm run build`, desktop/tablet/mobile representativos e Light/Dark quando sensível a tema.

- MILESTONE CHECK
	Usar para case completo, marco da Home, mudança no sistema responsivo, mudança no sistema de tema, mudança arquitetural relevante e checkpoint de release.
	Validação típica: suíte completa de testes, `npm run typecheck`, `npm run lint`, `npm run build`, matriz responsiva completa, Light/Dark determinístico, revisão de acessibilidade e revisão de escopo Git.

Regra de escolha:

- Sempre escolher o menor nível que cubra com segurança a mudança atual.

Não reduzir nível quando houver impacto em:

- layout global;
- sistema de tema;
- arquitetura de rotas;
- infraestrutura de acessibilidade;
- segurança;
- contratos de dados compartilhados.

Compatibilidade com as Seções 12 e 17:

- A profundidade da validação passa a ser definida por QUICK CHECK, FEATURE CHECK ou MILESTONE CHECK.
- Quando o nível selecionado exigir pipeline completo, manter a sequência operacional já definida.
