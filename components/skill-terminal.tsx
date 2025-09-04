"use client"

import { Card } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from "lucide-react"

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
  { name: "Blockchain", level: 80, category: "Cybersecurity_Research" },
  { name: "Cryptography", level: 80, category: "Cybersecurity_Research" },
  { name: "Network Security", level: 80, category: "Cybersecurity_Research" },
  { name: "Digital Forensics", level: 75, category: "Cybersecurity_Research" },
  { name: "Linux/Unix", level: 85, category: "Systems_Technologies", logo: "linuxunix.svg" },
  { name: "Git", level: 90, category: "Systems_Technologies", logo: "git.svg" },
  { name: "Agile/Scrum", level: 65, category: "Systems_Technologies" },
  { name: "Machine Learning", level: 75, category: "Systems_Technologies" },
  { name: "Artificial Intelligence", level: 75, category: "Systems_Technologies" },
]

// Helper function to get skill level and badge styling
const getSkillLevel = (level: number): { label: string; className: string } => {
  if (level >= 85) return { label: "Advanced", className: "bg-green-500 text-white hover:bg-green-600" }
  if (level >= 70) return { label: "Intermediate", className: "bg-yellow-500 text-white hover:bg-yellow-600" }
  return { label: "Beginner", className: "bg-blue-500 text-white hover:bg-blue-600" }
}

interface SkillTerminalProps {
  expandedCategories: string[]
  onToggleCategory: (category: string) => void
}

export function SkillTerminal({ expandedCategories, onToggleCategory }: SkillTerminalProps) {
  const categories = [...new Set(skills.map((skill) => skill.category))]

  const renderSkillItem = (skill: Skill) => {
    const skillLevel = getSkillLevel(skill.level)
    const renderLogos = () => {
      if (!skill.logo) return null
      const logos = Array.isArray(skill.logo) ? skill.logo : [skill.logo]
      return logos.map((icon, i) => (
        <img 
          key={`${skill.name}-${i}`}
          src={`logos/${icon}`}
          alt={`${skill.name} logo`}
          className="w-3 h-3 sm:w-4 sm:h-4"
        />
      ))
    }

    return (
      <div key={skill.name} className="flex justify-between items-center py-1">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {renderLogos()}
          <span className="font-mono text-xs sm:text-sm text-foreground">{skill.name}</span>
        </div>
        <span className={`px-1.5 py-0.5 rounded text-xs font-medium transition-colors ${skillLevel.className}`}>
          {skillLevel.label}
        </span>
      </div>
    )
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Grid layout for categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {categories.map((category) => {
          const categorySkills = skills.filter((skill) => skill.category === category)
          const isOpen = expandedCategories.includes(category)
          
          return (
            <Card key={category} className="bg-card/50 backdrop-blur-sm border-border/50">
              <Collapsible open={isOpen} onOpenChange={() => onToggleCategory(category)}>
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-between p-3 sm:p-4 hover:bg-muted/30 transition-colors">
                    <h3 className="text-sm sm:text-base font-mono font-semibold text-primary">
                      ./{category.toLowerCase()}/
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        {categorySkills.length} skills
                      </span>
                      {isOpen ? (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-1">
                    {categorySkills.map(renderSkillItem)}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          )
        })}
      </div>
      
      {/* Summary stats */}
      <div className="mt-4 p-3 sm:p-4 bg-muted/20 rounded-lg border border-border/30">
        <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Advanced: {skills.filter(s => s.level >= 85).length}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Intermediate: {skills.filter(s => s.level >= 70 && s.level < 85).length}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Beginner: {skills.filter(s => s.level < 70).length}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-mono">Total: {skills.length} skills</span>
          </div>
        </div>
      </div>
    </div>
  )
}