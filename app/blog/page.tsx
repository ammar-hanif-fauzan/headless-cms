"use client"

import { useState, useMemo } from "react"
import { BlogCard } from "@/components/blog/blog-card"
import { BlogPagination } from "@/components/blog/blog-pagination"
import { Search, X, Calendar, Tag, User, Settings } from "lucide-react"

// Mock data - ganti dengan data dari database/API
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    excerpt: "Pelajari fitur-fitur terbaru Next.js 15 dan bagaimana menggunakannya dalam project Anda.",
    category: "Next.js",
    author: "John Doe",
    date: "2025-10-15",
    readTime: 5,
    image: "/nextjs-logo.png",
    slug: "getting-started-nextjs-15",
    tags: ["Next.js", "React", "JavaScript", "Frontend"],
  },
  {
    id: 2,
    title: "React Server Components Deep Dive",
    excerpt: "Memahami konsep React Server Components dan bagaimana mengoptimalkan performa aplikasi Anda.",
    category: "React",
    author: "Jane Smith",
    date: "2025-10-14",
    readTime: 8,
    image: "/react-logo-abstract.png",
    slug: "react-server-components-deep-dive",
    tags: ["React", "Server Components", "Performance", "Frontend"],
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
    tags: ["CSS", "Tailwind", "Styling", "Frontend"],
  },
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
    tags: ["TypeScript", "JavaScript", "Programming", "Best Practices"],
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
    tags: ["Performance", "Web Dev", "Optimization", "Frontend"],
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
    tags: ["CSS", "Grid", "Flexbox", "Layout"],
  },
  {
    id: 7,
    title: "Advanced React Patterns",
    excerpt: "Pelajari pattern-pattern advanced di React untuk membuat aplikasi yang scalable.",
    category: "React",
    author: "Chris Wilson",
    date: "2025-10-09",
    readTime: 10,
    image: "/react-patterns.jpg",
    slug: "advanced-react-patterns",
    tags: ["React", "Patterns", "Advanced", "Frontend"],
  },
  {
    id: 8,
    title: "Next.js API Routes Mastery",
    excerpt: "Kuasai API Routes di Next.js untuk membuat backend yang powerful dan efisien.",
    category: "Next.js",
    author: "Lisa Anderson",
    date: "2025-10-08",
    readTime: 8,
    image: "/nextjs-api.jpg",
    slug: "nextjs-api-routes-mastery",
    tags: ["Next.js", "API", "Backend", "Full Stack"],
  },
  {
    id: 9,
    title: "Laravel 11 New Features",
    excerpt: "Jelajahi fitur-fitur baru di Laravel 11 yang akan meningkatkan produktivitas development Anda.",
    category: "Laravel",
    author: "Ahmad Surya",
    date: "2025-10-07",
    readTime: 6,
    image: "/placeholder.jpg",
    slug: "laravel-11-new-features",
    tags: ["Laravel", "PHP", "Backend", "Framework"],
  },
  {
    id: 10,
    title: "Vue.js 3 Composition API",
    excerpt: "Pelajari cara menggunakan Composition API di Vue.js 3 untuk development yang lebih efisien.",
    category: "Vue.js",
    author: "Maria Rizki",
    date: "2025-10-06",
    readTime: 7,
    image: "/placeholder.jpg",
    slug: "vuejs-3-composition-api",
    tags: ["Vue.js", "JavaScript", "Frontend", "Composition API"],
  },
  {
    id: 11,
    title: "Node.js Performance Tips",
    excerpt: "Tips dan trik untuk mengoptimalkan performa aplikasi Node.js Anda.",
    category: "Node.js",
    author: "Dani Pratama",
    date: "2025-10-05",
    readTime: 8,
    image: "/placeholder.jpg",
    slug: "nodejs-performance-tips",
    tags: ["Node.js", "JavaScript", "Backend", "Performance"],
  },
  {
    id: 12,
    title: "Python for Web Development",
    excerpt: "Panduan lengkap menggunakan Python untuk web development dengan Django dan Flask.",
    category: "Python",
    author: "Siti Aminah",
    date: "2025-10-04",
    readTime: 9,
    image: "/placeholder.jpg",
    slug: "python-web-development",
    tags: ["Python", "Django", "Flask", "Backend"],
  },
]

const categories = ["All", "Next.js", "React", "CSS", "TypeScript", "Web Dev", "Laravel", "Vue.js", "Node.js", "Python"]
const allTags = ["Next.js", "React", "JavaScript", "Frontend", "Server Components", "Performance", "CSS", "Tailwind", "Styling", "TypeScript", "Programming", "Best Practices", "Web Dev", "Optimization", "Grid", "Flexbox", "Layout", "Patterns", "Advanced", "API", "Backend", "Full Stack", "Laravel", "PHP", "Framework", "Vue.js", "Composition API", "Node.js", "Python", "Django", "Flask"]
const POSTS_PER_PAGE = 6

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedAuthor, setSelectedAuthor] = useState("")
  const [dateRange, setDateRange] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => post.tags.includes(tag))
      const matchesAuthor = selectedAuthor === "" || post.author.toLowerCase().includes(selectedAuthor.toLowerCase())
      
      return matchesCategory && matchesSearch && matchesTags && matchesAuthor
    })
  }, [searchQuery, activeCategory, selectedTags, selectedAuthor])

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)
  }, [filteredPosts, currentPage])

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
    setCurrentPage(1)
  }

  const handleAuthorChange = (author: string) => {
    setSelectedAuthor(author)
    setCurrentPage(1)
  }

  const clearAllFilters = () => {
    setSearchQuery("")
    setActiveCategory("All")
    setSelectedTags([])
    setSelectedAuthor("")
    setDateRange("")
    setCurrentPage(1)
  }

  return (
    <main>
      <div className="bg-gradient-to-br from-background via-background to-primary/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Blog Articles</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover in-depth articles, tutorials, and insights about web development
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Search by Title */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">SEARCH BY TITLE</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">CATEGORY</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={activeCategory === category}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tags Filter */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">TAGS</label>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {allTags.map((tag) => (
                    <label key={tag} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTags.includes(tag)}
                        onChange={() => handleTagToggle(tag)}
                        className="text-primary focus:ring-primary rounded"
                      />
                      <span className="text-sm text-foreground">{tag}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Author Filter */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">AUTHOR</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search author..."
                    value={selectedAuthor}
                    onChange={(e) => handleAuthorChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
        </div>

              {/* Apply Filter Button */}
              <button
                onClick={clearAllFilters}
                className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg bg-background text-foreground hover:bg-muted transition-colors"
            >
              <Settings className="h-4 w-4" />
              Filters
            </button>
            </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mb-6 p-4 border border-border rounded-lg bg-card">
              <div className="space-y-4">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Search by Title</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search by title..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                  <select
                    value={activeCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Tags</label>
                  <div className="flex flex-wrap gap-2">
                    {allTags.slice(0, 10).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-background text-foreground border-border hover:bg-muted'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={clearAllFilters}
                  className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {/* Results info */}
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                Showing {paginatedPosts.length} of {filteredPosts.length} articles
              </p>
            </div>

            {/* Posts grid - responsive columns */}
            {paginatedPosts.length > 0 ? (
              <>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {paginatedPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-12">
                    <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card py-12">
                <p className="text-lg font-medium text-foreground">No articles found</p>
                <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters or search query</p>
                <button
                  onClick={clearAllFilters}
                  className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
         </div>
      </div>
    </main>
  )
}
