export interface VideoItem {
  id: string
  title: string
  date: string
  url: string
  embedUrl: string
  description?: string
  thumbnail?: string
}

export interface VideoCategory {
  id: string
  title: string
  description: string
  videos: VideoItem[]
}
