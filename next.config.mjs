import nextra from 'nextra'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

const withNextra = nextra({
  contentDirBasePath: '/docs',
})

export default withNextra(nextConfig)
