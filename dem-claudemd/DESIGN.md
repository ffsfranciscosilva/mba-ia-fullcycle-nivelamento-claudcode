# Design System — Especificação

Este documento define os **design tokens** (CSS variables) que servirão de base para o design system em React. Todo componente construído a partir desta spec deve consumir **apenas** estes tokens — nenhum valor de cor, espaçamento, fonte ou raio deve ser "hardcoded" diretamente no componente.

## Tokens

### Cores

Cada cor semântica é definida em uma escala (100 a 900), permitindo variações de fundo, borda, texto e estados de hover/active.

```css
:root {
  /* Primary */
  --color-primary-100: #e6f0ff;
  --color-primary-200: #b3d1ff;
  --color-primary-300: #80b3ff;
  --color-primary-400: #4d94ff;
  --color-primary-500: #1a75ff;
  --color-primary-600: #005ce6;
  --color-primary-700: #0047b3;
  --color-primary-800: #003380;
  --color-primary-900: #001f4d;

  /* Neutral */
  --color-neutral-100: #f7f7f8;
  --color-neutral-200: #ececee;
  --color-neutral-300: #d6d6da;
  --color-neutral-400: #b0b0b8;
  --color-neutral-500: #86868f;
  --color-neutral-600: #5c5c66;
  --color-neutral-700: #3d3d45;
  --color-neutral-800: #232329;
  --color-neutral-900: #0f0f12;

  /* Danger */
  --color-danger-100: #fdecec;
  --color-danger-200: #f9c6c6;
  --color-danger-300: #f29e9e;
  --color-danger-400: #e96d6d;
  --color-danger-500: #dc3535;
  --color-danger-600: #b91f1f;
  --color-danger-700: #931818;
  --color-danger-800: #6e1212;
  --color-danger-900: #470b0b;

  /* Success */
  --color-success-100: #e8f9ee;
  --color-success-200: #bfefd0;
  --color-success-300: #93e4b0;
  --color-success-400: #5fd68b;
  --color-success-500: #2ec367;
  --color-success-600: #1f9e50;
  --color-success-700: #197d40;
  --color-success-800: #135c2f;
  --color-success-900: #0b3a1e;

  /* Superfícies / texto (aliases semânticos, montados sobre as escalas acima) */
  --color-bg: var(--color-neutral-100);
  --color-surface: #ffffff;
  --color-border: var(--color-neutral-300);
  --color-text: var(--color-neutral-900);
  --color-text-muted: var(--color-neutral-600);

  /* Aliases de ação, usados por componentes interativos */
  --color-primary: var(--color-primary-500);
  --color-primary-hover: var(--color-primary-600);
  --color-primary-active: var(--color-primary-700);
  --color-primary-text-on: #ffffff;

  --color-danger: var(--color-danger-500);
  --color-danger-hover: var(--color-danger-600);
  --color-danger-active: var(--color-danger-700);
  --color-danger-text-on: #ffffff;

  --color-success: var(--color-success-500);
  --color-success-hover: var(--color-success-600);
  --color-success-active: var(--color-success-700);
  --color-success-text-on: #ffffff;
}
```

### Espaçamento

Escala linear em incrementos de 4px, usada para padding, margin e gap.

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
}
```

### Tipografia

```css
:root {
  --font-family-base: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-family-mono: "SFMono-Regular", Consolas, "Liberation Mono", monospace;

  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-md: 16px;
  --font-size-lg: 20px;
  --font-size-xl: 24px;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

### Raio de borda

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
}
```

## Regras de uso

- Nenhum componente deve declarar valores de cor, espaçamento, fonte ou raio fora destes tokens (nada de hex, px ou nomes de fonte soltos no CSS/JSX do componente).
- Variantes semânticas (`primary`, `danger`, `success`) devem sempre usar o alias de ação (`--color-primary`, `--color-primary-hover`, etc.), não o valor de escala bruto (`--color-primary-500`), para permitir re-tematização futura sem tocar nos componentes.
- Estados de erro/perigo em componentes de formulário usam a escala `danger`; estados de confirmação usam `success`.

## Checklist de construção

- [ ] Button - variantes primary/secondary, usa apenas tokens
- [ ] Input - com label e estado de erro, usa apenas tokens
- [ ] Card - com header e slot de conteúdo, usa apenas tokens
- [ ] Badge - variantes por cor semântica, usa apenas tokens
