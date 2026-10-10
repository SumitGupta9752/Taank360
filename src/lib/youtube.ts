const allowedHosts = new Set(['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be', 'youtube-nocookie.com', 'www.youtube-nocookie.com'])
const videoIdPattern = /^[A-Za-z0-9_-]{11}$/

export function parseYouTube(input: string): { id: string } | null {
  const value = input.trim()
  if (videoIdPattern.test(value)) return { id: value }
  try {
    const url = new URL(value)
    if (!allowedHosts.has(url.hostname.toLowerCase())) return null
    const segments = url.pathname.split('/').filter(Boolean)
    const id = url.hostname === 'youtu.be' ? segments[0] : url.searchParams.get('v') || segments[1]
    return id && videoIdPattern.test(id) ? { id } : null
  } catch { return null }
}

export function getEmbedUrl(id: string) { return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1&modestbranding=1` }
export function getThumbnailUrl(id: string) { return `https://i.ytimg.com/vi/${id}/hqdefault.jpg` }