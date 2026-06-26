import { Card, CardContent, CardHeader, CardTitle } from "@salonradar/ui/card"

const colors = [
  { name: "background", className: "bg-background border border-border" },
  { name: "foreground", className: "bg-foreground" },
  { name: "primary", className: "bg-primary" },
  { name: "secondary", className: "bg-secondary" },
  { name: "accent", className: "bg-accent" },
  { name: "muted", className: "bg-muted" },
  { name: "destructive", className: "bg-destructive" },
  { name: "card", className: "bg-card border border-border" },
]

const typeScale = [
  { label: "Display / Serif", className: "font-serif text-4xl", sample: "Pet grooming, on your radar" },
  { label: "Heading", className: "text-2xl font-semibold", sample: "Trusted groomers near you" },
  { label: "Body", className: "text-base", sample: "Discover and book in just a few taps." },
  { label: "Muted", className: "text-sm text-muted-foreground", sample: "Cancel anytime, no fees." },
]

export function SectionFoundations() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Color tokens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {colors.map((c) => (
              <div key={c.name} className="space-y-2">
                <div className={`h-14 w-full rounded-lg ${c.className}`} />
                <p className="text-xs text-muted-foreground">{c.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Type scale</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {typeScale.map((t) => (
            <div key={t.label} className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{t.label}</p>
              <p className={t.className}>{t.sample}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
