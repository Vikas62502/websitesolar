import { MapPin, Phone, Mail, Clock, MessageCircle, Headphones, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-blue-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Get in <span className="text-orange-600">Touch</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Have questions about solar energy? Need help choosing the right system? Our solar experts are here to help
              you make the switch to clean energy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm mb-4">Speak directly with our solar experts</p>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">1800-123-SOLAR</p>
                  <p className="text-gray-500">Toll-free • Mon-Sat, 9 AM - 7 PM</p>
                </div>
                <Button className="mt-4 w-full bg-orange-600 hover:bg-orange-700">Call Now</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">Get instant answers to your questions</p>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">Available 24/7</p>
                  <p className="text-gray-500">Average response time: 2 minutes</p>
                </div>
                <Button variant="outline" className="mt-4 w-full bg-transparent">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm mb-4">Send us your detailed requirements</p>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">info@solardeals.in</p>
                  <p className="text-gray-500">Response within 4 hours</p>
                </div>
                <Button variant="outline" className="mt-4 w-full bg-transparent">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Send Us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" className="mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="Enter your phone number" className="mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="pune">Pune</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="chennai">Chennai</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quote">Get Solar Quote</SelectItem>
                          <SelectItem value="product">Product Inquiry</SelectItem>
                          <SelectItem value="installation">Installation Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="complaint">Complaint/Issue</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your solar requirements, questions, or how we can help you..."
                      className="mt-1"
                      rows={5}
                    />
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700 h-12">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Office Locations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    Our Offices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900">Head Office - Gurugram</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      SolarDeals India Pvt. Ltd.
                      <br />
                      Tower A, Cyber City
                      <br />
                      Gurugram, Haryana 122002
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Regional Office - Mumbai</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Level 15, One World Center
                      <br />
                      Senapati Bapat Marg
                      <br />
                      Mumbai, Maharashtra 400013
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Regional Office - Bangalore</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Embassy Tech Village
                      <br />
                      Outer Ring Road
                      <br />
                      Bangalore, Karnataka 560103
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-orange-600 font-medium">Emergency Support: 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Channels */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Headphones className="h-5 w-5 text-green-600" />
                    Support Channels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="font-medium">Customer Support</p>
                        <p className="text-sm text-gray-600">1800-123-SOLAR</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="font-medium">General Inquiries</p>
                        <p className="text-sm text-gray-600">info@solardeals.in</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="font-medium">Partnership</p>
                        <p className="text-sm text-gray-600">partners@solardeals.in</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How quickly can I get a solar quote?</h3>
                <p className="text-gray-600 text-sm">
                  You can get an instant estimate using our solar calculator. For a detailed quote, our experts will
                  contact you within 24 hours after you submit your requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Do you provide installation services?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we work with certified installation partners across India. We handle the entire process from
                  design to commissioning and provide ongoing support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What financing options are available?</h3>
                <p className="text-gray-600 text-sm">
                  We offer various financing options including zero down payment plans, EMI options, and help with
                  government subsidies. Our team will help you find the best financing solution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How long does installation take?</h3>
                <p className="text-gray-600 text-sm">
                  Typical residential installations take 1-3 days depending on system size. The entire process from
                  approval to commissioning usually takes 2-4 weeks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
