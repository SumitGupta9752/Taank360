import { getIcon } from '../lib/icons'
import { isContentEnabled } from '../lib/content'
import type { Stat } from '../data/types'
export function StatsBar({ stats, placement }: { stats: Stat[]; placement: Stat['placement'] }) {
  const visible = stats.filter((item) => item.placement === placement && isContentEnabled(item.status)).sort((a, b) => a.order - b.order)
  if (!visible.length) return null
  return (
    <div className="stats-wrap">
      <div className="container stats-bar">
        {visible.map((stat) => {
          const Icon = getIcon(stat.icon)
          return (
            <article className="stat-item" key={stat.id}>
              <span className="stat-icon">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div className="stat-content">
                <strong>{stat.value}</strong>
                <span className="stat-label">{stat.label}</span>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
