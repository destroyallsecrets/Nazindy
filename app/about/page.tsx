import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FacebookFeed from "@/components/facebook-feed"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=800&width=1600" alt="About Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Church</h1>
            <p className="text-xl text-gray-200 mb-6">
              Learn about our history, mission, and vision for the community.
            </p>
          </div>
        </div>
      </section>

      {/* Church Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  We are a stone church with a foundation that is built on Jesus Christ and that rock will never roll.
                </p>
                <p>
                  Nazarene Missionary Baptist Church has been serving the Indianapolis community for generations,
                  providing spiritual guidance, community support, and a place of worship for all who seek it.
                </p>
                <p>
                  Our church is committed to spreading the Gospel of Jesus Christ, supporting our community through
                  outreach programs, and creating a welcoming environment where everyone can grow in their faith.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Visit Us This Sunday</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://sjc.microlink.io/VKQCBvmVSPLWQrxef2r9T8ZncdE5W8-wN8YXBfE0-s-7v1J8J8AOWufJu7E2g4TnUua9LXPlSPSzCVlMbN-V6Q.jpeg"
                alt="Nazarene Missionary Baptist Church"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Church Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Church Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    3505 E. 38th Street
                    <br />
                    Indianapolis, IN, United States
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    Phone: (317) 547-1404
                    <br />
                    Email: NazareneChurch3505@gmail.com
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Service Times</h3>
                  <p className="text-muted-foreground">
                    Sunday School: 10:00 AM
                    <br />
                    Sunday Worship: 11:00 AM
                    <br />
                    Wednesday Bible Study: 7:00 PM
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.2851254366473!2d-86.1088899!3d39.8254444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4c3f8c78c0c9%3A0x2a7fc7ca8884687a!2s3505%20E%2038th%20St%2C%20Indianapolis%2C%20IN%2046218!5e0!3m2!1sen!2sus!4v1710343200000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Follow our Facebook page to stay updated with church announcements, events, and inspirational messages.
              </p>
              <div className="flex justify-center">
                <FacebookFeed />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pastor Card */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=200&width=200" alt="Pastor" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Pastor Name</h3>
              <p className="text-primary">Senior Pastor</p>
              <p className="text-muted-foreground mt-2 max-w-xs">
                Leading our congregation with wisdom and compassion since [year].
              </p>
            </div>

            {/* Other leadership cards would go here */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us This Sunday</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to our church family. Come worship with us!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Plan Your Visit</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

