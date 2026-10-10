import { useEffect } from 'react'
import { AdminEditor } from '../admin/AdminEditor'
export function Admin() { useEffect(() => { document.title = 'Taank360 Local Content Editor'; let robots = document.head.querySelector('meta[name="robots"]') as HTMLMetaElement | null; if (!robots) { robots = document.createElement('meta'); robots.name = 'robots'; document.head.appendChild(robots) } robots.content = 'noindex,nofollow'; return () => { robots?.remove() } }, []); return <AdminEditor /> }
