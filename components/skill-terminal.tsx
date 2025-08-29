"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: "Python", level: 90, category: "Programming" },
  { name: "Java", level: 90, category: "Programming" },
  { name: "C++", level: 75, category: "Programming" },
  { name: "TypeScript/JavaScript", level: 80, category: "Programming" },
  { name: "SQL", level: 75, category: "Programming" },
  { name: "HTML/CSS", level: 80, category: "Programming" },
  { name: "Kotlin", level: 65, category: "Programming" },
  { name: "PowerShell/Bash", level: 65, category: "Programming" },
  { name: "React", level: 75, category: "Frontend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "WordPress", level: 75, category: "Backend" },
  { name: "Apache Tomcat", level: 70, category: "Backend" },
  { name: "MySQL", level: 85, category: "Database" },
  { name: "Oracle", level: 75, category: "Database" },
  { name: "JDBC", level: 80, category: "Database" },
  { name: "Machine Learning", level: 85, category: "Cybersecurity" },
  { name: "Blockchain", level: 80, category: "Cybersecurity" },
  { name: "Cryptography", level: 80, category: "Cybersecurity" },
  { name: "Network Security", level: 80, category: "Cybersecurity" },
  { name: "Digital Forensics", level: 75, category: "Cybersecurity" },
  { name: "Linux/Unix", level: 85, category: "Systems" },
  { name: "Git", level: 90, category: "Systems" },
  { name: "Agile/Scrum", level: 75, category: "Systems" },
]

export function SkillTerminal() {
  const categories = [...new Set(skills.map((skill) => skill.category))]

  return (
    <div className="space-y-4 sm:space-y-6">
      {categories.map((category) => (
        <Card key={category} className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <h3 className="text-base sm:text-lg font-mono font-semibold mb-3 sm:mb-4 text-primary">./{category.toLowerCase()}/</h3>
          <div className="space-y-3 sm:space-y-4">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs sm:text-sm text-foreground">{skill.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-muted" />
                </div>
              ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
