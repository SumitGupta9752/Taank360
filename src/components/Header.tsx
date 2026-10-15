import { useEffect, useState, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import {
  ChevronDown,
  Megaphone,
  Code2,
  Wrench,
  ArrowRight,
  PhoneCall,
  Menu,
  X,
  Sparkles,
  Search
} from 'lucide-react'
import { useContent } from '../hooks/useContent'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  {
    to: '/services',
    label: 'Services',
    hasDropdown: true,
  },
  { to: '/startup-program', label: 'Startup Program' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/partnership', label: 'Partnership' },
  { to: '/contact', label: 'Contact' }
]

const serviceSubLinks = [
  {
    to: '/services/digital-marketing',
    title: 'Digital Marketing',
    desc: 'SEO, performance marketing & social branding',
    icon: Megaphone,
    color: '#FF6A1A'
  },
  {
    to: '/services/development',
    title: 'Development Solutions',
    desc: 'Websites, mobile apps & custom platforms',
    icon: Code2,
    color: '#2563EB'
  },
  {
    to: '/services/business-tools',
    title: 'Business & Marketing Tools',
    desc: 'CRM, WhatsApp API & smart automation',
    icon: Wrench,
    color: '#10B981'
  }
]

export function Header() {
  const { general, contact } = useContent()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef<HTMLLIElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    // 200ms grace period prevents accidental close while moving mouse between button and menu
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, 200)
  }

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    }
  }, [])

  // Track scroll position for dynamic backdrop blur & subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  // Close dropdown or mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        setServicesOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isServicesActive = location.pathname.startsWith('/services')

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Brand Logo */}
        <Link className="wordmark" to="/" aria-label={`${general.brandName} home`}>
          <img src="/logo.svg" alt="Taank360" className="brand-logo" onError={(e) => {
            // Fallback to text if svg fails
            e.currentTarget.style.display = 'none';
          }} />
          <span className="wordmark-text">
            Taank<span className="accent-mark">360</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <li
                    key={item.to}
                    className={`nav-item nav-item--dropdown ${servicesOpen ? 'is-expanded' : ''}`}
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `nav-link ${isActive || isServicesActive ? 'active' : ''}`
                      }
                      onClick={() => setServicesOpen(false)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`dropdown-chevron ${servicesOpen ? 'rotated' : ''}`}
                        aria-hidden="true"
                      />
                    </NavLink>

                    {/* Mega Dropdown Menu */}
                    <div
                      className={`mega-dropdown ${servicesOpen ? 'is-visible' : ''}`}
                      role="menu"
                      aria-label="Services submenu"
                    >
                      <div className="mega-dropdown__header">
                        <span className="mega-dropdown__title">Solutions & Services</span>
                        <Link
                          to="/services"
                          className="mega-dropdown__all"
                          onClick={() => setServicesOpen(false)}
                        >
                          View all services <ArrowRight size={12} />
                        </Link>
                      </div>

                      <div className="mega-dropdown__grid">
                        {serviceSubLinks.map((sub) => {
                          const IconComp = sub.icon
                          return (
                            <NavLink
                              key={sub.to}
                              to={sub.to}
                              className={({ isActive }) =>
                                `mega-dropdown__item ${isActive ? 'is-active' : ''}`
                              }
                              onClick={() => setServicesOpen(false)}
                              role="menuitem"
                            >
                              <div
                                className="mega-dropdown__icon"
                                style={{ backgroundColor: `${sub.color}18`, color: sub.color }}
                              >
                                <IconComp size={20} />
                              </div>
                              <div className="mega-dropdown__content">
                                <span className="mega-dropdown__item-title">{sub.title}</span>
                                <span className="mega-dropdown__item-desc">{sub.desc}</span>
                              </div>
                            </NavLink>
                          )
                        })}
                      </div>

                      <div className="mega-dropdown__footer">
                        <Link
                          to="/women-entrepreneur-support"
                          className="mega-dropdown__footer-link"
                          onClick={() => setServicesOpen(false)}
                        >
                          <Sparkles size={14} className="accent-mark" />
                          <span>Special Initiative: <strong>Women Entrepreneur Support</strong></span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </li>
                )
              }

              return (
                <li key={item.to} className="nav-item">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right Action Cluster */}
        <div className="header-actions">
          <Link
            to="/services"
            className="header-search-btn"
            title="Search Services"
            aria-label="Search Services"
          >
            <Search size={16} />
          </Link>

          {contact?.phone && (
            <a
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              className="quick-call-btn"
              title="Call Us Directly"
              aria-label={`Call ${contact.phone}`}
            >
              <PhoneCall size={15} />
              <span className="quick-call-text">{contact.phone}</span>
            </a>
          )}

          <Link className="button button--primary nav-cta" to="/contact?tab=project">
            <span>Start a Project</span>
            <ArrowRight size={14} />
          </Link>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            className={`menu-toggle-btn ${mobileOpen ? 'is-active' : ''}`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Backdrop */}
      <div
        className={`mobile-backdrop ${mobileOpen ? 'is-open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="mobile-nav"
        className={`mobile-drawer ${mobileOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-drawer__inner">
          <div className="mobile-drawer__header">
            <Link className="wordmark" to="/" onClick={() => setMobileOpen(false)}>
              <img src="/logo.svg" alt="Taank360" className="brand-logo" onError={(e) => {
                e.currentTarget.style.display = 'none';
              }} />
              <span className="wordmark-text">Taank<span className="accent-mark">360</span></span>
            </Link>
            <button
              className="drawer-close-btn"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mobile-nav-links">
            <NavLink
              to="/"
              className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              About
            </NavLink>

            {/* Collapsible Mobile Services Section */}
            <div className="mobile-dropdown-group">
              <div className="mobile-dropdown-header">
                <NavLink
                  to="/services"
                  className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Services
                </NavLink>
                <button
                  type="button"
                  className={`mobile-expand-btn ${servicesOpen ? 'is-open' : ''}`}
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-label="Toggle services list"
                >
                  <ChevronDown size={18} />
                </button>
              </div>

              <div className={`mobile-submenu ${servicesOpen ? 'is-open' : ''}`}>
                {serviceSubLinks.map((sub) => {
                  const SubIcon = sub.icon
                  return (
                    <NavLink
                      key={sub.to}
                      to={sub.to}
                      className={({ isActive }) =>
                        `mobile-sublink ${isActive ? 'active' : ''}`
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      <SubIcon size={16} style={{ color: sub.color }} />
                      <span>{sub.title}</span>
                    </NavLink>
                  )
                })}
                <NavLink
                  to="/women-entrepreneur-support"
                  className={({ isActive }) =>
                    `mobile-sublink ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  <Sparkles size={16} className="accent-mark" />
                  <span>Women Entrepreneur Support</span>
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/startup-program"
              className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              Startup Program
            </NavLink>

            <NavLink
              to="/portfolio"
              className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/partnership"
              className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              Partnership
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </NavLink>
          </div>

          <div className="mobile-drawer__footer">
            {contact?.phone && (
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="mobile-contact-pill"
              >
                <PhoneCall size={16} />
                <span>{contact.phone}</span>
              </a>
            )}
            <Link
              className="button button--primary w-full"
              to="/contact?tab=project"
              onClick={() => setMobileOpen(false)}
            >
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
