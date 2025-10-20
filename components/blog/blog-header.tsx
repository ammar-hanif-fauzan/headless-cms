export function BlogHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-3xl sm:text-4xl font-bold text-foreground">Blog</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Artikel dan tips tentang web development, Next.js, React, dan teknologi terkini.
        </p>
      </div>
    </header>
  )
}
