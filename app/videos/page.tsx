"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import FacebookSDKProvider from "@/components/facebook-sdk-provider"
import VideoPlayer, { VideoItem } from "@/components/video-player"
import FacebookVideoLayout, { VideoCategory } from "@/components/facebook-video-layout"
import axios from "axios"
import * as cheerio from "cheerio"

// Video categories we want to detect and organize
const categoryKeywords = {
  "sermons": ["sermon", "worship", "sunday", "service", "message", "preach"],
  "bible-study": ["bible", "study", "scripture", "teaching", "word", "peter", "romans", "gospel"],
  "special-events": ["event", "special", "celebration", "anniversary", "holiday", "easter", "christmas"],
  "music": ["music", "choir", "song", "worship", "praise", "hymn", "sing"]
};

// Function to determine video category based on title and description
function determineCategory(title: string, description: string): string {
  title = title.toLowerCase();
  description = description.toLowerCase();
  
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => title.includes(keyword) || description.includes(keyword))) {
      return category;
    }
  }
  
  return "other"; // Default category
}

// Function to fetch videos using web scraping
async function fetchFacebookVideos(): Promise<VideoCategory[]> {
  try {
    // Define categories structure
    const categorizedVideos: Record<string, VideoItem[]> = {
      "sermons": [],
      "bible-study": [],
      "special-events": [],
      "music": [],
      "other": []
    };
    
    const response = await axios.get("https://www.facebook.com/NazareneMissionaryBaptistChurch/videos", {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    const $ = cheerio.load(response.data);
    
    // Look for video elements - Facebook's structure may change over time
    $("div[data-pagelet='Video'], div[role='article']").each((index: number, element: any) => {
      // Extract video information - selectors may need adjustment based on Facebook's structure
      const title = $(element).find("h2, span.a8c37x1j").text().trim() || "Untitled Video";
      const url = $(element).find("a[href*='/videos/']").attr("href") || "";
      const date = $(element).find("span.a8c37x1j").first().text().trim() || new Date().toLocaleDateString();
      const description = $(element).find("div[data-ad-comet-preview='message'], span.d2edcug0").text().trim() || "";
      
      // Find thumbnail
      const thumbnail = $(element).find("img").attr("src") || "";
      
      // Skip if we couldn't find a URL
      if (!url) return;
      
      // Determine category
      const category = determineCategory(title, description);
      
      // Create video item
      const videoItem: VideoItem = {
        id: `video${index}`,
        title,
        date,
        url: url.startsWith("http") ? url : `https://www.facebook.com${url}`,
        description,
        thumbnail
      };
      
      // Add to appropriate category
      categorizedVideos[category].push(videoItem);
    });
    
    // Convert to VideoCategory format
    const result: VideoCategory[] = [];
    
    // Define category metadata
    const categoryMeta = {
      "sermons": {
        title: "Sunday Sermons",
        description: "Weekly sermons from our Sunday worship services"
      },
      "bible-study": {
        title: "Bible Study",
        description: "Midweek Bible study sessions"
      },
      "special-events": {
        title: "Special Events",
        description: "Special services and church events"
      },
      "music": {
        title: "Music & Worship",
        description: "Praise and worship performances"
      },
      "other": {
        title: "Other Videos",
        description: "Additional church videos"
      }
    };
    
    // Add categories with videos to result
    for (const [categoryId, videos] of Object.entries(categorizedVideos)) {
      if (videos.length > 0) {
        result.push({
          id: categoryId,
          title: categoryMeta[categoryId as keyof typeof categoryMeta].title,
          description: categoryMeta[categoryId as keyof typeof categoryMeta].description,
          videos
        });
      }
    }
    
    // If no videos were found, add fallback data
    if (result.length === 0) {
      // Add at least one category with placeholder videos
      result.push({
        id: "facebook-videos",
        title: "Facebook Videos",
        description: "Nazarene Missionary Baptist Church Videos",
        videos: [
          {
            id: "fallback1",
            title: "Visit our Facebook page for videos",
            date: new Date().toLocaleDateString(),
            url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos",
            description: "We couldn't load videos automatically. Please visit our Facebook page to view our latest videos."
          }
        ]
      });
    }
    
    return result;
  } catch (error) {
    console.error("Error fetching Facebook videos:", error);
    
    // Return fallback data in case of error
    return [{
      id: "error",
      title: "Videos Unavailable",
      description: "Unable to fetch videos at the moment",
      videos: [
        {
          id: "error1",
          title: "Visit our Facebook page",
          date: new Date().toLocaleDateString(),
          url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos",
          description: "We couldn't load videos automatically. Please visit our Facebook page to view our latest videos."
        }
      ]
    }];
  }
}

// Demo videos for initial render - these will be replaced once live data loads
const demoVideoCategories: VideoCategory[] = [
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
        thumbnail: "https://placehold.co/320x180/darkblue/white?text=Sermon"
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
        thumbnail: "https://placehold.co/320x180/darkgreen/white?text=Bible+Study"
      },
      {
        id: "biblestudy3",
        title: "Bible Study - 2 Peter 1:1-4",
        date: "April 10, 2024",
        url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/658991209844719",
        description: "A study on 2 Peter 1:1-4",
        thumbnail: "https://placehold.co/320x180/darkgreen/white?text=2+Peter+Study"
      },
    ],
  },
];

