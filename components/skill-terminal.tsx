"use client"

import { Card } from "@/components/ui/card"

interface Skill {
  name: string
  level: number
  category: string
  logo?: string | string[]
}

const skills: Skill[] = [
  { name: "Python", level: 90, category: "Programming", logo: "python.svg" },
  { name: "Java", level: 90, category: "Programming", logo: "java.svg" },
  { name: "C++", level: 75, category: "Programming", logo: "cplusplus.svg" },
  { name: "TypeScript/JavaScript", level: 80, category: "Programming", logo: ["typescript.svg", "javascript.svg"] },
  { name: "SQL", level: 75, category: "Programming" },
  { name: "HTML/CSS", level: 80, category: "Programming", logo: ["html.svg", "css.svg"] },
  { name: "Kotlin", level: 65, category: "Programming", logo: "kotlin.svg" },
  { name: "PowerShell/Bash", level: 65, category: "Programming", logo: ["powershell.svg", "bash.svg"] },
  { name: "React", level: 75, category: "Frontend", logo: "react.svg" },
  { name: "Node.js", level: 65, category: "Backend", logo: "nodejs.svg" },
  { name: "WordPress", level: 75, category: "Backend", logo: "wordpress.svg" },
  { name: "Apache Tomcat", level: 65, category: "Backend", logo: "apachetomcat.svg" },
  { name: "MySQL", level: 75, category: "Database"},
  { name: "Oracle", level: 75, category: "Database", logo: "oracle.svg" },
  { name: "JDBC", level: 80, category: "Database" },
  { name: "Machine Learning", level: 85, category: "Cybersecurity" },
  { name: "Blockchain", level: 80, category: "Cybersecurity" },
  { name: "Cryptography", level: 80, category: "Cybersecurity" },
  { name: "Network Security", level: 80, category: "Cybersecurity" },
  { name: "Digital Forensics", level: 75, category: "Cybersecurity" },
  { name: "Linux/Unix", level: 85, category: "Systems", logo: "linuxunix.svg" },
  { name: "Git", level: 90, category: "Systems", logo: "git.svg" },
  { name: "Agile/Scrum", level: 65, category: "Systems" },
]

// Helper function to get skill level and badge styling
const getSkillLevel = (level: number): { label: string; className: string } => {
  if (level >= 85) return { label: "Advanced", className: "bg-green-500 text-white hover:bg-green-600" }
  if (level >= 70) return { label: "Intermediate", className: "bg-yellow-500 text-white hover:bg-yellow-600" }
  return { label: "Beginner", className: "bg-blue-500 text-white hover:bg-blue-600" }
}

export function SkillTerminal() {
  const categories = [...new Set(skills.map((skill) => skill.category))]

  return (
    <div className="space-y-4 sm:space-y-6">
      {categories.map((category) => (
        <Card key={category} className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="mb-4">
            <h3 className="text-base sm:text-lg font-mono font-semibold text-primary mb-3">./{category.toLowerCase()}/</h3>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => {
                const skillLevel = getSkillLevel(skill.level)
                const renderLogos = () => {
                  if (!skill.logo) return null
                  const logos = Array.isArray(skill.logo) ? skill.logo : [skill.logo]
                  return logos.map((icon, i) => (
                    <img 
                      key={`${skill.name}-${i}`}
                      src={`logos/${icon}`}
                      alt={`${skill.name} logo`}
                      className="w-4 h-4"
                    />
                  ))
                }

                return (
                  <div key={skill.name} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {renderLogos()}
                      <span className="font-mono text-xs sm:text-sm text-foreground">{skill.name}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-md text-xs font-medium transition-colors ${skillLevel.className}`}>
                      {skillLevel.label}
                    </span>
                  </div>
                )
              })}
          </div>
        </Card>
      ))}
    </div>
  )
}