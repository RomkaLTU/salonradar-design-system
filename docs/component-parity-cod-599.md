# COD-599 shared component parity

The SalonRadar app is the behavioral source of truth. Package-only behavior is retained only when it is additive, and package imports remain relative with individual `@radix-ui/*` dependencies.

| Component | Result | Notes |
| --- | --- | --- |
| accordion | same | App behavior preserved. |
| alert-dialog | same | App behavior preserved; logical positioning used. |
| alert | same | App behavior preserved. |
| avatar | same | App behavior preserved. |
| badge | same | App behavior preserved. |
| breadcrumb | same | App behavior preserved. |
| button | package-superset | App variants and transitions are canonical; package retains additive `icon-sm` and `icon-lg` sizes. |
| calendar | same | The package and showcase now use `react-day-picker` 10.0.1 and reproduce the app's v10 Calendar behavior. |
| card | package-superset | App card composition is preserved; package retains additive `CardAction` and border-aware header/footer spacing. |
| checkbox | same | App behavior preserved. |
| collapsible | same | App behavior preserved. |
| command | same | App behavior preserved; logical shortcut alignment used. |
| dialog | package-superset | App footer close action is supported; package retains the additive content close-button option. |
| drawer | same | App behavior preserved; directional placement uses logical utilities. |
| dropdown-menu | same | App behavior preserved; inset and shortcut alignment use logical utilities. |
| input-otp | same | App behavior preserved. |
| input | same | App behavior preserved. |
| label | same | App behavior preserved. |
| navigation-menu | same | App behavior preserved; directional layout uses logical utilities. |
| popover | same | App behavior preserved. |
| select | same | App behavior preserved; item indicator and padding use logical utilities. |
| separator | same | App behavior preserved. |
| sheet | same | App behavior preserved; side placement and borders use logical utilities. |
| sidebar | needs-app-change | Package stays hook-agnostic and exposes the shared primitive; Phase 3 keeps the app-local `use-mobile` wrapper. |
| skeleton | same | App behavior preserved. |
| slider | same | App behavior preserved. |
| sonner | needs-app-change | Package owns the theme-aware toaster primitive and app default position; Phase 3 keeps flash-toast and appearance hooks app-local. |
| spinner | same | App behavior preserved. |
| switch | same | App behavior preserved. |
| tabs | needs-app-change | Package exposes orientation and list variants; Phase 3 keeps hash synchronization app-local. |
| textarea | same | App behavior preserved. |
| toggle-group | same | App behavior preserved. |
| toggle | same | App behavior preserved. |
| tooltip | same | App behavior preserved. |

## Package-wide logical properties

All UI source files were audited, including package-only components. Physical inline-direction utilities (`left-`, `right-`, `pl-`, `pr-`, `ml-`, `mr-`, `text-left`, `text-right`, and physical inline borders or radii) were replaced with their logical equivalents. Directional animation names such as `slide-in-from-left-*` remain unchanged because they describe animation vectors rather than CSS logical properties.
