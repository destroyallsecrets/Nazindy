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
        isScrolled ? "bg-church-navy/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/308008277_381954504147129_7398807224246586447_n%20%281%29.jpg-DSscG41HfXZTOPQL9AJ7VBsESwOLRl.jpeg"
            alt="Nazarene Missionary Baptist Church"
            width={48}
            height={48}
            className="h-12 w-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-white hover:text-church-gold">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-white hover:text-church-gold">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium text-white hover:text-church-gold">
            Services
          </Link>
          <Link href="/ministries" className="text-sm font-medium text-white hover:text-church-gold">
            Ministries
          </Link>
          <Link href="/events" className="text-sm font-medium text-white hover:text-church-gold">
            Events
          </Link>
          <Link href="/sermons" className="text-sm font-medium text-white hover:text-church-gold">
            Sermons
          </Link>
          <Link href="/videos" className="text-sm font-medium text-white hover:text-church-gold">
            Videos
          </Link>
          <Link href="/connect" className="text-sm font-medium text-white hover:text-church-gold">
            Connect
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white hover:text-church-gold">
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-church-navy">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium text-white hover:text-church-gold">
                Home
              </Link>
              <Link href="/about" className="text-lg font-medium text-white hover:text-church-gold">
                About
              </Link>
              <Link href="/services" className="text-lg font-medium text-white hover:text-church-gold">
                Services
              </Link>
              <Link href="/ministries" className="text-lg font-medium text-white hover:text-church-gold">
                Ministries
              </Link>
              <Link href="/events" className="text-lg font-medium text-white hover:text-church-gold">
                Events
              </Link>
              <Link href="/sermons" className="text-lg font-medium text-white hover:text-church-gold">
                Sermons
              </Link>
              <Link href="/videos" className="text-lg font-medium text-white hover:text-church-gold">
                Videos
              </Link>
              <Link href="/gallery" className="text-lg font-medium text-white hover:text-church-gold">
                Gallery
              </Link>
              <Link href="/connect" className="text-lg font-medium text-white hover:text-church-gold">
                Connect
              </Link>
              <Link href="/contact" className="text-lg font-medium text-white hover:text-church-gold">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

