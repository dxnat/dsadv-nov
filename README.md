# DSADV

Prototype of a Thai-language member portal for an Australian superannuation fund, built while customising shadcn/ui into our own design system. Frontend only, with mocked data.

Stack: Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui (Base UI, Hugeicons).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding components

```bash
npx shadcn@latest add dialog
```

Each component lives in its own folder (`src/components/ui/Button/Button.tsx` + `Button.module.css`). The shadcn CLI adds flat files, so move new ones into a folder (see `AGENTS.md`). Import from the folder:

```tsx
import { Button } from "@/components/ui/Button"
```

See `AGENTS.md` for project conventions (Thai copy, fonts, design tokens).
