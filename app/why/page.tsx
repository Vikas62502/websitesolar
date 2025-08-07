import { Leaf, TrendingUp, Sun, Shield, Zap, Globe, Battery, Home, Factory, Users, AlignJustify } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"

export default function WhyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 text-xs sm:text-sm">
            Green Energy, Bright Future
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose
              <span className="text-green-600"> Solar Energy?</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Switching to solar energy is one of the smartest decisions you can make today — both financially and environmentally. With rising electricity bills and generous government subsidies, installing a solar power system can help you save thousands every year while reducing your carbon footprint. Whether for your home, business, or farm, solar energy ensures reliable, clean, and cost-effective power for decades to come.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 h-12 sm:h-14 text-sm sm:text-base" asChild>
              <Link href="/calculator">
              Check Your Savings Potential
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
            <p className="text-xl text-gray-600">Solar energy is not just good for your pocket — it’s great for the planet too</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://res.cloudinary.com/du0cxgoic/image/upload/v1753179201/33af2323-eede-4894-a30a-8f9580854134_pknta8.jpg"
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
                  <h3 className="text-xl font-semibold mb-2">Clean & Green Power                  </h3>
                  <p className="text-gray-600">
                  A 5kW solar system can reduce around 5 tonnes of carbon dioxide (CO₂) every year — that’s like stopping the pollution of a small car driving over 20,000 km.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Like Planting Trees</h3>
                  <p className="text-gray-600">
                  This is equal to the good work of planting about 130 to 200 trees every year! Just by using solar, you help clean the air and fight climate change.

                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sun className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">India is Perfect for Solar</h3>
                  <p className="text-gray-600">
                  Most places in India get over 250 sunny days in a year. That means solar panels can work really well almost everywhere — especially in sunny states like Rajasthan.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Solar the Smarter Choice?</h2>
            <p className="text-xl text-gray-600">Switching to solar isn’t just good for the environment — it’s a smart financial decision that reduces your monthly expenses, increases the value of your property, and delivers long-term savings through free, renewable energy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>₹0 Electricity Bills Every Month*</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-justify">By generating your own power, you can reduce your electricity bill to almost ₹0/month. A properly sized solar system can cover 100% of your home's electricity needs, eliminating monthly utility expenses.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Government Subsidy up to ₹95,000*</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-justify">Avail ₹78,000 under the PM Surya Ghar: Muft Bijli Yojana and ₹17,000 under the Mukhyamantri Nishulk Bijli Yojana, making solar more affordable than ever with a combined subsidy of ₹95,000* on residential rooftop systems.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>25+ Years of Free Power Guaranteed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-justify">Solar is a one-time investment with benefits that last decades. After the system pays for itself (usually within 3–5 years), the remaining 20+ years are pure savings on electricity.                </p>
              </CardContent>
            </Card>
 
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Up to 30% Higher Property Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-justify">Homes with solar installations can see an increase in resale value by up to 30%. Buyers are willing to pay more for energy-efficient homes with zero monthly electricity bills.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Beat Rising Electricity Rates Smartly</CardTitle>
              </CardHeader>
              <CardContent>
               <p className="text-justify">Electricity tariffs increase by 6–10% annually in many states. With solar, you lock in your energy cost, avoiding the impact of rising utility prices for the next two decades or more.               </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>One-Time Setup, Low Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
               <p className="text-justify">After installation, your solar system runs with minimal maintenance—just occasional cleaning. With no moving parts, most users report smooth performance without service issues for years.</p>
              </CardContent>
            </Card>
          </div>


          {/* Cost Comparison */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="text-center text-2xl">25-Year Cost Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4 text-red-600">Without Solar</h3>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-red-600">₹18,00,000</div>
                      <div className="text-sm text-gray-600">Estimated total electricity cost over 25 years</div>
                      <div className="text-sm text-gray-600 font-semibold text-red-600">(Based on ₹5,000/month with 5% annual increase in electricity rates)</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4 text-green-600">With Solar</h3>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-green-600">₹3,00,000</div>
                      <div className="text-sm text-gray-600">One-time solar system investment for 25 years of free power</div>
                      <div className="text-sm text-gray-600 font-semibold text-green-600">
                      ✅ Save up to ₹15,00,000 over 25 years!
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
      {/* <section className="py-20 bg-white">
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
                src="https://res.cloudinary.com/du0cxgoic/image/upload/v1753178885/103ab3a8-f95b-454d-af85-486260b0655d_klthhk.jpg"
                alt="India's solar energy growth"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Technology & Reliability */}
      {/* <section className="py-20 bg-gray-50">
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
      </section> */}

<FAQSection
      title="Frequently Asked Questions"
      faqs={[
        {
          question: "Why should I invest in solar energy now?",
          answer:
            "Solar prices are at their lowest, and government subsidies are available — it's the perfect time to save money and switch to clean energy.",
        },
        {
          question: "How does going solar increase my property value?",
          answer:
            "Homes with solar systems are seen as modern, energy-efficient, and low-cost to run — making them more attractive to buyers.",
        },
        {
          question: "Is solar power really reliable for my daily use?",
          answer:
            "Yes. A properly installed solar system can run lights, fans, fridges, ACs, and even heavy appliances efficiently.",
        },
        {
          question: "What if I generate more electricity than I use?",
          answer:
            "You can send extra power to the grid and earn credit — it’s called net metering and it reduces your electricity bill even more.",
        },
        {
          question: "Can solar help me become energy independent?",
          answer:
            "Absolutely. With solar + battery setup, you can reduce or even eliminate your dependence on the power grid.",
        },
        {
          question: "Is solar energy safe for my family and home?",
          answer:
            "Yes, 100%. Solar systems follow strict safety standards and are installed by certified professionals.",
        },
        {
          question: "Can I afford solar? Is EMI or finance available?",
          answer:
            "Yes, you can! We offer easy EMI options, solar loans, and also have a 'Get Solar At Zero Investment' plan — making solar accessible for every budget.",
        },
      ]}
    />

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
