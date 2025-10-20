interface BlogDetailHeaderProps {
  image: string
}

export function BlogDetailHeader({ image }: BlogDetailHeaderProps) {
  return (
    <div className="relative h-96 w-full overflow-hidden bg-muted">
      <img src={image || "/placeholder.svg"} alt="Blog header" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  )
}
