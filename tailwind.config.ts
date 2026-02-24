import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
    './theme.config.tsx',
    './node_modules/nextra-theme-docs/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0B0E17',
        accent: {
          DEFAULT: '#00E5FF',
          muted: 'rgba(0, 229, 255, 0.7)',
        },
        card: '#161B22',
        muted: '#6B7280',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse at top, #0B0E17 0%, #000000 100%)',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
