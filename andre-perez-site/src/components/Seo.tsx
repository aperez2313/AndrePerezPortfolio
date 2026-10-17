import { useEffect } from 'react'
import { site } from '../content/site'

/*
  Per-page title and description. index.html holds the defaults (what link-preview scrapers see);
  this updates those same tags when you move between pages, instead of adding duplicates.
*/
function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

export function Seo({ title, description, path = '/' }: { title?: string; description: string; path?: string }) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.descriptor.join(', ')}`

  useEffect(() => {
    document.title = fullTitle
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    if (site.url) {
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = `${site.url}${path}`
    }
  }, [fullTitle, description, path])

  return null
}