export default function VideosPage() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [videoCategories, setVideoCategories] = useState<VideoCategory[]>(demoVideoCategories)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadVideos = async () => {
      try {
        setIsLoading(true);
        const fetchedCategories = await fetchFacebookVideos();
        setVideoCategories(fetchedCategories);
        setError(null);
      } catch (err) {
        console.error("Failed to load videos:", err);
        setError("Failed to load videos. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadVideos();
  }, []);
  
  // Get the selected category or all videos if no category selected
  const selectedCategory = selectedCategoryId 
    ? videoCategories.find(cat => cat.id === selectedCategoryId) 
    : null
  
  // Filtered videos based on selected category and search term
  const filteredVideos = useMemo(() => {
    // First, get videos from the selected category or all categories
    let videos: VideoItem[] = [];
    
    if (selectedCategory) {
      // If a category is selected, get videos from only that category
      videos = [...selectedCategory.videos];
    } else {
      // Otherwise, get videos from all categories
      videos = videoCategories.flatMap(category => category.videos);
    }
    
    // Then, filter by search term if provided
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      videos = videos.filter(video => 
        video.title.toLowerCase().includes(term) || 
        (video.description && video.description.toLowerCase().includes(term))
      );
    }
    
    return videos;
  }, [selectedCategory, searchTerm, videoCategories]);

  return (
    <main className="min-h-screen">
      <FacebookSDKProvider version="v22.0" language="en_US">
        <div className="bg-gray-50">
          <div className="container mx-auto py-6 px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">Video Library</h1>
            <p className="text-gray-600 mb-6">
              Watch sermons, Bible studies, and special events from Nazarene Missionary Baptist Church
            </p>
            
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <h3 className="text-xl font-medium mb-2 text-red-600">{error}</h3>
                <p className="text-gray-600 mb-6">We're showing some demo videos instead.</p>
              </div>
            ) : (
              <FacebookVideoLayout 
                categories={videoCategories}
                selectedCategoryId={selectedCategoryId}
                onCategorySelect={setSelectedCategoryId}
                onSearch={setSearchTerm}
              >
                {filteredVideos.length > 0 ? (
                  <div className="space-y-8">
                    <VideoPlayer 
                      videos={filteredVideos}
                      showRelated={true}
                    />
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg shadow">
                    <h3 className="text-xl font-medium mb-2">No videos found</h3>
                    <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria.</p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm("")
                        setSelectedCategoryId(null)
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
                
                {/* Facebook Page Link */}
                <div className="mt-12 text-center py-8 bg-white rounded-lg shadow">
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
              </FacebookVideoLayout>
            )}
          </div>
        </div>
      </FacebookSDKProvider>
    </main>
  )
}

