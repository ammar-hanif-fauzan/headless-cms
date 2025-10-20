"use client"

import * as React from "react"
import { Moon, Zap } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg hover:bg-muted transition-colors">
        <div className="h-5 w-5" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-lg hover:bg-muted transition-colors relative"
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5">
        <Zap
          className={`h-5 w-5 transition-all duration-300 ${
            theme === "light" 
              ? "rotate-0 scale-100 opacity-100" 
              : "rotate-90 scale-0 opacity-0"
          }`}
        />
        <Moon
          className={`h-5 w-5 transition-all duration-300 absolute top-0 left-0 ${
            theme === "dark" 
              ? "rotate-0 scale-100 opacity-100" 
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  )
}
