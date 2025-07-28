"use client"
import { useState } from "react"
import { ArrowRight, Calculator, TrendingUp, Leaf, Sun, Shield, Users, Award, CheckCircle, FileText, Workflow, HelpCircle } from "lucide-react"
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

  const products = [
    {
      name: "Tata Solar 540W Mono PERC",
      image: "https://res.cloudinary.com/du0cxgoic/image/upload/v1753183873/Untitled_design_2_zko8rw.png",
      alt: "Tata Solar Panel",
      originalPrice: "₹22,000",
      ourPrice: "₹18,500",
      warranty: "25 Year Warranty"
    },
    {
      name: "Luminous 5KW Solar Inverter",
      image: "https://res.cloudinary.com/du0cxgoic/image/upload/v1753183769/Untitled_design_1_ddk71t.png",
      alt: "Luminous Inverter",
      originalPrice: "₹52,000",
      ourPrice: "₹45,000",
      warranty: "5 Year Warranty"
    },
    {
      name: "Waaree 445W Bifacial Panel",
      image: "https://res.cloudinary.com/du0cxgoic/image/upload/v1753184175/Untitled_design_3_besfwy.png",
      alt: "Waaree Solar Panel",
      originalPrice: "₹20,000",
      ourPrice: "₹16,800",
      warranty: "25 Year Warranty"
    },
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

  const testimonials = [
    {
    name: "Sunita Verma",
    location: "Pune, Maharashtra",
    quote: "SolarDeals India made my switch to solar seamless and affordable. My electricity bills have dropped by 80%!",
    image: "/placeholder.svg?height=100&width=100",
    },
    {
    name: "Rakesh Singh",
    location: "Jaipur, Rajasthan",
    quote: "The team was professional and transparent. I recommend SolarDeals to anyone considering solar for their home.",
    image: "/placeholder.svg?height=100&width=100",
    },
    {
    name: "Priya Nair",
    location: "Kochi, Kerala",
    quote: "Excellent service and support throughout the installation. I feel good about helping the environment too!",
    image: "/placeholder.svg?height=100&width=100",
    },
    ]
    

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-1 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                      <span className="text-orange-600 font-bold text-xl">{product.ourPrice}</span>
                    </div>
                    <Badge variant="secondary">{product.warranty}</Badge>
                  </div>
                  {/* <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {product.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul> */}
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
              <div className="space-y-4 mb-8">
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
              </div>
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

      {/* Why Solar Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Solar Energy?</h2>
            <p className="text-xl text-gray-600">Sustainable, economical, and future-ready energy solution</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
              <p className="text-gray-600 mb-4">Reduce carbon footprint and contribute to a cleaner planet</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Zero carbon emissions</li>
                <li>• Reduces air pollution</li>
                <li>• Renewable energy source</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
              <p className="text-gray-600 mb-4">Save up to 90% on electricity bills with solar power</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 70-90% bill reduction</li>
                <li>• 4-6 year payback period</li>
                <li>• 25+ years free electricity</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy Independence</h3>
              <p className="text-gray-600 mb-4">Generate your own clean energy and reduce grid dependency</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Reduce import dependency</li>
                <li>• Grid backup available</li>
                <li>• Net metering benefits</li>
              </ul>
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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">System Design & Installation</h3>
              <p className="text-gray-600">Customized solar system design and professional installation tailored to your home</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
              <p className="text-gray-600">Ongoing maintenance and 24/7 support to ensure optimal system performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Monitoring</h3>
              <p className="text-gray-600">Real-time monitoring with WiFi-enabled systems to track energy production</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

   

           {/* Our Process Section */}
           <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Simple steps to go solar with ease</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation & Site Survey</h3>
              <p className="text-gray-600">Our experts assess your needs and conduct a detailed site survey</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customized System Design</h3>
              <p className="text-gray-600">Tailored solar solutions designed for maximum efficiency</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Workflow className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hassle-Free Installation</h3>
              <p className="text-gray-600">Professional installation with minimal disruption</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/process">
                See Our Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

     

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SolarDeals India?</h2>
            <p className="text-xl text-gray-600">Your trusted partner for solar energy solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
{testimonials.map((testimonial, idx) => (
<Card key={idx} className="text-center hover:shadow-lg transition-shadow">
<CardContent className="p-6 flex flex-col items-center">
<Image
src={testimonial.image}
alt={testimonial.name}
width={80}
height={80}
className="rounded-full mb-4"
/>
<p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
<div className="font-semibold text-gray-900">{testimonial.name}</div>
<div className="text-sm text-gray-500">{testimonial.location}</div>
</CardContent>
</Card>
))}
</div>
</div>
</section>

       {/* Brands We Carry */}
       <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Brands We Carry</h2>
            <p className="text-lg text-gray-600">We partner with top Indian and global solar brands</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
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