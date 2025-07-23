"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LeadModal } from "@/components/lead-modal"
import { useLeadModal } from "@/hooks/use-lead-modal"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isOpen: isModalOpen, openModal, closeModal, modalProps } = useLeadModal()
  const pathname = usePathname()

  const handleGetQuote = () => {
    openModal({
      title: "Get Your Free Solar Quote",
      subtitle: "Our solar experts will contact you within 24 hours with a customized solution",
      source: "navbar",
    })
  }

  return (
    <>
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/du0cxgoic/image/upload/v1753165862/logo_Chairbord_Solar_1_1_1_1_tnsdh8.png"
                alt="SolarDeals India Logo"
                width={150}
                height={50}
                className="w-50 h-50 sm:w-18 sm:h- md:w-25 md:h-19"
              />
              {/* <span className="text-lg sm:text-xl font-bold text-gray-900">SolarDeals India</span> */}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/products" className={`text-gray-700 hover:text-orange-600 font-medium transition-colors ${pathname === "/products" ? "text-orange-600 underline" : ""}`}>
                Products
              </Link>
              <Link href="/calculator" className={`text-gray-700 hover:text-orange-600 font-medium transition-colors ${pathname === "/calculator" ? "text-orange-600 underline" : ""}`}>
                Calculator
              </Link>
              {/* <Link href="/companies" className={`text-gray-700 hover:text-orange-600 font-medium transition-colors ${pathname === "/companies" ? "text-orange-600 underline" : ""}`}>
                Companies
              </Link> */}
              <Link
                href="/recommendations"
                className={`text-gray-700 hover:text-orange-600 font-medium transition-colors ${pathname === "/recommendations" ? "text-orange-600 underline" : ""}`}
              >
                Recommendations
              </Link>
              <Link href="/why" className={`text-gray-700 hover:text-orange-600 font-medium transition-colors ${pathname === "/why" ? "text-orange-600 underline" : ""}`}>
                Why Solar
              </Link>
              <Link href="/about" className={`text-gray-700 hover:text-orange-600 font-medium transition-colors ${pathname === "/about" ? "text-orange-600 underline" : ""}`}>
                About Us
              </Link>
              <Link href="/contact" className={`text-gray-700 hover:text-orange-600 font-medium transition-colors ${pathname === "/contact" ? "text-orange-600 underline" : ""}`}>
                Contact
              </Link>
              <Button onClick={handleGetQuote} className="bg-orange-600 hover:bg-orange-700">
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
                <Link
                  href="/products"
                  className={`block px-3 py-3 text-gray-700 hover:text-orange-600 font-medium rounded-md hover:bg-gray-50 transition-colors ${pathname === "/products" ? "text-orange-600 underline" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/calculator"
                  className={`block px-3 py-3 text-gray-700 hover:text-orange-600 font-medium rounded-md hover:bg-gray-50 transition-colors ${pathname === "/calculator" ? "text-orange-600 underline" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Calculator
                </Link>
                {/* <Link
                  href="/companies"
                  className={`block px-3 py-3 text-gray-700 hover:text-orange-600 font-medium rounded-md hover:bg-gray-50 transition-colors ${pathname === "/companies" ? "text-orange-600 underline" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Companies
                </Link> */}
                <Link
                  href="/recommendations"
                  className={`block px-3 py-3 text-gray-700 hover:text-orange-600 font-medium rounded-md hover:bg-gray-50 transition-colors ${pathname === "/recommendations" ? "text-orange-600 underline" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Recommendations
                </Link>
                <Link
                  href="/why"
                  className={`block px-3 py-3 text-gray-700 hover:text-orange-600 font-medium rounded-md hover:bg-gray-50 transition-colors ${pathname === "/why" ? "text-orange-600 underline" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Why Solar
                </Link>
                <Link
                  href="/about"
                  className={`block px-3 py-3 text-gray-700 hover:text-orange-600 font-medium rounded-md hover:bg-gray-50 transition-colors ${pathname === "/about" ? "text-orange-600 underline" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className={`block px-3 py-3 text-gray-700 hover:text-orange-600 font-medium rounded-md hover:bg-gray-50 transition-colors ${pathname === "/contact" ? "text-orange-600 underline" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="px-3 py-3">
                  <Button
                    onClick={() => {
                      setIsOpen(false)
                      handleGetQuote()
                    }}
                    className="w-full bg-orange-600 hover:bg-orange-700 h-12 text-base"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <LeadModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalProps.title}
        subtitle={modalProps.subtitle}
        source={modalProps.source}
      />
    </>
  )
}
