import { generateStaticParamsFor, importPage } from 'nextra/pages'
import Pre from '@/components/Pre'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: { params: Promise<{ mdxPath?: string[] }> }) {
  const params = await props.params
  const pathSegments = params.mdxPath ?? []
  try {
    const { metadata } = await importPage(pathSegments)
    return metadata as { title?: string; description?: string }
  } catch {
    return {}
  }
}

export default async function DocsPage(props: {
  params: Promise<{ mdxPath?: string[] }>
}) {
  const params = await props.params
  const pathSegments = params.mdxPath ?? []
  const { default: MDXContent } = await importPage(pathSegments)
  return (
    <article className="prose prose-invert prose-neutral max-w-full dark:prose-invert">
      <MDXContent {...props} params={params} components={{ pre: Pre }} />
    </article>
  )
}
