import { ChevronDown } from 'lucide-react'
import { isContentEnabled } from '../lib/content'
import type { Faq } from '../data/types'
export function FaqAccordion({ faqs, placement }: { faqs: Faq[]; placement: Faq['placement'] }) { const items = faqs.filter((item) => item.placement === placement && isContentEnabled(item.status)).sort((a, b) => a.order - b.order); if (!items.length) return null; return <div className="faq-list">{items.map((item) => <details key={item.id}><summary>{item.question}<ChevronDown size={18} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div> }
