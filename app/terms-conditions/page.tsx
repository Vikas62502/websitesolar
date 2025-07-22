import { FileText, Scale, Shield, AlertTriangle, Users, CreditCard } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="h-8 w-8 text-gray-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
            <p className="text-xl text-gray-600 mb-4">
              Please read these terms and conditions carefully before using our services.
            </p>
            <p className="text-sm text-gray-500">Last updated: January 15, 2024</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  By accessing and using the SolarDeals India website and services, you accept and agree to be bound by
                  the terms and provision of this agreement. If you do not agree to abide by the above, please do not
                  use this service.
                </p>
                <p className="text-gray-600">
                  These Terms and Conditions ("Terms") govern your use of our website located at solardeals.in (the
                  "Service") operated by SolarDeals India Pvt. Ltd. ("us", "we", or "our").
                </p>
              </CardContent>
            </Card>

            {/* Use License */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  Use License
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Permission is granted to temporarily download one copy of the materials on SolarDeals India's website
                  for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
                  of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>modify or copy the materials</li>
                  <li>
                    use the materials for any commercial purpose or for any public display (commercial or
                    non-commercial)
                  </li>
                  <li>attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  This license shall automatically terminate if you violate any of these restrictions and may be
                  terminated by us at any time.
                </p>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-orange-600" />
                  Services Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">SolarDeals India provides the following services:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Solar product marketplace connecting customers with manufacturers and installers</li>
                  <li>Solar system design and cost estimation tools</li>
                  <li>Quote comparison and recommendation services</li>
                  <li>Installation coordination and project management</li>
                  <li>Customer support and after-sales service</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We act as an intermediary platform and do not directly manufacture or install solar systems. All
                  installations are performed by our verified partner installers.
                </p>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide accurate and complete information when requesting quotes or services</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Respect the intellectual property rights of SolarDeals India and third parties</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                  Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service Fees</h3>
                  <p className="text-gray-600">
                    Our platform services are generally free for customers. We earn commission from partner installers
                    and manufacturers for successful referrals.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Solar System Payments</h3>
                  <p className="text-gray-600 mb-2">
                    Payments for solar systems are made directly to the installer or manufacturer. Payment terms
                    include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Advance payment as per installer's terms (typically 20-40%)</li>
                    <li>Progress payments during installation</li>
                    <li>Final payment upon successful commissioning</li>
                    <li>All payments are subject to applicable taxes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Refund Policy</h3>
                  <p className="text-gray-600">
                    Refunds are handled by individual installers according to their policies. We will assist in
                    resolving any payment disputes between customers and installers.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Warranties and Disclaimers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-indigo-600" />
                  Warranties and Disclaimers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Platform Warranty</h3>
                  <p className="text-gray-600">
                    We strive to provide accurate information and reliable services, but we make no warranties about the
                    completeness, reliability, or accuracy of information on our platform.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Product Warranties</h3>
                  <p className="text-gray-600">
                    Solar products come with manufacturer warranties. Installation work is warranted by the respective
                    installers. We are not responsible for product or installation warranties.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Disclaimer</h3>
                  <p className="text-gray-600">
                    Our services are provided "as is" without any express or implied warranties. We disclaim all
                    warranties, including but not limited to warranties of merchantability, fitness for a particular
                    purpose, and non-infringement.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  In no event shall SolarDeals India or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use our services, even if we have been notified orally or in writing of the
                  possibility of such damage.
                </p>
                <p className="text-gray-600">
                  Our total liability to you for all damages, losses, and causes of action shall not exceed the amount
                  paid by you, if any, for accessing our services.
                </p>
              </CardContent>
            </Card>

            {/* Privacy Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-teal-600" />
                  Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                  information when you use our services. By using our services, you agree to the collection and use of
                  information in accordance with our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-red-600" />
                  Termination
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice or
                  liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-gray-600">
                  Upon termination, your right to use our services will cease immediately. All provisions of the Terms
                  which by their nature should survive termination shall survive termination.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="h-6 w-6 text-gray-600" />
                  Governing Law
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  These Terms shall be interpreted and governed by the laws of India. Any disputes arising under these
                  Terms shall be subject to the exclusive jurisdiction of the courts in Gurugram, Haryana, India.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  Changes to Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material, we will try to provide at least 30 days notice prior to any new terms taking
                  effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-green-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Email:</strong> legal@solardeals.in
                  </p>
                  <p>
                    <strong>Phone:</strong> 1800-123-SOLAR
                  </p>
                  <p>
                    <strong>Address:</strong> SolarDeals India Pvt. Ltd., Tower A, Cyber City, Gurugram, Haryana 122002
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
