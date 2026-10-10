import { useContent } from '../hooks/useContent'
import type { VideoPlacement } from '../data/types'
import { YouTubeFacade } from './YouTubeFacade'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function FeaturedVideos({ placement }: { placement: VideoPlacement }) {
  const videos = useContent().videos.filter((video) => video.status === 'visible' && video.placement === placement).sort((a, b) => a.order - b.order)
  if (!videos.length) return null
  return <Reveal><Section eyebrow="Featured videos" title="Watch and learn more"><div className={`featured-videos featured-videos--${videos[0].aspect === '9:16' ? 'portrait' : 'landscape'}`}>{videos.map((video) => <article className="featured-video" key={video.id}><YouTubeFacade videoUrlOrId={video.youtubeUrlOrId} title={video.title} aspect={video.aspect} /><h3>{video.title}</h3>{video.caption && <p>{video.caption}</p>}</article>)}</div></Section></Reveal>
}
