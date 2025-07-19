"use client"

import { useState } from "react"
import { Zap, Shield, TrendingUp, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const recommendations = [
  {
    id: 1,
    title: "Budget-Friendly Solar Setup",
    subtitle: "Best value for money",
    totalCost: 180000,
    monthlySavings: 2500,
    paybackPeriod: 6.2,
    capacity: "3kW",
    components: [
      {
        type: "Solar Panels",
        product: "Waaree 335W Poly Panels",
        quantity: 9,
        price: 90000,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        type: "Inverter",
        product: "Microtek 3KW Solar Inverter",
        quantity: 1,
        price: 28000,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        type: "Battery",
        product: "Exide 150Ah Solar Battery",
        quantity: 2,
        price: 25000,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        type: "Installation",
        product: "Complete Installation & Setup",
        quantity: 1,
        price: 37000,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    pros: ["Lowest upfront cost", "Good quality components", "5-year warranty", "Quick payback period"],
    cons: ["Lower efficiency panels", "Basic monitoring features"],
  },
  {
    id: 2,
    title: "Premium Solar Solution",
    subtitle: "Maximum efficiency & features",
    totalCost: 280000,
    monthlySavings: 3200,
    paybackPeriod: 7.3,
    capacity: "5kW",
    components: [
      {
        type: "Solar Panels",
        product: "Tata 540W Mono PERC Panels",
        quantity: 10,
        price: 185000,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        type: "Inverter",
        product: "Luminous 5KW MPPT Inverter",
        quantity: 1,
        price: 45000,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        type: "Battery",
        product: "Luminous 200Ah Lithium Battery",
        quantity: 1,
        price: 35000,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        type: "Installation",
        product: "Premium Installation & Monitoring",
        quantity: 1,
        price: 15000,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    pros: [
      "Highest efficiency panels",
      "Advanced MPPT technology",
      "WiFi monitoring",
      "25-year panel warranty",
      "Lithium battery technology",
    ],
    cons: ["Higher upfront investment", "Longer payback period"],
  },
  {
    id: 3,
    title: "Balanced Solar Package",
    subtitle: "Perfect balance of cost & performance",
    totalCost: 230000,
    monthlySavings: 2800,
    paybackPeriod: 6.8,
    capacity: "4kW",
    components: [
      {
        type: "Solar Panels",
        product: "Adani 400W Mono Panels",
        quantity: 10,
        price: 152000,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        type: "Inverter",
        product: "Luminous 4KW Hybrid Inverter",
        quantity: 1,
        price: 38000,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        type: "Battery",
        product: "Exide 180Ah Tubular Battery",
        quantity: 2,
        price: 28000,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        type: "Installation",
        product: "Standard Installation Package",
        quantity: 1,
        price: 12000,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    pros: [
      "Good efficiency panels",
      "Hybrid inverter technology",
      "Reliable tubular batteries",
      "Balanced cost-performance",
      "10-year system warranty",
    ],
    cons: ["Mid-range efficiency", "Basic monitoring features"],
  },
]

export default function RecommendationsPage() {
  const [selectedPackage, setSelectedPackage] = useState("")
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Recommendations */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended Solar Packages</h2>
            <p className="text-gray-600">Choose the perfect solar solution for your home</p>
          </div>

          <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {recommendations.map((rec, index) => (
                <Card
                  key={rec.id}
                  className={`relative cursor-pointer transition-all ${
                    selectedPackage === rec.id.toString() ? "ring-2 ring-orange-500 shadow-lg" : "hover:shadow-md"
                  } ${index === 1 ? "lg:scale-105 border-orange-200" : ""}`}
                >
                  {index === 1 && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-xs sm:text-sm">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg sm:text-xl">{rec.title}</CardTitle>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">{rec.subtitle}</p>
                      </div>
                      <RadioGroupItem value={rec.id.toString()} />
                    </div>
                    <div className="text-center py-3 sm:py-4">
                      <div className="text-2xl sm:text-3xl font-bold text-orange-600">
                        ₹{rec.totalCost.toLocaleString()}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Total System Cost</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center text-xs sm:text-sm">
                      <div>
                        <div className="font-semibold text-green-600">₹{rec.monthlySavings}</div>
                        <div className="text-gray-600">Monthly Savings</div>
                      </div>
                      <div>
                        <div className="font-semibold">{rec.paybackPeriod} years</div>
                        <div className="text-gray-600">Payback Period</div>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-600">{rec.capacity}</div>
                        <div className="text-gray-600">System Capacity</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Components */}
                    <div>
                      <h4 className="font-semibold mb-3">System Components:</h4>
                      <div className="space-y-3">
                        {rec.components.map((component, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <Image
                              src={component.image || "/placeholder.svg"}
                              alt={component.product}
                              width={40}
                              height={40}
                              className="rounded"
                            />
                            <div className="flex-1">
                              <div className="font-medium text-sm">{component.product}</div>
                              <div className="text-xs text-gray-600">
                                {component.type} × {component.quantity}
                              </div>
                            </div>
                            <div className="text-sm font-semibold">₹{component.price.toLocaleString()}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pros */}
                    <div>
                      <h4 className="font-semibold mb-2 text-green-700">Advantages:</h4>
                      <ul className="space-y-1">
                        {rec.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div>
                      <h4 className="font-semibold mb-2 text-orange-700">Considerations:</h4>
                      <ul className="space-y-1">
                        {rec.cons.map((con, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-4 h-4 rounded-full bg-orange-200 flex-shrink-0"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </RadioGroup>

          {/* Contact Form */}
          {selectedPackage && (
            <Card className="mt-6 sm:mt-8">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Get Detailed Quote</CardTitle>
                <p className="text-gray-600 text-sm sm:text-base">
                  Fill in your details to receive a personalized quote
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Select
                        value={customerInfo.location}
                        onValueChange={(value) => setCustomerInfo({ ...customerInfo, location: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="pune">Pune</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="chennai">Chennai</SelectItem>
                          <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                          <SelectItem value="kolkata">Kolkata</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Selected Package:</h4>
                      <div className="text-sm">
                        {recommendations.find((r) => r.id.toString() === selectedPackage)?.title}
                      </div>
                      <div className="text-2xl font-bold text-orange-600 mt-2">
                        ₹{recommendations.find((r) => r.id.toString() === selectedPackage)?.totalCost.toLocaleString()}
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly Savings:</span>
                        <span className="font-semibold text-green-600">
                          ₹{recommendations.find((r) => r.id.toString() === selectedPackage)?.monthlySavings}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Annual Savings:</span>
                        <span className="font-semibold text-green-600">
                          ₹
                          {(
                            (recommendations.find((r) => r.id.toString() === selectedPackage)?.monthlySavings || 0) * 12
                          ).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payback Period:</span>
                        <span className="font-semibold">
                          {recommendations.find((r) => r.id.toString() === selectedPackage)?.paybackPeriod} years
                        </span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Get Detailed Quote</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Additional Services */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Installation & Warranty
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Professional installation by certified technicians</li>
                  <li>• 25-year panel performance warranty</li>
                  <li>• 5-year system warranty</li>
                  <li>• Free annual maintenance for 2 years</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Financing Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Zero down payment options</li>
                  <li>• EMI starting from ₹3,000/month</li>
                  <li>• Government subsidy assistance</li>
                  <li>• Tax benefit consultation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-600" />
                  Smart Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Real-time energy monitoring</li>
                  <li>• Mobile app with alerts</li>
                  <li>• Performance analytics</li>
                  <li>• Remote troubleshooting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
