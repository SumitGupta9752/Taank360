export const ADMIN_ENABLED = true
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://YOUR-DOMAIN.com').replace(/\/$/, '')
export const SITE_URL_IS_PLACEHOLDER = SITE_URL.includes('YOUR-DOMAIN.com')
