import { accentStyle } from '../data/accentColors'
import type { Project } from '../data/projects'
import { ArrowRightIcon } from './icons'
import { ProjectThumb } from './ProjectThumb'

interface Props {
  project: Project
  onExpand: (project: Project) => void
}

export function ProjectCard({ project, onExpand }: Props) {
  return (
    <article className="project-card neu-raised" style={accentStyle(project.accent)}>
      <ProjectThumb project={project} />

      <div className="project-card__body">
        <p className="project-card__role">{project.role}</p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>

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

      <button className="project-card__expand neu-btn" onClick={() => onExpand(project)}>
        View Details <ArrowRightIcon size={16} />
      </button>
    </article>
  )
}
