# zustand-rx

Small library: subscribe to a Zustand store as an RxJS observable.

Single public API: `toStream(store, selector?, options?)` in `libs/zustand-rx/src/lib/zustand-rx.ts`.

## Commands

All via **pnpm** (enforced by `only-allow`). Wireit orchestrates tasks — it handles dependency ordering (test depends on build, preview depends on build).

| Command | What it does |
|---|---|
| `pnpm build` | tsup → CJS+ESM+dts, copies README/package.json to dist, runs `attw` (arethetypeswrong) |
| `pnpm test` | vitest (includes type-check tests via `typecheck.enabled: true`) |
| `pnpm lint` | eslint on lib + web app source |
| `pnpm dev` | Astro dev server (docs site at localhost:4200) |
| `pnpm preview` | Astro preview (needs build first) |
| `pnpm cz` | commitizen for conventional commits (required by commitlint + husky) |

### Focused commands

- **Single test run**: `pnpm vitest run --config libs/zustand-rx/vite.config.ts`
- **Library build only**: `pnpm --filter zustand-rx exec tsup` (but wireit's `pnpm build` is simpler)

## Repo layout

- `libs/zustand-rx/` — the published npm package (`zustand-rx`). Entry: `src/index.ts`.
- `apps/zustand-rx-web/` — Astro docs site (React + Svelte components). Deployed to Cloudflare Workers via `wrangler.json`.

## Conventions

- **Single quotes**, 2-space indent (Prettier + EditorConfig)
- **TypeScript strict** with `verbatimModuleSyntax` — use `import type` for type-only imports
- **Conventional commits** enforced by commitlint + husky pre-commit (runs `lint-staged`: prettier on staged files)
- **Peer deps**: `rxjs` and `zustand` (not bundled)
- **No side effects** (`"sideEffects": false`)
- **Path alias**: `zustand-rx` → `libs/zustand-rx/src/index.ts` (in `tsconfig.base.json`)

## CI

GitHub Actions: `pnpm build && pnpm test` on every push/PR. Node 22.

## Quirks

- Uses `@nx` eslint plugins but **not** the nx runner — wireit replaces nx for task orchestration.
- pnpm workspace only lists `apps/zustand-rx-web` — the lib is resolved via tsconfig paths, not workspace protocol.
- Tests run in `jsdom` environment and use vitest globals (`expect`, `describe`, `it`, etc.) without explicit imports.
- Build also validates types with `attw` — a type-check failure fails the build.
