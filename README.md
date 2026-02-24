# ClawCode Documentation Site

Documentation website for **ClawCode — AI Coding Agent for Your Terminal**.

## Stack

- **Next.js 15** (App Router)
- **Nextra 4** (docs theme)
- **Tailwind CSS**
- Dark theme by default, accent color `#00E5FF`
- **Fully static export** (`output: 'export'`)

## Develop locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The landing page is at `/`; docs are under `/docs`.

## Build

```bash
npm run build
```

Static files are emitted to the **`out`** directory. No Node server is required for production.

## Deploy to Vercel

1. **Import the project**
   - Push this repo (or the `docs-site` folder as the root of a repo) to GitHub.
   - In [Vercel](https://vercel.com), click **Add New Project** and import the repository.
   - Set the **Root Directory** to `docs-site` if the repo root is the monorepo root.

2. **Build settings**
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `out` (Next.js static export default)
   - **Install Command:** `npm install` (default)

3. **Environment**
   - No environment variables are required for the docs site.

4. **Deploy**
   - Click **Deploy**. Vercel will run `npm install` and `npm run build`. The static export in `out` is served on the edge.

### Optional: Custom domain

In the Vercel project, go to **Settings → Domains** and add your domain (e.g. `docs.clawcode.dev` or `clawcode.dev`).

### Optional: Favicon

Replace `public/favicon.svg` with your own favicon, or add `public/favicon.ico` and update the `<link rel="icon">` in `app/layout.tsx` if you prefer an ICO.

## Project structure

```
docs-site/
├── app/
│   ├── layout.tsx          # Root layout, metadata, dark theme
│   ├── page.tsx            # Landing (hero, features, install, footer)
│   ├── globals.css         # Tailwind + accent overrides
│   └── docs/
│       ├── layout.tsx      # Nextra Layout (sidebar, navbar) for /docs
│       └── [[...mdxPath]]/
│           └── page.tsx    # Catch-all for MDX under /docs
├── content/                 # MDX source (contentDirBasePath: '/docs')
│   ├── _meta.ts            # Sidebar order and titles
│   ├── index.mdx           # /docs
│   ├── getting-started.mdx
│   ├── installation.mdx
│   ├── providers.mdx
│   ├── memory.mdx
│   ├── tui.mdx
│   └── architecture.mdx
├── public/
│   └── favicon.svg
├── theme.config.tsx        # Nextra theme (logo, GitHub, dark, accent)
├── mdx-components.tsx      # MDX component overrides
├── next.config.mjs         # Nextra + output: 'export'
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Links

- [ClawCode GitHub](https://github.com/sarhan44/clawcode)
- [Install script](https://raw.githubusercontent.com/sarhan44/clawcode/main/install.sh) (Mac/Linux)
- [Install script (Windows)](https://raw.githubusercontent.com/sarhan44/clawcode/main/install.ps1)
