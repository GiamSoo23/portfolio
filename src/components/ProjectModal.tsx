import { useEffect, useState } from 'react'
import { accentStyle } from '../data/accentColors'
import type { Project } from '../data/projects'
import { CloseIcon } from './icons'
import { ProjectGallery } from './ProjectGallery'

interface Props {
  project: Project
  initialSubIndex?: number
  onClose: () => void
}

export function ProjectModal({ project, initialSubIndex = 0, onClose }: Props) {
  const [subIndex, setSubIndex] = useState(initialSubIndex)
  const sub = project.subsections?.[subIndex]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const images = sub ? sub.images : project.images ?? []
  const highlights = sub ? sub.highlights : project.highlights ?? []
  const period = sub?.period ?? project.period
  const location = sub?.location ?? project.location

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal neu-flat"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={accentStyle(project.accent)}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close neu-icon-btn" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        <ProjectGallery
          images={images}
          alt={sub ? `${project.title} — ${sub.label}` : project.title}
          emoji={project.emoji}
          className="project-thumb--modal"
        />

        <div className="modal__content">
          <p className="project-card__role">{project.role}</p>
          <h3 id="modal-title" className="modal__title">
            {project.title}
          </h3>
          <p className="modal__meta">
            {period}
            {location ? ` · ${location}` : ''}
          </p>

          {project.subsections && (
            <div className="modal__subtoggle neu-pressed">
              {project.subsections.map((s, i) => (
                <button
                  key={s.id}
                  className={`modal__subtoggle-btn ${i === subIndex ? 'is-active' : ''}`}
                  onClick={() => setSubIndex(i)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}

          <ul className="modal__highlights">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <div className="project-card__tags modal__tags">
            {project.tech.map((tech) => (
              <span key={tech} className="tag neu-pressed">
                {tech}
              </span>
            ))}
          </div>

          {project.link && (
            <a className="neu-btn modal__link" href={project.link} target="_blank" rel="noreferrer">
              Visit Project
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
