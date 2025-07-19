"use client"

import { useState } from "react"
import { Filter, Grid, List, Search, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LeadModal } from "@/components/lead-modal"
import { useLeadModal } from "@/hooks/use-lead-modal"

const products = [
  {
    id: 1,
    name: "Tata Solar 540W Mono PERC Panel",
    brand: "Tata Power Solar",
    price: 18500,
    originalPrice: 22000,
    rating: 4.8,
    reviews: 245,
    image: "/placeholder.svg?height=200&width=300",
    category: "Solar Panels",
    wattage: 540,
    warranty: "25 Years",
    efficiency: "21.2%",
    madeInIndia: true,
  },
  {
    id: 2,
    name: "Luminous 5KW MPPT Solar Inverter",
    brand: "Luminous Power Technologies",
    price: 45000,
    originalPrice: 52000,
    rating: 4.6,
    reviews: 189,
    image: "/placeholder.svg?height=200&width=300",
    category: "Inverters",
    capacity: "5KW",
    warranty: "5 Years",
    technology: "MPPT",
    madeInIndia: true,
  },
  {
    id: 3,
    name: "Waaree 445W Bifacial Solar Panel",
    brand: "Waaree Energies",
    price: 16800,
    originalPrice: 19500,
    rating: 4.7,
    reviews: 312,
    image: "/placeholder.svg?height=200&width=300",
    category: "Solar Panels",
    wattage: 445,
    warranty: "25 Years",
    efficiency: "20.8%",
    madeInIndia: true,
  },
  {
    id: 4,
    name: "Microtek 3KW Solar Inverter",
    brand: "Microtek International",
    price: 28000,
    originalPrice: 32000,
    rating: 4.4,
    reviews: 156,
    image: "/placeholder.svg?height=200&width=300",
    category: "Inverters",
    capacity: "3KW",
    warranty: "3 Years",
    technology: "PWM",
    madeInIndia: true,
  },
  {
    id: 5,
    name: "Adani Solar 400W Mono Panel",
    brand: "Adani Solar",
    price: 15200,
    originalPrice: 17800,
    rating: 4.5,
    reviews: 203,
    image: "/placeholder.svg?height=200&width=300",
    category: "Solar Panels",
    wattage: 400,
    warranty: "25 Years",
    efficiency: "20.1%",
    madeInIndia: true,
  },
  {
    id: 6,
    name: "Exide 150Ah Solar Battery",
    brand: "Exide Industries",
    price: 12500,
    originalPrice: 14000,
    rating: 4.3,
    reviews: 98,
    image: "/placeholder.svg?height=200&width=300",
    category: "Batteries",
    capacity: "150Ah",
    warranty: "5 Years",
    type: "Tubular",
    madeInIndia: true,
  },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [sortBy, setSortBy] = useState("popularity")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const { isOpen, openModal, closeModal, modalProps } = useLeadModal()

  const brands = [...new Set(products.map((p) => p.brand))]
  const categories = [...new Set(products.map((p) => p.category))]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice
  })

  const handleGetQuote = (productName: string) => {
    openModal({
      title: `Get Quote for ${productName}`,
      subtitle: "Fill in your details and we'll provide you with the best pricing and installation options",
      source: "product_page",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-4 sm:space-y-6">
            <Card>
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Filter className="h-4 w-4 sm:h-5 sm:w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search Products</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Brands */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Brands</label>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={brand}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedBrands([...selectedBrands, brand])
                            } else {
                              setSelectedBrands(selectedBrands.filter((b) => b !== brand))
                            }
                          }}
                        />
                        <label htmlFor={brand} className="text-sm">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100000}
                    min={0}
                    step={1000}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">{filteredProducts.length} products found</span>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="flex-1 sm:flex-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="flex-1 sm:flex-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div
              className={
                viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6" : "space-y-4"
              }
            >
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="rounded-lg w-full h-40 sm:h-48 object-cover"
                      />
                      {product.madeInIndia && (
                        <Badge className="absolute top-2 right-2 bg-green-600 text-xs">Made in India</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 sm:space-y-3">
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg line-clamp-2">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.brand}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium ml-1">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-orange-600">₹{product.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                        </Badge>
                      </div>

                      <div className="text-sm text-gray-600">
                        {product.category === "Solar Panels" && (
                          <div>
                            <span>
                              • {product.wattage}W • {product.efficiency} Efficiency
                            </span>
                          </div>
                        )}
                        {product.category === "Inverters" && (
                          <div>
                            <span>
                              • {product.capacity} • {product.technology} Technology
                            </span>
                          </div>
                        )}
                        {product.category === "Batteries" && (
                          <div>
                            <span>
                              • {product.capacity} • {product.type} Type
                            </span>
                          </div>
                        )}
                        <div>• {product.warranty} Warranty</div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 pt-2">
                        <Button className="flex-1 h-9 sm:h-10 text-sm" onClick={() => handleGetQuote(product.name)}>
                          Get Quote
                        </Button>
                        <Button variant="outline" size="sm" className="h-9 sm:h-10 text-sm bg-transparent">
                          Compare
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                    setSelectedBrands([])
                    setPriceRange([0, 100000])
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <LeadModal
        isOpen={isOpen}
        onClose={closeModal}
        title={modalProps.title}
        subtitle={modalProps.subtitle}
        source={modalProps.source}
      />

      <Footer />
    </div>
  )
}
