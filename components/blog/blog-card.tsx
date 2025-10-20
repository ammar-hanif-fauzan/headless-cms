import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  slug: string
  content: string
  thumbnail: string
  featured_image: string
  created_at: string
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

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={post.thumbnail || post.featured_image || "/placeholder.svg"}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Category */}
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {post.category.name}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {Math.ceil(post.content.length / 1000)} min read
            </span>
          </div>

          {/* Title */}
          <h3 className="mb-3 line-clamp-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h3>

          {/* Content Preview */}
          <p className="mb-4 flex-1 line-clamp-3 text-sm text-muted-foreground leading-relaxed">
            {post.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-border pt-4">
            <div className="flex flex-col">
              <p className="text-sm font-medium text-foreground">
                {post.author.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {new Date(post.published_at).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
          </div>
        </div>
      </article>
    </Link>
  )
}
