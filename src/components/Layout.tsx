import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { PreviewBar } from './PreviewBar'
export function Layout() { const { pathname } = useLocation(); const announcementRef = useRef<HTMLDivElement>(null); const samplePreview = import.meta.env.DEV && new URLSearchParams(window.location.search).get('preview') === 'sample'; useEffect(() => { const heading = document.querySelector('main h1') as HTMLElement | null; if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }) } if (announcementRef.current) announcementRef.current.textContent = document.title }, [pathname]); return <><a className="skip-link" href="#main">Skip to content</a><div ref={announcementRef} className="sr-only" aria-live="polite" />{samplePreview && <div className="sample-badge">SAMPLE DATA PREVIEW</div>}<Header key={pathname} /><main id="main"><Outlet /></main><Footer /><PreviewBar /></> }
