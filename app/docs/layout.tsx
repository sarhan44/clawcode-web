import Link from 'next/link'
import { getPageMap } from 'nextra/page-map'
import themeConfig from '../../theme.config'
import { Code2 } from 'lucide-react'

type PageMapItem = {
  name?: string
  route?: string
  title?: string
  children?: PageMapItem[]
}

function Sidebar({ items }: { items: PageMapItem[] }) {
  return (
    <nav className="w-full max-w-full shrink-0 border-r border-gray-800 py-6 pr-4">
      <ul className="space-y-1 text-sm">
        {items.map((item) => {
          if (item.children?.length) {
            return (
              <li key={item.route ?? item.name}>
                <span className="text-gray-500 px-3 py-1 block font-medium">
                  {item.title ?? item.name}
                </span>
                <ul className="mt-1 border-l border-gray-800 pl-3 ml-2 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.route ?? child.name}>
                      <Link
                        href={child.route ?? '#'}
                        className="block py-1.5 px-2 rounded text-gray-400 hover:text-[#00E5FF] hover:bg-gray-800/50"
                      >
                        {child.title ?? child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          }
          if (!item.route) return null
          return (
            <li key={item.route}>
              <Link
                href={item.route}
                className="block py-1.5 px-3 rounded text-gray-400 hover:text-[#00E5FF] hover:bg-gray-800/50"
              >
                {item.title ?? item.name ?? item.route}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = (await getPageMap('/docs')) as PageMapItem[]
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex">
      <aside className="fixed left-0 top-0 z-10 h-full w-56 border-r border-gray-800 bg-gray-950/95">
        <div className="flex h-14 items-center border-b border-gray-800 px-4 gap-1">
          <Code2 className="text-[#00E5FF] h-6 w-6" />
          <Link href="/" className="font-bold tracking-wide text-[#00E5FF]">
            CLAWCODE
          </Link>
        </div>
        <Sidebar items={pageMap} />
      </aside>
      <div className="pl-56 flex-1 min-w-0">
        <header className="sticky top-0 z-10 flex h-14 items-center justify-end border-b border-gray-800 bg-gray-950/95 px-6">
          <a
            href={themeConfig.project?.link ?? 'https://github.com/sarhan44/clawcode'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-[#00E5FF] transition"
          >
            GitHub
          </a>
        </header>
        <main className="mx-auto max-w-7xl px-6 py-10">
          {children}
        </main>
        <footer className="border-t border-gray-800 py-6 px-6 text-center text-sm text-gray-500">
          {themeConfig.footer?.text ?? (
            <span>
              © {new Date().getFullYear()} ClawCode ·{' '}
              <a href="https://github.com/sarhan44/clawcode" className="hover:text-[#00E5FF]">
                GitHub
              </a>
            </span>
          )}
        </footer>
      </div>
    </div>
  )
}
