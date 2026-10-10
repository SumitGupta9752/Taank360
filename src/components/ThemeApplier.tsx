import { useEffect } from 'react'
import { useContent } from '../hooks/useContent'

export function ThemeApplier() {
  const { general } = useContent()
  useEffect(() => { const theme = general.theme; if (!theme || typeof theme !== 'object') return; const root = document.documentElement; Object.entries(theme).forEach(([key, value]) => root.style.setProperty(`--color-${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`, value)) }, [general.theme])
  return null
}
