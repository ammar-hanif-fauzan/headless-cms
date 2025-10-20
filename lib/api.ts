// API service untuk mengambil data blog dari backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api'

// Interface untuk data blog dari API
export interface BlogPost {
  id: number
  title: string
  slug: string
  content: string
  thumbnail: string
  featured_image: string
  special_role: string
  status: string
  status_text: string
  created_at: string
  updated_at: string
  published_at: string
  category: {
    id: number
    name: string
    slug: string
  }
  author: {
    id: number
    name: string
    username: string | null
    avatar: string | null
  }
  tags: Array<{
    id: number
    name: string
    slug: string
  }>
  bookmark_count: number
}

export interface BlogResponse {
  data: BlogPost[]
  meta: {
    current_page: number[]
    last_page: number[]
    per_page: number[]
    total: number[]
    from: number[]
    to: number[]
    links: Array<{
      url: string | null
      label: string
      active: boolean
    }>
    path: string
  }
  links: {
    first: string[]
    last: string[]
    prev: (string | null)[]
    next: (string | null)[]
  }
}

// Fungsi untuk mengambil semua blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      cache: 'no-store' // Untuk development, bisa diubah ke 'force-cache' untuk production
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data: BlogResponse = await response.json()
    return data.data
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

// Fungsi untuk mengambil blog post berdasarkan slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/${slug}`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data.data || data
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

// Interface untuk related posts
export interface RelatedPost {
  id: number
  title: string
  slug: string
  category: {
    id: number
    name: string
    slug: string
  }
  published_at: string
}

// Fungsi untuk mengambil related posts berdasarkan category
export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<RelatedPost[]> {
  try {
    // Ambil semua posts
    const allPosts = await getAllBlogPosts()
    
    // Cari post saat ini untuk mendapatkan category
    const currentPost = allPosts.find(post => post.slug === currentSlug)
    if (!currentPost) return []
    
    // Filter posts dengan category yang sama, kecuali post saat ini
    const relatedPosts = allPosts
      .filter(post => 
        post.slug !== currentSlug && 
        post.category.id === currentPost.category.id
      )
      .slice(0, limit)
      .map(post => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        category: post.category,
        published_at: post.published_at
      }))
    
    return relatedPosts
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return []
  }
}

// Fungsi untuk mengambil blog posts dengan pagination
export async function getBlogPostsWithPagination(page: number = 1, perPage: number = 10): Promise<BlogResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs?page=${page}&per_page=${perPage}`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data: BlogResponse = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching blog posts with pagination:', error)
    return {
      data: [],
      meta: {
        current_page: [1],
        last_page: [1],
        per_page: [10],
        total: [0],
        from: [0],
        to: [0],
        links: [],
        path: ''
      },
      links: {
        first: [],
        last: [],
        prev: [],
        next: []
      }
    }
  }
}
