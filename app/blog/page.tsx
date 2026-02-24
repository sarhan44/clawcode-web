import Link from 'next/link'
import { Code2, ArrowLeft, Rss } from 'lucide-react'

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#0B0E17] text-gray-100">
            {/* Header */}
            <nav className="sticky top-0 z-50 border-b border-gray-800/60 bg-[#0B0E17]/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                    <Link href="/" className="flex items-center gap-2">
                        <Code2 className="text-[#00E5FF] h-6 w-6" />
                        <span className="font-bold tracking-wide text-[#00E5FF] text-xl">
                            CLAWCODE
                        </span>
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00E5FF] transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Blog Hero */}
            <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] text-xs font-semibold uppercase tracking-wider mb-6 border border-[#00E5FF]/20">
                        <Rss className="h-3.5 w-3.5" />
                        Blog
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
                        Building an Open-Source AI Coding Agent
                    </h1>

                    <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Insights, architecture decisions, and lessons learned from building ClawCode —
                        a terminal-native AI coding agent that supports multi-provider model architectures.
                        We explore the design of CLI-based coding assistants, structured diff generation,
                        persistent project memory, and the challenges of creating an open-source alternative
                        to proprietary AI developer tools.
                    </p>

                    <p className="text-base text-gray-500 leading-relaxed">
                        Topics we cover include AI coding agent architecture, integrating multiple LLM providers
                        (Groq, Gemini, Azure OpenAI, OpenRouter), terminal-based developer tools, context-aware
                        code generation, and building developer tools that respect privacy and give developers
                        full control over their workflow.
                    </p>
                </div>

                {/* Placeholder posts */}
                <div className="border-t border-gray-800/60 pt-12">
                    <h2 className="text-2xl font-bold text-white mb-8">Latest Posts</h2>
                    <div className="space-y-8">
                        <article className="group p-6 rounded-xl border border-gray-800/60 bg-[#161B22]/40 hover:border-[#00E5FF]/30 transition-colors">
                            <time className="text-xs text-gray-500 uppercase tracking-wider">Coming Soon</time>
                            <h3 className="text-xl font-semibold text-white mt-2 mb-3 group-hover:text-[#00E5FF] transition-colors">
                                Why We Built ClawCode: The Case for Open-Source AI Coding Agents
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                The story behind ClawCode — why we believe AI developer tools should be open-source,
                                provider-agnostic, and completely under the developer&apos;s control.
                            </p>
                        </article>

                        <article className="group p-6 rounded-xl border border-gray-800/60 bg-[#161B22]/40 hover:border-[#00E5FF]/30 transition-colors">
                            <time className="text-xs text-gray-500 uppercase tracking-wider">Coming Soon</time>
                            <h3 className="text-xl font-semibold text-white mt-2 mb-3 group-hover:text-[#00E5FF] transition-colors">
                                Multi-Provider Architecture: Supporting 4+ LLMs in One Agent
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                How ClawCode&apos;s provider abstraction layer lets you switch between Groq, Gemini,
                                Azure, and OpenRouter — and why that matters for production AI workflows.
                            </p>
                        </article>

                        <article className="group p-6 rounded-xl border border-gray-800/60 bg-[#161B22]/40 hover:border-[#00E5FF]/30 transition-colors">
                            <time className="text-xs text-gray-500 uppercase tracking-wider">Coming Soon</time>
                            <h3 className="text-xl font-semibold text-white mt-2 mb-3 group-hover:text-[#00E5FF] transition-colors">
                                Persistent Memory in CLI Tools: How ClawCode Remembers Your Codebase
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Deep dive into how ClawCode maintains persistent context about your project across
                                sessions, and why this is crucial for accurate code generation.
                            </p>
                        </article>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-800/60 py-8 px-6 text-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} ClawCode · Open-source under MIT License</p>
            </footer>
        </div>
    )
}
