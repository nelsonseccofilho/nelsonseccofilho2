# N3LX Portfolio — QA Findings

Este documento registra problemas, inconsistências, riscos e oportunidades de refinamento encontrados durante as validações do portfólio.

Cada finding recebe um identificador permanente.

O ciclo padrão é:

Found
→ In Progress
→ Ready for Retest
→ Verified

Findings não devem ser marcados como Verified apenas porque o código foi alterado.
É necessária uma nova validação.

## QA-001 — Orphan separator in Hero disciplines on mobile

**Status:** Ready for Retest

**Severity:** Polish

**Area:** Hero / Responsive typography

**Found during:** Responsive Visual QA

**Viewport:** 440 × 956 — iPhone 16 Pro Max QA preset

**Theme:** Light and Dark / theme-independent behavior

### Description

Durante o QA responsivo da primeira composição Header + Hero, a lista de disciplinas quebra em duas linhas.

A composição observada é aproximadamente:

UX Strategy · Product Discovery · Design Systems
· AI-assisted Product Design

O separador visual aparece isolado no início da segunda linha.

### Expected

Quando a lista quebrar em telas estreitas, nenhum separador deve aparecer órfão no início ou final de uma linha.

Os itens precisam continuar sendo percebidos como elementos independentes e semanticamente claros.

### Actual

O separador utilizado entre os itens acompanha o quarto item para a segunda linha e aparece visualmente antes de:

AI-assisted Product Design

Isso gera ruído visual e enfraquece o acabamento editorial da composição.

### Evidence

Encontrado durante QA no viewport oficial:

440 × 956

O problema aparece no grupo:

hero__disciplines
hero__discipline

Não foi observado overflow horizontal.

A estrutura geral do Hero permanece correta.

### Proposed resolution

Preservar os separadores em larguras onde os itens permanecem confortavelmente distribuídos.

Em telas estreitas, remover visualmente os separadores e utilizar row-gap e column-gap para definir a separação entre os itens.

A solução deve:

- permanecer CSS-only;
- preservar a semântica atual;
- não reduzir artificialmente o font-size;
- não usar nowrap;
- não criar CSS específico para um modelo de dispositivo.

### Regression scope

Após a correção validar:

Primary:
- 440 × 956

Confirmar que não houve regressão aparente em:
- 820 × 1180
- 1366 × 768
- 1920 × 1080

Também confirmar:

- ausência de overflow horizontal;
- presença das quatro disciplinas;
- comportamento equivalente em Light e Dark.

### Verification

Pending responsive visual retest.

### Related commit

Pending.

## QA-002 — Theme toggle hydration mismatch

**Status:** Ready for Retest

**Severity:** High

**Area:** Theme / Hydration / Accessibility

**Found during:** Responsive Visual QA after Header + Hero implementation

**Viewport:** 1920 × 1080

**Theme:** Theme-dependent

### Description

Durante o QA foi exibido um erro de hidratação relacionado ao sistema de tema.

O React mostrou diferenças entre servidor e cliente dentro do ThemeToggle, incluindo propriedades dependentes do tema como:

- aria-label;
- aria-pressed;
- SVG/ícone renderizado.

Também foi exibido um warning relacionado ao script injetado pelo next-themes através do ThemeProvider.

### Expected

O HTML inicialmente produzido pelo servidor e o primeiro render do cliente devem ser compatíveis.

O ThemeToggle só deve apresentar estado visual e atributos acessíveis dependentes do tema quando o tema estiver seguramente resolvido no cliente.

A aplicação não deve apresentar hydration mismatch.

### Actual

Servidor e cliente produzem estados diferentes para o ThemeToggle durante a hidratação.

Foi observado também:

"Encountered a script tag while rendering React component"

apontando para AppThemeProvider / next-themes.

### Evidence

Encontrado visualmente no Next.js development error overlay e confirmado pelo hydration diff do React.

O diff inclui diferenças em:

- aria-label;
- aria-pressed;
- ícone light/dark.

### Proposed resolution

Investigar primeiro a implementação atual do ThemeToggle.

A solução deve seguir a recomendação oficial do next-themes para não renderizar UI dependente de theme/resolvedTheme antes de o componente estar montado no cliente.

Não aplicar suppressHydrationWarning no ThemeToggle para esconder o problema.

Não remover atributos acessíveis.

Não trocar next-themes sem investigação.

O warning específico do ThemeScript deve ser avaliado separadamente caso permaneça depois que o hydration mismatch do ThemeToggle for resolvido.

### Regression scope

Validar:

- carregamento inicial em Light;
- carregamento inicial com Dark persistido;
- troca Light → Dark;
- troca Dark → Light;
- reload com Dark persistido;
- ausência de hydration mismatch;
- aria-label correto;
- aria-pressed correto;
- ausência de layout shift perceptível;
- testes existentes do ThemeToggle.

Checkpoints principais:

1920 × 1080
1366 × 768
820 × 1180
440 × 956

### Verification

Pending runtime hydration and theme regression retest.

### Related commit

Pending.

## QA-003 — Theme toggle vertical misalignment in header

**Status:** Verified

**Severity:** Medium

**Area:** Header / Theme toggle / Vertical alignment

**Found during:** Manual responsive QA + runtime measurement

**Affected viewports:**

- 1920 × 1080
- 1366 × 768
- 820 × 1180
- 440 × 956

### Description

O ThemeToggle fica verticalmente abaixo do centro do Header porque `.theme-toggle` possui `margin-top: 24px` enquanto o container do Header utiliza `align-items: center`.

### Expected

O ThemeToggle deve ser centralizado verticalmente pelo layout pai do Header, compartilhando o mesmo centro visual da marca N3LX.

### Actual

A medição em runtime no viewport 440 × 956 confirmou:

- Header inner centerY: 38px
- Brand centerY: 38px
- ThemeToggle centerY: 50px
- Delta vertical: +12px
- ThemeToggle margin-top: 24px

A hipótese anterior de desalinhamento horizontal foi descartada pela medição: o grid horizontal estava correto.

### Proposed resolution

Remover o `margin-top: 24px` do componente base `.theme-toggle` para que seu posicionamento vertical dentro do Header seja determinado por `.site-header__inner { align-items: center; }`.

### Regression scope

Validar visualmente:

- 1920 × 1080
- 1366 × 768
- 820 × 1180
- 440 × 956

Também confirmar:

- ThemeToggle centralizado verticalmente no Header;
- marca N3LX preservada;
- grid horizontal preservado;
- ausência de overflow horizontal;
- comportamento equivalente em Light e Dark;
- navegação por teclado e focus-visible preservados.

### Verification

Verified after complete responsive retest.

Runtime measurement after correction:

- Header inner centerY: 38px
- Brand centerY: 38px
- ThemeToggle centerY: 38px
- Delta vertical: 0px
- ThemeToggle margin-top: 0px

Manual responsive validation passed in:

- 1920 × 1080
- 1366 × 768
- 820 × 1180
- 440 × 956

Confirmed in all four viewports:

- N3LX and ThemeToggle are vertically aligned;
- ThemeToggle remains inside the correct gutter;
- no overflow observed;
- no Hero regression observed;
- no structural Header regression observed.

Theme validation passed:

- Light preserved;
- Dark preserved.

Automated validation confirmed by user:

- typecheck passed;
- lint passed;
- test passed;
- build passed.

### Related commit

Pending.
