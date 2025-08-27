"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Terminal, Shield, Code, User, Briefcase, Mail } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { path: "home", label: "Home", icon: Terminal },
  { path: "about", label: "About", icon: User },
  { path: "projects", label: "Projects", icon: Code },
  { path: "skills", label: "Skills", icon: Shield },
  { path: "experience", label: "Experience", icon: Briefcase },
  { path: "contact", label: "Contact", icon: Mail },
]

interface TerminalNavProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function TerminalNav({ activeSection, setActiveSection }: TerminalNavProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 font-mono text-sm">
            <span className="text-primary">root@trent</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-accent">~/{activeSection}</span>
            <span className="text-primary terminal-cursor"></span>
          </div>

          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.path}
                  variant={activeSection === item.path ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveSection(item.path)}
                  className={`font-mono text-xs transition-all duration-200 hover:scale-105 active:scale-95 ${
                    activeSection === item.path
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-white shadow-lg shadow-primary/25"
                      : "hover:bg-primary/20 hover:text-primary-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-1" />/{item.path}
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
        </div>
      </div>
    </nav>
  )
}
