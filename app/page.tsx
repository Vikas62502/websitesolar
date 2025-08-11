"use client"
import { useState, useEffect } from "react"
import { ArrowRight, Calculator, TrendingUp, Leaf, Sun, Shield, Users, Award, CheckCircle, FileText, Workflow, HelpCircle, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HomeLeadSection } from "@/components/home-lead-section"
import { LeadModal } from "@/components/lead-modal"
import { FAQSection } from "@/components/faq-section"
import Inverter from "@/Assets/images/Inverter.png";
import Panel from "@/Assets/images/Panel.png";
import resimage from "@/Assets/images/resimage.png";

export default function HomePage() {
  const [leadProduct, setLeadProduct] = useState<string | null>(null)
  const [currentProcessIndex, setCurrentProcessIndex] = useState(0)
  const [currentWhyChooseIndex, setCurrentWhyChooseIndex] = useState(0)
  const [currentWhyChooseJaipurIndex, setCurrentWhyChooseJaipurIndex] = useState(0)
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0)
  const [isProcessAutoPlaying, setIsProcessAutoPlaying] = useState(true)
  const [isWhyChooseAutoPlaying, setIsWhyChooseAutoPlaying] = useState(true)
  const [isWhyChooseJaipurAutoPlaying, setIsWhyChooseJaipurAutoPlaying] = useState(true)
  const [isBrandAutoPlaying, setIsBrandAutoPlaying] = useState(true)
  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const [isProductAutoPlaying, setIsProductAutoPlaying] = useState(true)
  
  // Touch/swipe state for mobile carousels
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const products = [
    {
      name: "Solar Panels",
      category: "Panels",
      image: Panel,
      alt: "Solar Panels Category",
      description: "High-efficiency solar panels from top brands like Tata, Waaree, and Adani. 25-year warranty with mono PERC and bifacial technology options.",
      features: ["25 Year Warranty", "High Efficiency", "Multiple Brands", "Government Approved"]
    },
    {
      name: "Solar Inverters", 
      category: "Inverters",
      image: Inverter,
      alt: "Solar Inverters Category",
      description: "Grid-tied and hybrid inverters from Luminous, Genus, and Secure. Smart monitoring and battery backup support available.",
      features: ["5 Year Warranty", "Smart Monitoring", "Grid-Tied & Hybrid", "Battery Ready"]
    },
    {
      name: "Net Meters",
      category: "Meters",
      image: "/placeholder.svg?height=200&width=335",
      alt: "Net Meters Category", 
      description: "Bi-directional net meters for residential and commercial installations. Smart meters with real-time monitoring display.",
      features: ["3 Year Warranty", "Bi-directional", "Single & Three Phase", "Smart Display"]
    }
  ]

  const processSteps = [
    {
      id: 1,
      title: "Site Visit",
      description: "An expert visits your location to assess your rooftop, energy usage, and eligibility for subsidy.",
      icon: "🏠",
      number: "1"
    },
    {
      id: 2,
      title: "System Design",
      description: "A custom solar solution is designed based on your needs, with a clear cost estimate and ROI calculation.",
      icon: "🌍",
      number: "2"
    },
    {
      id: 3,
      title: "Subsidy & Approvals",
      description: "We handle the paperwork, including DISCOM approvals and subsidy documentation.",
      icon: "📐",
      number: "3"
    },
    {
      id: 4,
      title: "Installation",
      description: "Panels, inverters, and wiring are installed by trained professionals, ensuring safety and efficiency.",
      icon: "🔧",
      number: "4"
    },
    {
      id: 5,
      title: "Net Metering & Activation",
      description: "We connect your system to the grid with a net meter — you start generating power and saving instantly!",
      icon: "⚙️",
      number: "5"
    }
  ]



  const brands = [
    {
      name: "Waaree",
      logo: "https://res.cloudinary.com/du0cxgoic/image/upload/v1754306304/logo-waaree_t2mw1a.png",
    },
    {
      name: "Adani Solar",
      logo: "https://res.cloudinary.com/du0cxgoic/image/upload/v1754306292/logo-adani_opyd3x.png",
    },
    {
      name: "Tata Power Solar",
      logo: "https://res.cloudinary.com/du0cxgoic/image/upload/v1754306300/logo-tata_m1arpy.png",
    },
    {
      name: "Xwatt",
      logo: "https://res.cloudinary.com/du0cxgoic/image/upload/v1754306299/logo-xwatt_z4bxke.png",
    },
    {
      name: "Secure",
      logo: "https://res.cloudinary.com/du0cxgoic/image/upload/v1754306299/logo-secure_mprpjc.png",
    },
    {
      name: "Vsole",
      logo: "https://res.cloudinary.com/du0cxgoic/image/upload/v1754306298/logo-vsole_eicfkx.png",
    },
    {
      name: "L&T",
      logo: "https://res.cloudinary.com/du0cxgoic/image/upload/v1754306296/logo-l_t_s9sye4.png",
    },
    {
      name: "INA",
      logo: "https://res.cloudinary.com/du0cxgoic/image/upload/v1754306295/logo-ina_qoqx41.png",
    },
    {
      name: "HPL",
      logo: "https://res.cloudinary.com/du0cxgoic/image/upload/v1754306294/logo-hpl_jdzg0c.png",
    },
    {
      name: "KSolare",
      logo: "https://res.cloudinary.com/du0cxgoic/image/upload/v1754306292/logo-ksolare_jpsmsi.png",
    },
    {
      name: "Luminous",
      logo: "https://res.cloudinary.com/du0cxgoic/image/upload/v1754306291/logo-luminous_xqjuij.png",
    },
    {
      name: "Genus",
      logo: "https://res.cloudinary.com/du0cxgoic/image/upload/v1754306288/logo-genus_l1dtmx.png",
    },
  ]

  // Auto-rotation effects for different carousels
  useEffect(() => {
    if (!isProcessAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentProcessIndex((prev) => (prev + 1) % processSteps.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [isProcessAutoPlaying, processSteps.length])

  useEffect(() => {
    if (!isWhyChooseAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentWhyChooseIndex((prev) => (prev + 1) % 5)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [isWhyChooseAutoPlaying])

  useEffect(() => {
    if (!isWhyChooseJaipurAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentWhyChooseJaipurIndex((prev) => (prev + 1) % 4)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [isWhyChooseJaipurAutoPlaying])

  useEffect(() => {
    if (!isBrandAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentBrandIndex((prev) => (prev + 1) % brands.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [isBrandAutoPlaying, brands.length])

  // Auto-rotation effect for products carousel
  useEffect(() => {
    if (!isProductAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % products.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isProductAutoPlaying, products.length])

  // Touch/swipe handlers for mobile carousels
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = (carouselType: 'whyChooseJaipur' | 'products' | 'process' | 'whyChoose' | 'testimonials' | 'brands') => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      // Swipe left - next item
      switch (carouselType) {
        case 'whyChooseJaipur':
          setCurrentWhyChooseJaipurIndex((prev) => (prev === 3 ? 0 : prev + 1))
          setIsWhyChooseJaipurAutoPlaying(false)
          restartAutoPlay(setIsWhyChooseJaipurAutoPlaying)
          break
        case 'products':
          setCurrentProductIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1))
          setIsProductAutoPlaying(false)
          restartAutoPlay(setIsProductAutoPlaying)
          break
        case 'process':
          setCurrentProcessIndex((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1))
          setIsProcessAutoPlaying(false)
          restartAutoPlay(setIsProcessAutoPlaying)
          break
        case 'whyChoose':
          setCurrentWhyChooseIndex((prev) => (prev === 4 ? 0 : prev + 1))
          setIsWhyChooseAutoPlaying(false)
          restartAutoPlay(setIsWhyChooseAutoPlaying)
          break
        case 'testimonials':
          setCurrentTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
          setIsTestimonialAutoPlaying(false)
          restartAutoPlay(setIsTestimonialAutoPlaying)
          break
        case 'brands':
          setCurrentBrandIndex((prev) => (prev === brands.length - 1 ? 0 : prev + 1))
          setIsBrandAutoPlaying(false)
          restartAutoPlay(setIsBrandAutoPlaying)
          break
      }
    }
    
    if (isRightSwipe) {
      // Swipe right - previous item
      switch (carouselType) {
        case 'whyChooseJaipur':
          setCurrentWhyChooseJaipurIndex((prev) => (prev === 0 ? 3 : prev - 1))
          setIsWhyChooseJaipurAutoPlaying(false)
          restartAutoPlay(setIsWhyChooseJaipurAutoPlaying)
          break
        case 'products':
          setCurrentProductIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))
          setIsProductAutoPlaying(false)
          restartAutoPlay(setIsProductAutoPlaying)
          break
        case 'process':
          setCurrentProcessIndex((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1))
          setIsProcessAutoPlaying(false)
          restartAutoPlay(setIsProcessAutoPlaying)
          break
        case 'whyChoose':
          setCurrentWhyChooseIndex((prev) => (prev === 0 ? 4 : prev - 1))
          setIsWhyChooseAutoPlaying(false)
          restartAutoPlay(setIsWhyChooseAutoPlaying)
          break
        case 'testimonials':
          setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
          setIsTestimonialAutoPlaying(false)
          restartAutoPlay(setIsTestimonialAutoPlaying)
          break
        case 'brands':
          setCurrentBrandIndex((prev) => (prev === 0 ? brands.length - 1 : prev - 1))
          setIsBrandAutoPlaying(false)
          restartAutoPlay(setIsBrandAutoPlaying)
          break
      }
    }
  }

  const testimonials = [
    {
      name: "Sunita Verma",
      location: "Pune, Maharashtra",
      quote: "Chairbord Solar made the entire process of installing a home solar system in Jaipur incredibly smooth. The team was prompt, and now we're enjoying lower power bills every month.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Rakesh Singh",
      location: "Jaipur, Rajasthan",
      quote: "We got our rooftop solar panel in Jaipur installed by Chairbord. The quality, pricing, and support exceeded expectations. Our home now runs efficiently on solar energy.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Priya Nair",
      location: "Kochi, Kerala",
      quote: "One of the most reliable solar energy companies in Jaipur. Chairbord Solar took care of everything, and the performance of the system has been consistent even during cloudy days.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad, Gujarat",
      quote: "We installed solar panels for our home in Jaipur through Chairbord Solar. Highly impressed with the expert consultation, clean installation, and quick savings on our electricity bills.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Vikram Malhotra",
      location: "Delhi, NCR",
      quote: "Chairbord offers the best value for rooftop solar systems in Jaipur. Their team was quick, professional, and explained every step clearly. Very satisfied with the results.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Anjali Desai",
      location: "Mumbai, Maharashtra",
      quote: "Finding trustworthy solar panel installation in Jaipur was hard—until we found Chairbord. Their team made the whole process stress-free, and the system works perfectly from day one.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Chennai, Tamil Nadu",
      quote: "Chairbord Solar delivered what they promised. Installation was done on time, and their post-installation support was excellent. A great experience from start to finish.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad, Telangana",
      quote: "We went solar with Chairbord last year. Our power bills are significantly down, and the system has worked without a glitch. I recommend them to everyone I know.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Arun Gupta",
      location: "Kolkata, West Bengal",
      quote: "As a business owner, I appreciated Chairbord's structured approach and clarity in pricing. Their team was knowledgeable and courteous throughout the process. Our solar system runs efficiently.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
  {
    name: "Meera Sharma",
    location: "Bangalore, Karnataka",
    quote: "The Chairbord team is professional, punctual, and honest. It's been a year with zero complaints. Their service quality stands out in the solar market.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5
  }
  ]

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [isTestimonialAutoPlaying, setIsTestimonialAutoPlaying] = useState(true)

  // Function to restart auto-play after user interaction
  const restartAutoPlay = (setAutoPlayFunction: (value: boolean) => void) => {
    setTimeout(() => {
      setAutoPlayFunction(true)
    }, 5000) // Restart auto-play after 5 seconds of inactivity
  }

  // Auto-rotation effect for testimonials
  useEffect(() => {
    if (!isTestimonialAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isTestimonialAutoPlaying, testimonials.length])
    

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-yellow-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100 text-xs sm:text-sm">
              #Get Solar At Zero Investment with
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Best Solar Company in
                <span className="text-orange-600"> Jaipur</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 text-justify">
              Switch to clean energy with government-approved rooftop solar systems and reduce your electricity bill to <span className="text-orange-600 font-bold">₹0*</span>. Chairbord Solar offers a seamless solar experience — from expert guidance to free site visits — so you can start saving from day one, without any upfront cost.
              </p>
              <HomeLeadSection />
            </div>
            <div className="relative order-first lg:order-last">
              <Image
                src="https://res.cloudinary.com/du0cxgoic/image/upload/v1753179834/ChatGPT_Image_Jul_22_2025_03_48_52_PM_mt9sqz.jpg"
                alt="Solar panels on Indian home"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto transition duration-200 transform hover:scale-105 hover:shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base"> Up to <span className="text-orange-600 font-bold">₹95,000</span></p>
                    <p className="text-xs sm:text-sm text-gray-600">Government Subsidy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Featured Solar Products</h2>
            <p className="text-lg sm:text-xl text-gray-600">Top-rated solar panels and inverters from India's most trusted brands — at exclusive prices.</p>
          </div>

          {/* Mobile View - Single Card Carousel */}
          <div className="md:hidden">
            <div 
              className="relative overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={() => onTouchEnd('products')}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 mx-4 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl">
                <div className="relative">
                  {/* Product Image */}
                  <div className="relative group mb-4 flex justify-center">
                    <Image
                      src={products[currentProductIndex]?.image || "/placeholder.svg"}
                      alt={products[currentProductIndex]?.alt || "Solar Product"}
                      width={200}
                      height={200}
                      className="rounded-full transition duration-200 transform hover:scale-105 hover:shadow-lg w-48 h-48 object-cover"
                      onError={(e) => {
                        console.log("Image failed to load:", products[currentProductIndex]?.image);
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 rounded-full bg-gray-500 opacity-0 group-hover:opacity-20 transition duration-200 pointer-events-none" />
                  </div>
                  
                  {/* Product Title and Category */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 flex-1 mr-2">{products[currentProductIndex]?.name || "Product Name"}</h3>
                    <Badge variant="secondary" className="flex-shrink-0">{products[currentProductIndex]?.category || "Category"}</Badge>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-3">{products[currentProductIndex]?.description || "Product description"}</p>
                    <div className="flex flex-wrap gap-1">
                      {products[currentProductIndex]?.features?.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">{feature}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Know More Button */}
                  <div className="mt-4">
                    <Button 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12 text-base font-medium" 
                      onClick={() => {
                        console.log("Button clicked for product:", products[currentProductIndex]?.name);
                        setLeadProduct(products[currentProductIndex]?.name || "Product");
                      }}
                    >
                      Know more
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows - Hidden on mobile */}
              <button
                onClick={() => {
                  setCurrentProductIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))
                  setIsProductAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="hidden md:flex absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-none rounded-full items-center justify-center text-[#ec5a04] hover:text-white transition-all duration-300 z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  setCurrentProductIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1))
                  setIsProductAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-none rounded-full items-center justify-center text-[#ec5a04] hover:text-white transition-all duration-300 z-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Progress indicator for mobile */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  {products.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentProductIndex ? 'bg-[#ec5a04] scale-125' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View - Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <Card key={product.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="relative group mb-4 flex justify-center">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={200}
                      height={200}
                      className="rounded-full transition duration-200 transform hover:scale-105 hover:shadow-lg w-48 h-48 object-cover"
                    />
                    <div className="absolute inset-0 rounded-full bg-gray-500 opacity-0 group-hover:opacity-20 transition duration-200 pointer-events-none" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle>{product.name}</CardTitle>
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {product.features?.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">{feature}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => setLeadProduct(product.name)}>
                    Know more
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>


          {leadProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  onClick={() => setLeadProduct(null)}
                  aria-label="Close"
                >
                  ×
                </button>
                <LeadModal
                  isOpen={!!leadProduct}
                  onClose={() => setLeadProduct(null)}
                  title={`Get Quote for ${leadProduct}`}
                  source={leadProduct ?? undefined}
                />
              </div>
            </div>
          )}
        </div>
      </section>

         {/* About Us + Team Section */}
         <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Jaipur's Most Trusted Rooftop Solar Solutions Provider</h2>
              <p className="text-xl text-gray-600 mb-6 text-justify">
               
              {/* <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Mission</h3>
                    <p className="text-gray-600 text-sm">
                      Accelerate India's transition to clean energy by making solar accessible and affordable
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Team</h3>
                    <p className="text-gray-600 text-sm">
                      Led by founders from Tata Power Solar, Google, and Flipkart with deep industry expertise
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Trusted Platform</h3>
                    <p className="text-gray-600 text-sm">
                      10,000+ satisfied customers and partnerships with 50+ verified manufacturers
                    </p>
                  </div>
                </div>
              </div> */}
             At Chairbord Solar, our mission is to make clean, renewable energy affordable and accessible for every home in Jaipur and across Rajasthan. As a top-rated solar company, we deliver high-performance rooftop solar systems with government-approved installation, expert support, and easy financing. Backed by solar industry professionals and trusted by 100+ happy customers, we empower families—from city apartments to rural households—to achieve energy independence and enjoy ₹0* electricity bills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=1200"
                alt="Chairbord Solar Expert Team"
                width={1200}
                height={700}
                className="rounded-lg shadow-lg w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover transition duration-200 transform hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Need Help Choosing the Right Solar System?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our solar experts are here to guide you through every step of your solar journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="/calculator">
                <Calculator className="mr-2 h-5 w-5" />
                Try Solar Calculator
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Why Choose Solar in Jaipur */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Solar in Jaipur</h2>           
          </div>

                    {/* Mobile View - Single Card Carousel */}
          <div className="md:hidden">
            <div 
              className="relative overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={() => onTouchEnd('whyChooseJaipur')}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 mx-4 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {(() => {
                      const items = [
                        { icon: "₹", title: "Get Up to ₹95,000 Government Subsidy", description: "Get ₹78,000 under <span className=\"text-orange-600 font-bold\">PM Surya Ghar Muft Bijli Yojana and </span>₹17,000 under Mukhyamantri Nishulk Bijli Yojana — total <span className=\"text-orange-600 font-bold\">₹95,000</span> subsidy to make solar highly affordable." },
                        { icon: "₹", title: "Save Big on Electricity Bills", description: "Cut your electricity bill to <span className=\"text-orange-600 font-bold\">₹0*</span> with rooftop solar. Enjoy government subsidies and start saving from day one — with free power for years to come." },
                        { icon: "●", title: "25+ Years of Reliable Performance", description: "Enjoy <span className=\"text-orange-600 font-bold\">25+ years</span> of energy independence with high-efficiency solar systems that need minimal maintenance and protect you from rising electricity costs." },
                        { icon: "●", title: "Eco-Friendly & Property Value Boosting", description: "Switch to clean solar energy to reduce your carbon footprint, contribute to a greener planet, and boost your home's resale value with modern sustainable upgrades." }
                      ];
                      const currentItem = items[currentWhyChooseJaipurIndex % items.length];
                      return <span className="text-orange-600 font-bold text-lg">{currentItem.icon}</span>;
                    })()}
                  </div>
                  <div>
                                         <h3 className="text-xl font-bold text-gray-900 mb-2">
                       {(() => {
                         const items = [
                           "Get Up to ₹95,000 Government Subsidy",
                           "Save Big on Electricity Bills",
                           "25+ Years of Reliable Performance",
                           "Eco-Friendly & Property Value Boosting"
                         ];
                         return items[currentWhyChooseJaipurIndex % items.length];
                       })()}
                     </h3>
                                         <p className="text-gray-600">
                       {(() => {
                         const items = [
                           "Get ₹78,000 under PM Surya Ghar Muft Bijli Yojana and ₹17,000 under Mukhyamantri Nishulk Bijli Yojana — total ₹95,000 subsidy to make solar highly affordable.",
                           "Cut your electricity bill to ₹0* with rooftop solar. Enjoy government subsidies and start saving from day one — with free power for years to come.",
                           "Enjoy 25+ years of energy independence with high-efficiency solar systems that need minimal maintenance and protect you from rising electricity costs.",
                           "Switch to clean solar energy to reduce your carbon footprint, contribute to a greener planet, and boost your home's resale value with modern sustainable upgrades."
                         ];
                         return items[currentWhyChooseJaipurIndex % items.length];
                       })()}
                     </p>
                  </div>
                </div>
              </div>
              
                            {/* Navigation Arrows - Hidden on mobile */}
              <button
                onClick={() => {
                  setCurrentWhyChooseJaipurIndex((prev) => (prev === 0 ? 3 : prev - 1))
                  setIsWhyChooseJaipurAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="hidden md:flex absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-none rounded-full items-center justify-center text-[#ec5a04] hover:text-white transition-all duration-300 z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  setCurrentWhyChooseJaipurIndex((prev) => (prev === 3 ? 0 : prev + 1))
                  setIsWhyChooseJaipurAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-none rounded-full items-center justify-center text-[#ec5a04] hover:text-white transition-all duration-300 z-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Progress indicator for mobile */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                                     {[0, 1, 2, 3].map((index) => (
                     <div
                       key={index}
                       className={`w-2 h-2 rounded-full transition-all duration-300 ${
                         index === currentWhyChooseJaipurIndex ? 'bg-[#ec5a04] scale-125' : 'bg-gray-300'
                       }`}
                     />
                   ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View - Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {/* Get Up to ₹95,000 Government Subsidy */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-lg">₹</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Get Up to ₹95,000 Government Subsidy</h3>
                  <p className="text-gray-600 text-justify">
                    Get ₹78,000 under <span className="text-orange-600 font-bold">PM Surya Ghar Muft Bijli Yojana</span> and ₹17,000 under <span className="text-orange-600 font-bold">Mukhyamantri Nishulk Bijli Yojana</span> — total ₹95,000 subsidy to make solar highly affordable.
                  </p>
                </div>
              </div>
            </div>

            {/* Save Big on Electricity Bills */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-lg">₹</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Save Big on Electricity Bills</h3>
                  <p className="text-gray-600 text-justify">
                    Cut your electricity bill to ₹0* with rooftop solar. Enjoy government subsidies and start saving from day one — with free power for years to come.
                  </p>
                </div>
              </div>
            </div>

            {/* 25+ Years of Reliable Performance */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-lg">●</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">25+ Years of Reliable Performance</h3>
                  <p className="text-gray-600 text-justify">
                    Enjoy 25+ years of energy independence with high-efficiency solar systems that need minimal maintenance and protect you from rising electricity costs.
                  </p>
                </div>
              </div>
            </div>

            {/* Eco-Friendly & Property Value Boosting */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-lg">●</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly & Property Value Boosting</h3>
                  <p className="text-gray-600 text-justify">
                    Switch to clean solar energy to reduce your carbon footprint, contribute to a greener planet, and boost your home's resale value with modern sustainable upgrades.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/why">
                Discover More Solar Benefits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Solar Solutions for Homes and Businesses</h2>
            <p className="text-xl text-gray-600">As a leading solar power company in Jaipur, we deliver custom solar solutions designed to meet the unique energy needs of both residential and commercial spaces.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6">
                <Image
                  src={resimage}
                  alt="Solar Installation"
                  width={192}
                  height={192}
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Residential Solar Solutions</h3>
              <p className="text-gray-600">Power your home with clean, affordable energy. Our residential solar systems are designed for maximum savings, easy maintenance, and long-term performance — tailored for every rooftop.</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6">
                <Image
                  src="https://res.cloudinary.com/du0cxgoic/image/upload/v1753183769/Untitled_design_1_ddk71t.png"
                  alt="Solar Maintenance"
                  width={192}
                  height={192}
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Commercial Solar Solutions</h3>
              <p className="text-gray-600">Cut operating costs and boost energy efficiency with our scalable solar solutions for businesses. Ideal for factories, offices, schools, and more — built for performance and ROI.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            
          </div>
        </div>
      </section>

   

           {/* Our Process Section */}
           <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solar Installation Process</h2>
            <p className="text-xl text-gray-600">As a trusted solar panel company in Jaipur, we follow a seamless installation process — from consultation to activation — ensuring reliable, efficient, and long-lasting solar systems for every rooftop.
            </p>
          </div>
          
          {/* Mobile View - Single Card */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div className="bg-white rounded-lg shadow-lg p-6 mx-4 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl animate-slideIn">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-bold text-gray-100 opacity-30">{processSteps[currentProcessIndex].number}</span>
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-4 transition-transform duration-300 hover:scale-110">{processSteps[currentProcessIndex].icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{processSteps[currentProcessIndex].title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{processSteps[currentProcessIndex].description}</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows - Hidden on mobile */}
              <button
                onClick={() => {
                  setCurrentProcessIndex((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1))
                }}
                className="hidden md:flex absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  setCurrentProcessIndex((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1))
                }}
                className="hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Progress indicator for mobile */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  {processSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentProcessIndex ? 'bg-[#ec5a04] scale-125' : 'bg-gray-300'
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
              <div className={`transition-all duration-700 ease-out transform hover:scale-105 ${currentProcessIndex === 0 ? 'scale-70 opacity-40 -translate-x-8 rotate-y-12' : 'scale-85 opacity-70 translate-x-0 rotate-y-0'}`}>
                <div className="bg-white rounded-lg shadow-md p-4 w-64 transition-all duration-300 hover:shadow-lg">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-gray-100 opacity-30">{processSteps[currentProcessIndex === 0 ? processSteps.length - 1 : currentProcessIndex - 1].number}</span>
                    </div>
                    <div className="relative z-10 text-center opacity-40">
                      <div className="text-3xl mb-3 transition-transform duration-300 hover:scale-110 font-bold">{processSteps[currentProcessIndex === 0 ? processSteps.length - 1 : currentProcessIndex - 1].number}</div>
                      <h3 className="text-lg font-semibold mb-2">{processSteps[currentProcessIndex === 0 ? processSteps.length - 1 : currentProcessIndex - 1].title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{processSteps[currentProcessIndex === 0 ? processSteps.length - 1 : currentProcessIndex - 1].description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Card */}
              <div className={`transition-all duration-700 ease-out transform hover:scale-110 hover:shadow-2xl ${currentProcessIndex >= 0 && currentProcessIndex < processSteps.length ? 'scale-100 opacity-100 translate-x-0 rotate-y-0 z-20' : 'scale-85 opacity-70 translate-x-8 rotate-y-12'}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 w-80 transition-all duration-300 hover:shadow-2xl">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl font-bold text-gray-100 opacity-30">{processSteps[currentProcessIndex].number}</span>
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="text-4xl mb-4 transition-transform duration-300 hover:scale-110 font-bold text-[#4c5663] opacity-50">{processSteps[currentProcessIndex].number}</div>
                      <h3 className="text-xl font-semibold mb-3 text-[#4c5663]">{processSteps[currentProcessIndex].title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{processSteps[currentProcessIndex].description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className={`transition-all duration-700 ease-out transform hover:scale-105 ${currentProcessIndex === processSteps.length - 1 ? 'scale-70 opacity-40 translate-x-8 rotate-y-12' : 'scale-85 opacity-70 translate-x-0 rotate-y-0'}`}>
                <div className="bg-white rounded-lg shadow-md p-4 w-64 transition-all duration-300 hover:shadow-lg">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-gray-100 opacity-30">{processSteps[currentProcessIndex === processSteps.length - 1 ? 0 : currentProcessIndex + 1].number}</span>
                    </div>
                    <div className="relative z-10 text-center opacity-40">
                      <div className="text-3xl mb-3 transition-transform duration-300 hover:scale-110 font-bold">{processSteps[currentProcessIndex === processSteps.length - 1 ? 0 : currentProcessIndex + 1].number}</div>
                      <h3 className="text-lg font-semibold mb-2">{processSteps[currentProcessIndex === processSteps.length - 1 ? 0 : currentProcessIndex + 1].title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{processSteps[currentProcessIndex === processSteps.length - 1 ? 0 : currentProcessIndex + 1].description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows - Hidden on mobile */}
              <button
                onClick={() => {
                  setCurrentProcessIndex((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1))
                }}
                className="hidden md:flex absolute left-4 w-12 h-12 bg-transparent border-2 border-[#ec5a04] rounded-full items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => {
                  setCurrentProcessIndex((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1))
                }}
                className="hidden md:flex absolute right-4 w-12 h-12 bg-transparent border-2 border-[#ec5a04] rounded-full items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Progress indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  {processSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentProcessIndex ? 'bg-[#ec5a04] scale-125' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Chairbord Solar?</h2>
            <p className="text-xl text-gray-600">Chairbord Solar is an MNRE approved solar company in Jaipur, trusted for delivering reliable rooftop solutions with expert installation, subsidy support, and long-term service assurance.
            </p>
          </div>

          {/* Mobile View - Auto Carousel */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div className="bg-white rounded-lg shadow-lg p-6 mx-4 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {(() => {
                      const items = [
                        { icon: Shield, title: "Partnered with 10+ Trusted Solar Brands", description: "Partnered with India's top solar brands to offer you the best choice in panels, inverters, and systems." },
                        { icon: Calculator, title: "Smart Calculator", description: "Get accurate cost estimates and savings projections" },
                        { icon: Users, title: "Expert Support", description: "Get guidance from solar energy experts" },
                        { icon: Award, title: "Quality Assurance", description: "25-year warranty and comprehensive after-sales support" },
                        { icon: Leaf, title: "Eco-Friendly", description: "Contribute to a sustainable future with clean energy" }
                      ];
                      const currentItem = items[currentWhyChooseIndex % items.length];
                      const IconComponent = currentItem.icon;
                      return <IconComponent className="h-8 w-8 text-orange-600" />;
                    })()}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {(() => {
                      const items = [
                        "Verified Products",
                        "20+ Expert Team Members", 
                        "Expert Support",
                        "Quality Assurance",
                        "Eco-Friendly"
                      ];
                      return items[currentWhyChooseIndex % items.length];
                    })()}
                  </h3>
                  <p className="text-gray-600">
                    {(() => {
                      const items = [
                        "All products are verified and certified by Indian standards",
                        "Get accurate cost estimates and savings projections",
                        "Get guidance from solar energy experts",
                        "25-year warranty and comprehensive after-sales support",
                        "Contribute to a sustainable future with clean energy"
                      ];
                      return items[currentWhyChooseIndex % items.length];
                    })()}
                  </p>
                </div>
              </div>
              
              {/* Navigation Arrows - Hidden on mobile */}
              <button
                onClick={() => {
                  setCurrentWhyChooseIndex((prev) => (prev === 0 ? 4 : prev - 1))
                  setIsWhyChooseAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="hidden md:flex absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  setCurrentWhyChooseIndex((prev) => (prev === 4 ? 0 : prev + 1))
                  setIsWhyChooseAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Progress indicator for mobile */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentWhyChooseIndex ? 'bg-[#ec5a04] scale-125' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View - Static 5 Items */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Partnered with 10+ Brands</h3>
              <p className="text-gray-600">Partnered with India's top solar brands to offer you the best choice in panels, inverters, and systems.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">20+ Expert Team Members</h3>
              <p className="text-gray-600">Skilled professionals delivering precision and quality in every installation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">5 Years Free AMC</h3>
              <p className="text-gray-600">Enjoy worry-free maintenance with zero cost for 5 years.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Expert Support</h3>
              <p className="text-gray-600">Round-the-clock assistance whenever you need us—just a call away.</p>
            </div>
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Switch to Solar Energy?</h2>
          <p className="text-xl text-orange-100 mb-8">
          Use our Solar Panel Calculator to get instant, personalized estimates of the ideal kW size and discover how much you can save on electricity with solar panels in Jaipur.
          </p>
          <HomeLeadSection variant="cta" />
        </div>
      </section>
   
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">What Our Solar Customers Say</h2>
            <p className="text-lg text-gray-600">Discover how homeowners and businesses are benefiting from solar in Jaipur. From reduced electricity bills to reliable support, hear real success stories from our happy solar customers.</p>
          </div>

          {/* Mobile View - Single Card Carousel */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div className="bg-white rounded-lg shadow-lg p-6 mx-4 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl">
                <div className="text-center">
                  <Image
                    src={testimonials[currentTestimonialIndex].image}
                    alt={testimonials[currentTestimonialIndex].name}
                    width={80}
                    height={80}
                    className="rounded-full mb-4 mx-auto"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonials[currentTestimonialIndex].quote}"</p>
                  <div className="font-semibold text-gray-900">{testimonials[currentTestimonialIndex].name}</div>
                  <div className="text-sm text-gray-500">{testimonials[currentTestimonialIndex].location}</div>
                </div>
              </div>
              
              {/* Navigation Arrows - Hidden on mobile */}
              <button
                onClick={() => {
                  setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                  setIsTestimonialAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="hidden md:flex absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  setCurrentTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                  setIsTestimonialAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="hidden md:flex absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Progress indicator for mobile */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  {testimonials.map((_, index) => (
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
                      src={testimonials[currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1].image}
                      alt={testimonials[currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1].name}
                      width={60}
                      height={60}
                      className="rounded-full mb-3 mx-auto"
                    />
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonials[currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-sm mb-3 line-clamp-3">"{testimonials[currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1].quote}"</p>
                    <div className="font-semibold text-gray-900 text-sm">{testimonials[currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1].name}</div>
                    <div className="text-xs text-gray-500">{testimonials[currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1].location}</div>
                  </div>
                </div>
              </div>

              {/* Center Card */}
              <div className={`transition-all duration-700 ease-out transform hover:scale-110 hover:shadow-2xl ${currentTestimonialIndex >= 0 && currentTestimonialIndex < testimonials.length ? 'scale-100 opacity-100 translate-x-0 z-20' : 'scale-85 opacity-70 translate-x-8'}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 w-80 transition-all duration-300 hover:shadow-2xl">
                  <div className="text-center">
                    <Image
                      src={testimonials[currentTestimonialIndex].image}
                      alt={testimonials[currentTestimonialIndex].name}
                      width={80}
                      height={80}
                      className="rounded-full mb-4 mx-auto"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonials[currentTestimonialIndex].quote}"</p>
                    <div className="font-semibold text-gray-900">{testimonials[currentTestimonialIndex].name}</div>
                    <div className="text-sm text-gray-500">{testimonials[currentTestimonialIndex].location}</div>
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className={`transition-all duration-700 ease-out transform hover:scale-105 ${currentTestimonialIndex === testimonials.length - 1 ? 'scale-75 opacity-40 translate-x-8' : 'scale-85 opacity-70 translate-x-0'}`}>
                <div className="bg-white rounded-lg shadow-md p-4 w-64 transition-all duration-300 hover:shadow-lg">
                  <div className="text-center">
                    <Image
                      src={testimonials[currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1].image}
                      alt={testimonials[currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1].name}
                      width={60}
                      height={60}
                      className="rounded-full mb-3 mx-auto"
                    />
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonials[currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-sm mb-3 line-clamp-3">"{testimonials[currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1].quote}"</p>
                    <div className="font-semibold text-gray-900 text-sm">{testimonials[currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1].name}</div>
                    <div className="text-xs text-gray-500">{testimonials[currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1].location}</div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows - Hidden on mobile */}
              <button
                onClick={() => {
                  setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                  setIsTestimonialAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="hidden md:flex absolute left-4 w-12 h-12 bg-transparent border-2 border-[#ec5a04] rounded-full items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => {
                  setCurrentTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                  setIsTestimonialAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="hidden md:flex absolute right-4 w-12 h-12 bg-transparent border-2 border-[#ec5a04] rounded-full items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Progress indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  {testimonials.map((_, index) => (
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

       {/* Brands We Carry */}
       <section className="py-12 bg-gray-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Authorized Partnerships</h2>
            <p className="text-lg text-gray-600">We're proudly partnered with 15+ trusted solar brands to ensure you get the most reliable and efficient solar solutions for every need.</p>
          </div>
          {/* Infinite Horizontal Brand Carousel (Mobile & Desktop) */}
          <div className="w-full overflow-x-hidden">
            <div
              className="flex items-center gap-8 py-4 animate-scroll-x w-full"
              style={{
                animation: "scroll-x 30s linear infinite"
              }}
              onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
            >
              {[...brands, ...brands].map((brand, idx) => (
                <div key={brand.name + idx} className="flex flex-col items-center min-w-[140px]">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="transition duration-200 transform hover:scale-110 hover:shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
<FAQSection
  title="Frequently Asked Questions"
  subtitle="Explore answers to common questions about solar panels."
  faqs={[
    {
      question: "How much does a solar panel system cost in Jaipur?",
      answer:
        "The cost of a solar system in Jaipur depends on the size (in kW), type (on-grid or off-grid), and brand of components. On average, a 1kW solar system starts from ₹60,000* and can go up depending on customizations. However, with state and central subsidies, the effective price can reduce significantly, making solar a highly affordable investment in the long run.",
    },
    {
      question: "How many solar panels do I need for my home?",
      answer:
        "Your solar requirement depends on your average monthly electricity consumption and available roof space. Typically, a 1kW system needs 3–4 panels and generates around 100–120 units per month. We recommend using a solar calculator or consulting with our experts to determine the ideal system size for your home in Jaipur.",
    },
    {
      question: "Will solar panels reduce my electricity bill to zero?",
      answer:
        "Yes, with the right-sized rooftop system and net metering, many of our customers in Jaipur have seen electricity bills drop to zero. However, your savings depend on your usage, system size, and sunlight availability. Even partial systems can reduce bills by 60–90% monthly.",
    },
    {
      question: "How long does the solar installation process take?",
      answer:
        "Once the survey is complete and documentation is in place, the actual installation takes 2–5 days for most residential projects. This includes mounting panels, inverter setup, wiring, and safety checks. Depending on the project or system size (kW size), the duration may vary slightly. Government approvals like net metering can take additional time.",
    },
    {
      question: "Is there a subsidy on solar panels in Jaipur?",
      answer:
        "Yes. Under the PM Surya Ghar Yojana and Rajasthan state policies, homeowners in Jaipur can get subsidies of up to ₹78,000 for a 3kW system. To avail, your installer must be MNRE-approved, like Chairbord Solar. We assist end-to-end in documentation and applying for the subsidy.",
    },
    {
      question: "Do solar panels work during cloudy weather or in winter?",
      answer:
        "Absolutely. Solar panels still generate power using diffused sunlight, even on cloudy days. Although output might drop by 40–50%, the system continues working efficiently. During winters in Jaipur, while the sunlight duration is shorter, the panels still perform reliably.",
    },
    {
      question: "What is the lifespan of a solar panel system?",
      answer:
        "Most high-quality solar panels come with a 25-year performance warranty, and inverters typically last 8–12 years. Regular maintenance ensures optimal performance throughout the lifespan. Chairbord Solar offers 5 years of free AMC to help you stay worry-free.",
    },
    {
      question: "What kind of maintenance is required after installation?",
      answer:
        "Minimal. Solar panels need to be cleaned once every 15–30 days to remove dust and bird droppings. Annual inspections of wiring and inverter health are recommended. With Chairbord Solar, you get professional maintenance and 24/7 support as part of your package.",
    },
    {
      question: "Can I run AC or heavy appliances on solar power?",
      answer:
        "Yes, modern solar systems can easily power ACs, refrigerators, washing machines, and more, especially if properly sized. For example, a 5kW system is ideal for homes running 2–3 ACs and other daily appliances.",
    },
    {
      question: "What warranties and support do you provide after installation?",
      answer:
        "Chairbord Solar offers up to 25 years warranty on panels, 5–10 years on inverters (brand-dependent), and 5 years free AMC. Our support includes remote monitoring, annual service visits, and 24/7 helpline assistance to ensure complete peace of mind.",
    },
  ]}
/>

   {/* Final CTA Section */}
  <section className="py-20 relative overflow-hidden">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/du0cxgoic/image/upload/v1754312094/solar-panels-roof-solar-cell_4_xxealm.jpg')`
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
    
    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold text-white">Go solar in Jaipur with Chairbord Solar<br/>
            Book your free site visit today!</h2>
          <p className="text-orange-200 mt-2">Green Energy, Bright Future</p>
        </div>
        <div>
          <Link href="/contact" className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-300 font-semibold shadow-lg inline-block">
            Connect with Us
          </Link>
        </div>
      </div>
    </div>
  </section>
     

      <Footer />
    </div>
  )
}