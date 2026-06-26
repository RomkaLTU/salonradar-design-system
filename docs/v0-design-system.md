# Using `@salonradar/ui` as a v0 Design System

This is the paste-ready config for registering this design system in
[v0](https://v0.app) per the [design systems v2](https://v0.app/docs/design-systems-2)
flow. v0 grounds every generation in real, verifiable sources — so we give it the
published package, a real consumer app, and the globals needed to use it correctly.

## Sources to register

| Source | Value |
|---|---|
| **npm package** | `@salonradar/ui` (public — **no `NPM_TOKEN` needed**) |
| **Repository** | `https://github.com/RomkaLTU/salonradar-design-system` |
| **Real consumer app** | the root Next.js showcase in this repo (`app/`, `components/`) |
| **Docs** | `packages/salonradar-ui/README.md` |

Because the package is **public**, skip the credentials / shared-env-var step in
the v0 docs (that is only for private packages).

## Globals v0 must reproduce

These are the non-obvious bits v0 needs to render the system correctly.

**1. Import the theme stylesheet once, and let Tailwind v4 scan the package:**

```css
@import 'tailwindcss';
@import 'tw-animate-css';
@import '@salonradar/ui/styles.css';
/* scan the installed package so its component classes aren't purged */
@source '../node_modules/@salonradar/ui/dist';
```

**2. Wrap the app in the theme provider:**

```tsx
import { ThemeProvider } from '@salonradar/ui/theme-provider'

<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
  {children}
</ThemeProvider>
```

**3. Load the fonts** (host app supplies them; the theme maps the variables):

- **Geist** → `--font-geist`  (mapped to `--font-sans`)
- **Instrument Serif** → `--font-instrument-serif`  (mapped to `--font-serif`)

In Next.js this is `next/font/google` (see `app/layout.tsx`). In other stacks load
them however you like, as long as those two CSS variables are set.

**4. Import components by subpath** (preferred) or from the barrel:

```tsx
import { Button } from '@salonradar/ui/button'
import { Card, CardHeader, CardTitle } from '@salonradar/ui/card'
// or: import { Button, Card } from '@salonradar/ui'
```

Other entry points: `@salonradar/ui/logo`, `@salonradar/ui/lib/utils` (`cn`),
`@salonradar/ui/hooks/use-mobile`, `@salonradar/ui/hooks/use-toast`.

## Design tokens

Components are token-driven — style with the semantic utilities (`bg-background`,
`text-foreground`, `bg-primary`, `border-border`, `font-serif`, …) rather than literal
colors, so a consumer re-skins purely by overriding the CSS variables.

The tokens currently shipped in `packages/salonradar-ui/styles/globals.css` (OKLCH
"warm coral + cream", Geist + Instrument Serif) are the **v0 starting point**, not the
canonical theme.

> **Source of truth is the SalonRadar app** (`resources/css/app.css` and
> `resources/js/components/ui/` in the Laravel/Inertia app), not this package. This
> package is a **consolidation** of the app's existing components and tokens — its
> theme and dependencies should converge *toward* the app (e.g. Instrument Sans, the
> app's palette), never the reverse. This is consolidation, not a rebrand of the app.

## Import → review

v0 analyzes the sources, builds a starter app from them, and **pauses for review**.
Confirm it picked up the tokens and components, then proceed.

## Release / iteration loop

1. **Develop:** edit `packages/salonradar-ui/src`; run
   `npm run dev --workspace @salonradar/ui` (tsc watch) alongside `npm run dev`.
2. **Release:** bump the version, then
   `npm publish --workspace @salonradar/ui --access public --otp=<code>`.
3. **Update v0:** bump the version v0 pins so it generates against the new release.

v0 reads the **published package**, so committed `dist/` is irrelevant to it — which
is why `dist/` is git-ignored here.
