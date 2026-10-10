import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL } from '../config'
import { siteDefaults } from '../data/site-defaults'
import { buildSeoMeta } from '../lib/seo-core'
import { useContent } from '../hooks/useContent'

export function Seo({ entry }: { entry?: { route: string; title: string; description: string; canonical: string; ogTitle: string; ogDescription: string; ogImage: string; indexing: 'index, follow' | 'noindex, nofollow' } }) {
  const location = useLocation(); const content = useContent()
  useEffect(() => {
    const admin = location.pathname === '/admin'; const preview = sessionStorage.getItem('taank360.preview') === '1'; const meta = buildSeoMeta(location.pathname, { ...siteDefaults, siteUrl: SITE_URL, primaryColor: content.general.theme.primary, logoPath: '/logo.png', socials: content.social }, entry ? [entry] : content.seo, admin || preview)
    document.documentElement.lang = 'en-IN'; document.title = meta.title
    const setMeta = (selector: string, attr: string, value: string) => { let element = document.head.querySelector(selector) as HTMLMetaElement | null; if (!element) { element = document.createElement('meta'); element.setAttribute(attr, selector.includes('property') ? selector.split('"')[1] : selector.split('"')[1]); document.head.appendChild(element) } element.content = value }
    setMeta('meta[name="description"]', 'name', meta.description); setMeta('meta[name="robots"]', 'name', meta.robots); setMeta('meta[name="theme-color"]', 'name', content.general.theme.primary)
    ;[['og:type', 'website'], ['og:site_name', siteDefaults.brandName], ['og:title', meta.ogTitle], ['og:description', meta.ogDescription], ['og:url', meta.canonical], ['og:image', meta.ogImage], ['og:image:alt', meta.ogImageAlt], ['og:locale', 'en_IN']].forEach(([name, value]) => setMeta(`meta[property="${name}"]`, 'property', value))
    ;[['twitter:card', 'summary_large_image'], ['twitter:title', meta.ogTitle], ['twitter:description', meta.ogDescription], ['twitter:image', meta.ogImage]].forEach(([name, value]) => setMeta(`meta[name="${name}"]`, 'name', value))
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null; if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) } canonical.href = meta.canonical
    let jsonLd = document.head.querySelector('#taank360-jsonld') as HTMLScriptElement | null; if (!jsonLd) { jsonLd = document.createElement('script'); jsonLd.id = 'taank360-jsonld'; jsonLd.type = 'application/ld+json'; document.head.appendChild(jsonLd) } jsonLd.textContent = meta.jsonLd
  }, [content, entry, location.pathname])
  return null
}
