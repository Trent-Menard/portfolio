"use client"

import { useState } from "react"
import { SkillTerminal } from "@/components/skill-terminal"

const DEFAULT_CATEGORIES = [
  "Programming",
  "Frontend",
  "Backend",
  "Database",
  "Cybersecurity_Research",
  "Systems_Technologies",
]

export function SkillsContent() {
  const [expandedSkillCategories, setExpandedSkillCategories] = useState<string[]>(DEFAULT_CATEGORIES)

  return (
    <div className="space-y-6 sm:space-y-8">
      <h1 className="text-2xl sm:text-3xl font-mono font-bold text-primary">./skills --list</h1>
      <SkillTerminal
        expandedCategories={expandedSkillCategories}
        onToggleCategory={(category: string) => {
          setExpandedSkillCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
          )
        }}
      />
    </div>
  )
}
