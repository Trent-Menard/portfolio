import { useState, useEffect } from 'react'

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      setScreenSize({ width, height })
      setIsMobile(width <= 768)
      setIsTablet(width > 768 && width <= 1024)
    }

    // Check on mount
    checkScreenSize()

    // Add event listener
    window.addEventListener('resize', checkScreenSize)

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return {
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
    screenSize,
    // Responsive breakpoints
    breakpoints: {
      sm: screenSize.width >= 640,
      md: screenSize.width >= 768,
      lg: screenSize.width >= 1024,
      xl: screenSize.width >= 1280,
      '2xl': screenSize.width >= 1536,
    }
  }
}
