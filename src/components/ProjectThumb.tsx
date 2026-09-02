import type { Project } from '../data/projects'

interface Props {
  project: Project
  className?: string
}

export function ProjectThumb({ project, className = '' }: Props) {
  return (
    <div className={`project-thumb ${className}`}>
      {project.image ? (
        <img src={project.image} alt={project.title} />
      ) : (
        <span className="project-thumb__emoji" aria-hidden="true">
          {project.emoji}
        </span>
      )}
    </div>
  )
}
