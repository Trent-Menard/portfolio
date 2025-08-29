"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Shield, Lock, Zap } from "lucide-react"

interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  type: "security" | "web" | "system"
}

const projects: Project[] = [
  {
    title: "AI & Machine Learning",
    description: "Developed ML models including KNN, regression, and neural network implementations with cross-validation. Created unbeatable Tic-Tac-Toe AI using minimax and alpha-beta pruning algorithms.",
    tech: ["Python", "scikit-learn", "Machine Learning", "AI Algorithms"],
    github: "#",
    type: "security",
  },
  {
    title: "Multiplayer Clue Game",
    description: "Led 5-person team in developing multiplayer Clue game featuring Swing GUI and client-server architecture using OCSF framework. Integrated MySQL database with JDBC for user authentication.",
    tech: ["Java", "MySQL", "JDBC", "OCSF", "Swing GUI"],
    github: "https://github.com/Trent-Menard/ClueTeamProject",
    type: "web",
  },
  {
    title: "Netflix Backend System",
    description: "Built full-stack streaming platform using Java Servlets, SQL database, and JDBC. Features include searching, content filtering, and secure user authentication.",
    tech: ["Java", "SQL", "Apache Tomcat", "JDBC", "HTML/CSS"],
    github: "https://github.com/Trent-Menard/NetflixBackendWebDev",
    type: "web",
  },
  {
    title: "Enterprise AD & Vulnerability Assessment",
    description: "Configured enterprise Active Directory environment including user management, group policies, and password security. Conducted comprehensive vulnerability assessments using OpenVAS and Nessus with real-time analysis against Metasploitable targets.",
    tech: ["Windows Server", "Active Directory", "OpenVAS", "Nessus", "Linux"],
    github: "#",
    type: "security",
  },
  {
    title: "RSA Cryptosystem Implementation",
    description: "Built complete RSA asymmetric cryptosystem featuring key generation, encryption/decryption, digital signatures, and authentication. Collaborative project demonstrating advanced cryptographic principles and secure communication protocols.",
    tech: ["Python", "Cryptography", "RSA", "Digital Signatures"],
    github: "https://github.com/Trent-Menard/RSA-Cryptography",
    type: "security",
  },
  {
    title: "Linux ETL Engine",
    description: "Engineered ETL engine using Bash, AWK, and Sed for robust data processing. Designed modular architecture with comprehensive error handling and stage tracking for reusable transformation workflows.",
    tech: ["Bash", "AWK", "Sed", "Linux", "ETL"],
    github: "#",
    type: "system",
  },
  {
    title: "Python Backdoor & Presentation",
    description: "Developed Python backdoor demonstrating remote command execution and data exfiltration techniques. Delivered presentation on backdoor statistics, classification, uses, and XZ Utils backdoor.",
    tech: ["Python", "Networking", "Security"],
    github: "#",
    demo: "https://youtu.be/kZdnq4idEuc?t=935",
    type: "security",
  },
  {
    title: "Blockchain Vehicle Forensics",
    description: "Co-authored and presented ISDFS 2024 research paper on blockchain-based vehicle forensics. Designed and implemented two Python blockchain solutions for secure forensic data management and integrity verification.",
    tech: ["Python", "Blockchain", "Digital Forensics", "Research"],
    github: "#",
    demo: "https://ieeexplore.ieee.org/document/10527251",
    type: "security",
  },
]

const typeIcons = {
  security: Shield,
  web: Zap,
  system: Lock,
}

export function ProjectCard({ project }: { project: Project }) {
  const Icon = typeIcons[project.type]

  return (
    <Card className="group p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="flex items-center space-x-2">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
          <h3 className="text-base sm:text-lg font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
        <Badge variant="secondary" className="font-mono text-xs">
          {project.type}
        </Badge>
      </div>

      <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
        {project.tech.map((tech) => (
          <Badge key={tech} variant="outline" className="font-mono text-xs">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2">
        {project.github && project.github !== "#" && (
          <Button asChild size="sm" className="text-xs">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs bg-primary text-primary-foreground hover:bg-primary/90 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              ./source
            </a>
          </Button>
        )}
        {project.demo && (
          <Button asChild size="sm" variant="default" className="text-xs">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs bg-primary text-primary-foreground hover:bg-primary/90 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              {project.title === "Python Backdoor & Presentation" ? "YouTube" : 
               project.title === "Blockchain Vehicle Forensics" ? "IEEE" : "./demo"}
            </a>
          </Button>
        )}
      </div>
    </Card>
  )
}

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
}
