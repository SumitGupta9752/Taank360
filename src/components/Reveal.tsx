import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'
export function Reveal({ children }: { children: ReactNode }) { const { ref, revealed } = useReveal(); return <div ref={ref} className={`reveal ${revealed ? 'is-visible' : ''}`}>{children}</div> }
