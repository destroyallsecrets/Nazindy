"use client"

import { useRef, useEffect } from "react"

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
  showText?: boolean
  title?: string
  description?: string
  pageUrl?: string
  pageName?: string
  postDate?: string
}

export default function FacebookVideoEmbed({
  videoUrl,
  width = 500,
  showText = false,
  title = "Facebook Video",
  description = "",
  pageUrl = "https://www.facebook.com/NazareneMissionaryBaptistChurch", 
  pageName = "Nazarene MBC INDY",
  postDate = "Wednesday, March 12, 2025",
}: FacebookVideoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parse XFBML when component mounts or videoUrl changes
    if (window.FB && containerRef.current) {
      window.FB.XFBML.parse(containerRef.current)
    }

    // Re-parse when SDK loads
    const handleFBLoad = () => {
      if (window.FB && containerRef.current) {
        window.FB.XFBML.parse(containerRef.current)
      }
    }

    document.addEventListener('fb-sdk-loaded', handleFBLoad)
    return () => document.removeEventListener('fb-sdk-loaded', handleFBLoad)
  }, [videoUrl])

  return (
    <div ref={containerRef}>
      <div 
        className="fb-video" 
        data-href={videoUrl} 
        data-width={width} 
        data-show-text={showText}
      >
        <blockquote cite={videoUrl} className="fb-xfbml-parse-ignore">
          <a href={videoUrl}>{title}</a>
          <p>{description}</p>
          Posted by <a href={pageUrl}>{pageName}</a> on {postDate}
        </blockquote>
      </div>
    </div>
  )
}


