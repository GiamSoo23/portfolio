import { useState } from 'react'
import type { Project } from '../data/projects'

interface Props {
  project: Project
  className?: string
}

export function ProjectGallery({ project, className = '' }: Props) {
  const images = project.images ?? []
  const [index, setIndex] = useState(0)

  if (images.length === 0) {
    return (
      <div className={`project-thumb ${className}`}>
        <span className="project-thumb__emoji" aria-hidden="true">
          {project.emoji}
        </span>
      </div>
    )
  }

  return (
    <div className={`project-thumb ${className}`}>
      <img src={images[index]} alt={`${project.title} — photo ${index + 1}`} />

      {images.length > 1 && (
        <div className="project-gallery__dots">
          {images.map((src, i) => (
            <button
              key={src}
              className={`project-gallery__dot ${i === index ? 'is-active' : ''}`}
              aria-label={`Show photo ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
