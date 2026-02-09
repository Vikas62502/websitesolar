"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLeadModal } from "@/hooks/use-lead-modal"
import { LeadModal } from "@/components/lead-modal"
import Image from "next/image"
import { Star, MapPin, Users, Award, Shield, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import testimonialsData from "./testimonials.json"
import projectsData from "./projects.json"
import { FAQSection } from "@/components/faq-section"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function RooftopSolarInstallationJaipurPage() {
  const { isOpen: isModalOpen, openModal, closeModal, modalProps } = useLeadModal()
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [isTestimonialAutoPlaying, setIsTestimonialAutoPlaying] = useState(true)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [isProjectAutoPlaying, setIsProjectAutoPlaying] = useState(true)

  const restartAutoPlay = (setAutoPlayFunction: (value: boolean) => void) => {
    setTimeout(() => {
      setAutoPlayFunction(true)
    }, 5000)
  }

  // Auto-play testimonials every 4 seconds (matching home page)
  useEffect(() => {
    if (!isTestimonialAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [isTestimonialAutoPlaying, testimonialsData.length])

  // Auto-play projects carousel every 5 seconds
  useEffect(() => {
    if (!isProjectAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [isProjectAutoPlaying, projectsData.length])

  const handleBookSiteVisit = () => {
    openModal({
      title: "Book Free Site Visit",
      subtitle: "Our solar experts will visit your location and provide a customized solution",
      source: "jaipur-page",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Top Section - White Background */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Solar System Installation Company in Jaipur
              </h1>
              
              <p className="text-gray-700 text-base lg:text-lg mb-6 leading-relaxed">
                Chairbord Solar is a trusted rooftop solar installation company in Jaipur, providing high-quality solar systems for homes, shops, factories, and commercial buildings. We offer complete installation support, government subsidy assistance, and easy loan options to make solar affordable and hassle-free.
              </p>

              <Button
                onClick={handleBookSiteVisit}
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg font-semibold rounded-lg mb-6"
              >
                Book Free Site Visit
              </Button>

              <div className="text-gray-700 text-sm lg:text-base">
                <p>
                  <span className="font-semibold">Visit our Jaipur Office:</span> Plot No. 10, Ground Floor, Shri Shyam Vihar, Kalwar Road, Gokulpura, Jaipur – 302012
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="border-2 border-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src="https://varthana.com/school/wp-content/uploads/2023/01/B155.jpg"
                    alt="Chairbord Solar Team in Jaipur"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Bottom Section - Dark Blue Background */}
       <section className="bg-blue-900 py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-16">
            {/* Trust Box 1 - Google Rating */}
            <div className="bg-white rounded-lg p-5 lg:p-6 text-center shadow-lg">
              <p className="text-gray-700 font-semibold mb-3 text-base">Rated 4.8 ★ on</p>
              <div className="flex justify-center">
                <div className="text-xl font-bold">
                  <span className="text-blue-600">G</span>
                  <span className="text-red-600">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-600">g</span>
                  <span className="text-green-600">l</span>
                  <span className="text-red-600">e</span>
                </div>
              </div>
            </div>

            {/* Trust Box 2 - Trusted Families */}
            <div className="bg-white rounded-lg p-5 lg:p-6 text-center shadow-lg">
              <p className="text-gray-700 font-semibold mb-3 text-base">Trusted by 500+ Families in</p>
              <div className="flex justify-center">
                <p className="text-gray-700 font-semibold text-base">Jaipur</p>
              </div>
            </div>

            {/* Trust Box 3 - MNRE Approved */}
            <div className="bg-white rounded-lg p-5 lg:p-6 text-center shadow-lg">
              <p className="text-gray-700 font-semibold mb-3 text-base">MNRE-Approved Solar Company in</p>
              <div className="flex justify-center">
                <p className="text-gray-700 font-semibold text-base">Jaipur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Solar Subsidy Section */}
      <section className="bg-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Residential Solar Subsidy in Jaipur
          </h2>
          
          <p className="text-gray-700 text-base lg:text-lg mb-8 leading-relaxed">
            Homeowners in Jaipur can avail government subsidy on rooftop solar systems under the{" "}
            <span className="text-orange-600 font-semibold">PM-Surya Ghar: Muft Bijli Yojana</span> and{" "}
            <span className="text-orange-600 font-semibold">Nishulk Bijli Yojana</span> to reduce installation costs.
          </p>

          {/* Subsidy Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="px-6 py-4 text-left font-semibold text-base lg:text-lg">Capacity</th>
                    <th className="px-6 py-4 text-left font-semibold text-base lg:text-lg">Subsidy (Central Government)</th>
                    <th className="px-6 py-4 text-left font-semibold text-base lg:text-lg">Subsidy (State Government)</th>
                    <th className="px-6 py-4 text-left font-semibold text-base lg:text-lg">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">1kW</td>
                    <td className="px-6 py-4 text-gray-700">₹30,000</td>
                    <td className="px-6 py-4 text-gray-700">₹17,000</td>
                    <td className="px-6 py-4 text-gray-900 font-semibold">₹47,000</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">2kW</td>
                    <td className="px-6 py-4 text-gray-700">₹60,000</td>
                    <td className="px-6 py-4 text-gray-700">₹17,000</td>
                    <td className="px-6 py-4 text-gray-900 font-semibold">₹77,000</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">3kW</td>
                    <td className="px-6 py-4 text-gray-700">₹78,000</td>
                    <td className="px-6 py-4 text-gray-700">₹17,000</td>
                    <td className="px-6 py-4 text-gray-900 font-semibold">₹95,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900 font-medium">Above 3kW</td>
                    <td className="px-6 py-4 text-gray-700">₹78,000</td>
                    <td className="px-6 py-4 text-gray-700">₹17,000</td>
                    <td className="px-6 py-4 text-gray-900 font-semibold">₹95,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Chairbord Solar Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Chairbord Solar in Jaipur
          </h2>
          
          <p className="text-gray-700 text-base lg:text-lg mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            Chairbord Solar is a reliable solar power company in{" "}
            <span className="text-orange-600 font-semibold">Jaipur</span>, known for quality systems, transparent pricing, and complete support—from subsidy to installation.
          </p>

          {/* Four Benefit Cards - 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Certified & Experienced Installation Team */}
            <div className="bg-gray-100 rounded-lg p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative flex-shrink-0">
                  <Users className="h-8 w-8 text-gray-900" />
                  <Award className="h-5 w-5 text-gray-900 absolute -top-1 -right-1" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">1. Certified & Experienced Installation Team</h3>
              </div>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                Our expert rooftop solar installation team in Jaipur is certified, experienced, and trained to deliver safe and precise installations, ensuring optimal system performance and long-term reliability.
              </p>
            </div>

            {/* Card 2: Trusted Jaipur-based solar company */}
            <div className="bg-gray-100 rounded-lg p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="h-8 w-8 text-gray-900" />
                <h3 className="text-xl font-bold text-gray-900">2. Trusted Jaipur-based solar company</h3>
              </div>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                As a Jaipur-based solar company, Chairbord Solar understands local site conditions, DISCOM processes, and subsidy requirements. Our local presence ensures faster service, better coordination, and reliable after-sales support for Jaipur customers.
              </p>
            </div>

            {/* Card 3: High-Quality Solar Panels & Inverters */}
            <div className="bg-gray-100 rounded-lg p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative flex-shrink-0">
                  <Zap className="h-8 w-8 text-gray-900" />
                  <Star className="h-5 w-5 text-gray-900 fill-gray-900 absolute -top-1 -right-1" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">3. High-Quality Solar Panels & Inverters</h3>
              </div>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                We use premium, long-lasting solar components, including high-quality solar panels and inverters from trusted brands, to ensure maximum energy generation, safety, and reliable performance for years.
              </p>
            </div>

            {/* Card 4: Warranty + FREE AMC Support */}
            <div className="bg-gray-100 rounded-lg p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <Shield className="h-8 w-8 text-gray-900" />
                  <div className="absolute -top-1 -right-1 flex gap-0.5">
                    <Star className="h-3 w-3 text-gray-900 fill-gray-900" />
                    <Star className="h-3 w-3 text-gray-900 fill-gray-900" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex gap-0.5">
                    <Star className="h-3 w-3 text-gray-900 fill-gray-900" />
                    <Star className="h-3 w-3 text-gray-900 fill-gray-900" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">4. Warranty + FREE AMC Support</h3>
              </div>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                We provide 25-30 years of solar panel performance warranty along with FREE AMC support for 5 years, ensuring long-term reliability, minimal maintenance, and complete peace of mind after installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Solar Company Section */}
      <section className="bg-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Best Solar Company in Jaipur
              </h2>
              
              <p className="text-gray-700 text-base lg:text-lg mb-8 leading-relaxed">
                Chairbord Solar, a division of Chairbord Pvt. Ltd., is a leading solar company in Jaipur, founded to provide high-quality solar installations and reliable service, not just “fit-and-forget” systems. Unlike most companies, we focus on performance, safety, and long-term support. From the first site visit to post-installation care, our team handles everything — government approvals, subsidy processing, and premium installations. Committed to honest service and customer satisfaction, Chairbord Solar ensures homes and businesses across Rajasthan enjoy clean, efficient, and future-ready solar energy. 
              </p>

              <Button
                onClick={handleBookSiteVisit}
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg font-semibold rounded-lg"
              >
                Get FREE Consultation
              </Button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <Image
                  src="https://varthana.com/school/wp-content/uploads/2023/01/B155.jpg"
                  alt="Chairbord Solar Team in Jaipur with Solar Panels"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Trusted by 500+ Happy Families</h2>
            <p className="text-lg text-gray-600">Jaipur families trust Chairbord Solar for reliable, high-performance rooftop solar installations.</p>
          </div>

          {/* Mobile View - Single Card Carousel */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div className="bg-white rounded-lg shadow-lg p-6 mx-4 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl">
                <div className="text-center">
                  <Image
                    src={testimonialsData[currentTestimonialIndex].image}
                    alt={testimonialsData[currentTestimonialIndex].name}
                    width={80}
                    height={80}
                    className="rounded-full mb-4 mx-auto"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonialsData[currentTestimonialIndex].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonialsData[currentTestimonialIndex].quote}"</p>
                  <div className="font-semibold text-gray-900">{testimonialsData[currentTestimonialIndex].name}</div>
                  <div className="text-sm text-gray-500">{testimonialsData[currentTestimonialIndex].location}</div>
                </div>
              </div>
              
              {/* Navigation Arrows - Hidden on mobile */}
              <button
                onClick={() => {
                  setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1))
                  setIsTestimonialAutoPlaying(false)
                  restartAutoPlay(setIsTestimonialAutoPlaying)
                }}
                className="hidden md:flex absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  setCurrentTestimonialIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1))
                  setIsTestimonialAutoPlaying(false)
                  restartAutoPlay(setIsTestimonialAutoPlaying)
                }}
                className="hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Progress indicator for mobile */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  {testimonialsData.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonialIndex ? 'bg-[#ec5a04] scale-125' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View - 3 Cards with Center Focus */}
          <div className="hidden md:block">
            <div className="relative flex items-center justify-center gap-4 overflow-hidden">
              {/* Left Card */}
              <div className={`transition-all duration-700 ease-out transform hover:scale-105 ${currentTestimonialIndex === 0 ? 'scale-75 opacity-40 -translate-x-8' : 'scale-85 opacity-70 translate-x-0'}`}>
                <div className="bg-white rounded-lg shadow-md p-4 w-64 transition-all duration-300 hover:shadow-lg">
                  <div className="text-center">
                    <Image
                      src={testimonialsData[currentTestimonialIndex === 0 ? testimonialsData.length - 1 : currentTestimonialIndex - 1].image}
                      alt={testimonialsData[currentTestimonialIndex === 0 ? testimonialsData.length - 1 : currentTestimonialIndex - 1].name}
                      width={60}
                      height={60}
                      className="rounded-full mb-3 mx-auto"
                    />
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonialsData[currentTestimonialIndex === 0 ? testimonialsData.length - 1 : currentTestimonialIndex - 1].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-sm mb-3 line-clamp-3">"{testimonialsData[currentTestimonialIndex === 0 ? testimonialsData.length - 1 : currentTestimonialIndex - 1].quote}"</p>
                    <div className="font-semibold text-gray-900 text-sm">{testimonialsData[currentTestimonialIndex === 0 ? testimonialsData.length - 1 : currentTestimonialIndex - 1].name}</div>
                    <div className="text-xs text-gray-500">{testimonialsData[currentTestimonialIndex === 0 ? testimonialsData.length - 1 : currentTestimonialIndex - 1].location}</div>
                  </div>
                </div>
              </div>

              {/* Center Card */}
              <div className={`transition-all duration-700 ease-out transform hover:scale-110 hover:shadow-2xl ${currentTestimonialIndex >= 0 && currentTestimonialIndex < testimonialsData.length ? 'scale-100 opacity-100 translate-x-0 z-20' : 'scale-85 opacity-70 translate-x-8'}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 w-80 transition-all duration-300 hover:shadow-2xl">
                  <div className="text-center">
                    <Image
                      src={testimonialsData[currentTestimonialIndex].image}
                      alt={testimonialsData[currentTestimonialIndex].name}
                      width={80}
                      height={80}
                      className="rounded-full mb-4 mx-auto"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonialsData[currentTestimonialIndex].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonialsData[currentTestimonialIndex].quote}"</p>
                    <div className="font-semibold text-gray-900">{testimonialsData[currentTestimonialIndex].name}</div>
                    <div className="text-sm text-gray-500">{testimonialsData[currentTestimonialIndex].location}</div>
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className={`transition-all duration-700 ease-out transform hover:scale-105 ${currentTestimonialIndex === testimonialsData.length - 1 ? 'scale-75 opacity-40 translate-x-8' : 'scale-85 opacity-70 translate-x-0'}`}>
                <div className="bg-white rounded-lg shadow-md p-4 w-64 transition-all duration-300 hover:shadow-lg">
                  <div className="text-center">
                    <Image
                      src={testimonialsData[currentTestimonialIndex === testimonialsData.length - 1 ? 0 : currentTestimonialIndex + 1].image}
                      alt={testimonialsData[currentTestimonialIndex === testimonialsData.length - 1 ? 0 : currentTestimonialIndex + 1].name}
                      width={60}
                      height={60}
                      className="rounded-full mb-3 mx-auto"
                    />
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonialsData[currentTestimonialIndex === testimonialsData.length - 1 ? 0 : currentTestimonialIndex + 1].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-sm mb-3 line-clamp-3">"{testimonialsData[currentTestimonialIndex === testimonialsData.length - 1 ? 0 : currentTestimonialIndex + 1].quote}"</p>
                    <div className="font-semibold text-gray-900 text-sm">{testimonialsData[currentTestimonialIndex === testimonialsData.length - 1 ? 0 : currentTestimonialIndex + 1].name}</div>
                    <div className="text-xs text-gray-500">{testimonialsData[currentTestimonialIndex === testimonialsData.length - 1 ? 0 : currentTestimonialIndex + 1].location}</div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => {
                  setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1))
                  setIsTestimonialAutoPlaying(false)
                  restartAutoPlay(setIsTestimonialAutoPlaying)
                }}
                className="hidden md:flex absolute left-4 w-12 h-12 bg-transparent border-2 border-[#ec5a04] rounded-full items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => {
                  setCurrentTestimonialIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1))
                  setIsTestimonialAutoPlaying(false)
                  restartAutoPlay(setIsTestimonialAutoPlaying)
                }}
                className="hidden md:flex absolute right-4 w-12 h-12 bg-transparent border-2 border-[#ec5a04] rounded-full items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Progress indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  {testimonialsData.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonialIndex ? 'bg-[#ec5a04] scale-125' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Solar Projects Section */}
      <section className="bg-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Solar Projects in Jaipur
            </h2>
            <p className="text-gray-700 text-base lg:text-lg max-w-3xl mx-auto">
              Take a look at our latest solar installations across Jaipur — from homes to shops and commercial buildings.
            </p>
          </div>

          {/* Projects Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Current and Next Project */}
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 ease-out">
                <Image
                  src={projectsData[currentProjectIndex].image}
                  alt={projectsData[currentProjectIndex].description}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold text-lg">{projectsData[currentProjectIndex].title}</p>
                  <p className="text-white/90 text-sm">{projectsData[currentProjectIndex].type}</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 ease-out">
                <Image
                  src={projectsData[(currentProjectIndex + 1) % projectsData.length].image}
                  alt={projectsData[(currentProjectIndex + 1) % projectsData.length].description}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold text-lg">{projectsData[(currentProjectIndex + 1) % projectsData.length].title}</p>
                  <p className="text-white/90 text-sm">{projectsData[(currentProjectIndex + 1) % projectsData.length].type}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => {
                setCurrentProjectIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1))
                setIsProjectAutoPlaying(false)
                setTimeout(() => setIsProjectAutoPlaying(true), 5000)
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:text-[#ec5a04] hover:border-[#ec5a04] transition-all duration-300 shadow-lg z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => {
                setCurrentProjectIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1))
                setIsProjectAutoPlaying(false)
                setTimeout(() => setIsProjectAutoPlaying(true), 5000)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:text-[#ec5a04] hover:border-[#ec5a04] transition-all duration-300 shadow-lg z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Progress Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {projectsData.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentProjectIndex ? 'bg-[#ec5a04] w-8' : 'bg-white/70 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: "How much does residential rooftop solar installation cost in Jaipur?",
            answer: "The cost depends on system size and site conditions. On average, a 3kW to 5kW on-grid solar system's costs vary based on panel quality, inverter type, and installation requirements. Government subsidy can significantly reduce the final cost."
          },
          {
            question: "How much subsidy is available on rooftop solar in Jaipur?",
            answer: "Homeowners in Jaipur can avail government subsidy under the PM-Surya Ghar: Muft Bijli Yojana. The subsidy amount depends on the system size and eligibility."
          },
          {
            question: "How long does rooftop solar installation take in Jaipur?",
            answer: "Installation usually takes 7-10 days after the site survey, approvals, and material availability."
          },
          {
            question: "Do you help with subsidy and government approvals?",
            answer: "Yes, we handle the complete process, including portal work, documentation, and subsidy coordination."
          },
          {
            question: "What system size is suitable for a home in Jaipur?",
            answer: "Most Jaipur homes install 3kW to 5kW systems. The suitable size depends on monthly electricity usage and roof space."
          },
          {
            question: "Do you provide warranty and maintenance support?",
            answer: "Yes, we offer a 25-30 year panel performance warranty. We also provide a 10-year inverter warranty. A 5-year FREE Annual Maintenance Contract (AMC) is included."
          },
          {
            question: "Can I get a loan for rooftop solar installation?",
            answer: "Yes, we provide easy solar loan (100% loan) options with minimal documentation to make installation affordable."
          },
          {
            question: "Will rooftop solar work during power cuts?",
            answer: "On-grid systems shut down during power cuts for safety. Battery backup options are available if required."
          },
          {
            question: "How can I book a free site visit in Jaipur?",
            answer: "A FREE site visit can be booked by contacting Chairbord Solar through our website or by calling our team."
          },
          {
            question: "Which areas of Jaipur do you serve for solar installation?",
            answer: "We provide rooftop solar installation services across Jaipur, including: Mansarovar, Vaishali Nagar, Jagatpura, Malviya Nagar, Pratap Nagar, Sanganer, Tonk Road, Jhotwara, Bani Park, Ajmer Road, Sitapura, Vidyadhar Nagar, Civil Lines, and Kalwar Road."
          }
        ]}
      />

      {/* Google Maps Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Office Locations */}
          <Card>
             
              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.584286575558!2d75.71155357522568!3d26.94839047662594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db34437f3b57d%3A0xbbe7f554286804!2sChairbord%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1752992655199!5m2!1sen!2sin"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
          </Card>
        </div>
      </section>

      <Footer />

      <LeadModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalProps.title}
        subtitle={modalProps.subtitle}
        source={modalProps.source}
      />
    </div>
  )
}
