import Link from "next/link"
import Image from "next/image"
import { Users, Heart, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MinistriesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Ministries Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Ministries</h1>
            <p className="text-xl text-gray-200 mb-6">
              Discover the various ways you can connect, serve, and grow within our church community.
            </p>
          </div>
        </div>
      </section>

      {/* Ministries Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Nazarene Missionary Baptist Church, we believe that everyone has a place to serve and grow. Explore our
              ministries and find where you can make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Button asChild variant="outline" className="w-full">
                  <Link href="/ministries/worship">Learn More</Link>
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
                <Button asChild variant="outline" className="w-full">
                  <Link href="/ministries/children">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Ministry Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Youth Ministry" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Youth Ministry</h3>
                <p className="text-muted-foreground mb-4">
                  Empowering teens and young adults to grow in their faith and develop godly character.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/ministries/youth">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Ministry Card 4 */}
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
                <Button asChild variant="outline" className="w-full">
                  <Link href="/ministries/outreach">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Ministry Card 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Men's Ministry" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Men's Ministry</h3>
                <p className="text-muted-foreground mb-4">
                  Building men of faith through fellowship, Bible study, and accountability.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/ministries/men">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Ministry Card 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Women's Ministry"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Women's Ministry</h3>
                <p className="text-muted-foreground mb-4">
                  Encouraging women to grow in their relationship with Christ and with one another.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/ministries/women">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ministry */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Ministry
              </div>
              <h2 className="text-3xl font-bold mb-4">Community Outreach</h2>
              <p className="text-muted-foreground mb-6">
                Our Community Outreach ministry is dedicated to serving the Indianapolis area with the love of Christ.
                From food drives to home repairs for the elderly, we strive to meet both physical and spiritual needs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Heart className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Food Pantry</h4>
                    <p className="text-sm text-muted-foreground">Providing groceries to families in need</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Mentoring</h4>
                    <p className="text-sm text-muted-foreground">Supporting at-risk youth</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BookOpen className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Literacy Program</h4>
                    <p className="text-sm text-muted-foreground">Teaching reading skills</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Senior Care</h4>
                    <p className="text-sm text-muted-foreground">Assisting elderly community members</p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/ministries/outreach">Get Involved</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Community Outreach"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Serve?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We believe that everyone has unique gifts and talents to contribute. Join one of our ministries today and
            make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg">
              Contact Ministry Leaders
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white/20 hover:bg-white/10">
              View Ministry Calendar
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

