"use client"

import { useEffect, useRef } from "react"

interface FacebookVideoEmbedProps {
  videoUrl: string
  width?: number | string
  height?: number | string
  showText?: boolean
  className?: string
}

export default function FacebookVideoEmbed({
  videoUrl,
  width = "100%",
  height = 400,
  showText = true,
  className = "",
}: FacebookVideoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      const script = document.createElement("script")
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"
      script.async = true
      script.defer = true
      script.crossOrigin = "anonymous"
      document.body.appendChild(script)

      // Initialize FB SDK
      window.fbAsyncInit = () => {
        window.FB?.init({
          xfbml: true,
          version: "v18.0",
        })
      }
    }

    // Check if FB SDK is already loaded
    if (!window.FB) {
      loadFacebookSDK()
    } else {
      // If already loaded, parse XFBML
      window.FB.XFBML.parse(containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className={`fb-video-container overflow-hidden rounded-lg ${className}`}>
      <div
        className="fb-video"
        data-href={videoUrl}
        data-width={width}
        data-height={height}
        data-show-text={showText}
        data-allowfullscreen="true"
      ></div>
    </div>
  )
}

