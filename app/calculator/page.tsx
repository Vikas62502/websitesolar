"use client"

import { useState, useEffect } from "react"
import { Zap, Leaf, DollarSign } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LeadModal } from "@/components/lead-modal"
import { useLeadModal } from "@/hooks/use-lead-modal"
import Calculator from "@/components/calculator-icon" // Declare the Calculator variable

export default function CalculatorPage() {
  // Remove showCalculator state
  const [monthlyBill, setMonthlyBill] = useState(3000)
  const [roofArea, setRoofArea] = useState(500)
  const [location, setLocation] = useState("")
  const [roofType, setRoofType] = useState("")
  const [electricityRate, setElectricityRate] = useState([6])
  const [showResults, setShowResults] = useState(false)

  const { isOpen, openModal, closeModal, modalProps } = useLeadModal()

  // Calculations
  const annualConsumption = (monthlyBill * 12) / electricityRate[0]
  const requiredCapacity = Math.ceil(annualConsumption / 1200) // Assuming 1200 units per kW annually
  const systemCost = requiredCapacity * 60000 // ₹60,000 per kW
  const annualSavings = annualConsumption * electricityRate[0]
  const paybackPeriod = systemCost / annualSavings
  const co2Reduction = annualConsumption * 0.82 // 0.82 kg CO2 per unit
  const twentyYearSavings = annualSavings * 20 - systemCost

  const handleLeadSubmit = (data: any) => {
    setShowResults(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />

      {/* Always show calculator form and results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">Enter Your Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div>
                <Label htmlFor="monthly-bill">Monthly Electricity Bill (₹)</Label>
                <Input
                  id="monthly-bill"
                  type="number"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="roof-area">Available Roof Area (sq ft)</Label>
                <Input
                  id="roof-area"
                  type="number"
                  value={roofArea}
                  onChange={(e) => setRoofArea(Number(e.target.value))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="location">Location (State)</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="gujarat">Gujarat</SelectItem>
                    <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                    <SelectItem value="telangana">Telangana</SelectItem>
                    <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                    <SelectItem value="haryana">Haryana</SelectItem>
                    <SelectItem value="punjab">Punjab</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="roof-type">Roof Type</Label>
                <Select value={roofType} onValueChange={setRoofType}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select roof type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="concrete">Concrete/RCC</SelectItem>
                    <SelectItem value="metal">Metal Sheet</SelectItem>
                    <SelectItem value="tile">Tile Roof</SelectItem>
                    <SelectItem value="asbestos">Asbestos Sheet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Electricity Rate (₹/unit): ₹{electricityRate[0]}</Label>
                <Slider
                  value={electricityRate}
                  onValueChange={setElectricityRate}
                  max={12}
                  min={3}
                  step={0.5}
                  className="mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹3</span>
                  <span>₹12</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results: Only show after lead form is submitted */}
          
            <div className="space-y-4 sm:space-y-6">
            {showResults && (
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                    System Recommendation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="text-center p-3 sm:p-4 bg-orange-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-orange-600">{requiredCapacity} kW</div>
                      <div className="text-xs sm:text-sm text-gray-600">Recommended Capacity</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">
                        {Math.ceil(requiredCapacity * 2.5)}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Solar Panels Needed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            {showResults && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    Financial Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>System Cost:</span>
                    <span className="font-semibold">₹{systemCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Annual Savings:</span>
                    <span className="font-semibold text-green-600">₹{Math.round(annualSavings).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Payback Period:</span>
                    <span className="font-semibold">{paybackPeriod.toFixed(1)} years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>20-Year Savings:</span>
                    <span className="font-semibold text-green-600">
                      ₹{Math.round(twentyYearSavings).toLocaleString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}
            {showResults && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    Environmental Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{Math.round(co2Reduction)} kg</div>
                    <div className="text-sm text-gray-600">CO₂ Reduction per year</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 text-center">
                    Equivalent to planting {Math.round(co2Reduction / 22)} trees annually
                  </p>
                </CardContent>
              </Card>
          )}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="flex-1 h-11 sm:h-12"
                  onClick={() =>
                    openModal({
                      title: "Get a Detailed Solar Quote",
                      subtitle: "Provide your details to receive a personalized solar quote and expert recommendations.",
                      source: "calculator_detailed_quote",
                    })
                  }
                >
                  Get Detailed Quote
                </Button>
                <Button variant="outline" className="flex-1 h-11 sm:h-12 bg-transparent" asChild>
                  <Link href="/products">View Products</Link>
                </Button>
              </div>
            </div>
          
        </div>

        {/* Additional Information */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Government Subsidies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Get up to 40% subsidy on residential solar installations under PM-KUSUM scheme. Additional state
                subsidies may apply.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Net Metering</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Sell excess electricity back to the grid and earn credits on your electricity bill through net
                metering policies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Solar panels require minimal maintenance. Annual cleaning and inspection ensure optimal performance
                for 25+ years.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <LeadModal
        isOpen={isOpen}
        onClose={closeModal}
        title={modalProps.title}
        subtitle={modalProps.subtitle}
        source={modalProps.source}
        onSubmit={handleLeadSubmit}
      />

      <Footer />
    </div>
  )
}
