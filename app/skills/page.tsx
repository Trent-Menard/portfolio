import type { Metadata } from "next"
import { SkillsContent } from "./skills-content"

export const metadata: Metadata = {
  title: "./skills --list | root@trent",
}

export default function SkillsPage() {
  return <SkillsContent />
}
