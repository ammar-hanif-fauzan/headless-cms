import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="px-4 py-20 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)] flex items-center justify-center">
          <div className="text-center max-w-md">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl sm:text-[120px] font-bold text-blue-600/20 leading-none">404</h1>
            </div>

            {/* Content */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                <Home className="h-4 w-4" />
                Go Home
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
