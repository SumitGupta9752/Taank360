import { useContent } from '../hooks/useContent'
import { safeUrl } from '../lib/safeUrl'

export function PartnerMarquee() {
  const partners = useContent().partners.filter((partner) => partner.status === 'visible').sort((a, b) => a.order - b.order)
  if (!partners.length) return null
  const repetitions = Math.max(2, Math.ceil(8 / partners.length))
  const items = Array.from({ length: repetitions }, () => partners).flat()
  const renderLogo = (partner: typeof partners[number]) => { const image = <img src={partner.logo} alt={partner.name} loading="lazy" />; const website = safeUrl(partner.website); return website ? <a href={website} target="_blank" rel="noopener noreferrer" aria-label={`${partner.name} website`}>{image}</a> : image }
  return <section className="partner-marquee" aria-label="Our partners"><div className="partner-marquee__track">{items.map((partner, index) => <span className="partner-logo" key={`${partner.id}-${index}`}>{renderLogo(partner)}</span>)}<span aria-hidden="true" className="partner-marquee__copy">{items.map((partner, index) => <span className="partner-logo" key={`copy-${partner.id}-${index}`}>{renderLogo(partner)}</span>)}</span></div></section>
}
