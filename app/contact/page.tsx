import type { Metadata } from "next"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "./contact --secure | root@trent",
}

export default function ContactPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h1 className="text-2xl sm:text-3xl font-mono font-bold text-primary">./contact --secure</h1>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        <Card className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <h2 className="text-lg sm:text-xl font-mono font-semibold mb-4 text-foreground">Get In Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <a href="https://github.com/Trent-Menard" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img src="/logos/github.svg" alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-primary hover:underline ml-2">
                  View GitHub Profile
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <a href="https://linkedin.com/in/trent-menard" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img src="/logos/linkedin.svg" alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-primary hover:underline ml-2">
                  Connect on LinkedIn
                </span>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
