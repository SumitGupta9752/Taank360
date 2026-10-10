import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { isContentEnabled } from '../lib/content'
import { safeUrl } from '../lib/safeUrl'
import { Reveal } from './Reveal'
import { Section } from './Section'

const today = new Date().toISOString().slice(0, 10)
export function OffersSection() {
  const offers = useContent().offers.filter((offer) => isContentEnabled(offer.status) && (!offer.validFrom || offer.validFrom <= today) && (!offer.validTo || offer.validTo >= today))
  if (!offers.length) return null
  return <Reveal><Section eyebrow="Offers" title="Current opportunities"><div className="card-grid">{offers.map((offer) => { const link = safeUrl(offer.cta); return <article className="card" key={offer.id || offer.title}>{offer.image && <img className="offer-image" src={offer.image} alt="" loading="lazy" />}<h3>{offer.title}</h3><p>{offer.description}</p>{link ? <a className="text-link" href={link}>Learn more</a> : offer.cta && <Link className="text-link" to={offer.cta}>{offer.cta}</Link>}</article> })}</div></Section></Reveal>
}
