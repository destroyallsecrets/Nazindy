import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Events Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Calendar</h1>
            <p className="text-xl text-gray-200 mb-6">
              Join us for worship services, Bible studies, community outreach, and special events.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar View */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
              <p className="text-muted-foreground">Find out what's happening at our church</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Month</Button>
              <Button variant="outline">Week</Button>
              <Button variant="outline">List</Button>
            </div>
          </div>

          {/* Calendar Placeholder - In a real implementation, this would be a dynamic calendar component */}
          <div className="border rounded-lg p-4 mb-12 bg-gray-50">
            <div className="text-center p-8">
              <p className="text-muted-foreground">
                Calendar component would be implemented here with a library like react-big-calendar or
                @fullcalendar/react
              </p>
            </div>
          </div>

          {/* Event Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="flex items-center text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">10:30 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">Main Sanctuary</span>
                </div>
                <Button variant="outline" className="w-full">
                  View Details
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
                <div className="flex items-center text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">7:00 PM - 8:30 PM</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">Fellowship Hall</span>
                </div>
                <Button variant="outline" className="w-full">
                  View Details
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
                <div className="flex items-center text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">6:00 PM - 8:00 PM</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">Youth Center</span>
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/events/all">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

