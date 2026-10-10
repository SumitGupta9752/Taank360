import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { PageBanner } from '../components/PageBanner'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { Seo } from '../components/Seo'
import { FeaturedVideos } from '../components/FeaturedVideos'
export function Services() { const content = useContent(); const categories = [...new Set(content.services.filter((item) => item.status === 'visible').map((item) => item.category))]; return <><Seo entry={content.seo.find((item) => item.route === '/services')} /><PageBanner banner={content.banners.find((item) => item.page === 'services')} /><Reveal><Section title="Explore our service areas"><div className="card-grid">{categories.map((category) => { const service = content.services.find((item) => item.category === category); const to = category === 'Digital Marketing' ? '/services/digital-marketing' : category === 'Development Solutions' ? '/services/development' : '/services/business-tools'; return service && <Link className="card card-link" to={to} key={category}><h3>{category}</h3><p>{service.description}</p><span className="text-link">Discuss your requirement</span></Link> })}</div></Section></Reveal><FeaturedVideos placement="services" /></> }
