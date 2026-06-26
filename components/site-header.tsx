import { Logo } from "@salonradar/ui/logo"
import { Button } from "@salonradar/ui/button"
import { Badge } from "@salonradar/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Logo />
          <Badge variant="secondary" className="hidden sm:inline-flex">
            Design System
          </Badge>
        </div>
        <nav className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Components
          </Button>
          <Button variant="ghost" className="hidden sm:inline-flex">
            Tokens
          </Button>
          <ThemeToggle />
          <Button>Get started</Button>
        </nav>
      </div>
    </header>
  )
}
