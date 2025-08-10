import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookOpen, Clock, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import blogData from "./data.json"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 mb-4">
              Discover the latest insights, tips, and updates about solar energy and sustainable living.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className={`relative h-48 bg-gradient-to-br ${post.image.gradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <BookOpen className={`h-8 w-8 text-${post.image.color}-600`} />
                      </div>
                      <p className={`text-${post.categoryColor}-800 font-semibold`}>{post.category}</p>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {post.date}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.snippet}
                  </p>
                  <button className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1 transition-colors">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}