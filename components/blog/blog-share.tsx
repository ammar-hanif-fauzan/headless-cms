"use client"

import { Share2, Facebook, Twitter, MessageCircle, Tag, MoreHorizontal } from "lucide-react"
import { useState } from "react"

interface BlogShareProps {
  title: string
  url: string
  excerpt: string
}

export function BlogShare({ title, url, excerpt }: BlogShareProps) {
  const [showMore, setShowMore] = useState(false)

  // Fungsi untuk share ke Facebook
  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(facebookUrl, '_blank', 'width=600,height=400')
  }

  // Fungsi untuk share ke Twitter
  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    window.open(twitterUrl, '_blank', 'width=600,height=400')
  }

  // Fungsi untuk share ke WhatsApp
  const shareToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`
    window.open(whatsappUrl, '_blank')
  }

  // Fungsi untuk share ke Discord
  const shareToDiscord = () => {
    // Discord tidak memiliki direct share URL, jadi kita copy ke clipboard
    navigator.clipboard.writeText(`${title}\n${url}`)
    alert('Link berhasil disalin ke clipboard! Anda bisa paste di Discord.')
  }

  // Fungsi untuk share menggunakan Web Share API (jika tersedia)
  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: excerpt,
          url: url,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy ke clipboard
      navigator.clipboard.writeText(url)
      alert('Link berhasil disalin ke clipboard!')
    }
  }

  // Fungsi untuk copy link
  const copyLink = () => {
    navigator.clipboard.writeText(url)
    alert('Link berhasil disalin ke clipboard!')
  }

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-foreground">Share:</span>
        
        {/* Facebook */}
        <button 
          onClick={shareToFacebook}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          <Facebook className="h-4 w-4" />
          Facebook
        </button>
        
        {/* Twitter */}
        <button 
          onClick={shareToTwitter}
          className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600 transition-colors"
        >
          <Twitter className="h-4 w-4" />
          Twitter
        </button>
        
        {/* WhatsApp */}
        <button 
          onClick={shareToWhatsApp}
          className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </button>
        
        {/* Discord */}
        <button 
          onClick={shareToDiscord}
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
        >
          <Tag className="h-4 w-4" />
          Discord
        </button>
        
        {/* Native Share */}
        <button 
          onClick={shareNative}
          className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
        >
          <Share2 className="h-4 w-4" />
          Share
        </button>
        
        {/* Copy Link */}
        <button 
          onClick={copyLink}
          className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
        >
          <Share2 className="h-4 w-4" />
          Copy Link
        </button>
        
        {/* More Options */}
        <button 
          onClick={() => setShowMore(!showMore)}
          className="flex items-center justify-center rounded-lg border border-border bg-background p-2 text-muted-foreground hover:bg-muted transition-colors"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* More Options Dropdown */}
      {showMore && (
        <div className="mt-4 p-4 border border-border rounded-lg bg-card">
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={copyLink}
              className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <Share2 className="h-4 w-4" />
              Copy Link
            </button>
            <button 
              onClick={() => navigator.clipboard.writeText(title)}
              className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <Share2 className="h-4 w-4" />
              Copy Title
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
