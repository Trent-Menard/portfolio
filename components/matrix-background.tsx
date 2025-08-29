"use client"

import { useEffect, useRef, useState } from "react"

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const charArray = chars.split("")

    // Adjust font size and density based on device
    const fontSize = isMobile ? 12 : 14
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    function draw() {
      if (!ctx || !canvas) return

      // Reduce opacity on mobile for better readability
      const opacity = isMobile ? 0.03 : 0.05
      ctx.fillStyle = `rgba(18, 18, 47, ${opacity})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#00ffcc"
      ctx.font = `${fontSize}px monospace`

      // Reduce animation speed on mobile for better performance
      const speed = isMobile ? 0.95 : 0.975
      
      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > speed) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    // Adjust animation speed based on device
    const interval = setInterval(draw, isMobile ? 80 : 50)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      checkMobile()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobile])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-10" />
}
