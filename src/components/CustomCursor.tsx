import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show on desktop devices with fine pointer (mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return

    let animationFrameId: number
    let targetX = -100
    let targetY = -100

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      setDotPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      // Detect if hovering over clickable or interactive element
      const target = e.target as HTMLElement | null
      if (target) {
        const interactive = target.closest(
          'a, button, input, select, textarea, [role="button"], .card, .tool-card-interactive, .portfolio-card-mockup, .partner-brand-pill'
        )
        setIsHovered(!!interactive)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Smooth trailing animation loop for outer ring
    let currentX = -100
    let currentY = -100
    const followLoop = () => {
      currentX += (targetX - currentX) * 0.18
      currentY += (targetY - currentY) * 0.18
      setPos({ x: currentX, y: currentY })
      animationFrameId = requestAnimationFrame(followLoop)
    }

    animationFrameId = requestAnimationFrame(followLoop)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Outer fluid trailing ring */}
      <div
        className={`custom-cursor-follower ${isHovered ? 'is-hover' : ''} ${isClicking ? 'is-clicking' : ''}`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
        }}
      />
      {/* Precision inner center dot */}
      <div
        className={`custom-cursor-dot ${isHovered ? 'is-hover' : ''}`}
        style={{
          transform: `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)`
        }}
      />
    </>
  )
}
