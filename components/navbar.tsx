"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, LogIn } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-sm font-bold text-white">DB</span>
            </div>
            <span className="hidden sm:inline text-lg font-bold text-gray-900">DevBlog</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href={process.env.NEXT_PUBLIC_LARAVEL_LOGIN_URL || "http://localhost:8000/login"}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <LogIn className="h-4 w-4" />
              Login
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="space-y-1 px-2 py-4">
              <Link
                href="/"
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
              <a
                href={process.env.NEXT_PUBLIC_LARAVEL_LOGIN_URL || "http://localhost:8000/login"}
                className="block px-3 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors mt-2"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
