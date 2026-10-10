import { useContent } from '../hooks/useContent'
import { PageBanner } from './PageBanner'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { Seo } from './Seo'
import type { LegalPage as LegalPageContent } from '../data/types'

function PlainBody({ body }: { body: string }) { return <>{body.split(/\n\s*\n/).map((paragraph) => { const lines = paragraph.split('\n'); const bullets = lines.filter((line) => line.startsWith('- ')); return bullets.length === lines.length ? <ul key={paragraph}>{bullets.map((line) => <li key={line}>{line.slice(2)}</li>)}</ul> : <p key={paragraph}>{paragraph}</p> })}</> }
export function LegalPage({ pageKey, route }: { pageKey: 'privacy' | 'terms' | 'refund' | 'disclaimer'; route: string }) { const content = useContent(); const page: LegalPageContent = content.legal[pageKey]; const bannerPage = pageKey === 'privacy' ? 'privacy-policy' : pageKey === 'terms' ? 'terms-and-conditions' : pageKey === 'refund' ? 'refund-policy' : 'disclaimer'; return <><Seo entry={content.seo.find((entry) => entry.route === route)} /><PageBanner banner={content.banners.find((banner) => banner.page === bannerPage)} /><Reveal><Section title={page.title} description={page.lastUpdated ? `Last updated: ${page.lastUpdated}` : undefined}>{page.status === 'draft' && <p className="legal-draft-notice" role="note">This page is a draft template and has not yet been reviewed.</p>}{page.sections.map((section) => <article className="legal-section" key={section.heading}><h3>{section.heading}</h3><PlainBody body={section.body} /></article>)}</Section></Reveal></> }
