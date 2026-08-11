# Nelson Secco - Product Design Portfolio

Senior Product Designer and UX Consultant portfolio built as a real product through Design x Product x Engineering practices, with AI-assisted execution and human-led quality decisions.

## Live

- Production: https://nelsonsecco.netlify.app/
- Meta-case (EN): https://nelsonsecco.netlify.app/en/building-this-portfolio
- Meta-case (PT-BR): https://nelsonsecco.netlify.app/construindo-este-portfolio

## About the project

This repository contains a bilingual professional portfolio with:

- Canonical PT-BR experience at `/` and `/projetos/...`
- Equivalent EN experience at `/en` and `/en/projects/...`
- Product case studies with evidence boundaries and publication controls
- An authored meta-case documenting how the portfolio itself was conceived, built, validated, and published

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Radix UI primitives (currently `@radix-ui/react-dialog`)
- Vitest
- React Testing Library
- jsdom
- ESLint
- Microsoft Clarity
- Netlify
- Node.js 22

## Product architecture

- Typed localized route map for PT-BR and EN path parity
- Typed dictionaries for localized content
- Locale-neutral shared project facts
- Shared UI/components with semantic tokens
- Evidence/placeholder strategy for publication-safe visuals

## Localization

- PT-BR is canonical and public default (no `/pt` prefix)
- EN is secondary at `/en`
- Localized project routes are explicitly mapped (`/projetos/...` <-> `/en/projects/...`)

## AI-assisted workflow

Execution used ChatGPT, Codex, and GitHub Copilot in different phases according to task complexity, availability, and operating constraints.

Human responsibility remained with:

- Scope control
- Product and UX decisions
- Critical review
- Factual validation
- Visual QA
- Accessibility review
- Release approval

## UX observability

Microsoft Clarity is configured as a production behavioral-observation layer with strict consent and environment gating:

- No tracking on localhost
- No tracking without explicit consent
- Tracking only in approved production host conditions

Clarity is used to support future evidence-informed UX refinements, not to claim findings that are not yet validated.

## Accessibility and UX quality

Quality reviews use NN/g guidance as reference and include WCAG-oriented checks where relevant, including:

- Keyboard/focus behavior
- Contrast review
- Responsive QA
- Reduced-motion behavior

No certification or external endorsement is claimed.

## Quality gates

Run the same gates used in the repository workflow:

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

## Responsive targets

Intentional review contexts include:

- 1920+
- 1366
- Tablet
- Mobile

## Styling conventions

- BEM remains valid in legacy/custom CSS areas
- Tailwind is the current utility foundation for new/migrated UI
- Radix primitives are used selectively where they improve interaction/accessibility

## Development

### Requirements

- Node.js 22 (see `.nvmrc`)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Optional public client configuration

- `NEXT_PUBLIC_CLARITY_PROJECT_ID`

Clarity remains consent-gated and hostname-gated by code.

## Deployment

Deployment target is Netlify, with Node 22 runtime alignment.

This repository does not publish private account settings or operational secrets.

## Repository and asset policy

- Some project visuals derive from professional/client-context work
- Publication is controlled through provenance and asset review documentation
- Unresolved assets are not published
- Placeholders may intentionally replace visuals pending reconstruction/approval

See `provenance/` and `planning/` for process constraints and evidence boundaries.

## License and usage

Copyright (c) Nelson Secco.

All rights reserved for portfolio content and case-study material.

No blanket open-source license is currently declared for the full repository content.

---

# Nelson Secco - Portfólio de Product Design

Portfólio de Senior Product Designer e UX Consultant construído como produto real, integrando Design x Produto x Engenharia, com execução assistida por IA e decisões de qualidade conduzidas por revisão humana.

## Live

- Produção: https://nelsonsecco.netlify.app/
- Meta-case (EN): https://nelsonsecco.netlify.app/en/building-this-portfolio
- Meta-case (PT-BR): https://nelsonsecco.netlify.app/construindo-este-portfolio

