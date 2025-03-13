"use client"

import { useState, useEffect } from "react"
import { Play, Calendar, MusicIcon, BookOpen, Star, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { VideoItem } from "./video-player"
import { cn } from "@/lib/utils"

export type VideoCategory = {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
  videos: VideoItem[]
}

interface FacebookVideoLayoutProps {
  categories: VideoCategory[]
  children: React.ReactNode
  onSearch?: (term: string) => void
  onCategorySelect?: (categoryId: string | null) => void
  selectedCategoryId?: string | null
}

export default function FacebookVideoLayout({ 
  categories,
  children,
  onSearch,
  onCategorySelect,
  selectedCategoryId = null
}: FacebookVideoLayoutProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  )
  const [sidebarOpen, setSidebarOpen] = useState(true)
  
  // Default icons for categories
  const getCategoryIcon = (category: VideoCategory) => {
    if (category.icon) return category.icon
    
    switch (category.id) {
      case "sermons":
        return <BookOpen />
      case "bible-study":
        return <BookOpen />
      case "special-events":
        return <Calendar />
      case "music":
        return <MusicIcon />
      default:
        return <Play />
    }
  }
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth < 768) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }
    
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      handleResize() // Initial check
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])
  
  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    if (onSearch) {
      onSearch(e.target.value)
    }
  }
  
  // Handle category selection
  const handleCategorySelect = (categoryId: string | null) => {
    if (onCategorySelect) {
      onCategorySelect(categoryId)
    }
    
    // On mobile, close sidebar after selection
    if (windowWidth < 768) {
      setSidebarOpen(false)
    }
  }
  
  // Calculate total video count
  const totalVideoCount = categories.reduce((count, category) => {
    return count + category.videos.length
  }, 0)
  
  return (
    <div className="fb-video-layout min-h-[calc(100vh-80px)] flex flex-col md:flex-row">
      {/* Sidebar - Category Navigation */}
      <div 
        className={cn(
          "fb-video-sidebar bg-white border-r w-full md:w-72 lg:w-80 transition-all duration-300 flex-shrink-0 overflow-y-auto",
          sidebarOpen ? "block" : "hidden md:block"
        )}
      >
        <div className="p-4 sticky top-0 bg-white z-10 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search videos..."
              className="pl-10"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Video Categories</h2>
          
          <ul className="space-y-1">
            <li>
              <button 
                onClick={() => handleCategorySelect(null)}
                className={cn(
                  "w-full flex items-center p-3 rounded-lg transition-colors",
                  selectedCategoryId === null
                    ? "bg-blue-50 text-blue-700"
                    : "hover:bg-gray-100"
                )}
              >
                <Play className="mr-3" />
                <span className="font-medium">All Videos</span>
                <span className="ml-auto bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs">
                  {totalVideoCount}
                </span>
              </button>
            </li>
            
            {categories.map((category) => (
              <li key={category.id}>
                <button 
                  onClick={() => handleCategorySelect(category.id)}
                  className={cn(
                    "w-full flex items-center p-3 rounded-lg transition-colors",
                    selectedCategoryId === category.id
                      ? "bg-blue-50 text-blue-700"
                      : "hover:bg-gray-100"
                  )}
                >
                  {getCategoryIcon(category)}
                  <span className="ml-3 font-medium">{category.title}</span>
                  <span className="ml-auto bg-gray-200 text-gray-700 rounded-full px-2 py-0.5 text-xs">
                    {category.videos.length}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="fb-video-content flex-grow overflow-y-auto p-4 md:p-6 lg:p-8">
        {/* Toggle sidebar button on mobile */}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden mb-4 px-4 py-2 bg-gray-100 rounded flex items-center"
        >
          {sidebarOpen ? 'Hide Categories' : 'Show Categories'}
        </button>
        
        {/* Content */}
        {children}
      </div>
    </div>
  )
} 