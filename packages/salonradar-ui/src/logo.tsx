import { cn } from "./lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className="relative flex h-7 w-7 items-center justify-center rounded-full bg-primary"
      >
        <span className="absolute inset-1 rounded-full border border-primary-foreground/40" />
        <span className="absolute inset-2 rounded-full border border-primary-foreground/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
      </span>
      <span className="font-serif text-xl tracking-tight text-foreground">
        salon<span className="italic text-primary">radar</span>
      </span>
    </div>
  )
}
