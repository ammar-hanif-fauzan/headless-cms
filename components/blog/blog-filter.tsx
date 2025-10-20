"use client"

interface BlogFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function BlogFilter({ categories, activeCategory, onCategoryChange }: BlogFilterProps) {
  return (
    <div className="mb-12">
      <p className="mb-4 text-sm font-medium text-muted-foreground">Filter by Category</p>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-foreground hover:border-primary/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
