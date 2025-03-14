"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import FacebookSDKProvider from "@/components/facebook-sdk-provider"
import VideoPlayer, { VideoItem } from "@/components/video-player"
import FacebookVideoLayout, { VideoCategory } from "@/components/facebook-video-layout"
import axios from "axios"
import * as cheerio from "cheerio"

// Predefined categories with videos
const predefinedCategories: VideoCategory[] = [
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
        description: "A powerful message on the importance of faith in our daily lives",
        thumbnail: "https://placehold.co/320x180/darkblue/white?text=Sermon"
      },
      {
        id: "sermon2",
        title: "Walking in God's Purpose",
        date: "March 31, 2024",
        url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/0987654321",
        description: "Learning how to discover and fulfill God's purpose for your life",
        thumbnail: "https://placehold.co/320x180/darkblue/white?text=Gods+Purpose"
      }
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
        description: "Continuing our study of Romans focusing on righteousness by faith",
        thumbnail: "https://placehold.co/320x180/darkgreen/white?text=Romans+Study"
      },
      {
        id: "biblestudy2",
        title: "Book of Romans - Part 2",
        date: "March 27, 2024",
        url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/9988776655",
        description: "Understanding Paul's message to the Romans",
        thumbnail: "https://placehold.co/320x180/darkgreen/white?text=Romans+Part+2"
      },
      {
        id: "biblestudy3",
        title: "Bible Study - 2 Peter 1:1-4",
        date: "April 10, 2024",
        url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/658991209844719",
        description: "A study on 2 Peter 1:1-4 focusing on God's precious promises",
        thumbnail: "https://placehold.co/320x180/darkgreen/white?text=2+Peter+Study"
      }
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
        description: "Our church choir performs Amazing Grace",
        thumbnail: "https://placehold.co/320x180/maroon/white?text=Choir"
      },
      {
        id: "music2",
        title: "Praise Team - Worthy Is the Lamb",
        date: "April 7, 2024",
        url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/3344556677",
        description: "Our praise team leads worship with 'Worthy Is the Lamb'",
        thumbnail: "https://placehold.co/320x180/maroon/white?text=Praise+Team"
      }
    ],
  },
];

// Function to fetch videos using web scraping
async function fetchFacebookVideos(): Promise<VideoCategory[]> {
  try {
    const response = await axios.get("https://www.facebook.com/NazareneMissionaryBaptistChurch/videos");
    const $ = cheerio.load(response.data);
    
    const videos: VideoItem[] = [];
    
    $("div[data-pagelet='Video']").each((index: number, element: any) => {
      const title = $(element).find("h2").text();
      const url = $(element).find("a").attr("href");
      const date = $(element).find("span").text();
      const description = $(element).find("p").text();
      const thumbnail = $(element).find("img").attr("src"); // Get thumbnail URL
      
      videos.push({
        id: `video${index}`,
        title,
        date,
        url: url ? `https://www.facebook.com${url}` : "",
        description,
        thumbnail,
      });
    });
    
    // If we got videos from Facebook, add them to a special category
    if (videos.length > 0) {
      const scrapedCategory: VideoCategory = {
        id: "facebook-videos",
        title: "Recent Videos",
        description: "Recently posted videos from our Facebook page",
        videos,
      };
      
      // Return both predefined and scraped categories
      return [...predefinedCategories, scrapedCategory];
    }
    
    // If no videos were scraped, just return the predefined categories
    return predefinedCategories;
  } catch (error) {
    console.error("Error fetching Facebook videos:", error);
    // On error, just return the predefined categories
    return predefinedCategories;
  }
}

export default function VideosPage() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [videoCategories, setVideoCategories] = useState<VideoCategory[]>(predefinedCategories)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadVideos = async () => {
      try {
        setIsLoading(true);
        const fetchedCategories = await fetchFacebookVideos();
        setVideoCategories(fetchedCategories);
      } catch (err) {
        console.error("Failed to load videos:", err);
        // If there's an error, we still have the predefined categories
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
  }, [selectedCategory, searchTerm]);

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

