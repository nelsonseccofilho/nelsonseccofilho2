# N3LX Portfolio / Nelson Secco Portfolio

Production portfolio for a Senior Product Designer and UX Consultant with a software-development background.
The project is built as a real digital product, at the intersection of Product Design, UX, Engineering, and AI-assisted development with human validation.

## Live

- Production: https://nelsonsecco.netlify.app/
- Building This Portfolio (EN): https://nelsonsecco.netlify.app/en/building-this-portfolio
- Construindo este portfólio (PT-BR): https://nelsonsecco.netlify.app/construindo-este-portfolio

## What this project demonstrates

- Product Design and UX applied to real delivery constraints
- Product discovery and evidence-led decision making
- Complex systems and interaction design
- Design-system thinking and reusable UI architecture
- Accessibility and responsive implementation
- Engineering collaboration through typed contracts and test gates
- AI-assisted workflow with explicit human review and final responsibility
- Evidence-led case-study storytelling with publication boundaries

## Featured work

- HORIZON HIS
- SUBITER
- REDE DCC 1.0
- DASA — Canal do Consultor
- ConnectCar / Freeflow (Home-only presentation)
- Building This Portfolio (meta-case)

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI primitive (`@radix-ui/react-dialog`)
- Vitest + React Testing Library + jsdom
- ESLint (Next.js core-web-vitals + TypeScript config)
- Microsoft Clarity (consent and production-host gated)
- Netlify (deployment target)

## Requirements / prerequisites

- Node.js 22 (see [.nvmrc](.nvmrc))
- npm (bundled with Node.js)
- Git

## Installation

```bash
git clone https://github.com/nelsonseccofilho/nelsonseccofilho2.git
cd nelsonseccofilho2
npm install
```

`npm ci` can be used in CI or reproducible clean installs when a lockfile-strict install is required.

## Environment configuration

This project can run locally without required private secrets.

Optional public variable (analytics only):

- `NEXT_PUBLIC_CLARITY_PROJECT_ID`

Create local env file if needed:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

## Running locally

```bash
npm run dev
```

Default local URL: http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Quality commands

- `npm test`: runs unit/component tests with Vitest
- `npm run typecheck`: validates TypeScript contracts
- `npm run lint`: runs ESLint checks
- `npm run build`: validates production build generation

## Project structure

```text
src/
	app/              # localized routes and layouts (PT-BR canonical + EN)
	components/       # UI and page components
	content/          # typed localized copy and project facts
	i18n/             # locale definitions and typed route map

public/
	assets/
		projects/       # published portfolio media by project

planning/           # product, QA, process and governance docs
provenance/         # asset provenance and publication status records
```

Approved project-asset convention:

`public/assets/projects/<project-id>/`

- `cover/`
- `hero/`
- `narrative/`
- `evidence/`

Only categories required by each project need to exist.

## Internationalization

- Canonical locale: `pt-BR`
- English locale: `/en`
- Localized project routes preserve equivalent content via typed route mapping
- There is no `/pt` public route

## Theme

- Light theme by default
- Dark theme available through the shared theme controls
- Theme state is persisted in local storage and reflected through `data-theme`

## Responsive strategy

Validated reference viewports:

- 1920 × 1080 (wide desktop)
- 1366 × 768 (laptop)
- 820 × 1180 (tablet)
- 440 × 956 (mobile)

These are QA checkpoints, not an exhaustive device certification list.

## Accessibility and UX quality

Current quality approach includes:

- semantic HTML landmarks and heading hierarchy
- keyboard navigation and visible focus behavior
- contrast checks
- reduced-motion support where applicable
- responsive UX review in defined QA presets

NN/g guidance is used as a quality reference. No formal WCAG certification is claimed.

## Testing and validation

Automated quality gates are defined by repository scripts and CI-compatible commands.
Prefer documenting the commands above rather than hardcoding volatile test counts.

## Assets and evidence policy

- Portfolio imagery is evidence-led and publication-controlled
- Approved project media lives under `public/assets/projects/`
- `cover`, `hero`, `narrative`, and `evidence` organize production-ready story assets
- No fabricated product evidence is allowed
- Confidentiality restrictions are respected
- DASA case uses confidentiality-safe editorial representations
- ConnectCar / Freeflow remains intentionally Home-only
- Internal source exports, contact sheets, and ZIP packages are archival/support material and not product UI media

## Image performance

The current architecture uses existing Next.js + Netlify delivery.
Responsive image behavior is handled by the current implementation paths and rendered asset variants already present in the repository.

## Microsoft Clarity

