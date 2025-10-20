  "use client"

import { useState, useMemo, useEffect } from "react"
import { BlogCard } from "@/components/blog/blog-card"
import { BlogPagination } from "@/components/blog/blog-pagination"
import { getAllBlogPosts, BlogPost } from "@/lib/api"
import { Search, X, Calendar, Tag, User, Settings } from "lucide-react"

const POSTS_PER_PAGE = 6

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedAuthor, setSelectedAuthor] = useState("")
  const [dateRange, setDateRange] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)

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

  // Ambil categories dan tags dari data API
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(blogPosts.map(post => post.category.name)))
    return ["All", ...uniqueCategories]
  }, [blogPosts])

  const allTags = useMemo(() => {
    const uniqueTags = Array.from(new Set(blogPosts.flatMap(post => post.tags.map(tag => tag.name))))
    return uniqueTags
  }, [blogPosts])

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category.name === activeCategory
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => post.tags.some(t => t.name === tag))
      const matchesAuthor = selectedAuthor === "" || post.author.name.toLowerCase().includes(selectedAuthor.toLowerCase())
      
      return matchesCategory && matchesSearch && matchesTags && matchesAuthor
    })
  }, [blogPosts, searchQuery, activeCategory, selectedTags, selectedAuthor])

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

  if (loading) {
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
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading articles...</p>
            </div>
          </div>
        </div>
      </main>
    )
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
