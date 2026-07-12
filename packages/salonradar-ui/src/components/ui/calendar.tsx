import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker, type DayPickerProps } from 'react-day-picker'

import { cn } from '../../lib/utils'

import 'react-day-picker/style.css'

/**
 * Thin tailwind-themed wrapper over `react-day-picker` v10. Used by
 * the booking flow's date-strip popover to surface a 1–2 month
 * calendar with closed/full day hints. The classNames map follows
 * the new v10 element identifiers (`Day`, `DayButton`, `Months`, …)
 * rather than the v8 names shadcn's stock `Calendar` snippet still
 * references — pasting that snippet here would silently no-op most
 * styles.
 */
export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: DayPickerProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col gap-4 sm:flex-row sm:gap-6',
        month: 'flex flex-col gap-3',
        month_caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-semibold',
        // The imported `react-day-picker/style.css` gives `.rdp-caption_label`
        // `z-index: 1` and makes `.rdp-month_caption` a full-width, nav-height
        // box. Both paint above this absolutely-positioned, auto-z-index nav and
        // swallow pointer events over part of the prev/next buttons. `z-10` lifts
        // the nav back on top so the whole button area is clickable.
        nav: 'flex items-center justify-between absolute inset-x-0 px-1 pt-1 z-10',
        button_previous: cn(
          'inline-flex items-center justify-center size-7 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-40 disabled:pointer-events-none',
        ),
        button_next: cn(
          'inline-flex items-center justify-center size-7 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-40 disabled:pointer-events-none',
        ),
        month_grid: 'w-full border-collapse',
        weekdays: 'flex',
        weekday:
          'text-muted-foreground rounded-md w-9 text-[0.7rem] font-semibold uppercase tracking-wide',
        week: 'flex w-full mt-1',
        day: 'relative size-9 p-0 text-center text-sm focus-within:relative focus-within:z-20',
        day_button: cn(
          'inline-flex size-9 items-center justify-center rounded-md border border-transparent text-sm transition-colors',
          'hover:bg-accent hover:text-accent-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          'disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground',
        ),
        selected:
          '[&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground',
        today:
          '[&>button]:border-primary [&>button]:font-semibold [&>button]:text-primary',
        outside: 'text-muted-foreground/40',
        disabled: 'text-muted-foreground/40',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className: chevronClassName, ...rest }) => {
          const Icon = orientation === 'left' ? ChevronLeft : ChevronRight

          return <Icon className={cn('size-4', chevronClassName)} {...rest} />
        },
      }}
      {...props}
    />
  )
}
