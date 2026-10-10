import { routes, type SiteRoute } from '../routes.js'
import { seoDefaults } from '../data/seo-defaults.js'
import type { SeoEntry, SocialLink } from '../data/types.js'

export interface SeoFacts { siteUrl: string; companyName: string; brandName: string; description: string; email: string; phone: string; address: string; logoPath: string; primaryColor: string; socials?: SocialLink[] }
export interface SeoMeta { route: string; title: string; description: string; canonical: string; robots: string; ogTitle: string; ogDescription: string; ogImage: string; ogImageAlt: string; jsonLd: string }

export function absoluteUrl(siteUrl: string, path: string) { return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}` }
export function canonicalFor(siteUrl: string, route: string, override = '') { if (override) return override; return route === '/' ? `${siteUrl}/` : `${siteUrl}${route}/` }
export function routeFor(pathname: string): SiteRoute { return routes.find((route) => route.path === pathname) || { path: pathname, label: 'Page not found', indexable: false } }
export function entryFor(route: string, entries: SeoEntry[] = []) { const override = entries.find((entry) => entry.route === route); const fallback = seoDefaults[route] || { title: 'Page not found | Taank360', description: 'The requested Taank360 page could not be found.' }; return { ...fallback, ...(override || {}) } }
function breadcrumb(route: string, siteUrl: string) { if (route === '/') return undefined; const parts = route.split('/').filter(Boolean); const items = [{ name: 'Home', item: '/' }]; let current = ''; parts.forEach((part) => { current += `/${part}`; const match = routes.find((entry) => entry.path === current); if (match) items.push({ name: match.label, item: current }) }); return { '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: absoluteUrl(siteUrl, item.item) })) }
}
export function buildJsonLd(route: string, facts: SeoFacts) {
  const organization: Record<string, unknown> = { '@type': 'Organization', name: facts.companyName, alternateName: facts.brandName, url: facts.siteUrl, logo: absoluteUrl(facts.siteUrl, facts.logoPath), email: facts.email, telephone: facts.phone, founder: { '@type': 'Person', name: 'Sunil Gour' } }
  if (facts.address) organization.address = { '@type': 'PostalAddress', streetAddress: facts.address, addressCountry: 'IN' }
  const sameAs = facts.socials?.map((social) => social.url).filter(Boolean)
  if (sameAs?.length) organization.sameAs = sameAs
  const graph: Record<string, unknown>[] = [organization, { '@type': 'WebSite', name: facts.brandName, url: facts.siteUrl }]
  const crumb = breadcrumb(route, facts.siteUrl); if (crumb) graph.push(crumb)
  // Deliberately omit ratings, reviews, FAQ, offers, prices, awards, opening hours and coordinates because they are not verified facts.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')
}
export function buildSeoMeta(route: string, facts: SeoFacts, entries: SeoEntry[] = [], admin = false): SeoMeta {
  const entry = entryFor(route, entries); const routeInfo = routeFor(route); const noindex = admin || !routeInfo.indexable; const title = entry.title.slice(0, 60); const description = entry.description.slice(0, 160); const image = absoluteUrl(facts.siteUrl, entry.ogImage || facts.logoPath); return { route, title, description, canonical: canonicalFor(facts.siteUrl, route, entry.canonical), robots: noindex ? 'noindex,nofollow' : 'index,follow', ogTitle: title, ogDescription: description, ogImage: image, ogImageAlt: `${facts.brandName} logo`, jsonLd: buildJsonLd(route, facts) }
}
