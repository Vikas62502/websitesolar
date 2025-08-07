"use client"
import { MapPin, Phone, Mail, Clock, MessageCircle, Headphones, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  // Collapsible FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const faqs = [
    {
      question: "How can I schedule a free site visit or consultation?",
      answer:
        "You can easily schedule a free site visit or consultation by filling out the contact form on this page, calling us directly, or sending us an email. Just share your basic details and location — and our team will get back to you within 24 hours to confirm the visit timing.",
    },
    {
      question: "What’s the best way to contact Chairbord — phone, email, or form?",
      answer:
        "The quickest and most convenient way to connect with us is via WhatsApp. You can chat with our support team in real time, ask questions, or request a callback. Simply click the WhatsApp icon on our website or message us directly at +91 9785230023. Alternatively, you can also fill out the contact form or email us — we typically respond within 24 hours.",
    },
    {
      question: "When can I expect a reply after submitting the contact form?",
      answer:
        "You can expect a response from our team within 24 business hours. If you contact us during our working hours (Mon–Sat, 9 AM to 6 PM), we usually reply the same day.",
    },
    {
      question: "Do I need an appointment before visiting your office?",
      answer:
        "While walk-ins are welcome during business hours, we recommend scheduling an appointment in advance to ensure that a dedicated expert is available to assist you without any wait. You can call us or fill out the contact form to book your visit.",
    },
    {
      question: "Who should I contact for partnership or dealership inquiries?",
      answer:
        "For partnership or dealership inquiries, please email us at info@chairbordsolar.com or call us directly at +91 9251666646. Our team will be happy to assist you.",
    },
    {
      question: "What documents are required for a solar subsidy application?",
      answer:
        "Document requirements can vary slightly depending on your location and DISCOM. The best way to ensure you have the correct paperwork is to connect with our experts — they’ll guide you through the entire process and help you prepare everything needed for a smooth subsidy application.",
    },
    {
      question: "Is your customer support available on Sundays or public holidays?",
      answer:
        "Our customer support team is available Monday to Saturday, from 9:00 AM to 6:00 PM. We are closed on Sundays and public holidays, but you can still submit your queries via our contact form or email, and we’ll get back to you on the next working day.",
    },
    {
      question: "What should I do if I didn’t receive a response within 24 hours?",
      answer:
        "We’re sorry if you haven’t heard back from us yet! While we aim to respond within 24 hours (Mon–Sat), delays may occasionally occur due to high volumes. If it’s been more than a day, feel free to reach out again via call or WhatsApp or email us — we’ll make sure to prioritize your query.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-blue-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Contact <span className="text-orange-600">Us</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Have questions about solar energy? Need help choosing the right system? Our solar experts are here to guide you through every step and make your switch to clean energy simple and hassle-free.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-lg font-semibold mb-2">Phone</h2>
                <p className="text-gray-600 text-sm mb-4">Talk to Our Solar Experts</p>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">+91 97852 30023 | +91 96721 20012 | +91 92516 66646</p>
                  <p className="text-gray-500">Available: Mon–Sat, 9 AM – 6 PM</p>
                </div>
                <a href="tel:9785230023">
                  <Button className="mt-4 w-full bg-orange-600 hover:bg-orange-700">Call Now</Button>
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-lg font-semibold mb-2">Email</h2>
                <p className="text-gray-600 text-sm mb-4">Connect with Our Solar Experts</p>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">info@chairbordsolar.com</p>
                  <p className="text-gray-500">Support Hours: Mon–Sat, 9 AM – 6 PM</p>
                </div>
                <a href="mailto:info@chairbordsolar.com">
                  <Button className="mt-4 w-full bg-orange-600 hover:bg-orange-700">Send Email</Button>
                </a>
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
                <h2 className="text-xl sm:text-2xl font-bold">Get in touch with us</h2>
                <p className="text-gray-600">We’re here to help! Just fill in your details and we’ll be in touch shortly.</p>
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
                  <h2 className="flex items-center gap-2 sm:text-2xl font-bold">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    Visit Our Office
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900">Chairbord Solar</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Plot No. 10, Ground Floor, Shri Shyam Vihar,<br/> Kalwar Road, Gokulpura, Jaipur – 302012<br/>Rajasthan, India
                    </p>
                  </div>
                  {/* Google Maps Embed */}
                  <a
                    href="https://www.google.com/maps/place/Chairbord+Pvt.+Ltd./@26.9483905,75.7115536,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-lg overflow-hidden border">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.584286575558!2d75.71155357522568!3d26.94839047662594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db34437f3b57d%3A0xbbe7f554286804!2sChairbord%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1752992655199!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </a>
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
                  <p className="text-gray-600 text-sm mb-2">
                    Our team is available to assist you:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Saturday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-orange-600 font-medium">Visit us during these hours for consultations or assistance.</p>
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

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  type="button"
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                  <span className="ml-4 text-2xl text-orange-600">{openFaq === idx ? "-" : "+"}</span>
                </button>
                {openFaq === idx && (
                  <CardContent className="pt-0 pb-6 px-6 animate-fade-in" id={`faq-answer-${idx}`}>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}