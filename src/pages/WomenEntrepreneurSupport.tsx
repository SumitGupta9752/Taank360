import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { PageBanner } from '../components/PageBanner'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { Seo } from '../components/Seo'
export function WomenEntrepreneurSupport() { const content = useContent(); return <><Seo entry={content.seo.find((item) => item.route === '/women-entrepreneur-support')} /><PageBanner banner={content.banners.find((item) => item.page === 'women-entrepreneur-support')} /><Reveal><Section title="Support for women entrepreneurs" description={content.womenSupport.description}><div className="card-grid card-grid--four">{content.womenSupport.offerings.map((offering) => <article className="card" key={offering}><h3>{offering}</h3></article>)}</div></Section></Reveal><Reveal><Section title="Start a conversation"><Link className="button button--primary" to="/contact?tab=project">Discuss your requirement</Link></Section></Reveal></> }
