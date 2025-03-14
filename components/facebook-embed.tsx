"use client"

import { useEffect, useRef } from "react"
import React from "react";

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

const FacebookEmbed = ({ url, width, height, tabs }) => {
  return (
    <iframe
      src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(url)}&tabs=${tabs}&width=${width}&height=${height}`}
      width={width}
      height={height}
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
      frameBorder="0"
      allow="encrypted-media"
    ></iframe>
  );
};

export default FacebookEmbed;

