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
          <blockquote cite={videoUrl}>
            <a href={videoUrl}>Loading Facebook Video...</a>
          </blockquote>
        </div>
      </div>
    </div>
  )
}


