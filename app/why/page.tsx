import { Leaf, TrendingUp, Sun, Shield, Zap, Globe, Battery, Home, Factory, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function WhyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 text-xs sm:text-sm">
              Sustainable Future
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose
              <span className="text-green-600"> Solar Energy?</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Discover the environmental, economic, and social benefits of switching to solar energy. Join millions of
              Indians who are already powering their homes with clean, renewable energy.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 h-12 sm:h-14 text-sm sm:text-base" asChild>
              <Link href="/calculator">
                Calculate Your Impact
                <Leaf className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Environmental Sustainability</h2>
            <p className="text-xl text-gray-600">Make a positive impact on our planet</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Clean environment with solar energy"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Zero Carbon Emissions</h3>
                  <p className="text-gray-600">
                    Solar energy produces no greenhouse gases during operation. A typical 5kW home solar system prevents
                    6-8 tons of CO₂ emissions annually - equivalent to planting 150-200 trees every year.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reduced Air Pollution</h3>
                  <p className="text-gray-600">
                    By reducing dependence on fossil fuels, solar energy helps improve air quality in Indian cities.
                    Every kWh of solar energy prevents 0.82 kg of CO₂ from entering the atmosphere.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sun className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Renewable Resource</h3>
                  <p className="text-gray-600">
                    India receives 300+ sunny days annually with 4-7 kWh/m² solar irradiation. This abundant renewable
                    resource will never run out, unlike fossil fuels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Economic Advantages</h2>
            <p className="text-xl text-gray-600">Smart financial investment for your future</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Massive Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Save 70-90% on electricity bills</li>
                  <li>• Average payback period: 4-6 years</li>
                  <li>• 25+ years of free electricity</li>
                  <li>• ROI of 15-20% annually</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Government Incentives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Up to 40% central subsidy</li>
                  <li>• Additional state subsidies</li>
                  <li>• Tax benefits under Section 80C</li>
                  <li>• Accelerated depreciation for businesses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Net Metering Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sell excess power to grid</li>
                  <li>• Earn credits on electricity bill</li>
                  <li>• Available in all major states</li>
                  <li>• Additional income source</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Cost Comparison */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-center text-2xl">20-Year Cost Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4 text-red-600">Without Solar</h3>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-red-600">₹12,00,000</div>
                      <div className="text-sm text-gray-600">Total electricity cost over 20 years</div>
                      <div className="text-sm text-gray-600">(₹5,000/month with 5% annual increase)</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4 text-green-600">With Solar</h3>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-green-600">₹3,00,000</div>
                      <div className="text-sm text-gray-600">One-time solar investment</div>
                      <div className="text-sm text-gray-600 font-semibold text-green-600">
                        Save ₹9,00,000 over 20 years!
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Energy Independence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Energy Independence for India</h2>
              <p className="text-xl text-gray-600">
                Solar energy is crucial for India's energy security and economic growth.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Home className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Reduce Import Dependency</h3>
                    <p className="text-gray-600 text-sm">
                      India imports 85% of its crude oil. Solar reduces dependence on fossil fuel imports.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Factory className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Job Creation</h3>
                    <p className="text-gray-600 text-sm">
                      Solar industry has created 100,000+ jobs in India and continues to grow rapidly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Rural Electrification</h3>
                    <p className="text-gray-600 text-sm">
                      Solar power brings electricity to remote areas where grid connection is challenging.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="India's solar energy growth"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Reliability */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Technology & Reliability</h2>
            <p className="text-xl text-gray-600">Modern solar systems are more efficient and durable than ever</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Battery className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">25+ Years Lifespan</h3>
                <p className="text-sm text-gray-600">Solar panels come with 25-year performance warranty</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">22%+ Efficiency</h3>
                <p className="text-sm text-gray-600">Modern panels convert more sunlight to electricity</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Weather Resistant</h3>
                <p className="text-sm text-gray-600">Designed to withstand Indian weather conditions</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Low Maintenance</h3>
                <p className="text-sm text-gray-600">Minimal upkeep required - just occasional cleaning</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make the Switch?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join the solar revolution and start saving money while protecting the environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
              <Link href="/calculator">
                Calculate Your Savings
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              asChild
            >
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
