import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { PageBanner } from '../components/PageBanner'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { Seo } from '../components/Seo'
import { FeaturedVideos } from '../components/FeaturedVideos'
import { StartupApplicationForm } from '../components/StartupApplicationForm'
export function StartupProgram() { const content = useContent(); const data = content.startupProgram; return <><Seo entry={content.seo.find((item) => item.route === '/startup-program')} /><PageBanner banner={content.banners.find((item) => item.page === 'startup-program')} /><Reveal><Section title={data.slogan} description={data.description}><div className="card-grid card-grid--three">{data.offerings.map((offering) => <article className="card" key={offering}><h3>{offering}</h3></article>)}</div></Section></Reveal><Reveal><Section title="Flexible payment" description={data.flexiblePayment} /></Reveal><Reveal><Section title="How it works"><ol className="steps">{data.steps.map((step) => <li key={step}><strong>{step}</strong></li>)}</ol><Link className="button button--primary" to="/startup-program#apply">Tell us about your startup</Link></Section></Reveal><FeaturedVideos placement="startup" /><Reveal><Section title="Tell us about your startup" description="Share your details and prepare a message for WhatsApp or email."><StartupApplicationForm /></Section></Reveal></> }
