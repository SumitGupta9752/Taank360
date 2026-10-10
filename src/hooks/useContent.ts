import { defaultContent } from '../data/content'
import { useEffect, useState } from 'react'
import type { SiteContent } from '../data/types'

export function useContent() {
  const [content, setContent] = useState<SiteContent>(defaultContent)
  useEffect(() => {
    if (!import.meta.env.DEV || new URLSearchParams(window.location.search).get('preview') !== 'sample') return
    import('../data/sample.dev').then(({ sampleContent }) => setContent(sampleContent)).catch(() => undefined)
  }, [])
  return content
}
