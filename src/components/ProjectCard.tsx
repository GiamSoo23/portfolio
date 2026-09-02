import { useState } from 'react'
import { accentStyle } from '../data/accentColors'
import type { Project } from '../data/projects'
import { ArrowRightIcon } from './icons'
import { ProjectThumb } from './ProjectThumb'

interface Props {
  project: Project
  onExpand: (project: Project, subIndex: number) => void
}

export function ProjectCard({ project, onExpand }: Props) {
  const [subIndex, setSubIndex] = useState(0)
  const sub = project.subsections?.[subIndex]

  return (
    <article className="project-card neu-raised" style={accentStyle(project.accent)}>
      <div className="project-thumb-wrap">
        <ProjectThumb project={project} overrideSrc={sub?.images[0]} />
        {project.currentlyWorking && (
          <span className="project-card__badge">
            <span className="project-card__badge-dot" />
            Currently Working
          </span>
        )}
      </div>

      <div className="project-card__body">
        <p className="project-card__role">{project.role}</p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>

        {project.subsections && (
          <div className="project-card__subtoggle neu-pressed">
            {project.subsections.map((s, i) => (
              <button
                key={s.id}
                className={`project-card__subtoggle-btn ${i === subIndex ? 'is-active' : ''}`}
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

        <div className="project-card__tags">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="tag neu-pressed">
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="tag neu-pressed">+{project.tech.length - 3}</span>
          )}
        </div>
      </div>

      <button className="project-card__expand neu-btn" onClick={() => onExpand(project, subIndex)}>
        View Details <ArrowRightIcon size={16} />
      </button>
    </article>
  )
}
