import { useEffect } from 'react'
import { accentStyle } from '../data/accentColors'
import type { Project } from '../data/projects'
import { CloseIcon } from './icons'
import { ProjectThumb } from './ProjectThumb'

interface Props {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: Props) {
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

        <ProjectThumb project={project} className="project-thumb--modal" />

        <div className="modal__content">
          <p className="project-card__role">{project.role}</p>
          <h3 id="modal-title" className="modal__title">
            {project.title}
          </h3>
          <p className="modal__meta">
            {project.period}
            {project.location ? ` · ${project.location}` : ''}
          </p>

          <ul className="modal__highlights">
            {project.highlights.map((h) => (
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
