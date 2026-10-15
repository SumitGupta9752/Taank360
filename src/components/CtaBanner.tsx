import { Button } from './Button'

export interface CtaBannerProps {
  title?: string
  subtitle?: string
  description?: string
  to?: string
  cta?: string
  buttonText?: string
  secondaryButtonText?: string
  secondaryTo?: string
}

export function CtaBanner({
  title = 'Ready to Build, Grow or Scale Your Business?',
  subtitle,
  description = 'Tell us what you are building and we will discuss a practical next step.',
  to = '/contact?tab=project',
  cta = 'Start a Project',
  buttonText,
  secondaryButtonText,
  secondaryTo = '/contact'
}: CtaBannerProps) {
  const parts = title.split(' ')
  const highlight = parts.pop()
  const primaryLabel = buttonText || cta

  return (
    <section className="cta-banner">
      <div className="cta-ridge" aria-hidden="true" />
      <div className="container cta-banner__inner">
        <h2>
          {parts.join(' ')} <span>{highlight}</span>
        </h2>
        {subtitle && <p className="cta-subtitle">{subtitle}</p>}
        {description && !subtitle && <p>{description}</p>}
        <div className="cta-button-group">
          <Button to={to} variant="primary">
            {primaryLabel}
          </Button>
          {secondaryButtonText && (
            <Button to={secondaryTo} variant="secondary">
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
