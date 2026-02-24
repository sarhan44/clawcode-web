import type { MDXComponents } from 'mdx/types'
import Pre from './components/Pre'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: Pre,
  }
}
