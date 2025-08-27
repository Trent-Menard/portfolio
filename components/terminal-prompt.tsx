"use client"

import { useState, useEffect } from "react"

interface TerminalPromptProps {
  commands: string[]
  onComplete?: () => void
}

export function TerminalPrompt({ commands, onComplete }: TerminalPromptProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      setIsTyping(false)
      onComplete?.()
      return
    }

    const command = commands[currentCommandIndex]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex < command.length) {
        setCurrentText(command.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentCommandIndex((prev) => prev + 1)
          setCurrentText("")
        }, 300)
      }
    }, 20)

    return () => clearInterval(typeInterval)
  }, [currentCommandIndex, commands, onComplete])

  return (
    <div className="font-mono text-sm space-y-2">
      {commands.slice(0, currentCommandIndex).map((cmd, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span className="text-primary">$</span>
          <span className="text-foreground">{cmd}</span>
        </div>
      ))}
      {currentCommandIndex < commands.length && (
        <div className="flex items-center space-x-2">
          <span className="text-primary">$</span>
          <span className="text-foreground">{currentText}</span>
          {isTyping && <span className="text-primary terminal-cursor"></span>}
        </div>
      )}
    </div>
  )
}
