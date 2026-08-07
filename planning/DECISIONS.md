# N3LX Portfolio — Decision Log

Objetivo:

Registrar decisões de produto, UX, UI, arquitetura, tecnologia, conteúdo e processo já tomadas durante a construção do novo portfólio.

Cada decisão futura poderá ser acrescentada cronologicamente sem apagar decisões anteriores.

## D-001 — Reconstrução completa do portfólio

**Status:** Accepted

**Context**
O portfólio anterior foi movido para `_outofdate/`.

**Decision**
O novo portfólio será reconstruído do zero dentro do mesmo repositório.

**Rationale**
O legado não deve influenciar automaticamente a nova implementação e não participa de lint/build/test.

**Consequences**
A implementação nova pode evoluir sem depender do projeto anterior.

---

## D-002 — Marca principal N3LX

**Status:** Accepted

**Context**
Era necessário definir uma marca profissional e visual para o portfólio.

**Decision**
A identidade visual principal do portfólio será N3LX.

**Rationale**
O nome funciona como marca profissional/artística visual.

**Consequences**
O posicionamento profissional passa a ser comunicado com consistência.

---

## D-003 — Metadata principal

**Status:** Accepted

**Context**
Era necessário estabelecer um title e description principais para o projeto.

**Decision**
O title principal é:

N3LX | Senior Product Designer | UX Strategy | Product Discovery | Design Systems | AI-assisted Product Design

**Rationale**
Preservar conteúdo indexável no HTML inicial sempre que possível.

**Consequences**
O projeto passa a ter uma identidade de SEO e compartilhamento mais clara.

---

## D-004 — Stack técnica

**Status:** Accepted

**Context**
Era necessário definir a base técnica do projeto.

**Decision**
Stack principal:

- Next.js 16
- React 19
- TypeScript
- App Router
- Tailwind CSS 4
- PostCSS
- Vitest
- React Testing Library
- jsdom
- next-themes

**Rationale**
O projeto utiliza renderização moderna do Next.js e deve evitar dependências sem necessidade clara.

**Consequences**
A base técnica segue um padrão moderno, testável e escalável.

---

## D-005 — Qualidade antes de evolução

**Status:** Accepted

**Context**
Era necessário estabelecer um critério mínimo de qualidade para a evolução do projeto.

**Decision**
Nenhuma nova etapa funcional deve avançar com TypeScript quebrado, ESLint quebrado, testes quebrados ou build quebrado.

**Rationale**
A qualidade técnica é pré-requisito para evolução segura.

**Consequences**
O fluxo de validação passa a ser consistente e audível.

---

## D-006 — Light como tema padrão

**Status:** Accepted

**Context**
Era necessário definir a experiência visual inicial do projeto.

**Decision**
O site abre em Light Theme e o Dark Theme estará disponível através de ThemeToggle.

**Rationale**
Light Theme é o padrão inicial e o dark theme é uma extensão opcional.

**Consequences**
A experiência inicial é mais limpa e acessível.

---

## D-007 — Cor principal

**Status:** Accepted

**Context**
Era necessário definir uma cor de marca forte, mas não dominante.

**Decision**
A cor principal é Xbox Green: #107C10.

**Rationale**
A cor deve funcionar como accent, foco, interação e feedback sem dominar toda a interface.

**Consequences**
A marca ganha consistência visual sem perder elegância.

---

## D-008 — Direção visual

**Status:** Accepted

**Context**
Era necessário orientar a estética do portfólio.

**Decision**
A experiência deve ser elegante, tecnológica, editorial, madura e compatível com um Senior Product Designer.

**Rationale**
A referência visual precisa comunicar sofisticação sem copiar marcas específicas.

**Consequences**
O resultado se aproxima de um padrão premium sem depender de cópia literal.

---

## D-009 — Design tokens semânticos

**Status:** Accepted

**Context**
Era necessário criar uma base visual consistente.

**Decision**
A interface utiliza tokens para brand, backgrounds, surfaces, text, borders, focus, spacing, radius, transitions e container.

**Rationale**
Evitar valores arbitrários quando já existir um token apropriado.

**Consequences**
A implementação visual se torna mais consistente e escalável.

---

## D-010 — Container máximo

