interface BlogContentProps {
  content: string
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-invert max-w-none space-y-6 py-8">
      <style>{`
        .prose h2 {
          @apply mt-8 mb-4 text-2xl font-bold text-foreground;
        }
        .prose h3 {
          @apply mt-6 mb-3 text-xl font-semibold text-foreground;
        }
        .prose p {
          @apply text-base leading-relaxed text-foreground;
        }
        .prose ul, .prose ol {
          @apply ml-6 space-y-2;
        }
        .prose li {
          @apply text-foreground;
        }
        .prose a {
          @apply text-blue-600 underline hover:text-blue-800 transition-colors;
        }
        .prose a:visited {
          @apply text-purple-600;
        }
        .prose code {
          @apply rounded bg-muted px-2 py-1 font-mono text-sm text-foreground;
        }
        .prose pre {
          @apply overflow-x-auto rounded-lg bg-muted p-4;
        }
        .prose pre code {
          @apply bg-transparent p-0;
        }
      `}</style>
      <div className="space-y-6 text-foreground" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
