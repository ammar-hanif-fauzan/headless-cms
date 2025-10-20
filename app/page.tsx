"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllBlogPosts, BlogPost } from "@/lib/api"
import { useEffect, useState } from "react"
import { HomeBlogCard } from "@/components/blog/home-blog-card"

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  // Ambil data dari API saat komponen mount
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true)
        const posts = await getAllBlogPosts()
        setBlogPosts(posts)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  // Ambil 8 posts terbaru untuk ditampilkan
  const featuredPosts = blogPosts.slice(0, 8)
  if (loading) {
    return (
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Welcome to <span className="text-primary">DevBlog</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto">
                Discover in-depth articles, tutorials, and insights about web development, Next.js, React, and modern technologies.
              </p>
            </div>
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading articles...</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Welcome to <span className="text-primary">DevBlog</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto">
                Discover in-depth articles, tutorials, and insights about web development, Next.js, React, and modern technologies.
              </p>
            </div>
            
            {/* Blog Posts Grid - 4 columns */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {featuredPosts.map((post) => (
                <HomeBlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                View All Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
    </main>
  )
}
