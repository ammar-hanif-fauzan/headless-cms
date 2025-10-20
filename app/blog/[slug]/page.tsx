import { BlogDetailHeader } from "@/components/blog/blog-detail-header"
import { BlogContent } from "@/components/blog/blog-content"
import { BlogAuthor } from "@/components/blog/blog-author"
import { RelatedPosts } from "@/components/blog/related-posts"
import { BlogShare } from "@/components/blog/blog-share"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import Link from "next/link"
import { ChevronLeft, Tag } from "lucide-react"
import { notFound } from "next/navigation"

interface BlogDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const blogPostDetail = getBlogPostBySlug(slug)
  
  // Jika blog post tidak ditemukan, tampilkan 404
  if (!blogPostDetail) {
    notFound()
  }
  
  const relatedPosts = getRelatedPosts(slug)
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
          <BlogShare 
            title={blogPostDetail.title}
            url={`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/blog/${blogPostDetail.slug}`}
            excerpt={blogPostDetail.excerpt}
          />

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
