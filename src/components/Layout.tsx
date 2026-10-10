import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { PreviewBar } from './PreviewBar'
export function Layout() { const { pathname } = useLocation(); const samplePreview = import.meta.env.DEV && new URLSearchParams(window.location.search).get('preview') === 'sample'; return <><a className="skip-link" href="#main">Skip to content</a>{samplePreview && <div className="sample-badge">SAMPLE DATA PREVIEW</div>}<Header key={pathname} /><main id="main"><Outlet /></main><Footer /><PreviewBar /></> }
