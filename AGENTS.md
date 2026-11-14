<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. (`CLAUDE.md` just imports this file via `@AGENTS.md`.)

## What this project is

A **frontend-only prototype** used to customise shadcn/ui into the company's own design system and to mock up a **member portal** for an Australian superannuation fund serving Thai people.

- Scope: Login, Register, Account details, and a member dashboard (balance, contributions, investments). Members are the users, not staff.
- No backend. Auth, accounts and fund data are mocked; don't add real APIs, databases or auth providers unless asked.
- The Next.js block above applies: Next.js 16 / React 19 — check `node_modules/next/dist/docs/` before using Next APIs.

## Commands

```bash
npm run dev         # dev server (Turbopack), http://localhost:3000
npm run build       # production build
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
npm run format      # Prettier (with Tailwind class sorting)
npx shadcn@latest add <component>   # add a shadcn component into src/components/ui
```

There is no test runner. Verify changes with `typecheck`, `lint`, `build`, and by viewing the page in the browser.

## Language and content

- **All UI copy is Thai** (`<html lang="th">`). Keep English only for Australian terms with no good Thai equivalent (e.g. Super, TFN, ABN, ATO), optionally with a Thai explanation.
- Money is AUD. Format numbers, currency and dates with `Intl` using the `th-TH` locale (e.g. `new Intl.NumberFormat("th-TH", { style: "currency", currency: "AUD" })`).
- Mock data should look realistic for Thai members in Australia (Thai names, Australian addresses/phone formats).

## Typography

- **Headings**: IBM Plex Sans Thai, loaded with `next/font` in `src/app/layout.tsx` as `--font-heading`. Use the `font-heading` utility; `h1`–`h6` get it automatically from the base layer in `globals.css`.
- **Body / description text**: the system font stack defined as `--font-sans` in `@theme inline` in `src/app/globals.css` (system-ui with Thai-capable fallbacks). Don't load a web font for body text.
- Mono: Geist Mono (`--font-mono`).

## Design system architecture

- shadcn config is in `components.json`: style `base-luma`, base color `olive`, CSS variables on, icons from **Hugeicons** (`@hugeicons/react` + `@hugeicons/core-free-icons`), not lucide.
- Components are built on **Base UI** (`@base-ui/react`), not Radix. To render a custom element as a trigger/close, use the `render` prop (`<DialogTrigger render={<Button />}>…`), not `asChild`.
- `src/components/ui/` is owned code: customise these files directly to build the design system rather than wrapping them.
- **One folder per component, styling separated from markup:** `src/components/ui/Button/{Button.tsx, Button.module.css, index.ts}`. Import from the folder: `@/components/ui/Button`.
  - `X.module.css` holds every class. It starts with `@reference "../../../app/globals.css";` and a `@layer theme, base, components, utilities;` order statement, then puts all rules in `@layer components { … }` using `@apply` with Tailwind utilities. Because Tailwind utilities live in the later `utilities` layer, a caller's `className` always overrides the component defaults.
  - In CSS modules don't `@apply` `dark:`, `group-*:` or `peer-*:` variants: they reference `.dark`/`.group`/`.peer`, which CSS Modules would rename. Write those as `:global(.dark) .x { @apply … }` instead. Keep state rules (focus, invalid, disabled) after variant rules so they win.
  - `X.tsx` contains no class strings. It maps semantic props to module classes with a typed lookup (`const variantClass = { default: styles.variantDefault, … } as const`) and merges the override last: `cn(styles.root, variantClass[variant], className)`. It also sets `data-variant`/`data-size` attributes.
  - Semantic props so far: `Button` `variant`/`size`/`fullWidth`, `Input` `variant` (`filled`|`outline`), `Label` `required`, `DialogContent` `size`. Add a prop + module class rather than passing ad-hoc `className` from pages.
  - `buttonVariants({ variant, size, fullWidth, className })` returns button classes for non-button elements (e.g. a `Link`); other shadcn components import it.
  - The shadcn CLI still writes flat lowercase files (`src/components/ui/card.tsx`) that import `@/components/ui/button` and use `cva`. After `npx shadcn@latest add`, move the component into its own folder with this pattern and fix its imports. `class-variance-authority` is no longer installed; the CLI re-adds it if a component needs it.
- Design tokens live in `src/app/globals.css`: colour/radius variables in `:root` and `.dark`, mapped to Tailwind via `@theme inline`. Change tokens there rather than hard-coding colours in components. Tailwind v4 has no `tailwind.config` file.
- Dark mode uses `next-themes` (class strategy) via `src/components/theme-provider.tsx`; pressing `d` toggles it during development.
- Class joining uses the `cn` package (shadcn's clsx + tailwind-merge replacement); `@/lib/utils` re-exports it. Import alias `@/*` → `src/*`.
- Tailwind v4 is configured CSS-first: `postcss.config.mjs` (`@tailwindcss/postcss`) + `src/app/globals.css`. Prettier sorts classes via `prettier-plugin-tailwindcss`, pointed at that stylesheet in `.prettierrc`.
