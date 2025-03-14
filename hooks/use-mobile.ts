import { useEffect, useState } from "react"

const MOBILE_BREAKPOINT = "(max-width: 768px)"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT)
    
    // Set initial value
    setIsMobile(mediaQuery.matches)

    // Add event listener
    const updateTarget = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener("change", updateTarget)

    // Cleanup
    return () => mediaQuery.removeEventListener("change", updateTarget)
  }, [])

  return isMobile
}