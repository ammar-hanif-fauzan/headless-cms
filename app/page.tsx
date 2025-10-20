import Link from "next/link"
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react"

// Mock data untuk carousel dan cards
const featuredPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    excerpt: "Pelajari fitur-fitur terbaru Next.js 15 dan bagaimana menggunakannya dalam project Anda.",
    category: "Next.js",
    author: "John Doe",
    date: "2025-10-15",
    readTime: 5,
    image: "/nextjs-15-features.jpg",
    slug: "getting-started-nextjs-15",
  },
  {
    id: 2,
    title: "React Server Components Deep Dive",
    excerpt: "Memahami konsep React Server Components dan bagaimana mengoptimalkan performa aplikasi Anda.",
    category: "React",
    author: "Jane Smith",
    date: "2025-10-14",
    readTime: 8,
    image: "/react-server-components.jpg",
    slug: "react-server-components-deep-dive",
  },
  {
    id: 3,
    title: "Tailwind CSS Tips & Tricks",
    excerpt: "Kumpulan tips dan trik menggunakan Tailwind CSS untuk membuat UI yang lebih efisien.",
    category: "CSS",
    author: "Mike Johnson",
    date: "2025-10-13",
    readTime: 6,
    image: "/abstract-tailwind.png",
    slug: "tailwind-css-tips-tricks",
  },
]

const recentPosts = [
  {
    id: 4,
    title: "TypeScript Best Practices",
    excerpt: "Praktik terbaik menggunakan TypeScript untuk membuat kode yang lebih aman dan maintainable.",
    category: "TypeScript",
    author: "Sarah Williams",
    date: "2025-10-12",
    readTime: 7,
    image: "/typescript-logo.png",
    slug: "typescript-best-practices",
  },
  {
    id: 5,
    title: "Web Performance Optimization",
    excerpt: "Strategi dan teknik untuk mengoptimalkan performa website Anda agar lebih cepat.",
    category: "Web Dev",
    author: "Alex Brown",
    date: "2025-10-11",
    readTime: 9,
    image: "/stage-performance.png",
    slug: "web-performance-optimization",
  },
  {
    id: 6,
    title: "CSS Grid vs Flexbox",
    excerpt: "Perbandingan mendalam antara CSS Grid dan Flexbox untuk layout yang sempurna.",
    category: "CSS",
    author: "Emma Davis",
    date: "2025-10-10",
    readTime: 6,
    image: "/css-grid.jpg",
    slug: "css-grid-vs-flexbox",
  },
]

export default function Home() {
  return (
    <main>
        {/* Hero Carousel Section */}
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
            
            {/* Featured Posts Carousel */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <article className="relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime} min
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Recent Articles</h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <article className="relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime} min
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
    </main>
  )
}
