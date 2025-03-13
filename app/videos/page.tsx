"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Search, Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import FacebookVideoEmbed from "@/components/facebook-video-embed"
import Script from "next/script"

// Define video categories and their videos
const videoCategories = [
  {
    id: "sermons",
    title: "Sunday Sermons",
    description: "Weekly sermons from our Sunday worship services",
    videos: [
      {
        id: "sermon1",
        title: "The Power of Faith",
        date: "April 7, 2024",
        url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/658991209844719",
      },
      {
        id: "sermon2",
        title: "Walking in God's Purpose",
        date: "March 31, 2024",
        url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/0987654321",
      },
      {
        id: "sermon3",
        title: "The Grace of God",
        date: "March 24, 2024",
        url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/1122334455",
      },
    ],
  },
  {
    id: "bible-study",
    title: "Bible Study",
    description: "Midweek Bible study sessions",
    videos: [
      {
        id: "biblestudy1",
        title: "Book of Romans - Part 3",
        date: "April 3, 2024",
        url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/5566778899",
      },
      {
        id: "biblestudy2",
        title: "Book of Romans - Part 2",
        date: "March 27, 2024",
        url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/9988776655",
      },
    ],
  },
  {
    id: "special-events",
    title: "Special Events",
    description: "Special services and church events",
    videos: [
      {
        id: "event1",
        title: "Easter Sunday Service",
        date: "March 31, 2024",
        url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/1357924680",
      },
      {
        id: "event2",
        title: "Church Anniversary Celebration",
        date: "February 15, 2024",
        url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/658991209844719",
      },
    ],
  },
  {
    id: "music",
    title: "Music & Worship",
    description: "Praise and worship performances",
    videos: [
      {
        id: "music1",
        title: "Choir Performance - Amazing Grace",
        date: "March 17, 2024",
        url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/1472583690",
      },
    ],
  },
]

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredCategories, setFilteredCategories] = useState(videoCategories)
  const [fbSDKLoaded, setFbSDKLoaded] = useState(false)

  // Initialize Facebook SDK
  const initFacebookSDK = useCallback(() => {
    if (typeof window !== 'undefined' && window.FB) {
      (window.FB as any).XFBML.parse();
      setFbSDKLoaded(true);
      
      // Dispatch a custom event to notify components the SDK is loaded
      const event = new Event('fb-sdk-loaded');
      document.dispatchEvent(event);
    }
  }, []);

  // Re-parse Facebook embeds when accordion items are opened
  const handleAccordionValueChange = useCallback((value: string) => {
    if (typeof window !== 'undefined' && window.FB && fbSDKLoaded) {
      // Small delay to ensure DOM is updated after accordion expand
      setTimeout(() => {
        (window.FB as any).XFBML.parse();
      }, 100);
    }
  }, [fbSDKLoaded]);

  // Re-parse Facebook embeds when filtered content changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.FB && fbSDKLoaded) {
      // Small delay to ensure DOM is updated
      const timer = setTimeout(() => {
        (window.FB as any).XFBML.parse();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [filteredCategories, fbSDKLoaded]);

  // Filter videos based on search term and selected category
  useEffect(() => {
    if (!searchTerm && !selectedCategory) {
      setFilteredCategories(videoCategories)
      return
    }

    const filtered = videoCategories
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
      .filter(Boolean) as typeof videoCategories

    setFilteredCategories(filtered)
  }, [searchTerm, selectedCategory])

  return (
    <main className="min-h-screen">
      {/* Facebook SDK Script - using id for better handling */}
      <div id="fb-root"></div>
      <Script
        id="facebook-jssdk"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0"
        strategy="lazyOnload"
        onLoad={initFacebookSDK}
        crossOrigin="anonymous"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Videos Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Library</h1>
            <p className="text-xl text-gray-200 mb-6">
              Watch sermons, Bible studies, and special events from Nazarene Missionary Baptist Church.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search videos by title..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  {selectedCategory ? videoCategories.find((c) => c.id === selectedCategory)?.title : "All Categories"}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedCategory(null)}>All Categories</DropdownMenuItem>
                {videoCategories.map((category) => (
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
                          <div className="fb-video" data-href={video.url} data-width="100%" data-show-text="false">
                            <blockquote cite={video.url} className="fb-xfbml-parse-ignore">
                              <a href={video.url}>{video.title}</a>
                              <p>{`${category.title} - ${video.date}`}</p>
                              Posted by <a href="https://www.facebook.com/NazareneMissionaryBaptistChurch">Nazarene MBC INDY</a> on {video.date}
                            </blockquote>
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

      {/* Facebook Page Link */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">View More Videos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Visit our Facebook page to see our complete video library and latest uploads.
          </p>
          <Button asChild>
            <a
              href="https://www.facebook.com/NazareneMissionaryBaptistChurch/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              View All Videos on Facebook
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}

