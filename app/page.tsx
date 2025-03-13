import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Video, Book, Users, Music, Phone, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FacebookEmbed from "@/components/facebook-embed"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Background image */}
          <Image 
            src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/308008277_381954504147129_7398807224246586447_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Cs2C1aerPVsQ7kNvgHKiKDd&_nc_oc=Adg9bPJzngSYBMRChGfIvL-7YpuiPwQkSPomCSTDuSTrgQNzSQUepeB0u9PIejTG8emuXQ0KtRnPH3RtOM_d7KSd&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=AU74M8kmksljW30RswwPZxG&oh=00_AYGvePUN7gdjc09iaTq8fPrkHuSLEl6mfU-mWaEFNNXwGA&oe=67D8838D"
            alt="Nazarene Missionary Baptist Church" 
            fill
            priority
            className="object-cover"
          />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Nazarene Missionary Baptist Church
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">COME WORSHIP WITH US!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg" asChild>
              <a
                href="https://maps.google.com/?q=3505+E+38th+St+Indianapolis+IN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-5 w-5" /> Get Directions
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-white/10 text-white border-white/20 hover:bg-white/20"
              asChild
            >
              <Link href="/services">
                <Calendar className="mr-2 h-5 w-5" /> Service Times
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Access Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Access</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Link href="/services" className="group">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="p-4 md:p-6 text-center">
                  <Calendar className="h-10 w-10 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg md:text-xl">Services</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 md:p-6 md:pt-0 text-center text-sm text-muted-foreground">
                  Service times and information
                </CardContent>
              </Card>
            </Link>

            <Link href="/videos" className="group">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="p-4 md:p-6 text-center">
                  <Video className="h-10 w-10 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg md:text-xl">Videos</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 md:p-6 md:pt-0 text-center text-sm text-muted-foreground">
                  Watch our sermons and events
                </CardContent>
              </Card>
            </Link>

            <Link href="/sermons" className="group">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="p-4 md:p-6 text-center">
                  <Book className="h-10 w-10 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg md:text-xl">Sermons</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 md:p-6 md:pt-0 text-center text-sm text-muted-foreground">
                  Listen to past sermons
                </CardContent>
              </Card>
            </Link>

            <Link href="/events" className="group">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="p-4 md:p-6 text-center">
                  <Calendar className="h-10 w-10 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg md:text-xl">Events</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 md:p-6 md:pt-0 text-center text-sm text-muted-foreground">
                  Upcoming church events
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
            <Link href="/ministries" className="group">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="p-4 md:p-6 text-center">
                  <Users className="h-10 w-10 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg md:text-xl">Ministries</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 md:p-6 md:pt-0 text-center text-sm text-muted-foreground">
                  Our church ministries
                </CardContent>
              </Card>
            </Link>

            <Link href="/about" className="group">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="p-4 md:p-6 text-center">
                  <Users className="h-10 w-10 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg md:text-xl">About Us</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 md:p-6 md:pt-0 text-center text-sm text-muted-foreground">
                  Learn about our church
                </CardContent>
              </Card>
            </Link>

            <Link href="/gallery" className="group">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="p-4 md:p-6 text-center">
                  <div className="p-4 md:p-6 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                    <CardTitle className="text-lg md:text-xl">Gallery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 md:p-6 md:pt-0 text-center text-sm text-muted-foreground">
                  Photos from our church
                </CardContent>
              </Card>
            </Link>

            <Link href="/contact" className="group">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                <CardHeader className="p-4 md:p-6 text-center">
                  <Phone className="h-10 w-10 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg md:text-xl">Contact</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 md:p-6 md:pt-0 text-center text-sm text-muted-foreground">
                  Get in touch with us
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Service Times</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sunday School</h3>
                    <p className="text-muted-foreground">10:00 AM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Music className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sunday Worship</h3>
                    <p className="text-muted-foreground">11:00 AM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Book className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Wednesday Bible Study</h3>
                    <p className="text-muted-foreground">7:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link href="/services">
                    View All Services <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Church Service" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Videos */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Videos</h2>
            <Link href="/videos" className="text-primary flex items-center hover:underline">
              View All Videos <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNazareneMissionaryBaptistChurch%2Fvideos%2F658991209844719&show_text=false"
                  className="w-full h-full border-none overflow-hidden"
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-1">Sunday Sermon</h3>
                <p className="text-muted-foreground text-sm">April 7, 2024</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNazareneMissionaryBaptistChurch%2Fvideos%2F&show_text=false"
                  className="w-full h-full border-none overflow-hidden"
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-1">Bible Study</h3>
                <p className="text-muted-foreground text-sm">April 3, 2024</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNazareneMissionaryBaptistChurch%2Fvideos%2F&show_text=false"
                  className="w-full h-full border-none overflow-hidden"
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-1">Special Event</h3>
                <p className="text-muted-foreground text-sm">March 31, 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <MapPin className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle>Address</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  3505 E. 38th Street
                  <br />
                  Indianapolis, IN, United States
                </p>
                <Button variant="link" asChild className="mt-2">
                  <a
                    href="https://maps.google.com/?q=3505+E+38th+St+Indianapolis+IN"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">(317) 547-1404</p>
                <Button variant="link" asChild className="mt-2">
                  <a href="tel:+13175471404">Call Us</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">NazareneChurch3505@gmail.com</p>
                <Button variant="link" asChild className="mt-2">
                  <a href="mailto:NazareneChurch3505@gmail.com">Email Us</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facebook Feed */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Follow our Facebook page to stay updated with church announcements, events, and inspirational messages.
              </p>

              <div className="mt-8">
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
                    Visit Our Facebook Page
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <FacebookEmbed
                url="https://www.facebook.com/NazareneMissionaryBaptistChurch"
                width={500}
                height={600}
                tabs="timeline,events"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us This Sunday</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We'd love to welcome you to our church family. Come experience the love of Christ in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg" asChild>
              <a
                href="https://maps.google.com/?q=3505+E+38th+St+Indianapolis+IN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-5 w-5" /> Get Directions
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white/20 hover:bg-white/10" asChild>
              <Link href="/services">
                <Calendar className="mr-2 h-5 w-5" /> Service Times
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

