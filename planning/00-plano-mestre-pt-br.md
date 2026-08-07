# Plano Mestre — Novo Portfólio de Product Designer Sênior

## Meta
Construir um portfólio novo, elegante, rápido e verificável, com linguagem de produto premium, **tema light por padrão**, dark opcional e **Xbox Green (`#107C10`)** como cor de acento. Referências como OpenAI, Apple e Samsung orientam o nível de acabamento, sem copiar suas interfaces.

## Regras obrigatórias
1. UX validada pelas boas práticas e heurísticas da NN/g.
2. Nenhuma feature/componente é concluída sem teste simples.
3. Conventional Commits em todo o histórico Git.
4. BEM para classes CSS semânticas personalizadas; Tailwind pode coexistir.
5. Responsividade validada em 1920+, 1366, tablet e mobile.
6. SEO, acessibilidade e performance entram desde a fundação.
7. Imagens locais e otimizadas; o site nunca depende de URL temporária do Figma.
8. Nenhuma evidência de produto pode ser inventada. Representações editoriais ficam explicitamente classificadas como tal.

## Arquitetura editorial
**01 — HORIZON HIS** — flagship: Healthtech · UX Leadership · estratégia · protótipo · validação.

**02 — SUBITER** — sistemas complexos: inspeções · enterprise · pós-inspeção · IA.

**03 — REDE DCC 1.0** — Payments · Interaction Design · estados transacionais.

**04 — DASA — Canal do Consultor** — Discovery · pesquisa · síntese · pensamento sistêmico.

**Selected Work — ConnectCar / Freeflow** — Mobility · UI responsiva · Design Systems.

A leitura profissional deve formar a sequência: **Strategy → Complex Systems → Delivery → Discovery → Design Systems**.

## Ordem de desenvolvimento
- [ ] 00. Inicializar o projeto e registrar baseline de testes.
- [ ] 01. Configurar tokens, tipografia, tema light/dark e containers.
- [ ] 02. Configurar Vitest + RTL + jest-dom antes do primeiro componente de produto.
- [ ] 03. Configurar shell: header, navegação, locale, tema, main, footer e skip link.
- [ ] 04. Testar shell e acessibilidade por teclado.
- [ ] 05. Construir Home tipográfica e estrutura de cases.
- [ ] 06. Implementar ProjectCard com capas responsivas deste kit.
- [ ] 07. Testar ProjectCard em renderização, link, alt e teclado.
- [ ] 08. Implementar template reutilizável de case study.
- [ ] 09. Construir HORIZON e validar o template completo.
- [ ] 10. Construir SUBITER respeitando os bloqueios de publicação registrados no manifest.
- [ ] 11. Construir REDE DCC com sequência curada de estados.
- [ ] 12. Construir DASA usando apenas representações editoriais seguras.
- [ ] 13. Construir Selected Work / ConnectCar Freeflow.
- [ ] 14. Implementar microinterações e `prefers-reduced-motion`.
- [ ] 15. Adicionar metadata, canonical, hreflang, OG, sitemap, robots e JSON-LD.
- [ ] 16. Configurar Playwright smoke tests.
- [ ] 17. Executar QA 1920 / 1366 / 1024 / 768 / 430 / 390 / 360.
- [ ] 18. Lighthouse, Core Web Vitals, links, contraste e revisão de claims.
- [ ] 19. Publicação.

## Estratégia visual da Home
O hero será majoritariamente tipográfico e leve. As imagens pesadas começam na área de projetos, evitando comprometer LCP. Capas têm espaço negativo e os títulos ficam em HTML, permitindo tradução, SEO e reflow responsivo.

## Estratégia de assets
Capas raster possuem variantes `640 / 1024 / 1440 / 1920` em WebP. Diagramas editoriais DASA são SVG escaláveis. OG cards têm 1200×630. O manifest informa origem, status de publicação, alt text PT/EN e cautelas de cada visual.

## Primeiro commit quando formos ao VS Code
Após a foundation estar criada, testada e validada:

`feat(app): establish portfolio foundation and test baseline`

Nenhum commit de feature deve entrar se seus testes correspondentes estiverem quebrados.
