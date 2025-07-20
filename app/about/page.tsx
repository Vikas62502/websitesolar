import { Users, Award, Target, Heart, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const founders = [
  {
    name: "Kamlesh Natwadiya",
    role: "Co-Founder & CEO",
    image: "https://res.cloudinary.com/du0cxgoic/image/upload/v1753022245/Screenshot2025-07-201710011_pr3cmo.png",
    bio: "Former VP at Tata Power Solar with 15+ years in renewable energy. IIT Delhi alumnus passionate about making solar accessible to every Indian household.",
    linkedin: "#",
    twitter: "#",
    email: "rajesh@solardeals.in",
  },
  {
    name: "Sunil Natwadiya",
    role: "Co-Founder & CTO",
    image: "https://res.cloudinary.com/du0cxgoic/image/upload/v1753022245/WhatsAppImage2025-07-20at15.07.37_dba3f815_urlfxy.png",
    bio: "Ex-Google engineer with expertise in AI and marketplace platforms. MIT graduate focused on using technology to accelerate India's clean energy transition.",
    linkedin: "#",
    twitter: "#",
    email: "priya@solardeals.in",
  },
  {
    name: "Amit Patel",
    role: "Co-Founder & COO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former operations head at Flipkart with deep understanding of Indian supply chains. Ensures seamless solar installations across the country.",
    linkedin: "#",
    twitter: "#",
    email: "amit@solardeals.in",
  },
]

// const milestones = [
//   { year: "2020", event: "Company founded with vision to democratize solar energy in India" },
//   { year: "2021", event: "Launched marketplace with 10 solar manufacturers" },
//   { year: "2022", event: "Reached 1,000+ successful installations across 5 states" },
//   { year: "2023", event: "Expanded to 50+ manufacturers and 15 states" },
//   { year: "2024", event: "10,000+ happy customers and ₹50Cr+ in savings generated" },
// ]

const testimonials = [
  {
    name: "Sunita Verma",
    location: "Pune, Maharashtra",
    quote: "SolarDeals India made my switch to solar seamless and affordable. My electricity bills have dropped by 80%!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Rakesh Singh",
    location: "Jaipur, Rajasthan",
    quote: "The team was professional and transparent. I recommend SolarDeals to anyone considering solar for their home.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Priya Nair",
    location: "Kochi, Kerala",
    quote: "Excellent service and support throughout the installation. I feel good about helping the environment too!",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Our Story</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="text-orange-600"> SolarDeals India</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're on a mission to make solar energy accessible, affordable, and simple for every Indian household.
              Founded by renewable energy veterans, we're building India's most trusted solar marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://varthana.com/school/wp-content/uploads/2023/01/B155.jpg"
                alt="Solar installation team"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg">
                  To accelerate India's transition to clean energy by making solar power accessible, affordable, and
                  hassle-free for every household and business. We believe every Indian deserves the right to clean,
                  affordable electricity.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg">
                  To become India's most trusted solar marketplace, powering 10 million homes with clean energy by 2030.
                  We envision an India where every rooftop generates clean electricity, contributing to energy
                  independence and environmental sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Meet Our Founders</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Experienced leaders passionate about India's clean energy future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {founders.map((founder, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <Image
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-3 sm:mb-4 w-32 h-32 sm:w-48 sm:h-48"
                  />
                  <CardTitle className="text-lg sm:text-xl">{founder.name}</CardTitle>
                  <Badge variant="secondary" className="mt-2 text-xs sm:text-sm">
                    {founder.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3 sm:mb-4">{founder.bio}</p>
                  <div className="flex justify-center gap-2 sm:gap-3">
                    <Button size="sm" variant="outline" className="p-2 bg-transparent">
                      <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2 bg-transparent">
                      <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2 bg-transparent">
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Hear from homeowners who went solar with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mb-4"
                  />
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Journey</h2>
            <p className="text-lg sm:text-xl text-gray-600">From startup to India's leading solar marketplace</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-1 h-full bg-orange-200"></div>
            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} flex-row`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:text-left"} pl-8 text-left`}
                  >
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4 sm:p-6">
                        <Badge className="mb-2 bg-orange-100 text-orange-800 text-xs sm:text-sm">
                          {milestone.year}
                        </Badge>
                        <p className="text-gray-700 text-sm sm:text-base">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 absolute left-4 sm:relative sm:left-auto">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-600 rounded-full border-2 sm:border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="hidden sm:block sm:flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Customer First</h3>
                <p className="text-sm text-gray-600">
                  Every decision we make prioritizes our customers' success and satisfaction
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Quality Excellence</h3>
                <p className="text-sm text-gray-600">
                  We partner only with certified manufacturers and verified installers
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Transparency</h3>
                <p className="text-sm text-gray-600">
                  Clear pricing, honest recommendations, and transparent processes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">
                  Continuously improving our platform and services through technology
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Head Office</h3>
                <p className="text-sm text-gray-600">
                  SolarDeals India Pvt. Ltd.
                  <br />
                  Tower A, Cyber City
                  <br />
                  Gurugram, Haryana 122002
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-gray-600">
                  Customer Support: 1800-123-SOLAR
                  <br />
                  Business Inquiries: +91-124-456-7890
                  <br />
                  Available: Mon-Sat, 9 AM - 7 PM
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-gray-600">
                  General: info@solardeals.in
                  <br />
                  Support: support@solardeals.in
                  <br />
                  Partnerships: partners@solardeals.in
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of India's clean energy revolution. Whether you're a customer, partner, or team member, there's a
            place for you in our solar-powered future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/calculator">Start Your Solar Journey</Link>
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/careers">Join Our Team</Link>
            </Button> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
