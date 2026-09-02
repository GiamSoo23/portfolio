import type { Project } from '../data/projects'

interface Props {
  project: Project
  className?: string
  /** Overrides the image source shown (e.g. the currently selected subsection's cover). */
  overrideSrc?: string
}

export function ProjectThumb({ project, className = '', overrideSrc }: Props) {
  const cover = overrideSrc ?? project.images?.[0] ?? project.subsections?.[0]?.images?.[0]

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
