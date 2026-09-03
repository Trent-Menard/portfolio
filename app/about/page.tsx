import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "./about_me | root@trent",
}

export default function AboutPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h1 className="text-2xl sm:text-3xl font-mono font-bold text-primary">./about_me</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <Card className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <h2 className="text-lg sm:text-xl font-mono font-semibold mb-4 text-foreground">Background</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
            Computer Science & Cybersecurity graduate from UCA with a minor in Spanish. Passionate about AI, machine learning, 
            full-stack development, and cybersecurity. Co-authored and presented research on "Towards Privacy-preserving Vehicle 
            Digital Forensics: A Blockchain Approach" at ISDFS 2024.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            When I'm not coding or researching, you'll find me competing in CTF competitions (JOLT, NCL), 
            or exploring the latest developments in AI and ML applications.
          </p>
        </Card>

        <Card className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <h2 className="text-lg sm:text-xl font-mono font-semibold mb-4 text-foreground">Education & Achievements</h2>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span className="font-mono text-xs sm:text-sm">B.S. Computer Science & Cybersecurity</span>
              <Badge variant="default" className="text-xs">Completed May 2025</Badge>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span className="font-mono text-xs sm:text-sm">Minor in Spanish</span>
              <Badge variant="secondary" className="text-xs">Completed May 2025</Badge>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span className="font-mono text-xs sm:text-sm">GPA: 3.406/4.0</span>
              <Badge variant="outline" className="text-xs">Dean's List</Badge>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span className="font-mono text-xs sm:text-sm">Study Abroad: Costa Rica</span>
              <span className="font-mono text-xs sm:text-sm">May 2023</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <span className="font-mono text-xs sm:text-sm">Computer Science & Cybersecurity Club</span>
              <span className="font-mono text-xs sm:text-sm">Alumni</span>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-border/50">
        <h2 className="text-lg sm:text-xl font-mono font-semibold mb-4 text-foreground">VDF Research & Backdoor Demo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <a href="https://ieeexplore.ieee.org/document/10527251" target="_blank" rel="noopener noreferrer" className="font-mono text-xs sm:text-sm text-primary hover:underline">
              Blockchain Vehicle Forensics Paper (IEEE)
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <a href="https://youtu.be/kZdnq4idEuc?t=935" target="_blank" rel="noopener noreferrer" className="font-mono text-xs sm:text-sm text-primary hover:underline">
              InfoSec Backdoor Demo (YouTube, starts @ 15:35)
            </a>
          </div>
        </div>
      </Card>
    </div>
  )
}
