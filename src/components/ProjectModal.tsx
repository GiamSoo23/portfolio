import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { accentStyle } from '../data/accentColors'
import { entryView, joinNames, type Entry } from '../data/types'
import { CloseIcon } from './icons'
import { ProjectGallery } from './ProjectGallery'

interface Props {
  entry: Entry
  initialSubIndex?: number
  onClose: () => void
}

export function ProjectModal({ entry, initialSubIndex = 0, onClose }: Props) {
  const [subIndex, setSubIndex] = useState(initialSubIndex)
  const closeRef = useRef<HTMLButtonElement>(null)
  const view = entryView(entry, subIndex)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused?.focus()
    }
  }, [onClose])

  const meta = [entry.event, view.period, view.location].filter(Boolean).join(' · ')

  // Portaled to <body> so the sticky navbar cannot stack above the overlay.
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal neu-flat"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={accentStyle(entry.accent)}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="modal__close neu-icon-btn" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        <ProjectGallery images={view.images} emoji={entry.emoji} className="project-thumb--modal" />

        <div className="modal__content">
          <p className="project-card__role">{view.role}</p>
          <h2 id="modal-title" className="modal__title">
            {entry.title}
          </h2>
          {meta && <p className="modal__meta">{meta}</p>}

          {entry.subsections && (
            <div className="modal__subtoggle neu-pressed">
              {entry.subsections.map((s, i) => (
                <button
                  key={s.id}
                  className={`modal__subtoggle-btn ${i === subIndex ? 'is-active' : ''}`}
                  aria-pressed={i === subIndex}
                  onClick={() => setSubIndex(i)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}

          <p className="modal__summary">{view.summary}</p>

          <ul className="modal__highlights">
            {view.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          {entry.team && entry.team.length > 0 && (
            <p className="modal__team">Built with {joinNames(entry.team)}.</p>
          )}

          <div className="project-card__tags modal__tags">
            {entry.tech.map((tech) => (
              <span key={tech} className="tag neu-pressed">
                {tech}
              </span>
            ))}
          </div>

          {entry.links && entry.links.length > 0 && (
            <div className="modal__links">
              {entry.links.map((link) => (
                <a key={link.href} className="neu-btn modal__link" href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}
