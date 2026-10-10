export type FormData = Record<string, string>

export function sanitize(value: string, maxLength = 500): string {
  return Array.from(value).filter((character) => { const code = character.charCodeAt(0); return code > 0x1f && code !== 0x7f }).join('').replace(/\s+/g, ' ').trim().slice(0, maxLength)
}

export const validators = {
  required: (value: string) => sanitize(value).length > 0 ? '' : 'This field is required.',
  email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitize(value)) ? '' : 'Enter a valid email address.',
  indianPhone: (value: string) => /^(?:\+91\s?|0)?[6-9]\d{9}$/.test(sanitize(value).replace(/[\s-]/g, '')) ? '' : 'Enter a valid 10-digit Indian phone number.',
  minLength: (length: number) => (value: string) => sanitize(value).length >= length ? '' : `Please enter at least ${length} characters.`,
  optionalUrl: (value: string) => !sanitize(value) || /^https?:\/\/[^\s]+$/.test(sanitize(value)) ? '' : 'Enter a complete URL beginning with http:// or https://.',
}

export function buildWhatsAppUrl(data: FormData, whatsapp: string): string {
  const body = Object.entries(data).filter(([, value]) => value).map(([label, value]) => `${label}: ${sanitize(value)}`).join('\n')
  return `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(body)}`
}

export function buildMailtoUrl(data: FormData, email: string, subject: string): string {
  const body = Object.entries(data).filter(([, value]) => value).map(([label, value]) => `${label}: ${sanitize(value)}`).join('\n')
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
