import type { Project } from '../data/projects'

interface Props {
  project: Project
  className?: string
}

export function ProjectThumb({ project, className = '' }: Props) {
  const cover = project.images?.[0] ?? project.subsections?.[0]?.images?.[0]

  return (
    <div className={`project-thumb ${className}`}>
      {cover ? (
        <img src={cover} alt={project.title} />
      ) : (
        <span className="project-thumb__emoji" aria-hidden="true">
          {project.emoji}
        </span>
      )}
    </div>
  )
}
