import Link from "next/link"
import Image from "next/image"
import { Search, Calendar, Clock, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FacebookVideoEmbed from "@/components/facebook-video-embed"
import FacebookEmbed from "@/components/facebook-embed"

export default function SermonsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Video background */}
          <video 
            className="w-full h-full object-cover opacity-30"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/sermon-background.mp4" type="video/mp4" />
            {/* Fallback to church logo if video can't play */}
            <div className="w-full h-full flex items-center justify-center bg-primary/10">
              <Image 
                src="/logo.png" 
                alt="Nazarene Missionary Baptist Church Logo" 
                width={400} 
                height={400} 
                className="object-contain max-w-md opacity-30"
              />
            </div>
          </video>
          {/* Additional overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sermon Archive</h1>
            <p className="text-xl text-gray-200 mb-6">
              Listen to past sermons and grow in your understanding of God's Word.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input type="search" placeholder="Search sermons by title, speaker, or topic..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Filter</Button>
              <Button variant="outline">Sort</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Featured Sermon</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
              <Image src="/placeholder.svg?height=720&width=1280" alt="Featured Sermon" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="icon" className="h-16 w-16 rounded-full">
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Walking in Faith During Difficult Times</h3>
              <p className="text-muted-foreground mb-4">
                Pastor James Johnson explores how we can maintain our faith and trust in God even during life's most
                challenging seasons.
              </p>
              <div className="flex items-center text-muted-foreground mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">March 10, 2025</span>
              </div>
              <div className="flex items-center text-muted-foreground mb-4">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">45 minutes</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-xs">Faith</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-xs">Perseverance</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-xs">Trust</span>
              </div>
              <div className="flex gap-3">
                <Button>Watch Now</Button>
                <Button variant="outline">Download</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Recent Sermons</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sermon Card 1 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Sermon Thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">The Power of Prayer</h3>
                <p className="text-muted-foreground mb-4">Pastor James Johnson</p>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">March 3, 2025</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">38 minutes</span>
                </div>
                <Button variant="outline" className="w-full">
                  Listen Now
                </Button>
              </div>
            </div>

            {/* Sermon Card 2 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Sermon Thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Living with Purpose</h3>
                <p className="text-muted-foreground mb-4">Minister Sarah Williams</p>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">February 24, 2025</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">42 minutes</span>
                </div>
                <Button variant="outline" className="w-full">
                  Listen Now
                </Button>
              </div>
            </div>

            {/* Sermon Card 3 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Sermon Thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="icon" variant="secondary" className="h-12 w-12 rounded-full">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">The Grace of God</h3>
                <p className="text-muted-foreground mb-4">Pastor James Johnson</p>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">February 17, 2025</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">40 minutes</span>
                </div>
                <Button variant="outline" className="w-full">
                  Listen Now
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/sermons/archive">View All Sermons</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facebook Integration */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
              <p className="text-muted-foreground mb-6">
                Follow our Facebook page to stay updated with church announcements, events, and inspirational messages.
              </p>
              <Button asChild>
                <a
                  href="https://www.facebook.com/NazareneMissionaryBaptistChurch"
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
                  Follow on Facebook
                </a>
              </Button>
            </div>
            <div className="flex justify-center">
              <FacebookEmbed
                url="https://www.facebook.com/NazareneMissionaryBaptistChurch"
                width={340}
                height={500}
                smallHeader={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Series */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Sermon Series</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Series Card 1 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Series Thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Faith That Works</h3>
                <p className="text-muted-foreground mb-4">A 6-part series on the Book of James</p>
                <Button variant="outline" className="w-full">
                  View Series
                </Button>
              </div>
            </div>

            {/* Series Card 2 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Series Thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Transformed</h3>
                <p className="text-muted-foreground mb-4">A 5-part series on spiritual growth</p>
                <Button variant="outline" className="w-full">
                  View Series
                </Button>
              </div>
            </div>

            {/* Series Card 3 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Series Thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Family Matters</h3>
                <p className="text-muted-foreground mb-4">A 4-part series on Christian family life</p>
                <Button variant="outline" className="w-full">
                  View Series
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

