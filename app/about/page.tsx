import { Users, Award, Target, Heart, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

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
    name: "Mahendra Natwadiya",
    role: "Co-Founder & COO",
    image: "https://res.cloudinary.com/du0cxgoic/image/upload/v1753083878/Untitled_design_8_-Picsart-AiImageEnhancer_xwmnix.png",
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">About</Badge> */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="text-orange-600"> Us</span>
            </h1>
            <p className="text-gray-600 text-lg">
            Chairbord Solar is shaping the future of green energy in Jaipur and across Rajasthan. As a trusted solar company in Jaipur, we offer affordable solar panel solutions for homes and businesses—helping lower electricity bills and support a cleaner, sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Story Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://varthana.com/school/wp-content/uploads/2023/01/B155.jpg"
                alt="Solar installation team"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Chairbord Solar
              </h2>
              <Tabs defaultValue="story" className="w-full">
                <TabsList className="mb-6 text-justify">
                  <TabsTrigger value="story" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"><h3 className="text-xl font-bold">Our Story</h3></TabsTrigger>
                  <TabsTrigger value="mission" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"><h3 className="text-xl font-bold">Our Mission</h3></TabsTrigger>
                  <TabsTrigger value="vision" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"><h3 className="text-xl font-bold">Our Vision</h3></TabsTrigger>
                </TabsList>
                <TabsContent value="story">
                  <p className="text-gray-600 text-lg text-justify overflow-y-auto pr-3" style={{ maxHeight: '14em' }}>
                    Chairbord Solar started in 2025 with the vision to power Jaipur with clean, affordable solar energy. We’ve successfully completed 50+ solar projects across residential and commercial spaces. Currently serving Jaipur and expanding across Rajasthan with dedicated solar solutions. We provide reliable, government-approved solar panel systems. Our zero-investment plans and expert team make the switch to solar simple and stress-free. From site visit to installation—we manage everything with care and clarity. After-sales service and long-term support are at the core of what we do. We aim to reduce your electricity bill and help you move toward a sustainable future. At Chairbord Solar, every installation is a promise of quality, savings, and clean energy.
                  </p>
                </TabsContent>
                <TabsContent value="mission">
                  <p className="text-gray-600 text-lg text-justify overflow-y-auto pr-3" style={{ maxHeight: '14em' }}>
                    At Chairbord Solar, our vision is to make solar energy the first choice for every home and business in Jaipur and beyond. We aim to create a cleaner, greener Rajasthan powered by affordable and accessible solar technology. By delivering high-quality systems and trusted service, we’re building a future where energy is sustainable, smart, and self-reliant. We envision a society where every rooftop contributes to a brighter tomorrow—both environmentally and economically. Our goal is not just to install panels, but to inspire change through clean energy.
                  </p>
                </TabsContent>
                <TabsContent value="vision">
                  <p className="text-gray-600 text-lg text-justify overflow-y-auto pr-3" style={{ maxHeight: '14em' }}>
                    Our mission is to empower individuals and businesses with reliable solar panel solutions that reduce electricity costs and carbon footprint. We are committed to excellence in every project—offering government-approved systems, expert support, and zero-investment plans. Through innovation, transparency, and customer focus, we aim to simplify solar adoption across Jaipur and Rajasthan. From consultation to after-sales service, our mission is to deliver value, build trust, and drive India’s transition to renewable energy—one rooftop at a time.
                  </p>
                </TabsContent>
              </Tabs>
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
                  </div>
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
            <p className="text-xl text-gray-600">We believe in clean energy, honest service, and long-term commitment to every rooftop we power</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Customer First</h3>
                <p className="text-sm text-gray-600">
                We prioritize customer success and satisfaction in every solar solution we offer.
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
                We work with government-certified solar manufacturers and trusted installers.
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
                Honest pricing, solar savings insights, and transparent processes at every step.
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
                Innovating solar services through advanced technology and smarter energy solutions.
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
          <h2 className="text-3xl font-bold text-white mb-4">Be a Part of the Solar Revolution</h2>
          <p className="text-xl text-blue-100 mb-8">
          Join us in shaping a cleaner, brighter future powered by the sun. Whether you're a homeowner, business, or partner, Chairbord Solar welcomes you to be part of our growing solar movement across Rajasthan and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/calculator">Join the Solar Movement</Link>
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
