import { useEffect, useState } from 'react'
import type { SiteContent } from '../data/types'
import { CONTENT_CHANGED_EVENT, getActiveContent } from '../lib/contentLoader'

export function useContent() {
  const [content, setContent] = useState<SiteContent>(getActiveContent)
  useEffect(() => {
    const refresh = () => setContent(getActiveContent())
    window.addEventListener(CONTENT_CHANGED_EVENT, refresh)
    if (import.meta.env.DEV && window.location.pathname !== '/admin' && new URLSearchParams(window.location.search).get('preview') === 'sample') import('../data/sample.dev').then(({ createSampleContent }) => setContent(createSampleContent(getActiveContent()))).catch(() => undefined)
    return () => window.removeEventListener(CONTENT_CHANGED_EVENT, refresh)
  }, [])
  return content
}
