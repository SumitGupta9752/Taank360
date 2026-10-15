import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { getIcon } from '../lib/icons'

type Props = { title: string; description: string; icon?: string; tint?: string; features?: string[]; to?: string; cta?: string }
export function FeatureCard({ title, description, icon, tint = 'blue', features = [], to, cta = 'Know more' }: Props) {
  const Icon = getIcon(icon)
  const body = <><span className={`feature-icon feature-icon--${tint}`}><Icon size={21} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p>{features.length > 0 && <ul className="feature-list">{features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul>}{to && <span className="text-link">{cta} <ArrowUpRight size={15} aria-hidden="true" /></span>}</>
  return to ? <Link className="feature-card" to={to}>{body}</Link> : <article className="feature-card">{body}</article>
}
