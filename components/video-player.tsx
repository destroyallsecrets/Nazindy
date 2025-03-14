"use client"

import React, { useState, useRef, useEffect } from "react"
import { ChevronRight, ChevronLeft, Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"
import { useFacebookSDK } from "./facebook-sdk-provider"
import FacebookVideoEmbed from "./facebook-video-embed"

export type VideoItem = {
  id: string
  title: string
  date: string
  url: string
  thumbnail?: string
  description?: string
}

interface VideoPlayerProps {
  videos: VideoItem[]
  initialVideoIndex?: number
  autoplay?: boolean
  showRelated?: boolean
  onSelectVideo?: (video: VideoItem) => void
}

export default function VideoPlayer({
  videos,
  initialVideoIndex = 0,
  autoplay = false,
  showRelated = true,
  onSelectVideo
}: VideoPlayerProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(initialVideoIndex)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const [isMuted, setIsMuted] = useState(false)
  const playerRef = useRef<HTMLDivElement>(null)
  const { isLoaded, reparse } = useFacebookSDK()

  const currentVideo = videos[currentVideoIndex]
  
  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!playerRef.current) return
    
    if (typeof document !== "undefined" && !document.fullscreenElement) {
      playerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true)
      }).catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else if (typeof document !== "undefined") {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false)
      })
    }
  }
  
  // Play next video in playlist
  const playNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1)
    }
  }
  
  // Play previous video in playlist
  const playPreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1)
    }
  }
  
  // Handle video selection
  const handleVideoSelect = (index: number) => {
    setCurrentVideoIndex(index)
    if (onSelectVideo) {
      onSelectVideo(videos[index])
    }
  }

  // Reparse when video changes
  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        reparse(playerRef.current)
      }, 100)
    }
  }, [currentVideoIndex, isLoaded, reparse])

  // Set up fullscreen change detection
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    
    if (typeof document !== "undefined") {
      document.addEventListener('fullscreenchange', handleFullscreenChange)
      return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange)
      }
    }
  }, [])

  const renderVideo = (video: VideoItem) => {
    if (video.url.includes("facebook.com")) {
      return (
        <div key={video.id} className="video-embed">
          <div
            className="fb-video"
            data-href={video.url}
            data-width="auto"
            data-show-text="false"
          ></div>
        </div>
      )
    } else if (video.url.includes("youtube.com") || video.url.includes("youtu.be")) {
      const videoId = video.url.split("v=")[1]?.split("&")[0] || video.url.split("/").pop()
      return (
        <div key={video.id} className="video-embed">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )
    } else {
      return (
        <div key={video.id} className="video-embed">
          <iframe
            src={video.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )
    }
  }

  return (
    <div>
      <div className="video-player-container">
        <div 
          ref={playerRef}
          className={`video-player-main relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}
        >
          {/* Main Video */}
          <div className="aspect-video w-full bg-black relative rounded-lg overflow-hidden">
            {renderVideo(currentVideo)}
            
            {/* Video Controls Overlay - Added for visual design, functionality happens through FB embed */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)} 
                    className="p-2 rounded-full bg-black/30 hover:bg-black/50"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/30 hover:bg-black/50"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={toggleFullscreen}
                    className="p-2 rounded-full bg-black/30 hover:bg-black/50"
                  >
                    {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Info */}
          <div className="mt-4 mb-6">
            <h2 className="text-2xl font-bold">{currentVideo.title}</h2>
            <p className="text-muted-foreground">{currentVideo.date}</p>
            {currentVideo.description && (
              <p className="mt-2 text-gray-700">{currentVideo.description}</p>
            )}
          </div>
          
          {/* Video Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={playPreviousVideo}
              disabled={currentVideoIndex === 0}
              className="flex items-center px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="mr-1" size={16} />
              Previous
            </button>
            <button 
              onClick={playNextVideo}
              disabled={currentVideoIndex === videos.length - 1}
              className="flex items-center px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="ml-1" size={16} />
            </button>
          </div>
        </div>
        
        {/* Related Videos */}
        {showRelated && (
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">More Videos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {videos.map((video, index) => (
                <button 
                  key={video.id}
                  onClick={() => handleVideoSelect(index)}
                  className={`cursor-pointer rounded-lg overflow-hidden ${index === currentVideoIndex ? 'ring-2 ring-blue-500' : ''}`}
                >
                  <div className="aspect-video bg-gray-200 relative">
                    {video.thumbnail ? (
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <Play size={24} className="text-gray-500" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      {index !== currentVideoIndex && <Play size={24} className="text-white" />}
                    </div>
                  </div>
                  <div className="p-2">
                    <p className="font-medium line-clamp-1">{video.title}</p>
                    <p className="text-sm text-gray-500">{video.date}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}