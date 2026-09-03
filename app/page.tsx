"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { TerminalPrompt } from "@/components/terminal-prompt"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Terminal, Shield, Code, Mail } from "lucide-react"

const BOOT_STORAGE_KEY = "portfolio-boot-complete"

const bootCommands = [
  "sudo systemctl start portfolio.service",
  "Loading cybersecurity modules...",
  "Initializing secure connection...",
  "Welcome to the matrix.",
]

export default function HomePage() {
  const [bootPhase, setBootPhase] = useState<"pending" | "booting" | "ready">("pending")

  const finishBoot = useCallback(() => {
    try {
      sessionStorage.setItem(BOOT_STORAGE_KEY, "1")
    } catch {
      // sessionStorage may be unavailable
    }
    setBootPhase("ready")
  }, [])

  useEffect(() => {
    try {
      if (sessionStorage.getItem(BOOT_STORAGE_KEY) === "1") {
        setBootPhase("ready")
        return
      }
    } catch {
      // sessionStorage may be unavailable
    }

    setBootPhase("booting")
    const timer = setTimeout(finishBoot, 4000)
    return () => clearTimeout(timer)
  }, [finishBoot])

  if (bootPhase === "pending") {
    return null
  }

  if (bootPhase !== "ready") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-6 sm:space-y-8">
          <Terminal className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto animate-pulse" />
          <TerminalPrompt commands={bootCommands} onComplete={finishBoot} />
        </div>
      </div>
    )
  }

  return (
    <div className="animate-in fade-in duration-1000 space-y-6 sm:space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-mono font-bold text-foreground glitch-effect">
          root@trent:~$
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground font-mono">Computer Science & Cybersecurity Graduate</p>
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
          <Badge variant="default" className="font-mono text-xs sm:text-sm">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            AI & Machine Learning
          </Badge>
          <Badge variant="secondary" className="font-mono text-xs sm:text-sm">
            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            Full Stack Developer
          </Badge>
          <Badge variant="outline" className="font-mono text-xs sm:text-sm">
            <Terminal className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            Blockchain Research
          </Badge>
        </div>
      </div>

      <Card className="p-4 sm:p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-mono font-semibold text-primary">./initialize_connection</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Welcome to my terminal. I earned my degree in Computer Science and Cybersecurity from the University of Central Arkansas in May of 2025, graduating with a 3.406 GPA. My expertise spans from AI, machine learning, and blockchain research to full‑stack development and cybersecurity competitions. I've co‑authored and presented research on blockchain‑based vehicle forensics and competed in multiple CTF competitions including JOLT and NCL.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              asChild
              className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 text-sm sm:text-base"
            >
              <Link href="/projects">
                <Code className="w-4 h-4 mr-2" />
                ./view_projects
              </Link>
            </Button>
            <Button
              asChild
              className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 text-sm sm:text-base"
            >
              <Link href="/contact">
                <Mail className="w-4 h-4 mr-2" />
                ./contact_me
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
