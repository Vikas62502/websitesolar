"use client"

import type React from "react"

import { useState } from "react"
import { X, Phone, Mail, MapPin, User, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

interface LeadModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  subtitle?: string
  source?: string
  onSubmit?: (data: any) => void
}

export function LeadModal({
  isOpen,
  onClose,
  title = "Get Your Free Solar Quote",
  subtitle = "Fill in your details and our solar experts will contact you within 24 hours",
  source = "general",
  onSubmit,
}: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    propertyType: "",
    monthlyBill: "",
    roofArea: "",
    timeframe: "",
    message: "",
    agreeToTerms: false,
    source: source,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    if (onSubmit) {
      onSubmit(formData)
    }

    // Auto close after success
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        propertyType: "",
        monthlyBill: "",
        roofArea: "",
        timeframe: "",
        message: "",
        agreeToTerms: false,
        source: source,
      })
    }, 2000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">{subtitle}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="p-2">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Success State */}
        {isSubmitted && (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">
              Your request has been submitted successfully. Our solar expert will contact you within 24 hours.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-orange-800">
                <strong>Next Steps:</strong> We'll analyze your requirements and prepare a customized solar solution for
                your home.
              </p>
            </div>
          </div>
        )}

        {/* Form */}
        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location">Location (City) *</Label>
                <div className="relative mt-1">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
                    <SelectTrigger className="pl-10">
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
                      <SelectItem value="jaipur">Jaipur</SelectItem>
                      <SelectItem value="lucknow">Lucknow</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="propertyType">Property Type</Label>
                <div className="relative mt-1">
                  <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Select
                    value={formData.propertyType}
                    onValueChange={(value) => handleInputChange("propertyType", value)}
                  >
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="independent-house">Independent House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="monthlyBill">Monthly Electricity Bill (₹)</Label>
                <Input
                  id="monthlyBill"
                  type="number"
                  value={formData.monthlyBill}
                  onChange={(e) => handleInputChange("monthlyBill", e.target.value)}
                  placeholder="e.g., 3000"
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="roofArea">Available Roof Area (sq ft)</Label>
                <Input
                  id="roofArea"
                  type="number"
                  value={formData.roofArea}
                  onChange={(e) => handleInputChange("roofArea", e.target.value)}
                  placeholder="e.g., 500"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="timeframe">Installation Timeframe</Label>
                <Select value={formData.timeframe} onValueChange={(value) => handleInputChange("timeframe", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (Within 1 month)</SelectItem>
                    <SelectItem value="3-months">Within 3 months</SelectItem>
                    <SelectItem value="6-months">Within 6 months</SelectItem>
                    <SelectItem value="planning">Just planning/researching</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="message">Additional Requirements (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Tell us about any specific requirements or questions..."
                className="mt-1"
                rows={3}
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to receive calls/SMS from SolarDeals India and accept the{" "}
                <a href="/privacy" className="text-orange-600 hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="text-orange-600 hover:underline">
                  Terms of Service
                </a>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                disabled={!formData.agreeToTerms || isSubmitting}
                className="flex-1 bg-orange-600 hover:bg-orange-700 h-12"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  "Get Free Quote"
                )}
              </Button>
              <Button type="button" variant="outline" onClick={onClose} className="h-12 bg-transparent">
                Cancel
              </Button>
            </div>

            <div className="text-center text-xs text-gray-500">
              <p>🔒 Your information is secure and will not be shared with third parties</p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
