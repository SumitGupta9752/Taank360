import { useEffect, useState } from 'react'
import { getEmbedUrl, getThumbnailUrl, parseYouTube } from '../lib/youtube'
import type { VideoAspect } from '../data/types'

type Props = { videoUrlOrId: string; title: string; aspect: VideoAspect; customThumbnail?: string; className?: string }
const activeEvent = 'taank-video-playing'

export function YouTubeFacade({ videoUrlOrId, title, aspect, customThumbnail, className = '' }: Props) {
  const parsed = parseYouTube(videoUrlOrId)
  const [playing, setPlaying] = useState(false)
  const [thumbnailFailed, setThumbnailFailed] = useState(false)
  useEffect(() => { const stop = (event: Event) => { if ((event as CustomEvent<string>).detail !== parsed?.id) setPlaying(false) }; window.addEventListener(activeEvent, stop); return () => window.removeEventListener(activeEvent, stop) }, [parsed?.id])
  if (!parsed) return null
  const start = () => { window.dispatchEvent(new CustomEvent(activeEvent, { detail: parsed.id })); setPlaying(true) }
  return <div className={`video-facade video-facade--${aspect === '9:16' ? 'portrait' : 'landscape'} ${className}`}>{playing ? <iframe src={getEmbedUrl(parsed.id)} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <button className={`video-facade__trigger ${thumbnailFailed ? 'is-fallback' : ''}`} type="button" onClick={start} aria-label={`Play video: ${title}`}>{!thumbnailFailed && <img src={customThumbnail || getThumbnailUrl(parsed.id)} alt="" loading="lazy" decoding="async" onError={() => setThumbnailFailed(true)} />}<span className="video-facade__play" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M8 5v14l11-7z" /></svg></span></button>}</div>
}
