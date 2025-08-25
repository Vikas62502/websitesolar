"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LeadModal } from "@/components/lead-modal"
import { useLeadModal } from "@/hooks/use-lead-modal"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const { isOpen: isModalOpen, openModal, closeModal, modalProps } = useLeadModal()
  const pathname = usePathname()

  const handleGetQuote = () => {
    openModal({
      title: "Get Your Free Solar Quote",
      subtitle:
        "Our solar experts will contact you within 24 hours with a customized solution",
      source: "navbar",
    })
  }

  const productLinks = [
    { href: "/products/solar-inverters", label: "Solar Inverters" },
    { href: "/products/solar-meters", label: "Solar Meters" },
    { href: "/products/solar-panels", label: "Solar Panels" },
  ]

  return (
    <>
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/du0cxgoic/image/upload/v1753165862/logo_Chairbord_Solar_1_1_1_1_tnsdh8.png"
                alt="Chairbord Solar Logo"
                width={150}
                height={50}
                className="w-50 h-50 sm:w-18 md:w-25"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => setIsProductsOpen((prev) => !prev)}
                  className={`flex items-center text-gray-700 hover:text-orange-600 font-medium transition-colors ${
                    pathname.startsWith("/products")
                      ? "text-orange-600 underline"
                      : ""
                  }`}
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductsOpen && (
                  <div className="absolute left-0 top-full w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {productLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-600 transition-colors ${
                          pathname === link.href
                            ? "text-orange-600 font-semibold"
                            : ""
                        }`}
                        onClick={() => setIsProductsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/calculator"
                className={`text-gray-700 hover:text-orange-600 font-medium transition-colors ${
                  pathname === "/calculator" ? "text-orange-600 underline" : ""
                }`}
              >
                Calculator
              </Link>
              <Link
                href="/recommendations"
                className={`text-gray-700 hover:text-orange-600 font-medium transition-colors ${
                  pathname === "/recommendations"
                    ? "text-orange-600 underline"
                    : ""
                }`}
              >
                Recommendations
              </Link>
              <Link
                href="/why"
                className={`text-gray-700 hover:text-orange-600 font-medium transition-colors ${
                  pathname === "/why" ? "text-orange-600 underline" : ""
                }`}
              >
                Why Solar
              </Link>
              <Link
                href="/about"
                className={`text-gray-700 hover:text-orange-600 font-medium transition-colors ${
                  pathname === "/about" ? "text-orange-600 underline" : ""
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`text-gray-700 hover:text-orange-600 font-medium transition-colors ${
                  pathname === "/contact" ? "text-orange-600 underline" : ""
                }`}
              >
                Contact
              </Link>
              <Button
                onClick={handleGetQuote}
                className="bg-orange-600 hover:bg-orange-700"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
                {/* Products Dropdown */}
                <div>
                  <button
                    className={`flex w-full justify-between px-3 py-3 text-gray-700 hover:text-orange-600 font-medium rounded-md hover:bg-gray-50 transition-colors ${
                      pathname.startsWith("/products")
                        ? "text-orange-600"
                        : ""
                    }`}
                    onClick={() => setIsProductsOpen((prev) => !prev)}
                  >
                    <span>Products</span>
                    <span className="text-xl">
                      {isProductsOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isProductsOpen && (
                    <div className="pl-6 space-y-1">
                      {productLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-3 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors ${
                            pathname === link.href
                              ? "text-orange-600 font-semibold"
                              : ""
                          }`}
                          onClick={() => {
                            setIsOpen(false)
                            setIsProductsOpen(false)
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Other Links */}
                <Link
                  href="/calculator"
                  className={`block px-3 py-3 text-gray-700 hover:text-orange-600 font-medium rounded-md hover:bg-gray-50 transition-colors ${
                    pathname === "/calculator"
                      ? "text-orange-600"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Calculator
                </Link>
                <Link
                  href="/recommendations"
                  className={`block px-3 py-3 text-gray-700 hover:text-orange-600 font-medium rounded-md hover:bg-gray-50 transition-colors ${
                    pathname === "/recommendations"
                      ? "text-orange-600"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Recommendations
                </Link>
                <Link
                  href="/why"
                  className={`block px-3 py-3 text-gray-700 hover:text-orange-600 font-medium rounded-md hover:bg-gray-50 transition-colors ${
                    pathname === "/why" ? "text-orange-600" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Why Solar
                </Link>
                <Link
                  href="/about"
                  className={`block px-3 py-3 text-gray-700 hover:text-orange-600 font-medium rounded-md hover:bg-gray-50 transition-colors ${
                    pathname === "/about" ? "text-orange-600" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className={`block px-3 py-3 text-gray-700 hover:text-orange-600 font-medium rounded-md hover:bg-gray-50 transition-colors ${
                    pathname === "/contact" ? "text-orange-600" : ""
                  }`}
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

      {/* Lead Modal */}
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