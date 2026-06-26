# @salonradar/ui

The SalonRadar design system — a warm coral + cream theme built on [shadcn/ui](https://ui.shadcn.com) (new-york style), [Radix UI](https://www.radix-ui.com), and Tailwind CSS v4. Ships ~55 accessible React components, design tokens, light/dark themes, and a `ThemeProvider`.

## Installation

```bash
npm install @salonradar/ui
# peer dependencies
npm install react react-dom
```

This package targets bundler-based React apps (Next.js, Vite, etc.) and Tailwind CSS v4.

## Setup

Import the theme stylesheet once at your app's entry (it defines the design tokens, base layer, and fonts hookup):

```ts
import "@salonradar/ui/styles.css"
```

Wrap your app in the provider for light/dark theming:

```tsx
import { ThemeProvider } from "@salonradar/ui/theme-provider"

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  )
}
```

The theme expects the `Geist` and `Instrument Serif` fonts to be loaded by the host app (e.g. via `next/font` or `<link>`), mapped to `--font-sans` and `--font-serif`.

## Usage

```tsx
import { Button } from "@salonradar/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@salonradar/ui/card"

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Book your appointment</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Reserve</Button>
      </CardContent>
    </Card>
  )
}
```

Every component is also available from the barrel entry:

```tsx
import { Button, Card, Badge, Input } from "@salonradar/ui"
```

## License

MIT
