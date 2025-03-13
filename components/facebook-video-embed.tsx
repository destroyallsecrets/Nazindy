"use client"

import { useEffect, useRef } from "react"

// Add global declaration for Facebook SDK
declare global {
  interface Window {
    FB: any
    fbAsyncInit: () => void
  }
}

interface FacebookVideoEmbedProps {
  videoUrl: string
  width?: number | string
  height?: number | string
  showText?: boolean
  allowFullscreen?: boolean
  autoplay?: boolean
  showCaptions?: boolean
  lazy?: boolean
  className?: string
  title?: string
  description?: string
}

export default function FacebookVideoEmbed({
  videoUrl,
  width = "100%",
  height = 400,
  showText = false,
  allowFullscreen = true,
  autoplay = true,
  showCaptions = false,
  lazy = true,
  className = "",
  title = "Facebook Video",
  description = "",
}: FacebookVideoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parse XFBML when component mounts or videoUrl changes
    const parseFacebookXFBML = () => {
      if (window.FB && containerRef.current) {
        window.FB.XFBML.parse(containerRef.current)
      }
    }

    // Try to parse immediately if FB SDK is already loaded
    parseFacebookXFBML()

    // Add an event listener to handle FB SDK load event
    const handleFBLoad = () => {
      parseFacebookXFBML()
    }

    // Listen for FB SDK loaded event
    document.addEventListener('fb-sdk-loaded', handleFBLoad)

    // Clean up
    return () => {
      document.removeEventListener('fb-sdk-loaded', handleFBLoad)
    }
  }, [videoUrl])

  // Extract the page name from the URL for fallback content
  const pageName = "Nazarene MBC INDY"
  
  // Get current date for fallback content
  const formatDate = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const now = new Date()
    return `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`
  }

  return (
    <div ref={containerRef} className={`fb-video-container overflow-hidden rounded-lg ${className}`}>
      <div
        className="fb-video"
        data-href={videoUrl}
        data-width={width}
        data-height={height}
        data-show-text={showText}
        data-allowfullscreen={allowFullscreen}
        data-autoplay={autoplay}
        data-show-captions={showCaptions}
        data-lazy={lazy}
      >
        <div className="fb-xfbml-parse-ignore">
          <blockquote cite={videoUrl} className="fb-xfbml-parse-ignore">
            <a href={videoUrl}>{title}</a>
            {description && <p>{description}</p>}
            Posted by <a href="https://www.facebook.com/NazareneMissionaryBaptistChurch">{pageName}</a> on {formatDate()}
          </blockquote>
        </div>
      </div>
    </div>
  )
}


