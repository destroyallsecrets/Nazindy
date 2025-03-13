"use client"

import { useState, useCallback, useEffect } from "react"
import { Search, Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import FacebookVideoEmbed from "@/components/facebook-video-embed"
import { useFacebookSDK } from "./facebook-sdk-provider"

type VideoItem = {
  id: string
  title: string
  date: string
  url: string
  description?: string
}

type VideoCategory = {
  id: string
  title: string
  description: string
  videos: VideoItem[]
}

interface CategorizedVideoGalleryProps {
  categories: VideoCategory[]
  searchPlaceholder?: string
}

export default function CategorizedVideoGallery({ 
  categories, 
  searchPlaceholder = "Search videos by title..." 
}: CategorizedVideoGalleryProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredCategories, setFilteredCategories] = useState(categories)
  const { isLoaded, reparse } = useFacebookSDK()

  // Re-parse Facebook embeds when accordion items are opened
  const handleAccordionValueChange = useCallback((value: string) => {
    if (isLoaded) {
      // Small delay to ensure DOM is updated after accordion expand
      setTimeout(() => {
        reparse()
      }, 100)
    }
  }, [isLoaded, reparse])

  // Filter videos based on search term and selected category
  useEffect(() => {
    if (!searchTerm && !selectedCategory) {
      setFilteredCategories(categories)
      return
    }

    const filtered = categories
      .map((category) => {
        // If a category is selected and doesn't match, return null
        if (selectedCategory && category.id !== selectedCategory) {
          return null
        }

        // Filter videos by search term
        const filteredVideos = category.videos.filter((video) =>
          video.title.toLowerCase().includes(searchTerm.toLowerCase()),
        )

        // If no videos match, don't include the category
        if (filteredVideos.length === 0) {
          return null
        }

        // Return category with filtered videos
        return {
          ...category,
          videos: filteredVideos,
        }
      })
      .filter(Boolean) as VideoCategory[]

    setFilteredCategories(filtered)
  }, [searchTerm, selectedCategory, categories])

  return (
    <div className="video-gallery">
      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder={searchPlaceholder}
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  {selectedCategory ? categories.find((c) => c.id === selectedCategory)?.title : "All Categories"}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedCategory(null)}>All Categories</DropdownMenuItem>
                {categories.map((category) => (
                  <DropdownMenuItem key={category.id} onClick={() => setSelectedCategory(category.id)}>
                    {category.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          {filteredCategories.length > 0 ? (
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-6"
              onValueChange={handleAccordionValueChange}
            >
              {filteredCategories.map((category) => (
                <AccordionItem key={category.id} value={category.id} className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <div className="text-left">
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                      {category.videos.map((video) => (
                        <div key={video.id} className="space-y-4">
                          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                            <FacebookVideoEmbed 
                              videoUrl={video.url}
                              width="100%"
                              showText={false}
                              title={video.title}
                              description={video.description || `${category.title} - ${video.date}`}
                              pageName="Nazarene MBC INDY"
                              pageUrl="https://www.facebook.com/NazareneMissionaryBaptistChurch"
                              postDate={video.date}
                              allowFullscreen={true}
                              aspect="horizontal"
                              lazy={true}
                              onLoad={() => console.log(`Video loaded: ${video.title}`)}
                              onError={(error) => console.error(`Error loading video ${video.title}:`, error)}
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{video.title}</h3>
                            <p className="text-muted-foreground">{video.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No videos found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory(null)
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
} 