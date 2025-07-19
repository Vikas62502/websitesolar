"use client"
import { useState } from "react"
import { MapPin, Star, Award, Users, Calendar } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CompanyLeadSection } from "@/components/company-lead-section"
import { LeadModal } from "@/components/lead-modal"

const companies = [
  {
    id: 1,
    name: "Tata Power Solar Systems",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Mumbai, Maharashtra",
    founded: 1989,
    employees: "5000+",
    rating: 4.8,
    reviews: 1250,
    specialties: ["Solar Panels", "EPC Solutions", "Rooftop Solar"],
    description: "India's largest integrated solar company with manufacturing facilities across the country.",
    certifications: ["ISO 9001", "ISO 14001", "IEC 61215"],
    projects: "2000+ MW installed",
    website: "https://www.tatapowersolar.com",
  },
  {
    id: 2,
    name: "Waaree Energies Limited",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Mumbai, Maharashtra",
    founded: 1990,
    employees: "3000+",
    rating: 4.7,
    reviews: 980,
    specialties: ["Solar Panels", "Solar Cells", "EPC"],
    description: "Leading solar panel manufacturer with state-of-the-art manufacturing facilities.",
    certifications: ["IEC 61215", "IEC 61730", "UL 1703"],
    projects: "1500+ MW installed",
    website: "https://www.waaree.com",
  },
  {
    id: 3,
    name: "Adani Solar",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Ahmedabad, Gujarat",
    founded: 2015,
    employees: "2000+",
    rating: 4.6,
    reviews: 756,
    specialties: ["Solar Modules", "Solar Cells", "Utility Scale"],
    description: "Part of Adani Group, focusing on high-efficiency solar modules and utility-scale projects.",
    certifications: ["IEC 61215", "IEC 61730", "ISO 9001"],
    projects: "3000+ MW installed",
    website: "https://www.adanisolar.com",
  },
  {
    id: 4,
    name: "Luminous Power Technologies",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Gurugram, Haryana",
    founded: 1988,
    employees: "4000+",
    rating: 4.5,
    reviews: 1100,
    specialties: ["Solar Inverters", "Batteries", "Home Solutions"],
    description: "Leading manufacturer of power backup solutions and solar inverters for residential market.",
    certifications: ["ISO 9001", "ISO 14001", "CE"],
    projects: "500+ MW installed",
    website: "https://www.luminousindia.com",
  },
  {
    id: 5,
    name: "Vikram Solar",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Kolkata, West Bengal",
    founded: 2006,
    employees: "1500+",
    rating: 4.4,
    reviews: 623,
    specialties: ["Solar Modules", "EPC", "O&M Services"],
    description: "Leading solar module manufacturer with focus on quality and innovation.",
    certifications: ["IEC 61215", "IEC 61730", "ISO 9001"],
    projects: "1000+ MW installed",
    website: "https://www.vikramsolar.com",
  },
  {
    id: 6,
    name: "Microtek International",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Gurugram, Haryana",
    founded: 1990,
    employees: "2500+",
    rating: 4.3,
    reviews: 845,
    specialties: ["Solar Inverters", "UPS Systems", "Batteries"],
    description: "Pioneer in power backup solutions with comprehensive solar inverter range.",
    certifications: ["ISO 9001", "ISO 14001", "CE"],
    projects: "300+ MW installed",
    website: "https://www.microtekdirect.com",
  },
]

export default function CompaniesPage() {
  const [leadCompany, setLeadCompany] = useState<string | null>(null)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Card>
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-orange-600">50+</div>
              <div className="text-xs sm:text-sm text-gray-600">Verified Companies</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-orange-600">15GW+</div>
              <div className="text-xs sm:text-sm text-gray-600">Total Capacity</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-orange-600">25+</div>
              <div className="text-xs sm:text-sm text-gray-600">States Covered</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-orange-600">100%</div>
              <div className="text-xs sm:text-sm text-gray-600">Made in India</div>
            </CardContent>
          </Card>
        </div> */}

        {/* Companies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {companies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={80}
                    height={80}
                    className="rounded-lg border w-16 h-16 sm:w-20 sm:h-20 mx-auto sm:mx-0"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <CardTitle className="text-lg sm:text-xl mb-2">{company.name}</CardTitle>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      {company.location}
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{company.rating}</span>
                        <span className="text-gray-500">({company.reviews})</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        <Award className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{company.description}</p>

                {/* <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      Founded: {company.founded}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      Employees: {company.employees}
                    </div>
                  </div>
                </div> */}

                <div>
                  <h4 className="font-medium mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Certifications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.certifications.map((cert) => (
                      <Badge key={cert} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  {/* <div className="text-sm">
                    <span className="font-medium text-green-600">{company.projects}</span>
                    <span className="text-gray-600 ml-1">installed</span>
                  </div> */}
                  {/* <CompanyLeadSection companyName={company.name} /> */}
                  <Button className="flex-1 h-9 sm:h-10 text-sm" onClick={() => setLeadCompany(company.name)}>
                    Know More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lead Modal for company inquiry */}
        <LeadModal
          isOpen={!!leadCompany}
          onClose={() => setLeadCompany(null)}
          title={leadCompany ? `Get in touch with ${leadCompany}` : ''}
          source={leadCompany ?? undefined}
        />

        {/* CTA Section */}
        {/* <Card className="mt-12 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Partner with Leading Solar Companies</h2>
            <p className="text-orange-100 mb-6">
              Connect with verified solar manufacturers and solution providers across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Become a Partner
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              >
                Contact Sales Team
              </Button>
            </div>
          </CardContent>
        </Card> */}
      </div>
      <Footer />
    </div>
  )
}
