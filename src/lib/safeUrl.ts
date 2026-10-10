export function safeUrl(value: string): string | null {
  try { const url = new URL(value, window.location.origin); if (!['http:', 'https:'].includes(url.protocol)) return null; return url.href } catch { return null }
}
