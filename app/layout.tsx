import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { MatrixBackground } from "@/components/matrix-background"
import { TerminalNav } from "@/components/terminal-nav"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "root@trent:~$ whoami",
  description: "Computer Science & Cybersecurity Portfolio - Secure. Code. Innovate.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <div className="min-h-screen bg-background text-foreground">
            <MatrixBackground />
            <TerminalNav />
            <main className="pt-20 pb-12">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
            </main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
