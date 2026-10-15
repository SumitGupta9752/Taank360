import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Filter } from 'lucide-react'
import { useContent } from '../hooks/useContent'
import { PageBanner } from '../components/PageBanner'
import { StatsBar } from '../components/StatsBar'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { Seo } from '../components/Seo'
import { PortfolioCard } from '../components/PortfolioCard'
import { VideoTestimonials } from '../components/VideoTestimonials'
import { CtaBanner } from '../components/CtaBanner'
import { isContentEnabled } from '../lib/content'

const categories = [
  'All',
  'Websites',
  'Mobile Apps',
  'Branding',
  'Marketing',
  'Business Tools',
  'IoT Solutions'
]

export function Portfolio() {
  const content = useContent()
  const items = content.portfolio
    .filter((item) => isContentEnabled(item.status))
    .sort((a, b) => a.order - b.order)

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => {
          if (item.category === activeCategory) return true
          if (item.tags?.some((t) => t.toLowerCase() === activeCategory.toLowerCase())) return true
          if (item.services?.some((s) => s.toLowerCase().includes(activeCategory.toLowerCase()))) return true
          return false
        })

  const featured = items.find((item) => item.id === 'greentech') || items[0]

  return (
    <>
      <Seo entry={content.seo.find((item) => item.route === '/portfolio')} />

      {/* Hero Banner with dual CTA */}
      <PageBanner
        banner={content.banners.find((item) => item.page === 'portfolio')}
        badge="Case Studies & Impact"
        secondaryCtaText="Explore Services"
        secondaryCtaLink="/services"
      />

      {/* Stats Ribbon */}
      <StatsBar stats={content.stats} placement="portfolio" />

      {/* Filter Tabs matching PDF page 2 */}
      <div className="portfolio-filter-bar">
        <div className="container">
          <div className="filter-chips-row" role="group" aria-label="Filter case studies">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-pill ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Project Showcase */}
      {featured && activeCategory === 'All' && (
        <Reveal>
          <section className="container featured-project-section">
            <div className="featured-project-header">
              <div>
                <span className="section-eyebrow">
                  <Sparkles size={14} className="accent-mark" />
                  Spotlight Case Study
                </span>
                <h2 className="section-heading">Featured Project</h2>
              </div>
              <Link to="/contact?tab=project" className="view-all-link">
                Discuss Your Project <ArrowRight size={14} />
              </Link>
            </div>

            <div className="featured-project-card">
              <div className="featured-project-media">
                <img
                  src={featured.images[0] || '/images/greentech.jpg'}
                  alt={featured.clientName}
                  className="featured-project-img"
                />
                <span className="featured-badge">Flagship Execution</span>
              </div>
              <div className="featured-project-content">
                <div className="featured-tags-row">
                  {featured.tags?.map((t) => (
                    <span className="featured-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="featured-title">{featured.clientName}</h3>
                <p className="featured-desc">{featured.description}</p>

                {featured.metrics && (
                  <div className="featured-metrics-row">
                    {featured.metrics.map((m) => (
                      <div className="featured-metric" key={m.label}>
                        <strong>{m.value}</strong>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="featured-actions">
                  <Link
                    to="/contact?tab=project"
                    className="button button--primary"
                  >
                    View Project & Enquire
                  </Link>
                  <Link
                    to="/services/development"
                    className="button button--secondary"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      )}

      {/* Projects Grid Section */}
      <Reveal>
        <Section
          title="All Projects & Case Studies"
          description="Explore verified client stories, measurable growth metrics, and high-impact technology implementations."
        >
          {filteredItems.length > 0 ? (
            <div className="portfolio-grid-cards">
              {filteredItems.map((item) => (
                <PortfolioCard item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <div className="empty-portfolio-state">
              <Filter size={32} />
              <p>No projects currently listed under &quot;{activeCategory}&quot;.</p>
              <button
                type="button"
                className="button button--primary"
                onClick={() => setActiveCategory('All')}
              >
                Reset Filter
              </button>
            </div>
          )}
        </Section>
      </Reveal>

      {/* Client Video Testimonials Band */}
      <VideoTestimonials />

      {/* Conversion Banner */}
      <CtaBanner />
    </>
  )
}
