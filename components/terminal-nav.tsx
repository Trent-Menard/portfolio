"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Terminal, Shield, Code, User, Briefcase, Mail, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { path: "home", href: "/", label: "Home", icon: Terminal },
  { path: "about", href: "/about", label: "About", icon: User },
  { path: "projects", href: "/projects", label: "Projects", icon: Code },
  { path: "skills", href: "/skills", label: "Skills", icon: Shield },
  { path: "experience", href: "/experience", label: "Experience", icon: Briefcase },
  { path: "contact", href: "/contact", label: "Contact", icon: Mail },
]

function sectionFromPathname(pathname: string): string {
  if (pathname === "/") return "home"
  const segment = pathname.split("/").filter(Boolean)[0]
  return segment || "home"
}

export function TerminalNav() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const activeSection = sectionFromPathname(pathname)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  if (!mounted) {
    return null
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 font-mono text-sm">
            <Link
              href="/"
              className="text-primary hover:text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-0.5 -mx-0.5 transition-colors inline-flex items-center space-x-1"
              aria-label="Go to Home"
            >
              <span>root@trent</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-accent">~</span>
            </Link>
            <span className="text-accent">/{activeSection}</span>
            <span className="text-primary terminal-cursor"></span>
          </div>

          {/* Mobile Navigation Title */}
          <div className="md:hidden flex items-center space-x-1 font-mono text-sm">
            <Link
              href="/"
              className="text-primary hover:text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-0.5 -mx-0.5 transition-colors inline-flex items-center space-x-1"
              aria-label="Go to Home"
            >
              <span>root@trent</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-accent">~</span>
            </Link>
            <span className="text-accent">/{activeSection}</span>
            <span className="text-primary terminal-cursor"></span>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.path
              return (
                <Button
                  key={item.path}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`font-mono text-xs transition-all duration-200 hover:scale-105 active:scale-95 ${
                    isActive
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-white shadow-lg shadow-primary/25"
                      : "hover:bg-primary/20 hover:text-primary-foreground"
                  }`}
                >
                  <Link href={item.href}>
                    <Icon className="w-4 h-4 mr-1" />/{item.path}
                  </Link>
                </Button>
              )
            })}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4 transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground active:scale-95 active:bg-primary/80"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground active:scale-95 active:bg-primary/80"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground active:scale-95 active:bg-primary/80"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="grid grid-cols-2 gap-2 pt-4">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.path
                return (
                  <Button
                    key={item.path}
                    asChild
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`font-mono text-xs transition-all duration-200 hover:scale-105 active:scale-95 justify-start ${
                      isActive
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-white shadow-lg shadow-primary/25"
                        : "hover:bg-primary/20 hover:text-primary-foreground"
                    }`}
                  >
                    <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                      <Icon className="w-4 h-4 mr-2" />/{item.path}
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
