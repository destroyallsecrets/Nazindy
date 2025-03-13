import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Music, Book, Mic, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Services Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Worship Services</h1>
            <p className="text-xl text-gray-200 mb-6">COME WORSHIP WITH US!</p>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Times</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for worship, prayer, and the teaching of God's Word.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sunday School */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Book className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sunday School</h3>
              <div className="flex items-center justify-center text-muted-foreground mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Every Sunday</span>
              </div>
              <div className="flex items-center justify-center text-muted-foreground mb-4">
                <Clock className="h-4 w-4 mr-2" />
                <span>10:00 AM</span>
              </div>
              <p className="text-muted-foreground">
                Bible study classes for all ages to deepen your understanding of God's Word.
              </p>
            </div>

            {/* Sunday Worship */}
            <div className="bg-primary/5 p-8 rounded-lg text-center border-2 border-primary/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 text-primary rounded-full mb-4">
                <Music className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sunday Worship</h3>
              <div className="flex items-center justify-center text-muted-foreground mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Every Sunday</span>
              </div>
              <div className="flex items-center justify-center text-muted-foreground mb-4">
                <Clock className="h-4 w-4 mr-2" />
                <span>11:00 AM</span>
              </div>
              <p className="text-muted-foreground">
                Our main worship service featuring praise, prayer, and preaching from God's Word.
              </p>
            </div>

            {/* Wednesday Bible Study */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Mic className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Wednesday Bible Study</h3>
              <div className="flex items-center justify-center text-muted-foreground mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Every Wednesday</span>
              </div>
              <div className="flex items-center justify-center text-muted-foreground mb-4">
                <Clock className="h-4 w-4 mr-2" />
                <span>7:00 PM</span>
              </div>
              <p className="text-muted-foreground">Midweek Bible study and prayer meeting to strengthen your faith.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/contact">Plan Your Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What to Expect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              New to Nazarene Missionary Baptist Church? Here's what you can expect when you visit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Worship Service" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Warm Welcome</h3>
                <p className="text-muted-foreground">
                  You'll be greeted by our friendly welcome team who can answer any questions and help you find your way
                  around.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Inspiring Worship</h3>
                <p className="text-muted-foreground">
                  Our worship services include a blend of traditional hymns and contemporary gospel music.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Biblical Teaching</h3>
                <p className="text-muted-foreground">
                  Our pastor delivers messages that are rooted in Scripture and applicable to daily life.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community Fellowship</h3>
                <p className="text-muted-foreground">
                  We value building relationships and connecting with one another before and after services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg">Address</h3>
                  <p className="text-muted-foreground">
                    3505 E. 38th Street
                    <br />
                    Indianapolis, IN, United States
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <Users className="h-6 w-6 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg">Accessibility</h3>
                  <p className="text-muted-foreground">
                    Our church is wheelchair accessible with designated parking spaces near the entrance.
                  </p>
                </div>
              </div>
              <Button asChild>
                <a
                  href="https://maps.google.com/?q=3505+E+38th+St+Indianapolis+IN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.2851254366473!2d-86.1088899!3d39.8254444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4c3f8c78c0c9%3A0x2a7fc7ca8884687a!2s3505%20E%2038th%20St%2C%20Indianapolis%2C%20IN%2046218!5e0!3m2!1sen!2sus!4v1710343200000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
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

