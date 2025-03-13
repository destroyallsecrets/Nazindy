"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg?height=50&width=200"
            alt="Nazarene Missionary Baptist Church"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary">
            Services
          </Link>
          <Link href="/ministries" className="text-sm font-medium hover:text-primary">
            Ministries
          </Link>
          <Link href="/events" className="text-sm font-medium hover:text-primary">
            Events
          </Link>
          <Link href="/sermons" className="text-sm font-medium hover:text-primary">
            Sermons
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="text-lg font-medium hover:text-primary">
                About
              </Link>
              <Link href="/services" className="text-lg font-medium hover:text-primary">
                Services
              </Link>
              <Link href="/ministries" className="text-lg font-medium hover:text-primary">
                Ministries
              </Link>
              <Link href="/events" className="text-lg font-medium hover:text-primary">
                Events
              </Link>
              <Link href="/sermons" className="text-lg font-medium hover:text-primary">
                Sermons
              </Link>
              <Link href="/blog" className="text-lg font-medium hover:text-primary">
                Blog
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:text-primary">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

