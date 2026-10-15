import { Check } from 'lucide-react'
import { Button } from './Button'
export function DarkFeatureBand({ title, description, items, to = '/contact?tab=project', cta = 'Discuss your requirement' }: { title: string; description?: string; items?: string[]; to?: string; cta?: string }) { return <section className="dark-feature-band"><div><h2>{title}</h2>{description && <p>{description}</p>}{items && <ul>{items.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul>}<Button to={to}>{cta}</Button></div></section> }