**Status:** Accepted

**Context**
Era necessário definir a largura máxima do layout principal.

**Decision**
O container principal possui 1600px de largura máxima com padding lateral responsivo.

**Rationale**
A experiência deve aproveitar monitores grandes sem criar linhas de leitura excessivamente longas.

**Consequences**
O layout ganha controle editorial e boa legibilidade em telas grandes.

---

## D-011 — Viewports oficiais de QA

**Status:** Accepted

**Context**
Era necessário definir checkpoints de validação visual.

**Decision**
Os presets principais de QA são 1920 × 1080, 1366 × 768, 820 × 1180 e 440 × 956.

**Rationale**
Essas resoluções funcionam como checkpoints de QA sem transformar o layout em uma construção específica para dispositivos individuais.

**Consequences**
A interface passa a ser validada com base em intervalos de tamanho relevantes.

---

## D-012 — ThemeToggle acessível

**Status:** Accepted

**Context**
Era necessário garantir uma interação acessível de tema.

**Decision**
ThemeToggle usa button real, type="button", target mínimo 44 × 44, funciona por teclado, possui nome acessível dinâmico e estado perceptível.

**Rationale**
A alternância de tema precisa ser acessível e previsível.

**Consequences**
A experiência de tema melhora em usabilidade e acessibilidade.

---

## D-013 — Motion responsável

**Status:** Accepted

**Context**
Era necessário estabelecer a direção de microinterações.

**Decision**
Microinterações serão curtas, funcionais, discretas e respeitarão prefers-reduced-motion.

**Rationale**
Movimento não deve prejudicar legibilidade ou controle.

**Consequences**
A interface permanece elegante sem comprometer conforto e acessibilidade.

---

## D-014 — Cases principais

**Status:** Accepted

**Context**
Era necessário estruturar a narrativa de cases e projetos selecionados.

**Decision**
A arquitetura editorial atual contempla HORIZON HIS, SUBITER, REDE DCC 1.0, DASA — Canal do Consultor, ConnectCar Freeflow, ConnectCar Design System e trabalhos selecionados adicionais.

**Rationale**
Os cases devem refletir uma narrativa profissional consistente e apoiada em trabalho real.

**Consequences**
A implementação futura ganha uma base editorial sólida.

---

## D-015 — Evidências de portfólio

**Status:** Accepted

**Context**
Era necessário garantir que claims profissionais sejam sustentados.

**Decision**
Claims importantes devem ser sustentados por evidências reais e distinguidos entre pesquisa, benchmark, conceito, protótipo, implementação e produto em produção.

**Rationale**
Nunca apresentar benchmark como solução autoral e nunca apresentar protótipo como produto implementado.

**Consequences**
A credibilidade do portfólio aumenta.

---

## D-016 — Imagens locais e performance

**Status:** Accepted

**Context**
Era necessário estabelecer um padrão de distribuição de assets.

**Decision**
Assets definitivos devem ficar no projeto, com nomes semânticos, dimensões adequadas, formatos modernos, versões otimizadas, alt text e lazy loading quando aplicável.

**Rationale**
Evitar depender de URLs temporárias do Figma em produção.

**Consequences**
A performance e a previsibilidade do portfólio aumentam.

---

## D-017 — Desenvolvimento pela rede local

**Status:** Accepted

**Context**
Era necessário permitir o desenvolvimento através da rede local.

**Decision**
Durante o desenvolvimento, o projeto pode ser acessado através da rede local em 192.168.1.72.

**Rationale**
allowedDevOrigins é utilizado somente para permitir corretamente a hidratação e os assets do Next.js durante desenvolvimento em rede.

**Consequences**
A experiência local de desenvolvimento se torna mais realista sem transformar essa configuração em dependência de produção.

---

## D-018 — Foundation antes de composição visual

**Status:** Accepted

**Context**
Era necessário organizar a ordem de implementação.

**Decision**
A construção segue a ordem: Foundation técnica, Design Foundation, Header, Hero, Project Grid, Case Studies, Selected Work, Footer, Motion refinement, SEO/performance/final QA.

**Rationale**
Evitar construir interfaces finais antes da foundation necessária.

**Consequences**
A implementação ganha clareza progressiva e menor retrabalho.
