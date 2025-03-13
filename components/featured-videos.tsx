import Link from "next/link"
import { ChevronRight } from "lucide-react"
import FacebookVideoEmbed from "@/components/facebook-video-embed"

// Featured videos from Facebook
const featuredVideos = [
  {
    id: "featured1",
    title: "Sunday Worship Service",
    date: "April 7, 2024",
    url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/1234567890",
  },
  {
    id: "featured2",
    title: "Bible Study - Book of Romans",
    date: "April 3, 2024",
    url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/5566778899",
  },
  {
    id: "featured3",
    title: "Easter Sunday Service",
    date: "March 31, 2024",
    url: "https://www.facebook.com/NazareneMissionaryBaptistChurch/videos/1357924680",
  },
]

export default function FeaturedVideos() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Videos</h2>
          <Link href="/videos" className="text-primary flex items-center hover:underline">
            View All Videos <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredVideos.map((video) => (
            <div key={video.id} className="space-y-4">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <FacebookVideoEmbed videoUrl={video.url} height="100%" showText={false} />
              </div>
              <div>
                <h3 className="text-xl font-bold">{video.title}</h3>
                <p className="text-muted-foreground">{video.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

