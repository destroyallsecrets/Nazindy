"use client"

import { useEffect, useRef } from "react"

interface FacebookEmbedProps {
  url: string
  width?: number
  height?: number
  tabs?: string
  hideCover?: boolean
  showFacepile?: boolean
  smallHeader?: boolean
  adaptContainerWidth?: boolean
  lazy?: boolean
  className?: string
}

declare global {
  interface Window {
    FB: any
    fbAsyncInit: () => void
  }
}

export default function FacebookEmbed({
  url = "https://www.facebook.com/NazareneMissionaryBaptistChurch",
  width = 340,
  height = 500,
  tabs = "timeline",
  hideCover = false,
  showFacepile = true,
  smallHeader = false,
  adaptContainerWidth = true,
  lazy = true,
  className = "",
}: FacebookEmbedProps) {
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
    <div ref={containerRef} className={`fb-embed-container overflow-hidden rounded-lg shadow-md ${className}`}>
      <div
        className="fb-page"
        data-href={url}
        data-width={width}
        data-height={height}
        data-tabs={tabs}
        data-hide-cover={hideCover}
        data-show-facepile={showFacepile}
        data-small-header={smallHeader}
        data-adapt-container-width={adaptContainerWidth}
        data-lazy={lazy}
      >
        <blockquote cite={url} className="fb-xfbml-parse-ignore">
          <a href={url}>Loading Facebook Page...</a>
        </blockquote>
      </div>
    </div>
  )
}