## Sobre o projeto

Este repositório contém um portfólio profissional bilíngue com:

- Experiência canônica em PT-BR em `/` e `/projetos/...`
- Experiência equivalente em EN em `/en` e `/en/projects/...`
- Estudos de caso com limites de evidência e controles de publicação
- Um meta-case autoral que documenta como o próprio portfólio foi concebido, construído, validado e publicado

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Primitivas Radix UI (atualmente `@radix-ui/react-dialog`)
- Vitest
- React Testing Library
- jsdom
- ESLint
- Microsoft Clarity
- Netlify
- Node.js 22

## Arquitetura de produto

- Mapa de rotas localizadas tipado para paridade PT-BR e EN
- Dicionários tipados para conteúdo localizado
- Fatos de projeto compartilhados e neutros por idioma
- UI/componentes compartilhados com tokens semânticos
- Estratégia de evidência/placeholder para visuais seguros para publicação

## Localização

- PT-BR é canônico e padrão público (sem prefixo `/pt`)
- EN é secundário em `/en`
- Rotas localizadas de projeto são mapeadas explicitamente (`/projetos/...` <-> `/en/projects/...`)

## Workflow assistido por IA

A execução utilizou ChatGPT, Codex e GitHub Copilot em fases diferentes, conforme complexidade da tarefa, disponibilidade e restrições operacionais.

A responsabilidade humana permaneceu em:

- Controle de escopo
- Decisões de Produto e UX
- Revisão crítica
- Validação factual
- QA visual
- Revisão de acessibilidade
- Aprovação de release

## Observabilidade de UX

Microsoft Clarity é configurado como camada de observação comportamental em produção, com gating estrito de consentimento e ambiente:

- Sem rastreamento em localhost
- Sem rastreamento sem consentimento explícito
- Rastreamento apenas em condições de host de produção aprovado

Clarity é usado para apoiar refinamentos futuros de UX baseados em evidências, sem alegar resultados ainda não validados.

## Acessibilidade e qualidade de UX

As revisões usam referências da NN/g e incluem verificações orientadas por WCAG quando relevantes, incluindo:

- Comportamento de teclado/foco
- Revisão de contraste
- QA responsivo
- Comportamento com movimento reduzido

Não há alegação de certificação ou endosso externo.

## Gates de qualidade

Execute os mesmos gates usados no workflow do repositório:

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

## Alvos de responsividade

Os contextos de revisão intencional incluem:

- 1920+
- 1366
- Tablet
- Mobile

## Convenções de estilo

- BEM permanece válido em áreas legadas/customizadas de CSS
- Tailwind é a base utilitária atual para UI nova/migrada
- Primitivas Radix são usadas de forma seletiva quando melhoram interação/acessibilidade

## Desenvolvimento

### Requisitos

- Node.js 22 (ver `.nvmrc`)

### Instalação

```bash
npm install
```

### Execução local

```bash
npm run dev
```

### Configuração cliente pública opcional

- `NEXT_PUBLIC_CLARITY_PROJECT_ID`

Clarity permanece condicionado por consentimento e hostname em código.

## Deploy

O alvo de deploy é Netlify, com alinhamento de runtime em Node 22.

Este repositório não publica configurações privadas de conta nem segredos operacionais.

## Política de repositório e assets

- Parte dos visuais de projeto deriva de contexto profissional/de clientes
- A publicação é controlada por documentação de proveniência e revisão de assets
- Assets não resolvidos não são publicados
- Placeholders podem substituir visuais intencionalmente até reconstrução/aprovação

Consulte `provenance/` e `planning/` para restrições de processo e limites de evidência.

## Licença e uso

Copyright (c) Nelson Secco.

Todos os direitos reservados para conteúdo de portfólio e material de estudos de caso.

No momento, não há licença open-source ampla declarada para todo o conteúdo do repositório.
