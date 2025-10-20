import { BlogDetailHeader } from "@/components/blog/blog-detail-header"
import { BlogContent } from "@/components/blog/blog-content"
import { BlogAuthor } from "@/components/blog/blog-author"
import { RelatedPosts } from "@/components/blog/related-posts"
import Link from "next/link"
import { ChevronLeft, Share2, Facebook, Twitter, MessageCircle, Tag, MoreHorizontal } from "lucide-react"

// Mock data - ganti dengan data dari database/API
const blogPostDetail = {
  id: 1,
  title: "Getting Started with Next.js 15",
  excerpt: "Pelajari fitur-fitur terbaru Next.js 15 dan bagaimana menggunakannya dalam project Anda.",
  category: "Next.js",
  author: {
    name: "John Doe",
    avatar: "/avatar-john.png",
    bio: "Full Stack Developer & Tech Writer",
  },
  date: "2025-10-15",
  readTime: 5,
  image: "/nextjs-15-features.jpg",
  slug: "getting-started-nextjs-15",
  tags: ["Next.js", "React", "JavaScript", "Frontend", "Web Development"],
  content: `
    <h2>Pengenalan Next.js 15</h2>
    <p>Next.js 15 membawa banyak peningkatan dan fitur baru yang menarik untuk developer. Dalam artikel ini, kita akan menjelajahi fitur-fitur utama dan bagaimana menggunakannya.</p>
    
    <h3>Fitur Utama</h3>
    <p>Beberapa fitur utama yang perlu Anda ketahui:</p>
    <ul>
      <li>Improved Performance dengan optimasi bundle size</li>
      <li>Better Developer Experience dengan error messages yang lebih jelas</li>
      <li>Enhanced Security dengan built-in protections</li>
      <li>New Routing Features untuk navigasi yang lebih fleksibel</li>
    </ul>
    
    <h3>Cara Upgrade</h3>
    <p>Untuk upgrade ke Next.js 15, Anda dapat menggunakan perintah berikut:</p>
    <pre><code>npm install next@latest</code></pre>
    
    <h3>Kesimpulan</h3>
    <p>Next.js 15 adalah versi yang sangat menjanjikan dengan banyak peningkatan. Saya merekomendasikan untuk segera upgrade dan mencoba fitur-fitur barunya.</p>
  `,
}

const relatedPosts = [
  {
    id: 2,
    title: "React Server Components Deep Dive",
    slug: "react-server-components-deep-dive",
    category: "React",
    date: "2025-10-14",
  },
  {
    id: 3,
    title: "Tailwind CSS Tips & Tricks",
    slug: "tailwind-css-tips-tricks",
    category: "CSS",
    date: "2025-10-13",
  },
]

export default function BlogDetailPage() {
  return (
    <main>
      <BlogDetailHeader image={blogPostDetail.image} />

      <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Kembali ke Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {blogPostDetail.category}
              </span>
              <span className="text-xs text-muted-foreground">{blogPostDetail.readTime} min read</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">{blogPostDetail.title}</h1>
            <p className="text-base text-muted-foreground sm:text-lg">{blogPostDetail.excerpt}</p>
          </header>

          {/* Tags Section */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {blogPostDetail.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Social Sharing Buttons */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-foreground">Share:</span>
              
              {/* Facebook */}
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
                <Facebook className="h-4 w-4" />
                Facebook
              </button>
              
              {/* Twitter */}
              <button className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600 transition-colors">
                <Twitter className="h-4 w-4" />
                Twitter
              </button>
              
              {/* WhatsApp */}
              <button className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </button>
              
              {/* Discord */}
              <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors">
                <Tag className="h-4 w-4" />
                Discord
              </button>
              
              {/* Share Button */}
              <button className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
                <Share2 className="h-4 w-4" />
                Share
              </button>
              
              {/* More Options */}
              <button className="flex items-center justify-center rounded-lg border border-border bg-background p-2 text-muted-foreground hover:bg-muted transition-colors">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Author Info */}
          <BlogAuthor author={blogPostDetail.author} date={blogPostDetail.date} />

          {/* Content */}
          <BlogContent content={blogPostDetail.content} />
        </article>

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />
      </div>
    </main>
  )
}
