"use client"
import { useState } from "react"
import { ArrowRight, Calculator, TrendingUp, Leaf, Sun, Shield, Users, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HomeLeadSection } from "@/components/home-lead-section"
import { LeadModal } from "@/components/lead-modal"

export default function HomePage() {
  const [leadProduct, setLeadProduct] = useState<string | null>(null)

  const products = [
    {
      name: "Tata Solar 540W Mono PERC",
      image: "/placeholder.svg?height=200&width=300",
      alt: "Tata Solar Panel",
      originalPrice: "₹22,000",
      ourPrice: "₹18,500",
      warranty: "25 Year Warranty",
      features: [
        "540W High Efficiency",
        "Mono PERC Technology",
        "Made in India",
      ],
    },
    {
      name: "Luminous 5KW Solar Inverter",
      image: "/placeholder.svg?height=200&width=300",
      alt: "Luminous Inverter",
      originalPrice: "₹52,000",
      ourPrice: "₹45,000",
      warranty: "5 Year Warranty",
      features: [
        "MPPT Technology",
        "WiFi Monitoring",
        "Indian Brand",
      ],
    },
    {
      name: "Waaree 445W Bifacial Panel",
      image: "/placeholder.svg?height=200&width=300",
      alt: "Waaree Solar Panel",
      originalPrice: "₹20,000",
      ourPrice: "₹16,800",
      warranty: "25 Year Warranty",
      features: [
        "Bifacial Technology",
        "445W Output",
        "Premium Quality",
      ],
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
                src="/placeholder.svg?height=500&width=600"
                alt="Solar panels on Indian home"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
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

      {/* Stats Section */}
      {/* <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">500+</div>
              <div className="text-gray-600 text-sm sm:text-base">Solar Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">50+</div>
              <div className="text-gray-600 text-sm sm:text-base">Indian Brands</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">10K+</div>
              <div className="text-gray-600 text-sm sm:text-base">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">₹50Cr+</div>
              <div className="text-gray-600 text-sm sm:text-base">Savings Generated</div>
            </div>
          </div>
        </div>
      </section> */}

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
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={335}
                    height={200}
                    className="rounded-lg mb-4"
                  />
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
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {product.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
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
                  &times;
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

      {/* Contact CTA Section */}
      <section className="py-16 bg-white">
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
      </section>

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

      {/* About Us Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About SolarDeals India</h2>
              <p className="text-xl text-gray-600 mb-6">
                Founded by renewable energy veterans, we're building India's most trusted solar marketplace to make
                clean energy accessible to every household.
              </p>
              <div className="space-y-4">
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

              <div className="mt-8">
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
                src="/placeholder.svg?height=400&width=500"
                alt="SolarDeals India team"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
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

      <Footer />
    </div>
  )
}
