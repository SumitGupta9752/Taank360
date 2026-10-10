import { useEffect, useRef, useState } from 'react'
import { useContent } from '../hooks/useContent'
import { parseYouTube } from '../lib/youtube'
import { YouTubeFacade } from './YouTubeFacade'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function VideoTestimonials() {
  const testimonials = useContent().testimonials.filter((item) => item.status === 'visible' && parseYouTube(item.youtubeUrlOrId)).sort((a, b) => a.order - b.order)
  const trackRef = useRef<HTMLDivElement>(null)
  const [canBack, setCanBack] = useState(false)
  const [canForward, setCanForward] = useState(testimonials.length > 1)
  useEffect(() => { const track = trackRef.current; if (!track) return; const update = () => { setCanBack(track.scrollLeft > 4); setCanForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 4) }; update(); track.addEventListener('scroll', update, { passive: true }); return () => track.removeEventListener('scroll', update) }, [testimonials.length])
  if (!testimonials.length) return null
  const move = (direction: number) => trackRef.current?.scrollBy({ left: direction * ((trackRef.current?.clientWidth || 260) * .82), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  return <Reveal><Section eyebrow="Testimonials" title="What our clients say"><div className="testimonial-controls"><button type="button" aria-label="Previous testimonials" onClick={() => move(-1)} disabled={!canBack}>←</button><button type="button" aria-label="Next testimonials" onClick={() => move(1)} disabled={!canForward}>→</button></div><div className="testimonial-carousel" role="region" aria-roledescription="carousel" aria-label="Video testimonials" tabIndex={0} ref={trackRef} onKeyDown={(event) => { if (event.key === 'ArrowLeft') move(-1); if (event.key === 'ArrowRight') move(1) }}>{testimonials.map((testimonial) => <article className="testimonial-card" key={testimonial.id}><YouTubeFacade videoUrlOrId={testimonial.youtubeUrlOrId} title={`${testimonial.client} testimonial`} aspect="9:16" customThumbnail={testimonial.thumbnail} /><h3>{testimonial.client}</h3>{testimonial.company && <p>{testimonial.company}</p>}{testimonial.designation && <p>{testimonial.designation}</p>}{testimonial.text && <p className="testimonial-quote">{testimonial.text}</p>}</article>)}</div></Section></Reveal>
}
