import Image from "next/image"
import { Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import FacebookEmbed from "@/components/facebook-embed"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Gallery Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-xl text-gray-200 mb-6">
              Browse photos from our services, events, and community activities.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Photos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Photos from our recent church events and activities.
            </p>
          </div>

          {/* Facebook Photos Integration */}
          <div className="flex justify-center">
            <FacebookEmbed
              url="https://www.facebook.com/NazareneMissionaryBaptistChurch"
              width={800}
              height={800}
              tabs="timeline"
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <a
                href="https://www.facebook.com/NazareneMissionaryBaptistChurch/photos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Facebook className="mr-2 h-5 w-5" />
                View More on Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

