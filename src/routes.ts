export interface SiteRoute { path: string; label: string; indexable: boolean }
export const routes: SiteRoute[] = [
  { path: '/', label: 'Home', indexable: true },
  { path: '/about', label: 'About Us', indexable: true },
  { path: '/services', label: 'Services', indexable: true },
  { path: '/services/digital-marketing', label: 'Digital Marketing', indexable: true },
  { path: '/services/development', label: 'Development Solutions', indexable: true },
  { path: '/services/business-tools', label: 'Business & Marketing Tools', indexable: true },
  { path: '/startup-program', label: 'Startup Program', indexable: true },
  { path: '/women-entrepreneur-support', label: 'Women Entrepreneur Support', indexable: true },
  { path: '/portfolio', label: 'Portfolio', indexable: true },
  { path: '/partnership', label: 'Partnership', indexable: true },
  { path: '/contact', label: 'Contact', indexable: true },
  { path: '/privacy-policy', label: 'Privacy Policy', indexable: true },
  { path: '/terms-and-conditions', label: 'Terms & Conditions', indexable: true },
  { path: '/refund-policy', label: 'Refund & Cancellation Policy', indexable: true },
  { path: '/disclaimer', label: 'Disclaimer', indexable: true },
  { path: '/admin', label: 'Admin', indexable: false },
]
export const publicRoutes = routes.filter((route) => route.indexable)
