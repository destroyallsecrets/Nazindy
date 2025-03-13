"use client"

import { useState, useEffect, useRef } from "react"
import { useFacebookSDK } from "./facebook-sdk-provider"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"

// Add global declaration for Facebook SDK
declare global {
  interface Window {
    FB: any
    fbAsyncInit: () => void
  }
}

interface FacebookVideoEmbedProps {
  videoUrl: string
  width?: string | number
  height?: string | number
  aspect?: "horizontal" | "vertical" | "square"
  showText?: boolean
  title?: string
  description?: string
  autoplay?: boolean
  allowFullscreen?: boolean
  lazy?: boolean
  videoInfo?: boolean
  onLoad?: () => void
  postDate?: string
}

export default function FacebookVideoEmbed({
  videoUrl,
  width = "100%",
  height,
  aspect = "horizontal",
  showText = false,
  title,
  description,
  autoplay = false,
  allowFullscreen = true,
  lazy = true,
  videoInfo = true,
  onLoad,
  postDate
}: FacebookVideoEmbedProps) {
  const { isLoaded, reparse } = useFacebookSDK()
  const [isBlocked, setIsBlocked] = useState(false)
  const [manuallyLoaded, setManuallyLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  
  // Extract video ID from URL
  const getVideoId = () => {
    try {
      const url = new URL(videoUrl)
      const pathParts = url.pathname.split('/').filter(Boolean)
      if (pathParts.includes('videos')) {
        const videoIdIndex = pathParts.indexOf('videos') + 1
        return pathParts[videoIdIndex] || ''
      }
      return ''
    } catch (e) {
      return ''
    }
  }
  
  const videoId = getVideoId()
  
  // Create direct iframe embed URL
  const getEmbedUrl = () => {
    return `https://www.facebook.com/plugins/video.php?height=314&href=${encodeURIComponent(videoUrl)}&show_text=${showText ? 'true' : 'false'}&width=560&t=0&autoplay=${autoplay ? '1' : '0'}`
  }
  
  // Check if iframe is blocked
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    const checkIframeLoaded = () => {
      // If iframe didn't load within timeout, consider it blocked
      if (!iframeLoaded && iframeRef.current) {
        setIsBlocked(true)
      }
    }
    
    if (manuallyLoaded || (!lazy && isLoaded)) {
      // Set a timeout to check if iframe loads
      timeoutId = setTimeout(checkIframeLoaded, 3000)
    }
    
    return () => {
      clearTimeout(timeoutId)
    }
  }, [isLoaded, lazy, manuallyLoaded, iframeLoaded])
  
  // Handle iframe load success
  const handleIframeLoad = () => {
    setIframeLoaded(true)
    if (onLoad) onLoad()
  }
  
  // Reparse when SDK is loaded or video changes
  useEffect(() => {
    if (isLoaded && containerRef.current && (manuallyLoaded || !lazy)) {
      setTimeout(() => {
        reparse(containerRef.current)
      }, 100)
    }
  }, [isLoaded, videoUrl, reparse, lazy, manuallyLoaded])
  
  // Determine aspect ratio padding
  const getAspectPadding = () => {
    switch (aspect) {
      case "vertical": return "pb-[177.78%]" // 9:16
      case "square": return "pb-[100%]" // 1:1
      case "horizontal":
      default: return "pb-[56.25%]" // 16:9
    }
  }
  
  // Handle manual load
  const handleManualLoad = () => {
    setManuallyLoaded(true)
  }
  
  // Render direct iframe
  const renderIframe = () => (
    <iframe
      ref={iframeRef}
      src={getEmbedUrl()}
      width={width}
      height={height || "auto"}
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen={allowFullscreen}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      onLoad={handleIframeLoad}
      title={title || "Facebook video"}
    />
  )
  
  // Handle blocked iframe rendering
  const renderBlockedState = () => (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 rounded-lg p-6 text-center">
      <div className="mb-4 text-gray-500">
        <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold mb-2">Video Loading Blocked</h3>
      <p className="text-gray-600 mb-4">
        Your browser's tracking prevention has blocked this Facebook video from loading.
      </p>
      {title && <p className="font-medium mb-1">{title}</p>}
      {description && <p className="text-sm text-gray-500 mb-4">{description}</p>}
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          onClick={handleManualLoad}
          className="flex items-center gap-2"
          variant="default"
        >
          <Play size={16} />
          Load Video
        </Button>
        
        <Button
          variant="outline"
          asChild
        >
          <a 
            href={videoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <ExternalLink size={16} />
            Watch on Facebook
          </a>
        </Button>
      </div>
    </div>
  )
  
  // Initial unloaded lazy state
  const renderLazyState = () => (
    <div 
      className="flex flex-col items-center justify-center h-full bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg p-6 cursor-pointer"
      onClick={handleManualLoad}
    >
      <div className="rounded-full bg-blue-500 p-4 mb-4">
        <Play className="h-8 w-8 text-white" />
      </div>
      {title && <p className="font-medium text-center">{title}</p>}
      <p className="text-sm text-blue-600 mt-2">Click to load video</p>
    </div>
  )
  
  return (
    <div 
      ref={containerRef} 
      className="w-full"
      data-testid="facebook-video-embed"
    >
      <div className={`relative w-full ${getAspectPadding()} overflow-hidden rounded-lg`}>
        <div className="absolute inset-0">
          {isBlocked ? (
            renderBlockedState()
          ) : lazy && !manuallyLoaded ? (
            renderLazyState()
          ) : (
            renderIframe()
          )}
        </div>
      </div>
      
      {videoInfo && title && !isBlocked && (manuallyLoaded || !lazy) && (
        <div className="mt-2">
          {title && <p className="font-medium">{title}</p>}
          {description && <p className="text-sm text-gray-500">{description}</p>}
          {postDate && <p className="text-xs text-gray-400 mt-1">{postDate}</p>}
        </div>
      )}
    </div>
  )
}


