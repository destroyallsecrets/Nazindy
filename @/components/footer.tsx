import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/placeholder.svg?height=50&width=200"
                alt="Nazarene Missionary Baptist Church"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-4 text-gray-400">Serving the Indianapolis community with the love of Christ since 1965.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Service Times
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="text-gray-400 hover:text-white">
                  Sermon Archive
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="text-gray-400 hover:text-white">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/giving" className="text-gray-400 hover:text-white">
                  Online Giving
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service Times</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block font-medium text-white">Sunday School</span>
                10:00 AM
              </li>
              <li className="text-gray-400">
                <span className="block font-medium text-white">Sunday Worship</span>
                11:00 AM
              </li>
              <li className="text-gray-400">
                <span className="block font-medium text-white">Wednesday Bible Study</span>
                7:00 PM
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  3505 E. 38th Street
                  <br />
                  Indianapolis, IN, United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <a href="tel:+13175471404" className="text-gray-400 hover:text-white">
                  (317) 547-1404
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <a href="mailto:NazareneChurch3505@gmail.com" className="text-gray-400 hover:text-white">
                  NazareneChurch3505@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Nazarene Missionary Baptist Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

