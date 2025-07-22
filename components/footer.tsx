import { Zap, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              <span className="text-lg sm:text-xl font-bold">SolarDeals India</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              India's leading solar marketplace connecting customers with the best solar products and services.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Solar Panels
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Inverters
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
            </ul>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center gap-6">
          <a href="https://facebook.com/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </a>
          <a href="https://twitter.com/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </a>
          <a href="https://linkedin.com/company/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </a>
          <a href="https://instagram.com/solardealsindia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </a>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; 2024 SolarDeals India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
