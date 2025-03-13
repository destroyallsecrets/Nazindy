import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/placeholder.svg?height=1080&width=1920" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Nazarene Missionary Baptist Church
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">Join Us This Sunday for Worship and Fellowship</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              <MapPin className="mr-2 h-5 w-5" /> Get Directions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <Calendar className="mr-2 h-5 w-5" /> Service Times
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Link href="/events" className="text-primary flex items-center hover:underline">
              View All Events <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto pb-4">
            {/* Event Card 1 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Sunday Service" fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center text-primary mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">March 17, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Sunday Worship Service</h3>
                <p className="text-muted-foreground mb-4">
                  Join us for a powerful time of worship, prayer, and teaching from God's Word.
                </p>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">10:30 AM - 12:00 PM</span>
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Bible Study" fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center text-primary mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">March 19, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Wednesday Bible Study</h3>
                <p className="text-muted-foreground mb-4">
                  Dive deeper into God's Word with our midweek Bible study and prayer meeting.
                </p>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">7:00 PM - 8:30 PM</span>
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-white border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Youth Ministry" fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center text-primary mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">March 21, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Youth Fellowship Night</h3>
                <p className="text-muted-foreground mb-4">
                  A special evening for our youth to connect, have fun, and grow in their faith together.
                </p>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">6:00 PM - 8:00 PM</span>
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Ministries</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the various ways you can connect, serve, and grow within our church community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ministry Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Worship Ministry"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Worship Ministry</h3>
                <p className="text-muted-foreground mb-4">
                  Our worship team leads the congregation in praise and worship through music and song.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Ministry Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Children's Ministry"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Children's Ministry</h3>
                <p className="text-muted-foreground mb-4">
                  Nurturing the spiritual growth of our children through age-appropriate teaching and activities.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Ministry Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Outreach Ministry"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Outreach Ministry</h3>
                <p className="text-muted-foreground mb-4">
                  Serving our local community and sharing God's love through various outreach programs.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link href="/ministries">View All Ministries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our church members about how God is working in their lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Sarah J." fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sarah J.</h4>
                  <p className="text-sm text-muted-foreground">Member since 2018</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "Finding Nazarene Missionary Baptist Church has been a blessing. The community here has supported me
                through difficult times and celebrated with me in joyful ones."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Michael T." fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Michael T.</h4>
                  <p className="text-sm text-muted-foreground">Member since 2020</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "The teaching at this church has deepened my understanding of God's Word and transformed my relationship
                with Christ. I'm grateful for our pastor's wisdom."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Lisa R." fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Lisa R.</h4>
                  <p className="text-sm text-muted-foreground">Member since 2015</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "My children love the youth programs, and I've found meaningful ways to serve. This church truly feels
                like family to us."
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/testimonials">Read More Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us This Sunday</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to our church family. Come experience the love of Christ in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg">
              <MapPin className="mr-2 h-5 w-5" /> Get Directions
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white/20 hover:bg-white/10">
              <Calendar className="mr-2 h-5 w-5" /> Service Times
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

