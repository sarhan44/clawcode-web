import Link from 'next/link'

const GITHUB_URL = 'https://github.com/sarhan44/clawcode'

const LICENSE_TEXT = `MIT License

Copyright (c) 2026 Sarhan Khan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`

export const metadata = {
  title: 'License',
  description: 'MIT License for ClawCode.',
}

export default function LicensePage() {
  return (
    <div className="landing-page min-h-screen text-gray-100">
      <nav className="sticky top-0 z-50 border-b border-gray-800/60 bg-[var(--page-bg)]/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="font-bold tracking-wide text-[#00E5FF]">
            CLAWCODE
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/docs"
              className="text-sm text-gray-400 transition hover:text-[#00E5FF]"
            >
              Documentation
            </Link>
            <Link
              href="/license"
              className="text-sm text-gray-400 transition hover:text-[#00E5FF]"
            >
              License
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition hover:text-[#00E5FF]"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          License
        </h1>
        <pre className="mt-8 overflow-x-auto rounded-lg border border-gray-700/80 bg-gray-900/80 px-6 py-6 font-mono text-sm leading-relaxed text-gray-300 whitespace-pre-wrap">
          {LICENSE_TEXT}
        </pre>
      </main>
    </div>
  )
}
