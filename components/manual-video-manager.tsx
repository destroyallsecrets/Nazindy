"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Plus, Trash2 } from "lucide-react"
import { VideoItem } from "./video-player"
import { VideoCategory } from "./facebook-video-layout"
import { VideoMetadata } from "@/app/api/facebook-videos/route"

interface ManualVideoManagerProps {
  categories: VideoCategory[]
  onSave: (categories: VideoCategory[]) => void
}

export default function ManualVideoManager({ categories, onSave }: ManualVideoManagerProps) {
  const [newVideoUrl, setNewVideoUrl] = useState("")
  const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0]?.id || "")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [editedCategories, setEditedCategories] = useState(categories)

  // Fetch metadata for a Facebook video URL
  const fetchVideoMetadata = async (url: string): Promise<VideoMetadata | null> => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch("/api/facebook-videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url })
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to fetch video metadata")
      }
      
      const data = await response.json()
      return data.video
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      return null
    } finally {
      setLoading(false)
    }
  }
  
  // Add a new video to a category
  const handleAddVideo = async () => {
    if (!newVideoUrl.trim()) {
      setError("Please enter a Facebook video URL")
      return
    }
    
    if (!selectedCategoryId) {
      setError("Please select a category")
      return
    }
    
    const metadata = await fetchVideoMetadata(newVideoUrl)
    
    if (!metadata) return // Error is already set
    
    // Convert metadata to VideoItem
    const newVideo: VideoItem = {
      id: `manual-${Date.now()}`,
      title: metadata.title,
      date: metadata.date,
      url: metadata.url,
      description: metadata.description,
      thumbnail: metadata.thumbnail || "https://placehold.co/320x180/gray/white?text=Facebook+Video"
    }
    
    // Add to the selected category
    const updatedCategories = editedCategories.map(category => {
      if (category.id === selectedCategoryId) {
        return {
          ...category,
          videos: [newVideo, ...category.videos]
        }
      }
      return category
    })
    
    setEditedCategories(updatedCategories)
    setNewVideoUrl("")
  }
  
  // Remove a video from a category
  const handleRemoveVideo = (categoryId: string, videoId: string) => {
    const updatedCategories = editedCategories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          videos: category.videos.filter(video => video.id !== videoId)
        }
      }
      return category
    })
    
    setEditedCategories(updatedCategories)
  }
  
  // Save changes
  const handleSave = () => {
    onSave(editedCategories)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Manage Facebook Videos</h2>
      
      {/* Add new video form */}
      <div className="mb-8 space-y-4">
        <h3 className="text-lg font-semibold">Add New Video</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Input
              placeholder="Enter Facebook video URL"
              value={newVideoUrl}
              onChange={(e) => setNewVideoUrl(e.target.value)}
            />
          </div>
          
          <select 
            className="p-2 border rounded-md"
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
          >
            {editedCategories.map(category => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        
        {error && <p className="text-red-500 text-sm">{error}</p>}
        
        <Button 
          onClick={handleAddVideo} 
          disabled={loading || !newVideoUrl.trim() || !selectedCategoryId}
          className="flex items-center gap-2"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
          Add Video
        </Button>
      </div>
      
      {/* Current videos by category */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Current Videos</h3>
        
        {editedCategories.map(category => (
          <div key={category.id} className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">{category.title} ({category.videos.length})</h4>
            
            <div className="space-y-2">
              {category.videos.map(video => (
                <div key={video.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center gap-2">
                    {video.thumbnail && (
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-10 h-10 object-cover rounded"
                      />
                    )}
                    <div className="truncate max-w-[300px]">
                      <p className="font-medium truncate">{video.title}</p>
                      <p className="text-xs text-gray-500">{video.date}</p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleRemoveVideo(category.id, video.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
              
              {category.videos.length === 0 && (
                <p className="text-gray-500 text-sm italic">No videos in this category</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  )
} 