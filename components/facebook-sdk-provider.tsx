"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import Script from "next/script"

// Create context for Facebook SDK
type FacebookSDKContextType = {
  isLoaded: boolean
  reparse: (container?: HTMLElement | null) => void
}

const FacebookSDKContext = createContext<FacebookSDKContextType>({
  isLoaded: false,
  reparse: () => {},
})

// Hook to use Facebook SDK
export const useFacebookSDK = () => useContext(FacebookSDKContext)

interface FacebookSDKProviderProps {
  children: ReactNode
  appId?: string
  version?: string
  autoLogAppEvents?: boolean
  xfbml?: boolean
  language?: string
}

export default function FacebookSDKProvider({
  children,
  appId = "",
  version = "v22.0",
  autoLogAppEvents = true,
  xfbml = true,
  language = "en_US",
}: FacebookSDKProviderProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Function to re-parse XFBML
  const reparse = (container?: HTMLElement | null) => {
    if (typeof window !== "undefined" && window.FB) {
      window.FB.XFBML.parse(container || undefined)
    }
  }

  // Handle SDK load
  const handleSDKLoad = () => {
    if (window.FB) {
      setIsLoaded(true)
      // Dispatch a custom event for any components not using the context
      document.dispatchEvent(new Event("fb-sdk-loaded"))
    }
  }

  // Initialize SDK when script loads
  useEffect(() => {
    // Define async init function
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: appId || undefined,
        autoLogAppEvents,
        xfbml,
        version,
      })
      
      handleSDKLoad()
    }

    // If FB is already defined, just handle the load
    if (window.FB) {
      handleSDKLoad()
    }

    return () => {
      // Cleanup (if needed)
    }
  }, [appId, autoLogAppEvents, xfbml, version])

  return (
    <FacebookSDKContext.Provider value={{ isLoaded, reparse }}>
      <div id="fb-root"></div>
      <Script
        id="facebook-jssdk"
        strategy="lazyOnload"
        src={`https://connect.facebook.net/${language}/sdk.js#xfbml=1&version=${version}${appId ? `&appId=${appId}` : ""}`}
        crossOrigin="anonymous"
      />
      {children}
    </FacebookSDKContext.Provider>
  )
}

// Add global type declaration
declare global {
  interface Window {
    FB: any
    fbAsyncInit: () => void
  }
} 