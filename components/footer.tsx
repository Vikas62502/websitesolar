import { Zap, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
            <Image
                src="https://res.cloudinary.com/du0cxgoic/image/upload/v1753789133/logo_Chairbord_Solar_1_1_avkjps.png"
                alt="Chairbord Solar Logo"
                width={150}
                height={50}
                className="w-50 h-50 sm:w-18 sm:h- md:w-25 md:h-19"
              />
            </div>
            <p className="text-gray-400 text-sm sm:text-base t">
            Chairbord Solar is a leading solar energy company in Jaipur, offering end-to-end solar solutions with trusted technology, expert installation, and long-term support.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <Link href="/products/solar-panels" className="hover:text-white transition-colors">
                  Solar Panels
                </Link>
              </li>
              <li>
                <Link href="/products/solar-inverters" className="hover:text-white transition-colors">
                 Solar Inverters
                </Link>
              </li>
              <li>
                <Link href="/products/solar-meters" className="hover:text-white transition-colors">
                 Solar Meters
                </Link>
              </li>
              {/* <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Batteries
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Accessories
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <Link href="/calculator" className="hover:text-white transition-colors">
                  Solar Calculator
                </Link>
              </li>
              <li>
                <Link href="/recommendations" className="hover:text-white transition-colors">
                  Recommendations
                </Link>
              </li>
              <li>
                <Link href="/why" className="hover:text-white transition-colors">
                  Why Solar
                </Link>
              </li>
              {/* <li>
                <Link href="/companies" className="hover:text-white transition-colors">
                  Companies
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center gap-6">
          <a href="https://facebook.com/chairbordsolar" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </a>
          <a href="https://www.youtube.com/@chairbordsolar" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </a>
          <a href="https://www.linkedin.com/company/chairbord-solar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </a>
          <a href="https://www.instagram.com/chairbordsolar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </a>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; 2024 Chairbord Solar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
