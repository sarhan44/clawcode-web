import Link from 'next/link';
import { Github, Code2 } from 'lucide-react';

export default function Header() {
    return (
        <nav className="sticky top-0 z-50 border-b border-gray-800/60 bg-[#0B0E17]/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-2">
                    <Code2 className="text-[#00E5FF] h-6 w-6" />
                    <span className="font-bold tracking-wide text-[#00E5FF] text-xl">
                        CLAWCODE
                    </span>
                </div>
                <div className="flex items-center gap-6">
                    <Link
                        href="/docs"
                        className="text-sm font-medium text-gray-400 transition-colors hover:text-[#00E5FF]"
                    >
                        Docs
                    </Link>
                    <a
                        href="https://github.com/sarhan44/clawcode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-[#00E5FF]"
                    >
                        <Github className="h-4 w-4" />
                        GitHub
                    </a>
                </div>
            </div>
        </nav>
    );
}
