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
import { OffersSection } from '../components/OffersSection'
import { isContentEnabled } from '../lib/content'
import { getIcon } from '../lib/icons'
import { StatsBar } from '../components/StatsBar'
import { HomeHeroSlider } from '../components/HomeHeroSlider'

export function Home() {
  const content = useContent(); const visibleServices = content.services.filter((item) => isContentEnabled(item.status)); const pillars = [{ name: 'Marketing', text: content.home.pillarDescriptions.marketing, to: '/services/digital-marketing' }, { name: 'Development', text: content.home.pillarDescriptions.development, to: '/services/development' }, { name: 'Startup Program', text: content.home.pillarDescriptions.startup, to: '/startup-program' }]; const categories = visibleServices.filter((item) => ['Digital Marketing', 'Development Solutions', 'Business & Marketing Tools'].includes(item.category)).filter((item, index, items) => items.findIndex((candidate) => candidate.category === item.category) === index); const portfolio = content.portfolio.filter((item) => isContentEnabled(item.status)).slice(0, 3)
  const renderSection = (id: string, heading?: string, subheading?: string) => {
    const title = heading || ({ pillars: 'A practical partner for the work ahead', services: 'Support shaped around your requirement', tools: 'Tools that keep work moving', portfolio: 'Our work', partners: 'Our partners', startup: content.startupProgram.slogan, founder: content.founder.name, finalCta: 'Ready to Build, Grow or Scale Your Business?' }[id] || '')
    if (id === 'pillars') return <Reveal key={id}><section className="pillar-band"><div className="container"><Section eyebrow="Three pillars" title={title} description={subheading}><div className="card-grid card-grid--three">{pillars.map((pillar, index) => { const Icon = getIcon(['megaphone', 'code', 'rocket'][index]); return <Link to={pillar.to} className="card card-link pillar-card" key={pillar.name}><span className="icon-tile icon-tile--blue"><Icon size={21} aria-hidden="true" /></span><h3>{pillar.name}</h3><p>{pillar.text}</p><span className="text-link">Explore <span aria-hidden="true">→</span></span></Link> })}</div></Section></div></section></Reveal>
    if (id === 'services') return <Reveal key={id}><Section eyebrow="Services" title={title} description={subheading}><div className="card-grid card-grid--three">{categories.map((service) => { const Icon = getIcon(service.icon); return <Card key={service.category}><span className="icon-tile icon-tile--orange"><Icon size={21} aria-hidden="true" /></span><h3>{service.category}</h3><p>{service.description}</p><Link className="text-link" to={service.category === 'Digital Marketing' ? '/services/digital-marketing' : service.category === 'Development Solutions' ? '/services/development' : '/services/business-tools'}>Know more <span aria-hidden="true">→</span></Link></Card> })}</div></Section></Reveal>
    if (id === 'tools') return <Reveal key={id}><Section eyebrow="Business tools" title={title} description={subheading || content.home.toolsIntro}><div className="tools-showcase-grid">{content.tools.filter((item) => isContentEnabled(item.status)).sort((a, b) => a.order - b.order).map((tool) => { const Icon = getIcon(tool.icon); return <Link className="tool-card-interactive" to="/services/business-tools" key={tool.id}><div className="tool-card-header"><span className={`tool-icon-wrapper tool-icon--${tool.id}`}><Icon size={22} aria-hidden="true" /></span><span className="tool-card-arrow">→</span></div><h3 className="tool-card-title">{tool.name}</h3><p className="tool-card-desc">{tool.description}</p>{tool.features && tool.features.length > 0 && <div className="tool-pill-tags">{tool.features.slice(0, 2).map((feat) => <span key={feat} className="tool-pill-tag">{feat}</span>)}</div>}</Link> })}</div></Section></Reveal>
    if (id === 'featuredVideos') return <FeaturedVideos key={id} placement="home" />
    if (id === 'testimonials') return <VideoTestimonials key={id} />
    if (id === 'portfolio') return portfolio.length > 0 ? <Reveal key={id}><Section title={title} description={subheading}><div className="portfolio-grid">{portfolio.map((item) => <PortfolioCard item={item} key={item.id} />)}</div><Link className="text-link" to="/portfolio">View all work</Link></Section></Reveal> : null
    if (id === 'partners') return content.partners.length > 0 ? <Reveal key={id}><Section title={title} description={subheading}><PartnerMarquee /></Section></Reveal> : null
    if (id === 'offers') return <OffersSection key={id} />
    if (id === 'startup') return <Reveal key={id}><Section eyebrow="Startup Program" title={title} description={subheading || content.home.startupTeaser}><div className="home-startup-card"><div className="home-startup-card__content"><h3>From Idea to Scalable Business</h3><p>{content.startupProgram.description}</p><ul className="home-startup-pills">{content.startupProgram.offerings.map((offering) => <li key={offering}><span>✓</span> {offering}</li>)}</ul><div className="button-row"><Button to="/startup-program">Explore Startup Program</Button><Button to="/startup-program#apply" variant="secondary">Apply for Support</Button></div></div><div className="home-startup-card__visual"><div className="startup-badge-floating"><span>🚀 Incubation & Tech</span><strong>₹50L+ Client Revenue</strong></div><img src="/images/startup-hero.jpg" alt="Taank360 Startup Incubation" loading="lazy" /></div></div></Section></Reveal>
    if (id === 'founder') return <Reveal key={id}><Section eyebrow="Founder" title={title} description={subheading}><div className="founder-block founder-panel"><div className="founder-avatar">{content.founder.photo ? <img src={content.founder.photo} alt={content.founder.name} /> : 'SG'}</div><div><p><strong>Founder &amp; CEO · {content.founder.name}</strong></p><p>{content.founder.bio}</p><ul className="check-list"><li>{content.founder.qualification}</li><li>{content.founder.experience}</li><li>{content.founder.award}</li></ul><Link className="text-link" to="/about">Know more about the founder <span aria-hidden="true">→</span></Link></div></div></Section></Reveal>
    if (id === 'finalCta') return <section className="cta-band" key={id}><div className="container"><h2>{title}</h2><p>{subheading || content.home.finalCtaDescription}</p><div className="button-row"><Button to="/contact?tab=project">Start a Project</Button><a className="button button--secondary" href={`https://wa.me/${content.contact.whatsapp}`}>WhatsApp</a></div></div></section>
    return null
  }
  const sections = [...content.homeSections].filter((section) => section.id !== 'hero' && section.enabled).sort((a, b) => a.order - b.order)
  return (
    <>
      <Seo entry={content.seo.find((item) => item.route === '/')} />
      <HomeHeroSlider />
      <StatsBar stats={content.stats} placement="home" />
      {sections.map((section) => renderSection(section.id, section.heading, section.subheading))}
    </>
  )
}
