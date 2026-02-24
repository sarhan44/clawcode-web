'use client'

import { useState } from 'react'

export function InstallButton({ installCmd }: { installCmd: string }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    void navigator.clipboard.writeText(installCmd).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="btn-primary rounded-lg px-6 py-3 text-sm font-medium text-gray-950"
    >
      {copied ? 'Copied!' : 'Install'}
    </button>
  )
}
