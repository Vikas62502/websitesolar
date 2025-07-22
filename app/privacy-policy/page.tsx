import { Shield, Eye, Lock, UserCheck, FileText, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600 mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500">Last updated: January 15, 2024</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-blue-600" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <p className="text-gray-600 mb-2">We collect information you provide directly to us, including:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Name, email address, phone number, and postal address</li>
                    <li>Property details (roof area, electricity consumption, location)</li>
                    <li>Payment information and billing details</li>
                    <li>Communication preferences and feedback</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-600 mb-2">
                    We automatically collect certain information when you use our services:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, click patterns)</li>
                    <li>Location data (with your permission)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-green-600" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide and improve our solar marketplace services</li>
                  <li>Process your solar system quotes and installation requests</li>
                  <li>Connect you with verified solar installers and manufacturers</li>
                  <li>Send you important updates about your solar projects</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Personalize your experience and show relevant content</li>
                  <li>Conduct research and analytics to improve our platform</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-orange-600" />
                  Information Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">With Your Consent</h3>
                  <p className="text-gray-600">
                    We share your information with third parties when you give us explicit consent, such as connecting
                    you with solar installers for quotes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service Providers</h3>
                  <p className="text-gray-600">
                    We work with trusted third-party service providers who help us operate our platform, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Payment processors and financial institutions</li>
                    <li>Cloud hosting and data storage providers</li>
                    <li>Email and communication service providers</li>
                    <li>Analytics and marketing platforms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                  <p className="text-gray-600">
                    We may disclose your information if required by law, regulation, or legal process, or to protect the
                    rights, property, or safety of SolarDeals India, our users, or others.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="h-6 w-6 text-red-600" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. We cannot
                  guarantee absolute security of your information.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-purple-600" />
                  Your Rights and Choices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal information we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal information (subject to legal
                    requirements)
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data to another service provider
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time
                  </li>
                  <li>
                    <strong>Restrict Processing:</strong> Request limitation of how we use your information
                  </li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-indigo-600" />
                  Cookies and Tracking Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve our services and user experience</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may affect the
                  functionality of our website.
                </p>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-teal-600" />
                  Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">We retain your personal information for as long as necessary to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide our services and support your solar projects</li>
                  <li>Comply with legal, regulatory, and tax requirements</li>
                  <li>Resolve disputes and enforce our agreements</li>
                  <li>Improve our services and conduct business analytics</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-pink-600" />
                  Children's Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our services are not intended for children under 18 years of age. We do not knowingly collect personal
                  information from children under 18. If we become aware that we have collected personal information
                  from a child under 18, we will take steps to delete such information.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-gray-600" />
                  Changes to This Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to
                  review this Privacy Policy periodically for any changes.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Email:</strong> privacy@solardeals.in
                  </p>
                  <p>
                    <strong>Phone:</strong> 1800-123-SOLAR
                  </p>
                  <p>
                    <strong>Address:</strong> SolarDeals India Pvt. Ltd., Tower A, Cyber City, Gurugram, Haryana 122002
                  </p>
                </div>
                <p className="text-gray-600 mt-4">We will respond to your inquiry within 30 days.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
