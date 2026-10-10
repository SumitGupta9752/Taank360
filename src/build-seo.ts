import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { Plugin } from 'vite'
import { siteDefaults } from './data/site-defaults.js'
import { publicRoutes } from './routes.js'
import { buildSeoMeta } from './lib/seo-core.js'
import { validateEnvelope } from './admin/validate.js'

function attr(value: string) { return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') }
function headTags(meta: ReturnType<typeof buildSeoMeta>, primary: string) { return `<title>${attr(meta.title)}</title><meta name="description" content="${attr(meta.description)}"><link rel="canonical" href="${attr(meta.canonical)}"><meta name="robots" content="${meta.robots}"><meta name="theme-color" content="${attr(primary)}"><link rel="icon" href="/favicon.png"><link rel="apple-touch-icon" href="/logo.png"><meta property="og:type" content="website"><meta property="og:site_name" content="Taank360"><meta property="og:title" content="${attr(meta.ogTitle)}"><meta property="og:description" content="${attr(meta.ogDescription)}"><meta property="og:url" content="${attr(meta.canonical)}"><meta property="og:image" content="${attr(meta.ogImage)}"><meta property="og:image:alt" content="${attr(meta.ogImageAlt)}"><meta property="og:locale" content="en_IN"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${attr(meta.ogTitle)}"><meta name="twitter:description" content="${attr(meta.ogDescription)}"><meta name="twitter:image" content="${attr(meta.ogImage)}"><script type="application/ld+json">${meta.jsonLd}</script>` }
function render(html: string, meta: ReturnType<typeof buildSeoMeta>, primary: string) { return html.replace(/<html[^>]*>/i, '<html lang="en-IN">').replace(/<title>[\s\S]*?<\/title>/i, '').replace('</head>', `${headTags(meta, primary)}</head>`) }

export function seoBuildPlugin(): Plugin {
  return {
    name: 'taank360-static-seo',
    apply: 'build',
    async closeBundle() {
      const outDir = join(process.cwd(), 'dist')
      const html = await readFile(join(outDir, 'index.html'), 'utf8')
      const siteUrl = (process.env.VITE_SITE_URL || 'https://YOUR-DOMAIN.com').replace(/\/$/, '')
      if (siteUrl.includes('YOUR-DOMAIN.com')) console.warn('[SEO WARNING] VITE_SITE_URL is still the placeholder; canonical, sitemap and Open Graph URLs are placeholders.')
      console.warn('[SEO WARNING] public/og-default.png is missing; using /logo.png as the Open Graph image.')
      let published: unknown = null
      try { published = JSON.parse(await readFile(join(process.cwd(), 'src/data/published-content.json'), 'utf8')) } catch { published = null }
      const publishedResult = validateEnvelope(published)
      const publishedContent = publishedResult.valid && publishedResult.content ? publishedResult.content : {}
      const entries = Array.isArray(publishedContent.seo) ? publishedContent.seo : []
      const facts = { ...siteDefaults, siteUrl, primaryColor: '#003C90', logoPath: '/logo.png', socials: Array.isArray(publishedContent.social) ? publishedContent.social as never[] : [] }
      for (const route of publicRoutes) {
        const meta = buildSeoMeta(route.path, facts, entries as never[])
        const target = route.path === '/' ? join(outDir, 'index.html') : join(outDir, route.path.slice(1), 'index.html')
        await mkdir(join(target, '..'), { recursive: true })
        await writeFile(target, render(html, meta, facts.primaryColor), 'utf8')
      }
      const adminMeta = buildSeoMeta('/admin', facts, [], true)
      await mkdir(join(outDir, 'admin'), { recursive: true })
      await writeFile(join(outDir, 'admin', 'index.html'), render(html, adminMeta, facts.primaryColor), 'utf8')
      const notFound = { ...buildSeoMeta('/404', facts, [], true), title: 'Page not found | Taank360' }
      await writeFile(join(outDir, '404.html'), render(html, notFound, facts.primaryColor), 'utf8')
      const date = new Date().toISOString().slice(0, 10)
      const urls = publicRoutes.map((route) => `<url><loc>${route.path === '/' ? `${siteUrl}/` : `${siteUrl}${route.path}/`}</loc><lastmod>${date}</lastmod></url>`).join('')
      await writeFile(join(outDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`, 'utf8')
      await writeFile(join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: ${siteUrl}/sitemap.xml\n`, 'utf8')
    },
  }
}
