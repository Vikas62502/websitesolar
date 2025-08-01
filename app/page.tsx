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

export default function HomePage() {
  const [leadProduct, setLeadProduct] = useState<string | null>(null)
  const [currentProcessIndex, setCurrentProcessIndex] = useState(0)
  const [currentWhyChooseIndex, setCurrentWhyChooseIndex] = useState(0)
  const [currentWhyChooseJaipurIndex, setCurrentWhyChooseJaipurIndex] = useState(0)
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0)
  const [isProcessAutoPlaying, setIsProcessAutoPlaying] = useState(false)
  const [isWhyChooseAutoPlaying, setIsWhyChooseAutoPlaying] = useState(true)
  const [isWhyChooseJaipurAutoPlaying, setIsWhyChooseJaipurAutoPlaying] = useState(true)
  const [isBrandAutoPlaying, setIsBrandAutoPlaying] = useState(true)
  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const [isProductAutoPlaying, setIsProductAutoPlaying] = useState(true)

  const products = [
    {
      name: "Tata Solar 540W Mono PERC",
      image: "/placeholder.svg?height=200&width=335",
      alt: "Tata Solar Panel",
      originalPrice: "₹22,000",
      ourPrice: "₹18,500",
      warranty: "25 Year Warranty",
      rating: 4.8
    },
    {
      name: "Luminous 5KW Solar Inverter",
      image: "/placeholder.svg?height=200&width=335",
      alt: "Luminous Inverter",
      originalPrice: "₹52,000",
      ourPrice: "₹45,000",
      warranty: "5 Year Warranty",
      rating: 4.6
    },
    {
      name: "Waaree 445W Bifacial Panel",
      image: "/placeholder.svg?height=200&width=335",
      alt: "Waaree Solar Panel",
      originalPrice: "₹20,000",
      ourPrice: "₹16,800",
      warranty: "25 Year Warranty",
      rating: 4.7
    },
  ]

  const processSteps = [
    {
      id: 1,
      title: "On-Site Survey",
      description: "Economic and sustainability analysis of the project. Estimating annual power generation and returns.",
      icon: "🏠",
      number: "01"
    },
    {
      id: 2,
      title: "Financial Modelling",
      description: "Comparing & selecting suitable system configuration. Depicting the returns over the life of the project, ROI, IRR etc. by preparing a financial model.",
      icon: "🌍",
      number: "02"
    },
    {
      id: 3,
      title: "System Design",
      description: "Customized solar system design and professional installation tailored to your specific requirements and site conditions.",
      icon: "📐",
      number: "03"
    },
    {
      id: 4,
      title: "Installation",
      description: "Professional installation with minimal disruption. Complete system commissioning and performance testing.",
      icon: "🔧",
      number: "04"
    },
    {
      id: 5,
      title: "Maintenance",
      description: "Integrating planning, logistics and timely delivery of components to fulfill system design & construction requirements. Complete Installation and commissioning of the system.",
      icon: "⚙️",
      number: "05"
    }
  ]



  const brands = [
    {
      name: "Waaree",
      logo: "https://mma.prnewswire.com/media/2585961/5088649/Waaree_Americas_Logo.jpg?p=twitter",
    },
    {
      name: "Luminous",
      logo: "https://cdn.freelogovectors.net/wp-content/uploads/2023/12/luminous-logo-freelogovectors.net_-640x400.png",
    },
    {
      name: "Tata Power Solar",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:2y5JZmEVhAtlsig5j_R_XhvjA&s",
    },
    {
      name: "Vikram",
      logo: "https://stockify.net.in/wp-content/uploads/2023/01/Vikram-01-500x281-1.jpg",
    },
    {
      name: "Adani",
      logo: "https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/bmi/media/media_files/UUxYZ6kIx0XOlrDg6uXI.png",
    },
    {
      name: "Havells",
      logo: "https://ornatesolar.com/wp-content/uploads/2021/05/Havells.png",
    },
    {
      name: "RenewSys",
      logo: "https://cdn.enfsolar.com/ID/logo/6459e8715f7a0.jpg?v=1",
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

  const testimonials = [
    {
      name: "Sunita Verma",
      location: "Pune, Maharashtra",
      quote: "SolarDeals India made my switch to solar seamless and affordable. My electricity bills have dropped by 80%!",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Rakesh Singh",
      location: "Jaipur, Rajasthan",
      quote: "The team was professional and transparent. I recommend SolarDeals to anyone considering solar for their home.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Priya Nair",
      location: "Kochi, Kerala",
      quote: "Excellent service and support throughout the installation. I feel good about helping the environment too!",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad, Gujarat",
      quote: "Great experience from start to finish. The solar calculator helped me understand my savings perfectly.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Meera Sharma",
      location: "Bangalore, Karnataka",
      quote: "The installation was quick and clean. My solar system is performing better than expected!",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Vikram Malhotra",
      location: "Delhi, NCR",
      quote: "Outstanding customer service and quality products. My electricity bills are now minimal!",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Anjali Desai",
      location: "Mumbai, Maharashtra",
      quote: "The team explained everything clearly and the installation was done professionally. Highly recommended!",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Chennai, Tamil Nadu",
      quote: "Best decision I made for my home. The solar system is working flawlessly and saving me money.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad, Telangana",
      quote: "Professional service and excellent after-sales support. My solar investment is paying off well!",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    },
    {
      name: "Arun Gupta",
      location: "Kolkata, West Bengal",
      quote: "The entire process was smooth and hassle-free. My solar panels are generating more power than estimated!",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5
    }
  ]

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [isTestimonialAutoPlaying, setIsTestimonialAutoPlaying] = useState(true)

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
                #1 Solar Marketplace in India
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Power Your Home with
                <span className="text-orange-600"> Solar Energy</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
                Compare the best solar panels, inverters, and complete systems from top Indian manufacturers. Get
                personalized recommendations and instant cost estimates.
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
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">₹2.5L+ Saved</p>
                    <p className="text-xs sm:text-sm text-gray-600">Average per household</p>
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
            <p className="text-lg sm:text-xl text-gray-600">Top-rated products from leading Indian manufacturers</p>
          </div>

          {/* Mobile View - Single Card Carousel */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div className="bg-white rounded-lg shadow-lg p-6 mx-4 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl">
                <div className="relative">
                  {/* Product Image */}
                  <div className="relative group mb-4">
                    <Image
                      src={products[currentProductIndex]?.image || "/placeholder.svg"}
                      alt={products[currentProductIndex]?.alt || "Solar Product"}
                      width={335}
                      height={200}
                      className="rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg w-full h-auto"
                      onError={(e) => {
                        console.log("Image failed to load:", products[currentProductIndex]?.image);
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 rounded-lg bg-gray-500 opacity-0 group-hover:opacity-20 transition duration-200 pointer-events-none" />
                  </div>
                  
                  {/* Product Title and Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 flex-1 mr-2">{products[currentProductIndex]?.name || "Product Name"}</h3>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-sm font-medium text-gray-600">{products[currentProductIndex]?.rating || "4.5"}</span>
                    </div>
                  </div>
                  
                  {/* Price Information */}
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through text-sm">{products[currentProductIndex]?.originalPrice || "₹0"}</span>
                      <span className="text-orange-600 font-bold text-xl">{products[currentProductIndex]?.ourPrice || "₹0"}</span>
                    </div>
                    <Badge variant="secondary" className="w-fit">{products[currentProductIndex]?.warranty || "Warranty"}</Badge>
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
              
              {/* Navigation Arrows */}
              <button
                onClick={() => {
                  setCurrentProductIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))
                  setIsProductAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 shadow-lg z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  setCurrentProductIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1))
                  setIsProductAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 shadow-lg z-10"
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
                  <div className="relative group mb-4">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={335}
                      height={200}
                      className="rounded-lg transition duration-200 transform hover:scale-105 hover:shadow-lg w-full h-auto"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gray-500 opacity-0 group-hover:opacity-20 transition duration-200 pointer-events-none" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle>{product.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-1 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                      <span className="text-orange-600 font-bold text-xl">{product.ourPrice}</span>
                    </div>
                    <Badge variant="secondary">{product.warranty}</Badge>
                  </div>
                  <Button className="w-full" onClick={() => setLeadProduct(product.name)}>
                    Know more
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button size="lg" variant="outline" className="h-12 sm:h-14 text-sm sm:text-base bg-transparent" asChild>
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
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
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About SolarDeals India</h2>
              <p className="text-xl text-gray-600 mb-6">
                Founded by renewable energy veterans, we're building India's most trusted solar marketplace to make
                clean energy accessible to every household.
              </p>
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
              <p className="text-lg text-gray-600 mb-8">
                Our diverse team of solar experts, engineers, and industry veterans brings together decades of experience
                from leading companies like Tata Power Solar, Google, and Flipkart. We're united by our mission to make
                solar energy accessible to every Indian household.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                alt="SolarDeals India Expert Team"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Solar in Jaipur?</h2>
            <p className="text-xl text-gray-600">
              Switching to solar in Jaipur is a smart move for homeowners and businesses who are looking to save on electricity bills and create a brighter and better future.
            </p>
          </div>

          {/* Mobile View - Single Card Carousel */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div className="bg-white rounded-lg shadow-lg p-6 mx-4 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                         {(() => {
                       const items = [
                         { icon: "₹", title: "Attractive Government Subsidies", description: "Benefit from Central Government subsidies up to ₹78,000 through the PM Surya Ghar Yojana, which makes installing solar more affordable than ever." },
                         { icon: "₹", title: "Increase Your Property Value", description: "We provide a 5-year system warranty and a 25-year performance warranty on our solar panels, giving you long-term confidence and complete peace of mind." },
                         { icon: "₹", title: "Beat Rising Electricity Costs", description: "With electricity rates constantly increasing, solar energy offers long-term savings by significantly reducing your monthly electricity bills." },
                         { icon: "●", title: "Sustainability with 21-25% ROI", description: "Going Solar is a smart financial decision that not only saves money with a yearly ROI of 21-25% but also secures your energy future." }
                       ];
                       const currentItem = items[currentWhyChooseJaipurIndex % items.length];
                       return <span className="text-orange-600 font-bold text-lg">{currentItem.icon}</span>;
                     })()}
                  </div>
                  <div>
                                         <h3 className="text-xl font-bold text-gray-900 mb-2">
                       {(() => {
                         const items = [
                           "Attractive Government Subsidies",
                           "Increase Your Property Value",
                           "Beat Rising Electricity Costs",
                           "Sustainability with 21-25% ROI"
                         ];
                         return items[currentWhyChooseJaipurIndex % items.length];
                       })()}
                     </h3>
                                         <p className="text-gray-600">
                       {(() => {
                         const items = [
                           "Benefit from Central Government subsidies up to ₹78,000 through the PM Surya Ghar Yojana, which makes installing solar more affordable than ever.",
                           "We provide a 5-year system warranty and a 25-year performance warranty on our solar panels, giving you long-term confidence and complete peace of mind.",
                           "With electricity rates constantly increasing, solar energy offers long-term savings by significantly reducing your monthly electricity bills.",
                           "Going Solar is a smart financial decision that not only saves money with a yearly ROI of 21-25% but also secures your energy future."
                         ];
                         return items[currentWhyChooseJaipurIndex % items.length];
                       })()}
                     </p>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
                             <button
                 onClick={() => {
                   setCurrentWhyChooseJaipurIndex((prev) => (prev === 0 ? 3 : prev - 1))
                   setIsWhyChooseJaipurAutoPlaying(false) // Pause auto-play when manually navigating
                 }}
                 className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
               >
                 <ChevronLeft className="h-5 w-5" />
               </button>
               <button
                 onClick={() => {
                   setCurrentWhyChooseJaipurIndex((prev) => (prev === 3 ? 0 : prev + 1))
                   setIsWhyChooseJaipurAutoPlaying(false) // Pause auto-play when manually navigating
                 }}
                 className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
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
            {/* Attractive Government Subsidies */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-lg">₹</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Attractive Government Subsidies</h3>
                  <p className="text-gray-600">
                    Benefit from Central Government subsidies up to ₹78,000 through the{" "}
                    <span className="text-orange-600 font-semibold">PM Surya Ghar Yojana</span>, which makes installing solar more affordable than ever.
                  </p>
                </div>
              </div>
            </div>

            {/* Increase Your Property Value */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="relative">
                    <div className="w-6 h-4 bg-orange-600 rounded-sm"></div>
                    <div className="absolute -top-1 -right-1 text-orange-600 font-bold text-xs">₹</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Increase Your Property Value</h3>
                  <p className="text-gray-600">
                    We provide a 5-year system warranty and a 25-year performance warranty on our solar panels, giving you long-term confidence and complete peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Beat Rising Electricity Costs */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="relative">
                    <div className="w-4 h-6 bg-orange-600 rounded-sm"></div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-orange-600 font-bold text-xs">₹</div>
                    <div className="absolute -top-1 left-0 text-orange-600 text-xs">↗</div>
                    <div className="absolute -top-1 right-0 text-orange-600 text-xs">↗</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Beat Rising Electricity Costs</h3>
                  <p className="text-gray-600">
                    With electricity rates constantly increasing, solar energy offers long-term savings by significantly reducing your monthly electricity bills.
                  </p>
                </div>
              </div>
            </div>

            {/* Sustainability with 21-25% ROI */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability with 21-25% ROI</h3>
                  <p className="text-gray-600">
                    Going Solar is a smart financial decision that not only saves money with a yearly ROI of 21-25% but also secures your energy future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/why">
                Learn More About Solar Benefits
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your solar needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6">
                <Image
                  src="https://res.cloudinary.com/du0cxgoic/image/upload/v1753183873/Untitled_design_2_zko8rw.png"
                  alt="Solar Installation"
                  width={192}
                  height={192}
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">System Design & Installation</h3>
              <p className="text-gray-600">Customized solar system design and professional installation tailored to your home</p>
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
              <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
              <p className="text-gray-600">Ongoing maintenance and 24/7 support to ensure optimal system performance</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Turnkey EPC Services</h2>
            <p className="text-xl text-gray-600">Making India energy independent through 360-degree solar EPC services</p>
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
              
              {/* Navigation Arrows */}
              <button
                onClick={() => {
                  setCurrentProcessIndex((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1))
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  setCurrentProcessIndex((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1))
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
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
                    <div className="relative z-10 text-center">
                      <div className="text-3xl mb-3 transition-transform duration-300 hover:scale-110">{processSteps[currentProcessIndex === 0 ? processSteps.length - 1 : currentProcessIndex - 1].icon}</div>
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
                      <div className="text-4xl mb-4 transition-transform duration-300 hover:scale-110">{processSteps[currentProcessIndex].icon}</div>
                      <h3 className="text-xl font-semibold mb-3">{processSteps[currentProcessIndex].title}</h3>
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
                    <div className="relative z-10 text-center">
                      <div className="text-3xl mb-3 transition-transform duration-300 hover:scale-110">{processSteps[currentProcessIndex === processSteps.length - 1 ? 0 : currentProcessIndex + 1].icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{processSteps[currentProcessIndex === processSteps.length - 1 ? 0 : currentProcessIndex + 1].title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{processSteps[currentProcessIndex === processSteps.length - 1 ? 0 : currentProcessIndex + 1].description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => {
                  setCurrentProcessIndex((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1))
                }}
                className="absolute left-4 w-12 h-12 bg-transparent border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => {
                  setCurrentProcessIndex((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1))
                }}
                className="absolute right-4 w-12 h-12 bg-transparent border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm z-10"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SolarDeals India?</h2>
            <p className="text-xl text-gray-600">Your trusted partner for solar energy solutions</p>
          </div>

          {/* Mobile View - Auto Carousel */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div className="bg-white rounded-lg shadow-lg p-6 mx-4 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {(() => {
                      const items = [
                        { icon: Shield, title: "Verified Products", description: "All products are verified and certified by Indian standards" },
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
                        "Smart Calculator", 
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
              
              {/* Navigation Arrows */}
              <button
                onClick={() => {
                  setCurrentWhyChooseIndex((prev) => (prev === 0 ? 4 : prev - 1))
                  setIsWhyChooseAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  setCurrentWhyChooseIndex((prev) => (prev === 4 ? 0 : prev + 1))
                  setIsWhyChooseAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
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
          <div className="hidden md:grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Products</h3>
              <p className="text-gray-600">All products are verified and certified by Indian standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Calculator</h3>
              <p className="text-gray-600">Get accurate cost estimates and savings projections</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Get guidance from solar energy experts</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">25-year warranty and comprehensive after-sales support</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Contribute to a sustainable future with clean energy</p>
            </div>
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Switch to Solar Energy?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Get personalized recommendations and start saving on your electricity bills today
          </p>
          <HomeLeadSection variant="cta" />
        </div>
      </section>
   
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Hear from homeowners who went solar with us</p>
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
              
              {/* Navigation Arrows */}
              <button
                onClick={() => {
                  setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                  setIsTestimonialAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  setCurrentTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                  setIsTestimonialAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
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

              {/* Navigation Arrows */}
              <button
                onClick={() => {
                  setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                  setIsTestimonialAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="absolute left-4 w-12 h-12 bg-transparent border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => {
                  setCurrentTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                  setIsTestimonialAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="absolute right-4 w-12 h-12 bg-transparent border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm z-10"
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
       <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Brands We Carry</h2>
            <p className="text-lg text-gray-600">We partner with top Indian and global solar brands</p>
          </div>
          
          {/* Mobile View - Logo Carousel */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div className="bg-white rounded-lg shadow-lg p-6 mx-4 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl">
                <div className="text-center">
                  <div className="w-32 h-16 mx-auto flex items-center justify-center">
                    <Image
                      src={brands[currentBrandIndex % brands.length].logo}
                      alt={brands[currentBrandIndex % brands.length].name}
                      width={120}
                      height={60}
                      className="transition duration-200 transform hover:scale-110 hover:shadow-lg"
                    />
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => {
                  setCurrentBrandIndex((prev) => (prev === 0 ? brands.length - 1 : prev - 1))
                  setIsBrandAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  setCurrentBrandIndex((prev) => (prev === brands.length - 1 ? 0 : prev + 1))
                  setIsBrandAutoPlaying(false) // Pause auto-play when manually navigating
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-transparent border-2 border-[#ec5a04] rounded-full flex items-center justify-center text-[#ec5a04] hover:bg-[#ec5a04] hover:text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Progress indicator for mobile */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  {brands.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentBrandIndex % brands.length ? 'bg-[#ec5a04] scale-125' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View - Static Grid */}
          <div className="hidden md:flex md:flex-wrap md:justify-center md:items-center md:gap-8">
            {brands.map((brand) => (
              <div key={brand.name} className="flex flex-col items-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="mb-2 transition duration-200 transform hover:scale-110 hover:shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Solar Energy FAQs"
        subtitle="Common questions about switching to solar power"
        faqs={[
          {
            question: "How much can I save with solar panels?",
            answer:
              "Most homeowners save 70-90% on their electricity bills. With an average monthly bill of ₹5,000, you can save ₹3,500-4,500 per month. Over 20 years, this translates to savings of ₹8-12 lakhs, even after accounting for the initial investment.",
          },
          {
            question: "How long do solar panels last?",
            answer:
              "Solar panels are designed to last 25-30 years with minimal maintenance. Most manufacturers provide a 25-year performance warranty, guaranteeing at least 80% efficiency after 25 years. The inverter typically needs replacement after 10-15 years.",
          },
          {
            question: "What happens during monsoon and cloudy days?",
            answer:
              "Solar panels work even on cloudy days, though at reduced efficiency (10-25% of peak output). During monsoon, you can rely on grid power or battery backup. Net metering allows you to use excess power generated during sunny days.",
          },
          {
            question: "Is my roof suitable for solar installation?",
            answer:
              "Most roofs are suitable for solar installation. You need about 100 sq ft per kW of solar capacity. South-facing roofs are ideal, but east and west-facing roofs also work well. Our experts will assess your roof's suitability during the site visit.",
          },
          {
            question: "What government subsidies are available?",
            answer:
              "The central government provides up to 40% subsidy for residential solar installations up to 3kW, and 20% for systems above 3kW. Many states offer additional subsidies and incentives. You can also claim tax benefits under Section 80C.",
          },
          {
            question: "How long does installation take?",
            answer:
              "Residential solar installation typically takes 1-3 days depending on system size. The entire process from approval to commissioning takes 2-4 weeks, including permits, approvals, and grid connection procedures.",
          },
          {
            question: "Do I need batteries with my solar system?",
            answer:
              "Batteries are optional. Grid-tied systems without batteries are more cost-effective and have faster payback periods. Batteries are recommended if you experience frequent power cuts or want complete energy independence.",
          },
          {
            question: "What maintenance is required?",
            answer:
              "Solar panels require minimal maintenance - mainly cleaning dust and debris every few months. Annual professional inspection is recommended. Most systems come with monitoring apps to track performance and identify any issues.",
          },
        ]}
      />

     

      <Footer />
    </div>
  )
}