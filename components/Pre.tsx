"use client";
import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

const Pre = ({ children, ...props }: any) => {
    const [copied, setCopied] = useState(false)

    const extractText = (node: any): string => {
        if (typeof node === 'string') return node
        if (Array.isArray(node)) return node.map(extractText).join('')
        if (node?.props?.children) return extractText(node.props.children)
        return ''
    }

    const handleCopy = async () => {
        const code = extractText(children)
        if (code) {
            try {
                await navigator.clipboard.writeText(code.trim())
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            } catch (err) {
                console.error('Failed to copy!', err)
            }
        }
    }

    return (
        <div className="relative group my-4">
            <pre {...props} className={`${props.className || ''} !pr-14 !py-4 rounded-xl border border-gray-800 bg-[#0D1117]/80 backdrop-blur-sm shadow-lg overflow-x-auto`}>
                {children}
            </pre>
            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-lg bg-gray-800/40 hover:bg-gray-700/60 text-gray-400 hover:text-[#00E5FF] transition-all border border-gray-700/50 backdrop-blur-md z-10 opacity-60 group-hover:opacity-100"
                title="Copy to clipboard"
            >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
        </div>
    )
}

export default Pre
