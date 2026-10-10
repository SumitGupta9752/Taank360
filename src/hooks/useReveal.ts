import { useEffect, useRef, useState } from 'react'

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setRevealed(true); return }
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setRevealed(true); observer.disconnect() } }, { threshold: 0.12 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return { ref, revealed }
}
