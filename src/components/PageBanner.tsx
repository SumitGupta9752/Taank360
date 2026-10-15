import { useState, useEffect, useRef } from 'react'
import { Button } from './Button'
import type { Banner } from '../data/types'
import { isContentEnabled } from '../lib/content'

export interface PageBannerProps {
  banner?: Banner
  badge?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  slides?: Array<{
    image: string
    title: string
    highlight?: string
    description: string
    tag?: string
  }>
  align?: 'left' | 'center'
}

export function PageBanner({
  banner,
  badge,
  secondaryCtaText,
  secondaryCtaLink,
  slides,
  align = 'center'
}: PageBannerProps) {
  if (!banner || !isContentEnabled(banner.status)) return null

  // Setup slides only when explicitly passed
  const bannerSlides = slides && slides.length > 0 ? slides : null

  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!bannerSlides || bannerSlides.length <= 1 || isPaused) return

    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5500)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [bannerSlides, isPaused])

  const currentSlide = bannerSlides ? bannerSlides[activeSlide] : null
  const currentImage = currentSlide ? currentSlide.image : banner.desktopImage || banner.mobileImage

  const words = (currentSlide?.title || banner.heading).trim().split(' ')
  const highlight = currentSlide?.highlight || banner.headingHighlight || words.pop()
  const headingMain = currentSlide?.highlight
    ? currentSlide.title.replace(currentSlide.highlight, '').trim()
    : banner.headingHighlight
    ? banner.heading.replace(banner.headingHighlight, '').trim()
    : words.join(' ')

  const description = currentSlide ? currentSlide.description : banner.description
  const slideTag = currentSlide?.tag || badge

  const ctaPath =
    banner.ctaLink ||
    (banner.page === 'startup-program'
      ? '/startup-program#apply'
      : banner.page === 'partnership'
      ? '/partnership#apply'
      : banner.cta === 'Start a Project'
      ? '/contact?tab=project'
      : '/contact')

  return (
    <section
      className={`page-banner page-banner--slider ${align === 'center' ? 'page-banner--center' : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label={`${banner.heading} slides`}
    >
      {/* Background Slides Layers for smooth crossfade transitions */}
      {bannerSlides ? (
        bannerSlides.map((slide, index) => (
          <div
            key={slide.image + index}
            className={`banner-slide-layer ${index === activeSlide ? 'is-active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(3, 21, 47, 0.72) 0%, rgba(3, 21, 47, 0.88) 60%, rgba(3, 21, 47, 0.96) 100%), url(${slide.image})`
            }}
          />
        ))
      ) : (
        currentImage && (
          <div
            className="banner-slide-layer is-active"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(3, 21, 47, 0.72) 0%, rgba(3, 21, 47, 0.88) 60%, rgba(3, 21, 47, 0.96) 100%), url(${currentImage})`
            }}
          />
        )
      )}

      {/* Decorative ambient lights */}
      <div className="banner-glow-circle banner-glow-circle--left" />
      <div className="banner-glow-circle banner-glow-circle--right" />

      <div className="container page-banner__inner">
        <div className={`page-banner__content ${align === 'center' ? 'page-banner__content--center' : ''}`}>
          <div className="breadcrumb-pill">
            <span>Home</span>
            <span className="breadcrumb-divider">/</span>
            <span className="breadcrumb-current">
              {banner.page === '/' ? 'Overview' : banner.page.replaceAll('/', ' / ')}
            </span>
          </div>

          {slideTag && <span className="banner-badge banner-badge--animated">{slideTag}</span>}

          <h1 className="page-banner__title">
            {headingMain} {highlight && <span className="accent-mark">{highlight}</span>}
          </h1>

          <p className="page-banner__desc">{description}</p>

          <div className="banner-button-row">
            {banner.cta && (
              <Button to={ctaPath} variant="primary">
                {banner.cta} <span className="button-arrow">↗</span>
              </Button>
            )}

            {secondaryCtaText && (
              <Button to={secondaryCtaLink || '/contact'} variant="secondary">
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Slider Pagination Dots & Arrows when multiple slides exist */}
      {bannerSlides && bannerSlides.length > 1 && (
        <div className="banner-carousel-controls">
          <button
            type="button"
            className="carousel-nav-btn prev"
            onClick={() =>
              setActiveSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
            }
            aria-label="Previous slide"
          >
            ‹
          </button>
          <div className="banner-dots-track" role="tablist">
            {bannerSlides.map((slide, index) => (
              <button
                key={slide.title + index}
                type="button"
                className={`banner-dot ${index === activeSlide ? 'is-active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                role="tab"
                aria-selected={index === activeSlide}
              >
                <span className="dot-fill" />
              </button>
            ))}
          </div>
          <button
            type="button"
            className="carousel-nav-btn next"
            onClick={() => setActiveSlide((prev) => (prev + 1) % bannerSlides.length)}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
