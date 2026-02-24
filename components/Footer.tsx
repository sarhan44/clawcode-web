import Link from 'next/link';
import { Github, Code2, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-gray-800/60 bg-[#0B0E17] text-sm text-gray-500 py-12">
            <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <Code2 className="text-[#00E5FF] h-5 w-5" />
                        <span className="font-bold tracking-wide text-white text-lg">
                            CLAWCODE
                        </span>
                    </div>
                    <p className="max-w-sm text-gray-400">
                        Build, Refactor, and Fix from your terminal. ClawCode is the ultimate
                        AI developer agent for creating better software, faster.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Resources</h4>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/docs" className="hover:text-[#00E5FF] transition-colors">
                                Documentation
                            </Link>
                        </li>
                        <li>
                            <Link href="/docs/guide" className="hover:text-[#00E5FF] transition-colors">
                                Installation
                            </Link>
                        </li>
                        <li>
                            <a href="https://github.com/sarhan44/clawcode" target="_blank" rel="noreferrer" className="hover:text-[#00E5FF] transition-colors">
                                Github Source
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Legal</h4>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/docs/license" className="hover:text-white transition-colors">
                                License
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800/60 mx-6 md:mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© {new Date().getFullYear()} ClawCode CLI. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <a href="https://github.com/sarhan44/clawcode" className="text-gray-400 hover:text-white transition-colors">
                        <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Twitter className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
