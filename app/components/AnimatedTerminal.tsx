'use client'

import { useState, useEffect } from 'react'

const LINES = [
  '$ clawcode "add jwt auth"',
  '🔎 Reading src/auth.ts',
  '🧠 Planning changes...',
  '✍ Writing patch...',
  '🧪 Running tests...',
  '✅ Success',
]

const DELAY_MS = 700

export function AnimatedTerminal() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount >= LINES.length) return
    const t = setTimeout(
      () => setVisibleCount((c) => c + 1),
      visibleCount === 0 ? 400 : DELAY_MS
    )
    return () => clearTimeout(t)
  }, [visibleCount])

  return (
    <div className="rounded-lg border border-gray-700/80 bg-gray-900/90 px-4 py-3 font-mono text-sm shadow-xl">
      {LINES.map((line, i) => (
        <div
          key={i}
          className="min-h-[1.25em] text-gray-300 transition-opacity duration-300"
          style={{ opacity: i <= visibleCount ? 1 : 0.15 }}
        >
          {i <= visibleCount && (
            <>
              {line}
              {i === visibleCount && visibleCount < LINES.length && (
                <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-[#00E5FF]" />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  )
}
