import type { Metadata } from "next"
import { Instrument_Sans, Instrument_Serif } from "next/font/google"
import { ThemeProvider } from "@salonradar/ui/theme-provider"
import "./globals.css"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
})

export const metadata: Metadata = {
  title: "SalonRadar Design System",
  description:
    "The SalonRadar design system — warm coral + cream tokens, Instrument Sans + Instrument Serif type, and shadcn/ui (new-york) components.",
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#f7efe5",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`bg-background ${instrumentSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
