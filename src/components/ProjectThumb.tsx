import type { Photo } from '../data/types'

interface Props {
  cover?: Photo
  emoji: string
  className?: string
}

export function ProjectThumb({ cover, emoji, className = '' }: Props) {
  return (
    <div className={`project-thumb ${className}`}>
      {cover ? (
        <img src={cover.src} alt={cover.alt} loading="lazy" />
      ) : (
        <span className="project-thumb__emoji" aria-hidden="true">
          {emoji}
        </span>
      )}
    </div>
  )
}
