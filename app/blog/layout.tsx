import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog – ClawCode',
    description:
        'Articles about building open-source AI coding agents, multi-provider model architectures, terminal-based development tools, and the future of AI-assisted programming.',
    openGraph: {
        title: 'Blog – ClawCode',
        description:
            'Articles about building open-source AI coding agents and terminal-based development tools.',
        type: 'website',
    },
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
