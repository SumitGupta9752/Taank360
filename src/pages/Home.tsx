import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { FeaturedVideos } from '../components/FeaturedVideos'
import { VideoTestimonials } from '../components/VideoTestimonials'
import { PartnerMarquee } from '../components/PartnerMarquee'
import { PortfolioCard } from '../components/PortfolioCard'

export function Home() {
  const content = useContent()
  const visibleServices = content.services.filter((item) => item.status === 'visible')
  const pillars = [{ name: 'Marketing', text: content.home.pillarDescriptions.marketing, to: '/services/digital-marketing' }, { name: 'Development', text: content.home.pillarDescriptions.development, to: '/services/development' }, { name: 'Startup Program', text: content.home.pillarDescriptions.startup, to: '/startup-program' }]
  const categories = visibleServices.filter((item) => ['Digital Marketing', 'Development Solutions', 'Business & Marketing Tools'].includes(item.category)).filter((item, index, items) => items.findIndex((candidate) => candidate.category === item.category) === index)
  const portfolio = content.portfolio.filter((item) => item.status === 'visible').slice(0, 3)
  return <>
    <Seo entry={content.seo.find((item) => item.route === '/')} />
    <section className="hero"><div className="container hero__grid"><div><p className="eyebrow">Taank360</p><h1>Let&apos;s Make Your Brand <span className="accent-mark">{content.home.heroHighlight}.</span></h1><p className="hero__lead">{content.general.supportingLine}</p><div className="button-row"><Button to="/contact?tab=project">Start a Project</Button><Button to="/services" variant="secondary">Explore Services</Button></div></div><div className="ring-motif" aria-label="Marketing, Development and Startup"><strong>360</strong><span className="ring-node ring-node--one">Marketing</span><span className="ring-node ring-node--two">Development</span><span className="ring-node ring-node--three">Startup</span></div></div></section>
    <Reveal><Section eyebrow="Three pillars" title="A practical partner for the work ahead"><div className="card-grid card-grid--three">{pillars.map((pillar) => <Link to={pillar.to} className="card card-link" key={pillar.name}><h3>{pillar.name}</h3><p>{pillar.text}</p><span className="text-link">Explore</span></Link>)}</div></Section></Reveal>
    <Reveal><Section eyebrow="Services" title="Support shaped around your requirement"><div className="card-grid">{categories.map((service) => <Card key={service.category}><h3>{service.category}</h3><p>{service.description}</p><Link className="text-link" to={service.category === 'Digital Marketing' ? '/services/digital-marketing' : service.category === 'Development Solutions' ? '/services/development' : '/services/business-tools'}>View services</Link></Card>)}</div></Section></Reveal>
    <Reveal><Section eyebrow="Business tools" title="Tools that keep work moving" description={content.home.toolsIntro}><div className="chip-list">{content.tools.filter((item) => item.status === 'visible').sort((a, b) => a.order - b.order).map((tool) => <Link className="chip" to="/services/business-tools" key={tool.id}>{tool.name}</Link>)}</div></Section></Reveal>
    <FeaturedVideos placement="home" />
    <VideoTestimonials />
    {portfolio.length > 0 && <Reveal><Section title="Our work"><div className="portfolio-grid">{portfolio.map((item) => <PortfolioCard item={item} key={item.id} />)}</div><Link className="text-link" to="/portfolio">View all work</Link></Section></Reveal>}
    {content.partners.length > 0 && <Reveal><Section title="Our partners"><PartnerMarquee /></Section></Reveal>}
    <Reveal><Section eyebrow="Startup Program" title={content.startupProgram.slogan} description={content.home.startupTeaser}><Button to="/startup-program" variant="secondary">Explore the Startup Program</Button></Section></Reveal>
    <Reveal><Section eyebrow="Founder" title={content.founder.name}><div className="founder-block"><div className="founder-avatar">{content.founder.photo ? <img src={content.founder.photo} alt={content.founder.name} /> : 'SG'}</div><div><p><strong>Founder &amp; CEO</strong></p><p>{content.founder.qualification}</p><p>{content.founder.experience} · {content.founder.award}</p><p>{content.founder.vision}</p><Link className="text-link" to="/about">About Taank360</Link></div></div></Section></Reveal>
    <section className="cta-band"><div className="container"><h2>Ready to Build, Grow or Scale Your Business?</h2><p>{content.home.finalCtaDescription}</p><div className="button-row"><Button to="/contact?tab=project">Start a Project</Button><a className="button button--secondary" href={`https://wa.me/${content.contact.whatsapp}`}>WhatsApp</a></div></div></section>
  </>
}
