interface Author {
  name: string
  avatar: string
  bio: string
}

interface BlogAuthorProps {
  author: Author
  date: string
}

export function BlogAuthor({ author, date }: BlogAuthorProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-center">
      <img src={author.avatar || "/placeholder.svg"} alt={author.name} className="h-12 w-12 rounded-full" />
      <div className="flex-1">
        <p className="font-semibold text-foreground">{author.name}</p>
        <p className="text-sm text-muted-foreground">{author.bio}</p>
      </div>
      <div className="text-left sm:text-right">
        <p className="text-sm text-muted-foreground">
          {new Date(date).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  )
}
