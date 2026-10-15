import { useState, useEffect, useRef } from 'react'
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './Button'

export interface HomeSlide {
  id: string
  tag: string
  title: string
  highlight: string
  desc: string
  image: string
  primaryCtaText: string
  primaryCtaLink: string
  secondaryCtaText: string
  secondaryCtaLink: string
  badgeText: string
  badgeValue: string
}

const defaultSlides: HomeSlide[] = [
  {
    id: 'famous',
    tag: 'Taank360 Marketing & Tech',
    title: "Let's Make Your Brand",
    highlight: 'Famous.',
    desc: '360° Marketing, Technology & Startup Solutions to Help Your Business Build, Grow and Scale.',
    image: '/images/about-slide-1.jpg',
    primaryCtaText: 'Start a Project',
    primaryCtaLink: '/contact?tab=project',
    secondaryCtaText: 'Explore Services',
    secondaryCtaLink: '/services',
    badgeText: 'Proven Results',
    badgeValue: '300% Growth'
  },
  {
    id: 'startup',
    tag: 'Incubation & Tech Accelerator',
    title: "From Idea to Scalable",
    highlight: 'Market Leader.',
    desc: 'Empowering ambitious founders with technology engineering, market entry strategy, and investor outreach.',
    image: '/images/startup-hero.jpg',
    primaryCtaText: 'Apply for Support',
    primaryCtaLink: '/startup-program#apply',
    secondaryCtaText: 'Startup Program',
    secondaryCtaLink: '/startup-program',
    badgeText: 'Facilitated',
    badgeValue: '₹50L+ Revenue'
  },
  {
    id: 'development',
    tag: 'Web, Mobile & AI Platforms',
    title: 'High-Performance Custom',
    highlight: 'Digital Products.',
    desc: 'Engineering ultra-scalable web platforms, mobile applications, and CRM automation shaped for growth.',
    image: '/images/about-slide-3.jpg',
    primaryCtaText: 'Build Your Product',
    primaryCtaLink: '/contact?tab=project',
    secondaryCtaText: 'View Portfolio',
    secondaryCtaLink: '/portfolio',
    badgeText: 'Completed',
    badgeValue: '20+ Projects'
  },
  {
    id: 'marketing',
    tag: 'Performance & Brand Domination',
    title: 'Data-Driven High ROI',
    highlight: 'Growth Marketing.',
    desc: 'Full-funnel SEO, paid ad campaigns, social branding, and lead generation that generate real revenue.',
    image: '/images/about-slide-2.jpg',
    primaryCtaText: 'Scale Your Brand',
    primaryCtaLink: '/contact?tab=project',
    secondaryCtaText: 'Marketing Services',
    secondaryCtaLink: '/services/digital-marketing',
    badgeText: 'Average Leads',
    badgeValue: '4x Inquiries'
  }
]

export function HomeHeroSlider() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isPaused) return
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % defaultSlides.length)
    }, 6000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused])

  const slide = defaultSlides[active]

  return (
    <section
      className="home-hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured highlights"
    >
      {/* Background Crossfading Images with cinematic dark gradients */}
      <div className="home-slider-bg-layers">
        {defaultSlides.map((s, index) => (
          <div
            key={s.id}
            className={`home-slider-bg-layer ${index === active ? 'is-active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(3, 21, 47, 0.78) 0%, rgba(3, 21, 47, 0.88) 50%, rgba(3, 21, 47, 0.96) 100%), url(${s.image})`
            }}
          />
        ))}
      </div>

      {/* Floating ambient glow lights */}
      <div className="banner-glow-circle banner-glow-circle--left" />
      <div className="banner-glow-circle banner-glow-circle--right" />

      {/* Background floating decorative mesh line accents */}
      <div className="hero-floating-mesh" aria-hidden="true">
        <div className="hero-mesh-line" />
        <div className="hero-mesh-line" />
        <div className="hero-mesh-line" />
      </div>

      <div className="container hero-slider-inner">
        <div className="hero-slider-centered">
          {/* Top Pill Badge */}
          <div className="hero-slider-badge-row">
            <span className="hero-slider-badge">
              <Sparkles size={13} className="sparkle-icon" />
              {slide.tag}
            </span>
          </div>

          {/* Centered Heading */}
          <h1 className="hero-slider-title">
            {slide.title} <span className="accent-mark">{slide.highlight}</span>
          </h1>

          {/* Centered Description */}
          <p className="hero-slider-desc">{slide.desc}</p>

          {/* Centered Button Row */}
          <div className="button-row hero-centered-buttons">
            <Button to={slide.primaryCtaLink} variant="primary">
              {slide.primaryCtaText} <span className="button-arrow">↗</span>
            </Button>
            <Button to={slide.secondaryCtaLink} variant="secondary">
              {slide.secondaryCtaText}
            </Button>
          </div>

          {/* Centered Rotating 360 Planetary Ring with orbiting nodes */}
          <div className="hero-slider-visual-centered">
            <div className="ring-motif-container">
              {/* Outer revolving orbital ring */}
              <div className="orbital-spinner-ring" aria-hidden="true">
                <span className="orbital-node orbital-node--marketing">Marketing</span>
                <span className="orbital-node orbital-node--development">Development</span>
                <span className="orbital-node orbital-node--startup">Startup</span>
              </div>

              {/* Glowing Center 360 Core */}
              <div className="ring-motif-core" aria-label="360 Core">
                <strong>360</strong>
                <span className="core-subtext">Solutions</span>
              </div>

              {/* Floating Glass Metric Badge positioned neatly at bottom right without hiding nodes */}
              <div className="hero-slide-glass-badge">
                <span className="glass-badge-label">{slide.badgeText}</span>
                <strong className="glass-badge-value">{slide.badgeValue}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls: Slide Dots & Arrow Buttons */}
      <div className="hero-slider-controls">
        <button
          type="button"
          className="hero-arrow-btn prev"
          onClick={() => setActive((prev) => (prev - 1 + defaultSlides.length) % defaultSlides.length)}
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="hero-dots-row" role="tablist">
          {defaultSlides.map((s, index) => (
            <button
              key={s.id}
              type="button"
              className={`hero-dot ${index === active ? 'is-active' : ''}`}
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}: ${s.title}`}
              role="tab"
              aria-selected={index === active}
            >
              <span className="hero-dot-fill" />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="hero-arrow-btn next"
          onClick={() => setActive((prev) => (prev + 1) % defaultSlides.length)}
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  )
}