- Microsoft Clarity is integrated through `@microsoft/clarity@1.0.2` behind explicit user consent
- The current production project ID is `y0aa3mivpo`
- `NEXT_PUBLIC_CLARITY_PROJECT_ID` supplies the project ID; it is a public client-side setting, not a secret
- Client-side initialization lives in `src/components/analytics/clarity.ts` and is coordinated by `src/components/analytics/analytics-provider.tsx`
- Analytics only initializes when consent is granted and a project ID is available, in production mode on the approved host
- Local development does not define the variable by default, intentionally preventing local activity from contaminating production sessions, heatmaps, and analytics
- In Netlify, configure the variable under **Project configuration → Environment variables**; Netlify supplies it at build time
- Creating or changing any `NEXT_PUBLIC_*` value requires a new build and deploy
- Google Ads, Google Analytics, and Google Tag Manager are optional integrations and are not required for basic Clarity operation
- Privacy pages are available at `/privacidade` and `/en/privacy`

Production validation — 2026-08-11: `clarity.js → collect → HTTP 204 → live session/replay confirmed`

## Footer and routing architecture

- Normal localized pages render the shared shell with global `SiteFooter`
- Short normal pages keep sticky-footer behavior (content area expands before footer)
- Not-found presentation intentionally renders without footer landmarks

## Deployment

Primary release flow:

GitHub -> Netlify -> Next.js production build

This repository does not expose private Netlify settings or secrets.

## Conventions

- Conventional Commits
- BEM in legacy/custom CSS areas
- Tailwind utilities for current/migrated UI
- shadcn/ui conventions where local UI primitives are used
- Radix usage where interaction/accessibility benefits are clear
- Feature changes should include tests and responsive validation

## Repository / author

Portfolio project authored by Nelson Secco under N3LX Digital Business.

Repository: https://github.com/nelsonseccofilho/nelsonseccofilho2

## Rights

© 2026 N3LX Digital Business. All rights reserved.

---

# N3LX Portfolio / Portfólio Nelson Secco

Portfólio de produção para um Senior Product Designer e UX Consultant com background em desenvolvimento de software.
O projeto foi construído como produto digital real, na interseção entre Product Design, UX, Engenharia e desenvolvimento assistido por IA com validação humana.

## Live

- Produção: https://nelsonsecco.netlify.app/
- Building This Portfolio (EN): https://nelsonsecco.netlify.app/en/building-this-portfolio
- Construindo este portfólio (PT-BR): https://nelsonsecco.netlify.app/construindo-este-portfolio

## O que este projeto demonstra

- Product Design e UX aplicados a restrições reais de entrega
- Product discovery e tomada de decisão guiada por evidências
- Sistemas complexos e interaction design
- Pensamento de design system e arquitetura de UI reutilizável
- Acessibilidade e implementação responsiva
- Colaboração com engenharia por contratos tipados e gates de teste
- Workflow assistido por IA com revisão humana explícita e responsabilidade final humana
- Storytelling de case studies guiado por evidências e limites de publicação

## Trabalhos em destaque

- HORIZON HIS
- SUBITER
- REDE DCC 1.0
- DASA — Canal do Consultor
- ConnectCar / Freeflow (apresentação apenas na Home)
- Building This Portfolio (meta-case)

## Stack técnico

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Primitiva Radix UI (`@radix-ui/react-dialog`)
- Vitest + React Testing Library + jsdom
- ESLint (config Next.js core-web-vitals + TypeScript)
- Microsoft Clarity (com gate de consentimento e host de produção)
- Netlify (alvo de deploy)

## Requisitos / pré-requisitos

- Node.js 22 (ver [.nvmrc](.nvmrc))
- npm (distribuído com Node.js)
- Git

## Instalação

```bash
git clone https://github.com/nelsonseccofilho/nelsonseccofilho2.git
cd nelsonseccofilho2
npm install
```

`npm ci` pode ser usado em CI ou em instalação limpa reprodutível quando for necessário seguir estritamente o lockfile.

## Configuração de ambiente

O projeto roda localmente sem segredos privados obrigatórios.

Variável pública opcional (somente analytics):

- `NEXT_PUBLIC_CLARITY_PROJECT_ID`

Crie o arquivo local se necessário:

```bash
cp .env.example .env.local
```

No PowerShell (Windows):

```powershell
Copy-Item .env.example .env.local
```

## Execução local

```bash
npm run dev
```

URL local padrão: http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Comandos de qualidade

- `npm test`: executa testes unitários/de componentes com Vitest
- `npm run typecheck`: valida contratos TypeScript
- `npm run lint`: executa verificações de ESLint
- `npm run build`: valida geração do build de produção

## Estrutura do projeto

```text
src/
	app/              # rotas e layouts localizados (PT-BR canônico + EN)
	components/       # componentes de UI e páginas
	content/          # conteúdo localizado tipado e fatos de projeto
	i18n/             # definições de locale e mapa tipado de rotas

public/
	assets/
		projects/       # mídia publicada por projeto

planning/           # documentação de produto, QA, processo e governança
provenance/         # proveniência de assets e status de publicação
```

