import { useRef } from 'react'
import { ArrowUpRight, TrendingUp, Users, CheckCircle, Award } from 'lucide-react'
import type { PortfolioItem } from '../data/types'
import { safeUrl } from '../lib/safeUrl'

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const open = () => dialogRef.current?.showModal()
  const close = () => {
    dialogRef.current?.close()
    triggerRef.current?.focus()
  }

  const image = item.images.find((path) => safeUrl(path)) || '/images/portfolio-hero.jpg'
  const link = safeUrl(item.link)

  // Choose tag color
  const industryBadgeClass =
    item.industry === 'Agriculture'
      ? 'project-badge--green'
      : item.industry === 'Education'
      ? 'project-badge--orange'
      : item.industry === 'Event'
      ? 'project-badge--purple'
      : item.industry === 'Carbon'
      ? 'project-badge--teal'
      : 'project-badge--blue'

  return (
    <article className="portfolio-card-mockup">
      {/* Media Cover */}
      <div className="portfolio-card-media" onClick={open} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && open()}>
        <img
          className="portfolio-card-img"
          src={image}
          alt={item.clientName}
          loading="lazy"
        />
        <div className="portfolio-card-overlay">
          <span className="portfolio-zoom-btn">
            View Details <ArrowUpRight size={16} />
          </span>
        </div>
        <span className={`project-industry-badge ${industryBadgeClass}`}>
          {item.industry}
        </span>
      </div>

      {/* Card Content */}
      <div className="portfolio-card-body">
        <div className="portfolio-card-header">
          <h3 className="portfolio-card-title">{item.clientName}</h3>
          <p className="portfolio-card-desc">{item.description}</p>
        </div>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="portfolio-tags-row">
            {item.tags.map((tag) => (
              <span className="portfolio-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Performance Metrics Ribbon */}
        {item.metrics && item.metrics.length > 0 && (
          <div className="portfolio-metrics-grid">
            {item.metrics.map((metric, idx) => (
              <div className="portfolio-metric-item" key={metric.label}>
                <div className="portfolio-metric-icon">
                  {idx === 0 ? (
                    <TrendingUp size={14} />
                  ) : idx === 1 ? (
                    <Users size={14} />
                  ) : (
                    <Award size={14} />
                  )}
                </div>
                <div>
                  <strong className="portfolio-metric-val">{metric.value}</strong>
                  <span className="portfolio-metric-lbl">{metric.label}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="portfolio-card-footer">
          <button
            ref={triggerRef}
            className="portfolio-action-btn"
            type="button"
            onClick={open}
          >
            <span>Explore Case Study</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>

      {/* Detail Modal Dialog */}
      <dialog
        ref={dialogRef}
        className="portfolio-dialog"
        onClick={(event) => {
          if (event.target === dialogRef.current) close()
        }}
      >
        <button
          className="dialog-close"
          type="button"
          onClick={close}
          aria-label="Close project details"
        >
          ×
        </button>

        <div className="portfolio-dialog-content">
          <span className={`project-industry-badge ${industryBadgeClass}`}>
            {item.industry}
          </span>
          <h2 className="portfolio-dialog-title">{item.clientName}</h2>
          <p className="portfolio-dialog-desc">{item.description}</p>

          {item.images.length > 0 && (
            <div className="portfolio-dialog-hero-img">
              <img src={item.images[0]} alt={item.clientName} />
            </div>
          )}

          {item.metrics && item.metrics.length > 0 && (
            <div className="portfolio-dialog-metrics">
              <h3>Measurable Impact & Results</h3>
              <div className="portfolio-metrics-grid">
                {item.metrics.map((m) => (
                  <div className="portfolio-metric-item" key={m.label}>
                    <strong className="portfolio-metric-val">{m.value}</strong>
                    <span className="portfolio-metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="portfolio-dialog-services">
            <h3>Delivered Services</h3>
            <div className="chip-list">
              {item.services.map((service) => (
                <span className="chip" key={service}>
                  <CheckCircle size={13} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="portfolio-dialog-actions">
            {link ? (
              <a className="button button--primary" href={link}>
                Start a Similar Project
              </a>
            ) : (
              <a className="button button--primary" href="/contact?tab=project">
                Start a Project with Us
              </a>
            )}
            <button className="button button--secondary" type="button" onClick={close}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </article>
  )
}
