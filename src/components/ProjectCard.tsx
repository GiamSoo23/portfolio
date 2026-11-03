import { useState } from 'react'
import { accentStyle } from '../data/accentColors'
import { entryView, type Entry } from '../data/types'
import { ArrowRightIcon, ExternalLinkIcon } from './icons'
import { ProjectThumb } from './ProjectThumb'

interface Props {
  entry: Entry
  onExpand: (entry: Entry, subIndex: number) => void
}

export function ProjectCard({ entry, onExpand }: Props) {
  const [subIndex, setSubIndex] = useState(0)
  const view = entryView(entry, subIndex)
  // The first link is the main way to see the project; the modal lists all of them.
  const projectLink = entry.links?.[0]
  const meta = entry.event ? [entry.event, entry.period].filter(Boolean).join(' · ') : null

  return (
    <article
      className="project-card neu-raised"
      style={accentStyle(entry.accent)}
      data-entry-id={entry.id}
      onClick={() => onExpand(entry, subIndex)}
      role="button"
      tabIndex={0}
      aria-label={`${entry.title}, view details`}
      onKeyDown={(e) => {
        if (e.target !== e.currentTarget) return
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onExpand(entry, subIndex)
        }
      }}
    >
      <div className="project-thumb-wrap">
        <ProjectThumb cover={view.images[0]} emoji={entry.emoji} />
        {entry.currentlyWorking && (
          <span className="project-card__badge">
            <span className="project-card__badge-dot" />
            Currently Working
          </span>
        )}
      </div>

      <div className="project-card__body">
        <p className="project-card__role">{view.role}</p>
        <h3 className="project-card__title">{entry.title}</h3>
        {meta && <p className="project-card__meta">{meta}</p>}
        <p className="project-card__summary">{view.tagline}</p>

        {entry.subsections && (
          <div className="entry-tabs">
            {entry.subsections.map((s, i) => (
              <button
                key={s.id}
                className={`entry-tabs__btn ${i === subIndex ? 'is-active' : ''}`}
                aria-pressed={i === subIndex}
                onClick={(e) => {
                  e.stopPropagation()
                  setSubIndex(i)
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}

        <div className="project-card__tech">
          <ul>
            {view.tech.slice(0, 3).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-card__actions">
        <button
          className="project-card__expand neu-btn"
          tabIndex={-1}
          aria-hidden="true"
          onClick={(e) => {
            e.stopPropagation()
            onExpand(entry, subIndex)
          }}
        >
          View Details <ArrowRightIcon size={16} />
        </button>
        {projectLink && (
          <a
            className="project-card__view neu-btn"
            href={projectLink.href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            View Project <ExternalLinkIcon size={15} />
          </a>
        )}
      </div>
    </article>
  )
}
