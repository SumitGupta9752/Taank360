import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { PageBanner } from '../components/PageBanner'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { Seo } from '../components/Seo'
import { Card } from '../components/Card'
import { isContentEnabled } from '../lib/content'
export function ServiceCategory({ category }: { category: string }) { const content = useContent(); const page = category === 'Digital Marketing' ? 'services/digital-marketing' : category === 'Development Solutions' ? 'services/development' : 'services/business-tools'; const items = category === 'Business & Marketing Tools' ? content.tools.filter((item) => isContentEnabled(item.status)) : content.services.filter((item) => item.category === category && isContentEnabled(item.status)); return <><Seo entry={content.seo.find((item) => item.route === `/${page}`)} /><PageBanner banner={content.banners.find((item) => item.page === page)} /><Reveal><Section title={category}><div className="card-grid">{items.sort((a, b) => a.order - b.order).map((item) => <Card key={item.id}><h3>{item.name}</h3><p>{item.description}</p><ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>{'price' in item && item.price && <p><strong>{item.price}</strong></p>}</Card>)}</div><Link className="button button--primary" to="/contact?tab=project">Discuss your requirement</Link></Section></Reveal></> }
