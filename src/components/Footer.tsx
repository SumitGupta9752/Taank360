import { Link } from 'react-router-dom'
import { useContent } from '../hooks/useContent'
import { PhoneCall, Mail, MapPin, Clock, Globe } from 'lucide-react'

const currentYear = new Date().getFullYear()

function SocialSvgIcon({ platform }: { platform: string }) {
  const p = platform.toLowerCase()
  if (p.includes('linkedin')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 10.74v-8.37H5.06v8.37z" />
      </svg>
    )
  }
  if (p.includes('twitter') || p.includes('x')) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }
  if (p.includes('instagram')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  }
  if (p.includes('facebook')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    )
  }
  if (p.includes('youtube')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  }
  return <Globe size={18} />
}

export function Footer() {
  const { general, contact, social } = useContent()

  // Default rich social links if empty
  const socialList = social && social.length > 0 ? social : [
    { platform: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com' },
    { platform: 'twitter', label: 'Twitter', url: 'https://twitter.com' },
    { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com' },
    { platform: 'facebook', label: 'Facebook', url: 'https://facebook.com' },
    { platform: 'youtube', label: 'YouTube', url: 'https://youtube.com' }
  ]

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-col footer-col--brand">
          <Link className="wordmark wordmark--footer" to="/" aria-label="Taank360 Home">
            <img src={general.logo || '/logo.svg'} alt={general.companyName} />
          </Link>
          <p className="footer-brand-desc">
            {general.description || 'Marketing, Technology and Startup Solutions for Businesses, Brands and Entrepreneurs.'}
          </p>
          <div className="footer-social-row" aria-label="Social media profiles">
            {socialList.map((item) => (
              <a 
                key={item.platform} 
                href={item.url} 
                target="_blank" 
                rel="noreferrer" 
                aria-label={item.label}
                className={`footer-social-btn footer-social-btn--${item.platform.toLowerCase()}`}
              >
                <SocialSvgIcon platform={item.platform} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/startup-program">Startup Program</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/partnership">Partnership</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Our Services Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Our Services</h3>
          <ul className="footer-nav-list">
            <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
            <li><Link to="/services/development">Development</Link></li>
            <li><Link to="/services/business-tools">Business Tools</Link></li>
            <li><Link to="/services">IoT Solutions</Link></li>
            <li><Link to="/startup-program">Startup Consultancy</Link></li>
            <li><Link to="/women-entrepreneur-support">Women Entrepreneur Support</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col footer-col--contact">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-contact-list">
            <li>
              <a className="footer-contact-item" href={`tel:${contact.phone.replace(/\s+/g, '')}`}>
                <span className="contact-icon-pill"><PhoneCall size={16} aria-hidden="true" /></span>
                <span>{contact.phone || '+91 12345 67890'}</span>
              </a>
            </li>
            <li>
              <a className="footer-contact-item" href={`mailto:${contact.email}`}>
                <span className="contact-icon-pill"><Mail size={16} aria-hidden="true" /></span>
                <span>{contact.email || 'info@taank360.in'}</span>
              </a>
            </li>
            <li className="footer-contact-item">
              <span className="contact-icon-pill"><MapPin size={16} aria-hidden="true" /></span>
              <span>{contact.address || 'Bhopal, Madhya Pradesh, India'}</span>
            </li>
            <li className="footer-contact-item">
              <span className="contact-icon-pill"><Clock size={16} aria-hidden="true" /></span>
              <span>{contact.businessHours || 'Mon - Sat: 10:00 AM - 6:00 PM'}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-wrapper">
        <div className="container footer-bottom">
          <small className="footer-copyright">
            © {currentYear} {general.companyName}. All rights reserved.
          </small>
          <div className="footer-policy-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="policy-divider">·</span>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <span className="policy-divider">·</span>
            <Link to="/refund-policy">Refund Policy</Link>
            <span className="policy-divider">·</span>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
