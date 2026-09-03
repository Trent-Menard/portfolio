import type { Metadata } from "next"
import { ProjectsGrid } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "./projects | root@trent",
}

export default function ProjectsPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-mono font-bold text-primary">./projects</h1>
        <Button asChild className="w-full sm:w-auto">
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
}
