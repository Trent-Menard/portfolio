import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "./experience | root@trent",
}

export default function ExperiencePage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h1 className="text-2xl sm:text-3xl font-mono font-bold text-primary">./experience</h1>
      <div className="space-y-6">
        <Card className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
            <div>
              <h3 className="text-base sm:text-lg font-mono font-semibold text-foreground">Full-stack Developer</h3>
              <p className="text-primary font-mono text-sm sm:text-base">Matmon</p>
            </div>
            <Badge variant="secondary" className="font-mono text-xs w-fit">
              June 2025 - Present
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            AI Integrations & Web Applications developer. Built marketing landing pages using React, TypeScript, and Node.js. 
            Integrated SharpSpring CRM for contact data management. Prototyped AI-driven Q&A landing page using OpenAI API. 
            Maintained and customized WordPress sites using Bitbucket and Git in agile workflow.
          </p>
        </Card>

        <Card className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
            <div>
              <h3 className="text-base sm:text-lg font-mono font-semibold text-foreground">Data Verification Analyst Intern</h3>
              <p className="text-primary font-mono text-sm sm:text-base">First Orion</p>
            </div>
            <Badge variant="secondary" className="font-mono text-xs w-fit">
              Dec 2021 - Sep 2022
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Called, identified, tagged, and verified phone number integrity via Line Number Tool (LNT) and Phone Number 
            Verification Line (PNVL). Averaged 23 calls per hour while collaborating with team members to ensure data consistency.
          </p>
        </Card>
      </div>
    </div>
  )
}
