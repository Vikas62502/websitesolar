import { MapPin, Clock, Users, Briefcase, Heart, TrendingUp, Award, Send } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Solar Engineer",
    department: "Engineering",
    location: "Gurugram, Haryana",
    type: "Full-time",
    experience: "5-8 years",
    description: "Lead solar system design and optimization for residential and commercial projects.",
    requirements: [
      "B.Tech in Electrical/Mechanical Engineering",
      "5+ years solar industry experience",
      "PV system design expertise",
      "AutoCAD/PVsyst proficiency",
    ],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Product Manager - Solar Solutions",
    department: "Product",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "4-6 years",
    description: "Drive product strategy and roadmap for our solar marketplace platform.",
    requirements: [
      "MBA or equivalent",
      "Product management experience",
      "Solar/renewable energy knowledge",
      "Data-driven approach",
    ],
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Sales Manager - North India",
    department: "Sales",
    location: "Delhi NCR",
    type: "Full-time",
    experience: "3-5 years",
    description: "Lead sales operations and team management for North India region.",
    requirements: [
      "Sales experience in solar/energy sector",
      "Team management skills",
      "Regional market knowledge",
      "Strong communication skills",
    ],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Frontend Developer",
    department: "Technology",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    experience: "2-4 years",
    description: "Build and maintain our customer-facing web applications and mobile interfaces.",
    requirements: [
      "React.js/Next.js expertise",
      "TypeScript proficiency",
      "UI/UX design sense",
      "API integration experience",
    ],
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "Ensure customer satisfaction and drive adoption of our solar solutions.",
    requirements: [
      "Customer success experience",
      "Solar industry knowledge preferred",
      "Excellent communication skills",
      "Problem-solving mindset",
    ],
    posted: "1 week ago",
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs",
  },
  {
    icon: TrendingUp,
    title: "Growth & Learning",
    description: "Learning budget, conference attendance, and career development programs",
  },
  {
    icon: Users,
    title: "Work-Life Balance",
    description: "Flexible working hours, remote work options, and generous leave policies",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description: "Performance bonuses, stock options, and employee recognition programs",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-orange-600">Mission</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Help us accelerate India's transition to clean energy. Build your career while making a positive impact on
              the environment and society.
            </p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600">Be part of India's leading solar marketplace</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Team collaboration"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rapid Growth</h3>
                  <p className="text-gray-600">
                    Join a fast-growing company in the booming renewable energy sector with immense career
                    opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Meaningful Impact</h3>
                  <p className="text-gray-600">
                    Your work directly contributes to India's clean energy transition and environmental sustainability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">
                    Work alongside industry veterans from top companies like Tata Power Solar, Google, and Flipkart.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation Culture</h3>
                  <p className="text-gray-600">
                    Be part of a culture that encourages innovation, experimentation, and continuous learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600">We take care of our team members</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Solar Revolution Team</h2>
            <p className="text-xl text-gray-600">
              Passionate about renewable energy? Send us your resume and become part of our mission to power India with clean solar energy
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>General Application</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="Enter your phone number" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-3">2-3 years</SelectItem>
                        <SelectItem value="4-6">4-6 years</SelectItem>
                        <SelectItem value="7-10">7-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="department">Preferred Department</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="product">Product</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="customer-success">Customer Success</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    placeholder="Tell us why you want to join Chairbord Solar and what you can bring to our team..."
                    className="mt-1"
                    rows={5}
                  />
                </div>

                <div>
                  <Label htmlFor="resume">Resume/CV *</Label>
                  <Input id="resume" type="file" accept=".pdf,.doc,.docx" className="mt-1" />
                  <p className="text-sm text-gray-500 mt-1">Upload your resume in PDF, DOC, or DOCX format (max 5MB)</p>
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700 h-12">
                  <Send className="mr-2 h-5 w-5" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
