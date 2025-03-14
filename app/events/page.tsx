import Image from "next/image"
import { Button } from "@/components/ui/button"
import FacebookEmbed from "@/components/facebook/facebook-embed"

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

          {/* Facebook Events Integration */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">Facebook Events</h3>
            <div className="flex justify-center">
              <FacebookEmbed
                url="https://www.facebook.com/NazareneMissionaryBaptistChurch"
                width={800}
                height={600}
                tabs="events"
              />
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <a
                href="https://www.facebook.com/NazareneMissionaryBaptistChurch/events"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Events on Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

