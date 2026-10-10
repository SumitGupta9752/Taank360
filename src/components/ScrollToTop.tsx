import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export function ScrollToTop() { const { pathname } = useLocation(); useEffect(() => { const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }) }, [pathname]); return null }
