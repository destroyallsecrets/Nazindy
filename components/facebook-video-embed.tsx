"use client"

import { useRef, useEffect, useState } from "react"
import { useFacebookSDK } from "./facebook-sdk-provider"

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
  allowFullscreen?: boolean
  autoplay?: boolean
  showCaptions?: boolean
  lazy?: boolean
  aspect?: "auto" | "square" | "vertical" | "horizontal"
  videoInfo?: boolean
  onLoad?: () => void
  onError?: (error: any) => void
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
  allowFullscreen = true,
  autoplay = false,
  showCaptions = false,
  lazy = true,
  aspect = "auto",
  videoInfo = true,
  onLoad,
  onError,
}: FacebookVideoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { isLoaded, reparse } = useFacebookSDK()
  const [isVideoParsed, setIsVideoParsed] = useState(false)
  
  // Get aspect ratio class
  const getAspectClass = () => {
    switch(aspect) {
      case "square": return "aspect-square";
      case "vertical": return "aspect-[9/16]";
      case "horizontal": return "aspect-video";
      default: return "";
    }
  }

  // Parse the video when FB SDK loads or when videoUrl changes
  useEffect(() => {
    const parseVideo = () => {
      if (isLoaded && containerRef.current) {
        try {
          reparse(containerRef.current)
          setIsVideoParsed(true)
          onLoad?.()
        } catch (error) {
          console.error("Error parsing Facebook video:", error)
          onError?.(error)
        }
      }
    }

    if (isLoaded) {
      parseVideo()
    }

    // Legacy event listener support
    const handleFBLoad = () => {
      parseVideo()
    }

    document.addEventListener('fb-sdk-loaded', handleFBLoad)
    return () => {
      document.removeEventListener('fb-sdk-loaded', handleFBLoad)
    }
  }, [isLoaded, videoUrl, reparse, onLoad, onError])

  return (
    <div ref={containerRef} className={`facebook-video-container ${aspect !== 'auto' ? getAspectClass() : ''}`}>
      <div 
        className="fb-video" 
        data-href={videoUrl} 
        data-width={width} 
        data-show-text={showText}
        data-allowfullscreen={allowFullscreen}
        data-autoplay={autoplay}
        data-show-captions={showCaptions}
        data-lazy={lazy}
      >
        {!isVideoParsed && (
          <blockquote cite={videoUrl} className="fb-xfbml-parse-ignore">
            <a href={videoUrl}>{title}</a>
            {description && <p>{description}</p>}
            {videoInfo && (
              <>Posted by <a href={pageUrl}>{pageName}</a> on {postDate}</>
            )}
          </blockquote>
        )}
      </div>
    </div>
  )
}


