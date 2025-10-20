import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface RelatedPost {
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

interface RelatedPostsProps {
  posts: RelatedPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className="mt-16 border-t border-border pt-12">
      <h2 className="mb-8 text-2xl font-bold text-foreground">Artikel Terkait</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-card/80"
          >
            <div className="flex-1">
              <div className="mb-2 inline-block rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                {post.category.name}
              </div>
              <h3 className="line-clamp-2 font-semibold text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                {new Date(post.published_at).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
          </Link>
        ))}
      </div>
    </section>
  )
}
