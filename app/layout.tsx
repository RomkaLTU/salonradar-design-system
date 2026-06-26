import type { Metadata } from "next"
import { Geist, Instrument_Serif } from "next/font/google"
import { ThemeProvider } from "@salonradar/ui/theme-provider"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
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
    "The SalonRadar design system — warm coral + cream tokens, Geist + Instrument Serif type, and shadcn/ui (new-york) components.",
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
      className={`bg-background ${geist.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
