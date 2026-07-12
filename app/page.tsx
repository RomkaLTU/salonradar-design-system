import { Button } from "@salonradar/ui/button"
import { Badge } from "@salonradar/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SectionFoundations } from "@/components/section-foundations"
import { SectionComponents } from "@/components/section-components"

export default function Page() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl space-y-16 px-4 py-12 sm:px-6 sm:py-16">
        {/* Hero */}
        <section className="space-y-6 text-center">
          <Badge variant="secondary" className="mx-auto">
            Warm coral + cream
          </Badge>
          <h1 className="font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
            The salon<span className="italic text-primary">radar</span> design system
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            A friendly, booking-first UI kit built on shadcn/ui (new-york). OKLCH tokens, Instrument Sans and
            Instrument Serif type, and a full set of accessible components.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg">Browse components</Button>
            <Button size="lg" variant="outline">
              View tokens
            </Button>
          </div>
        </section>

        <SectionFoundations />
        <SectionComponents />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 text-sm text-muted-foreground sm:px-6">
          Built with the SalonRadar design system.
        </div>
      </footer>
    </div>
  )
}
