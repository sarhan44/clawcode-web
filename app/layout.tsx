import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://clawcode.vercel.app'

export const metadata: Metadata = {
  title: {
    default: 'ClawCode – Open-Source AI Coding Agent for the Terminal',
    template: '%s | ClawCode',
  },
  description:
    'ClawCode is an open-source, terminal-native AI coding agent that supports multiple providers like Groq, Gemini, Azure, and OpenRouter. Build your own AI coding workflow from the CLI.',
  keywords: [
    'AI coding agent',
    'terminal AI tool',
    'open source coding assistant',
    'CLI AI agent',
    'multi provider AI coding',
    'Claude Code alternative',
    'open source AI developer tool',
    'ClawCode',
    'terminal coding assistant',
    'AI developer tool',
    'code generation CLI',
  ],
  authors: [{ name: 'Sarhan Khan', url: 'https://github.com/sarhan44' }],
  creator: 'Sarhan Khan',
  openGraph: {
    title: 'ClawCode – Open-Source AI Coding Agent for the Terminal',
    description:
      'ClawCode is an open-source, terminal-native AI coding agent that supports multiple providers like Groq, Gemini, Azure, and OpenRouter. Build your own AI coding workflow from the CLI.',
    url: SITE_URL,
    siteName: 'ClawCode',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClawCode – Open-Source AI Coding Agent for the Terminal',
    description:
      'Open-source, terminal-native AI coding agent. Supports Groq, Gemini, Azure, OpenRouter. Build your own AI coding workflow from the CLI.',
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <link rel="canonical" href={SITE_URL} />
      </head>
      <body>{children}</body>
    </html>
  )
}
