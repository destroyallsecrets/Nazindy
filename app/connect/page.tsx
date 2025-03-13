import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import FacebookFeed from "@/components/facebook/facebook-feed"

export default function ConnectPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Connect Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect With Us</h1>
            <p className="text-xl text-gray-200 mb-6">
              Stay updated with our latest news, events, and announcements through our social media channels.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Follow Us Online</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with Nazarene Missionary Baptist Church on social media to stay informed about upcoming events,
                watch sermons, and join our online community.
              </p>

              <div className="space-y-6">
                <a
                  href="https://www.facebook.com/NazareneMissionaryBaptistChurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Facebook className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-bold">Facebook</h3>
                    <p className="text-sm text-muted-foreground">Follow us for daily inspiration and updates</p>
                  </div>
                </a>

                <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Youtube className="h-8 w-8 text-red-600 mr-4" />
                  <div>
                    <h3 className="font-bold">YouTube</h3>
                    <p className="text-sm text-muted-foreground">Watch our sermons and special events</p>
                  </div>
                </a>

                <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <Instagram className="h-8 w-8 text-pink-600 mr-4" />
                  <div>
                    <h3 className="font-bold">Instagram</h3>
                    <p className="text-sm text-muted-foreground">See photos from our church community</p>
                  </div>
                </a>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Church Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong>Address:</strong> 3505 E. 38th Street, Indianapolis, IN, United States
                  </p>
                  <p>
                    <strong>Phone:</strong> (317) 547-1404
                  </p>
                  <p>
                    <strong>Email:</strong> NazareneChurch3505@gmail.com
                  </p>
                  <p>
                    <strong>Sunday Service:</strong> 11:00 AM
                  </p>
                  <p>
                    <strong>Sunday School:</strong> 10:00 AM
                  </p>
                  <p>
                    <strong>Wednesday Bible Study:</strong> 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <FacebookFeed />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to our church family. Come worship with us this Sunday!
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

