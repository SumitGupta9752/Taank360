import { useState } from 'react'
import { useContent } from '../hooks/useContent'
import { safeUrl } from '../lib/safeUrl'
import { isContentEnabled } from '../lib/content'

// Curated vector-styled branded partner badges
function PartnerBrandLogo({ name, id }: { name: string; id: string }) {
  const norm = (id || name).toLowerCase()

  if (norm.includes('sage')) {
    return (
      <div className="partner-brand-pill partner-brand--sage">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="partner-brand-icon">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
        <span className="partner-brand-text">SAGE University</span>
      </div>
    )
  }

  if (norm.includes('green') || norm.includes('greentech')) {
    return (
      <div className="partner-brand-pill partner-brand--greentech">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="partner-brand-icon">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z" />
          <path d="M12 6v6l4 2" />
        </svg>
        <span className="partner-brand-text">GreenTech Solutions</span>
      </div>
    )
  }

  if (norm.includes('grow') || norm.includes('higrow')) {
    return (
      <div className="partner-brand-pill partner-brand--higrow">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="partner-brand-icon">
          <path d="M7 20h10" />
          <path d="M10 20c0-4.5 1.5-8 5-11 0 4-2 7-5 11z" />
          <path d="M14 20c0-3 1-5 3-7" />
        </svg>
        <span className="partner-brand-text">Hi-Grow Smart</span>
      </div>
    )
  }

  if (norm.includes('karbo') || norm.includes('agrikarbo')) {
    return (
      <div className="partner-brand-pill partner-brand--agrikarbo">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="partner-brand-icon">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
        <span className="partner-brand-text">AgriKarbo</span>
      </div>
    )
  }

  if (norm.includes('tevent')) {
    return (
      <div className="partner-brand-pill partner-brand--tevent">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="partner-brand-icon">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        <span className="partner-brand-text">Tevent</span>
      </div>
    )
  }

  if (norm.includes('interntak')) {
    return (
      <div className="partner-brand-pill partner-brand--interntak">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="partner-brand-icon">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <polyline points="16 11 18 13 22 9" />
        </svg>
        <span className="partner-brand-text">Interntak</span>
      </div>
    )
  }

  return (
    <div className="partner-brand-pill partner-brand--default">
      <span className="partner-brand-dot" />
      <span className="partner-brand-text">{name}</span>
    </div>
  )
}

export function PartnerMarquee() {
  const partners = useContent()
    .partners.filter((partner) => isContentEnabled(partner.status))
    .sort((a, b) => a.order - b.order)
  const [paused, setPaused] = useState(false)

  if (!partners.length) return null

  const repetitions = Math.max(3, Math.ceil(12 / partners.length))
  const items = Array.from({ length: repetitions }, () => partners).flat()

  const renderLogo = (partner: (typeof partners)[number]) => {
    const badge = partner.logo ? (
      <img src={partner.logo} alt={partner.name} loading="lazy" />
    ) : (
      <PartnerBrandLogo name={partner.name} id={partner.id} />
    )
    const website = safeUrl(partner.website)
    return website ? (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${partner.name} website`}
      >
        {badge}
      </a>
    ) : (
      badge
    )
  }

  return (
    <div className="partner-marquee-container">
      <section
        className={`partner-marquee ${paused ? 'is-paused' : ''}`}
        aria-label="Our partners"
      >
        <button
          className="marquee-toggle"
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? '▶ Play partners' : '⏸ Pause partners'}
        </button>
        <div className="partner-marquee__track">
          {items.map((partner, index) => (
            <span className="partner-logo" key={`${partner.id}-${index}`}>
              {renderLogo(partner)}
            </span>
          ))}
          <span aria-hidden="true" className="partner-marquee__copy">
            {items.map((partner, index) => (
              <span className="partner-logo" key={`copy-${partner.id}-${index}`}>
                {renderLogo(partner)}
              </span>
            ))}
          </span>
        </div>
      </section>
    </div>
  )
}
