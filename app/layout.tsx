import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'ClawCode — AI Coding Agent for Your Terminal',
    template: '%s | ClawCode',
  },
  description:
    'ClawCode is a terminal-first AI coding agent. Use Azure OpenAI, Groq, or Gemini to plan and apply code changes with minimal context, backups, and confirmation.',
  openGraph: {
    title: 'ClawCode — AI Coding Agent for Your Terminal',
    description:
      'Terminal-first AI coding agent. Multi-provider (Azure, Groq, Gemini), persistent memory, interactive TUI.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClawCode — AI Coding Agent for Your Terminal',
    description: 'Terminal-first AI coding agent. Multi-provider, persistent memory, interactive TUI.',
  },
  metadataBase: new URL('https://clawcode.dev'),
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
