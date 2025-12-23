import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Fira_Code } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "800"],
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: {
    default: "Kachedigital | Creative Technologist Portfolio",
    template: "%s | Kachedigital",
  },
  description: "AI Integration Specialist focusing on customer experience, accessibility, and inclusive UX.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} ${firaCode.variable} font-body`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
