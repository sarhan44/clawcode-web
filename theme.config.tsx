import React from 'react'

export default {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00E5FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
      <span style={{ fontWeight: 700, letterSpacing: '0.05em', color: '#00E5FF', fontSize: '1.25rem' }}>
        CLAWCODE
      </span>
    </div>
  ),
  project: {
    link: 'https://github.com/sarhan44/clawcode',
  },
  docsRepositoryBase: 'https://github.com/sarhan44/clawcode/tree/main',
  primaryHue: 187,
  darkMode: true,
  toc: {
    backToTop: true,
  },
  feedback: {
    content: "Question? Give us feedback →",
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/sarhan44/clawcode" target="_blank" rel="noopener noreferrer" style={{ color: '#00E5FF' }}>
          ClawCode
        </a>
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – ClawCode',
    }
  },
}
