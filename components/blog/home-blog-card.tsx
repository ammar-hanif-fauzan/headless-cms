import Link from "next/link"
import { Clock, User } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  slug: string
  content: string
  thumbnail: string
  featured_image: string
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

interface HomeBlogCardProps {
  post: BlogPost
}

export function HomeBlogCard({ post }: HomeBlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 h-full">
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.thumbnail || post.featured_image || "/placeholder.svg"} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              {post.category.name}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {post.content.replace(/<[^>]*>/g, '').substring(0, 100)}...
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {post.author.name}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {Math.ceil(post.content.length / 1000)} min
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