Convenção aprovada de assets por projeto:

`public/assets/projects/<project-id>/`

- `cover/`
- `hero/`
- `narrative/`
- `evidence/`

Somente as categorias necessárias para cada projeto precisam existir.

## Internacionalização

- Locale canônico: `pt-BR`
- Locale em inglês: `/en`
- Rotas localizadas de projetos preservam conteúdo equivalente por mapa tipado
- Não existe rota pública `/pt`

## Tema

- Tema claro por padrão
- Tema escuro disponível nos controles compartilhados
- Estado de tema persistido em local storage e refletido em `data-theme`

## Estratégia responsiva

Viewports de referência validados:

- 1920 × 1080 (desktop amplo)
- 1366 × 768 (laptop)
- 820 × 1180 (tablet)
- 440 × 956 (mobile)

Esses tamanhos são checkpoints de QA, não uma certificação exaustiva por dispositivo.

## Acessibilidade e qualidade de UX

A abordagem atual de qualidade inclui:

- landmarks semânticos e hierarquia de headings
- navegação por teclado e foco visível
- revisão de contraste
- suporte a movimento reduzido quando aplicável
- revisão de UX responsiva nos presets de QA definidos

As diretrizes da NN/g são usadas como referência de qualidade. Não há alegação de certificação formal WCAG.

## Testes e validação

Os gates automatizados de qualidade são definidos pelos scripts do repositório e comandos compatíveis com CI.
Prefira documentar os comandos acima em vez de fixar contagens de teste voláteis.

## Política de assets e evidências

- A imagética do portfólio é guiada por evidências e controlada para publicação
- A mídia aprovada fica em `public/assets/projects/`
- `cover`, `hero`, `narrative` e `evidence` organizam assets de storytelling prontos para produção
- Evidências de produto não podem ser fabricadas
- Restrições de confidencialidade são respeitadas
- O case DASA usa representações editoriais seguras para confidencialidade
- ConnectCar / Freeflow permanece intencionalmente apenas na Home
- Source exports internos, contact sheets e pacotes ZIP são material de suporte/arquivo e não mídia de UI de produto

## Performance de imagem

A arquitetura atual usa a entrega existente com Next.js + Netlify.
O comportamento responsivo de imagem é tratado pelos paths atuais de implementação e variantes de assets já presentes no repositório.

## Microsoft Clarity

- Microsoft Clarity integrado por `@microsoft/clarity@1.0.2` com consentimento explícito do usuário
- O project ID atual de produção é `y0aa3mivpo`
- `NEXT_PUBLIC_CLARITY_PROJECT_ID` fornece o project ID; é uma configuração pública client-side, não um segredo
- A inicialização client-side fica em `src/components/analytics/clarity.ts` e é coordenada por `src/components/analytics/analytics-provider.tsx`
- Analytics só inicializa quando há consentimento e um project ID disponível, em modo de produção e no host aprovado
- O desenvolvimento local não define a variável por padrão, evitando intencionalmente contaminar sessões, heatmaps e analytics de produção
- Na Netlify, configure a variável em **Project configuration → Environment variables**; a Netlify a fornece durante o build
- Criar ou alterar qualquer valor `NEXT_PUBLIC_*` exige um novo build e deploy
- Google Ads, Google Analytics e Google Tag Manager são integrações opcionais e não são necessários para o funcionamento básico do Clarity
- Páginas de privacidade disponíveis em `/privacidade` e `/en/privacy`

Validação em produção — 2026-08-11: `clarity.js → collect → HTTP 204 → sessão ao vivo/replay confirmados`

## Arquitetura de footer e rotas

- Páginas localizadas normais renderizam shell compartilhado com `SiteFooter` global
- Páginas normais curtas mantêm comportamento sticky-footer (área de conteúdo expande antes do footer)
- Not-found renderiza intencionalmente sem landmark de footer

## Deploy

Fluxo principal de publicação:

GitHub -> Netlify -> build de produção Next.js

Este repositório não expõe configurações privadas do Netlify nem segredos.

## Convenções

- Conventional Commits
- BEM em áreas legadas/customizadas de CSS
- Tailwind utilities para UI atual/migrada
- convenções de shadcn/ui onde primitivas locais de UI são usadas
- Uso de Radix quando há benefício claro de interação/acessibilidade
- Mudanças de feature devem incluir testes e validação responsiva

## Repositório / autoria

Projeto de portfólio de autoria de Nelson Secco sob identidade N3LX Digital Business.

Repositório: https://github.com/nelsonseccofilho/nelsonseccofilho2

## Direitos

© 2026 N3LX Digital Business. Todos os direitos reservados.
