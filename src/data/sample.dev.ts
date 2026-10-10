import type { SiteContent } from './types'

const sampleLogo = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40"%3E%3Crect width="120" height="40" fill="%23d9dde3"/%3E%3Ctext x="60" y="25" text-anchor="middle" font-family="sans-serif" font-size="12" fill="%235b6b82"%3ESAMPLE%3C/text%3E%3C/svg%3E'

export function createSampleContent(base: SiteContent): SiteContent {
  return {
  ...base,
  portfolio: [1, 2, 3, 4].map((number) => ({ id: `sample-${number}`, clientName: `Sample Client ${String.fromCharCode(64 + number)}`, logo: sampleLogo, description: 'A clearly marked development preview item used to inspect the portfolio layout.', industry: number % 2 ? 'Sample retail' : 'Sample education', services: ['Sample service'], images: [], link: '', status: 'visible' as const, order: number })),
  testimonials: [1, 2, 3].map((number) => ({ id: `sample-testimonial-${number}`, youtubeUrlOrId: 'SAMPLEVID01', client: `Sample Client ${number}`, company: 'Sample Company', designation: 'Sample designation', text: 'Sample testimonial text for development preview only.', thumbnail: '', status: 'visible' as const, order: number })),
  partners: [1, 2, 3, 4, 5, 6].map((number) => ({ id: `sample-partner-${number}`, name: `Sample Partner ${number}`, logo: sampleLogo, website: '', description: '', status: 'visible' as const, order: number })),
  videos: [1, 2].map((number) => ({ id: `sample-video-${number}`, title: `Sample featured video ${number}`, youtubeUrlOrId: 'SAMPLEVID01', aspect: number === 1 ? '16:9' as const : '9:16' as const, placement: number === 1 ? 'home' as const : 'startup' as const, caption: 'Sample video preview only.', status: 'visible' as const, order: number })),
  }
}
