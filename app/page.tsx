"use client"

import { useState, useEffect } from "react"
import { TerminalNav } from "@/components/terminal-nav"
import { MatrixBackground } from "@/components/matrix-background"
import { TerminalPrompt } from "@/components/terminal-prompt"
import { SkillTerminal } from "@/components/skill-terminal"
import { ProjectsGrid } from "@/components/project-card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Terminal, Shield, Code, Mail, Download, ExternalLink } from "lucide-react"

export default function Portfolio() {
  const [showContent, setShowContent] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const bootCommands = [
    "sudo systemctl start portfolio.service",
    "Loading cybersecurity modules...",
    "Initializing secure connection...",
    "Welcome to the matrix.",
  ]

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-mono font-bold text-foreground glitch-effect">
                root@trent:~$
              </h1>
              <p className="text-xl text-muted-foreground font-mono">Computer Science & Cybersecurity Graduate</p>
              <div className="flex justify-center space-x-4">
                <Badge variant="default" className="font-mono">
                  <Shield className="w-4 h-4 mr-1" />
                  AI & Machine Learning
                </Badge>
                <Badge variant="secondary" className="font-mono">
                  <Code className="w-4 h-4 mr-1" />
                  Full Stack Developer
                </Badge>
                <Badge variant="outline" className="font-mono">
                  <Terminal className="w-4 h-4 mr-1" />
                  Blockchain Research
                </Badge>
              </div>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-4">
                <h2 className="text-2xl font-mono font-semibold text-primary">./initialize_connection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to my digital fortress. I earned my degree in Computer Science and Cybersecurity from the University of Central Arkansas in May of 2025, graduating with a 3.406 GPA. My expertise spans from AI, machine learning, and blockchain research to full‑stack development and cybersecurity competitions. I've co‑authored and presented research on blockchain‑based vehicle forensics and competed in multiple CTF competitions including JOLT and NCL.
                </p>
                <div className="flex space-x-4">
                  <Button
                    onClick={() => setActiveSection("projects")}
                    className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    ./view_projects
                  </Button>
                  <Button
                    onClick={() => setActiveSection("contact")}
                    className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    ./contact_me
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )

      case "about":
        return (
          <div className="space-y-8">
            <h1 className="text-3xl font-mono font-bold text-primary">./about_me</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h2 className="text-xl font-mono font-semibold mb-4 text-foreground">Background</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Computer Science & Cybersecurity graduate from UCA with a minor in Spanish. Passionate about AI, machine learning, 
                  full-stack development, and cybersecurity. Co-authored and presented research on "Towards Privacy-preserving Vehicle 
                  Digital Forensics: A Blockchain Approach" at ISDFS 2024.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding or researching, you'll find me competing in CTF competitions (JOLT, NCL), 
                  or exploring the latest developments in AI and ML applications.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h2 className="text-xl font-mono font-semibold mb-4 text-foreground">Education & Achievements</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">B.S. Computer Science & Cybersecurity</span>
                    <Badge variant="default">Completed May 2025</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">Minor in Spanish</span>
                    <Badge variant="secondary">Completed May 2025</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">GPA: 3.406/4.0</span>
                    <Badge variant="outline">Dean's List</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">Study Abroad: Costa Rica</span>
                    <span className="font-mono text-sm">May 2023</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">Computer Science & Cybersecurity Club</span>
                    <span className="font-mono text-sm">Alumni</span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h2 className="text-xl font-mono font-semibold mb-4 text-foreground">VDF Research & Backdoor Demo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <a href="https://ieeexplore.ieee.org/document/10527251" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-primary hover:underline">
                    Blockchain Vehicle Forensics Paper (IEEE)
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Terminal className="w-5 h-5 text-primary" />
                  <a href="https://youtu.be/kZdnq4idEuc?t=935" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-primary hover:underline">
                    InfoSec Backdoor Demo (YouTube, starts @ 15:35)
                  </a>
                </div>
              </div>
            </Card>
          </div>
        )

      case "projects":
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-mono font-bold text-primary">./projects</h1>
              <Button asChild>
                <a
                  href="https://github.com/Trent-Menard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm bg-primary text-primary-foreground hover:bg-primary/90 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View All on GitHub
                </a>
              </Button>
            </div>
            <ProjectsGrid />
          </div>
        )

      case "skills":
        return (
          <div className="space-y-8">
            <h1 className="text-3xl font-mono font-bold text-primary">./skills --list</h1>
            <SkillTerminal />
          </div>
        )

      case "experience":
        return (
          <div className="space-y-8">
            <h1 className="text-3xl font-mono font-bold text-primary">./experience</h1>
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-mono font-semibold text-foreground">Full-stack Developer</h3>
                    <p className="text-primary font-mono">Matmon</p>
                  </div>
                  <Badge variant="secondary" className="font-mono">
                    June 2025 - Present
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  AI Integrations & Web Applications developer. Built marketing landing pages using React, TypeScript, and Node.js. 
                  Integrated SharpSpring CRM for contact data management. Prototyped AI-driven Q&A landing page using OpenAI API. 
                  Maintained and customized WordPress sites using Bitbucket and Git in agile workflow.
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-mono font-semibold text-foreground">Data Verification Analyst Intern</h3>
                    <p className="text-primary font-mono">First Orion</p>
                  </div>
                  <Badge variant="secondary" className="font-mono">
                    Dec 2021 - Sep 2022
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Called, identified, tagged, and verified phone number integrity via Line Number Tool (LNT) and Phone Number 
                  Verification Line (PNVL). Averaged 23 calls per hour while collaborating with team members to ensure data consistency.
                </p>
              </Card>
            </div>
          </div>
        )

      case "contact":
        return (
          <div className="space-y-8">
            <h1 className="text-3xl font-mono font-bold text-primary">./contact --secure</h1>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h2 className="text-xl font-mono font-semibold mb-4 text-foreground">Get In Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="w-5 h-5 text-primary" />
                    <a href="https://github.com/Trent-Menard" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-primary hover:underline">
                      View GitHub Profile
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <a href="https://linkedin.com/in/trent-menard" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-primary hover:underline">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground />
      <TerminalNav activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {!showContent ? (
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center space-y-8">
                <Terminal className="w-16 h-16 text-primary mx-auto animate-pulse" />
                <TerminalPrompt commands={bootCommands} onComplete={() => setShowContent(true)} />
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in duration-1000">{renderSection()}</div>
          )}
        </div>
      </main>
    </div>
  )
}
