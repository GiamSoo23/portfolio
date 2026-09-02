import { useState } from 'react'
import { projects, type Project } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import './Projects.css'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label">Selected Work</p>
        <h2 className="projects__title">Projects</h2>
        <p className="projects__subtitle">
          A few things I've built recently, across research, full-stack development, and
          community leadership.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onExpand={setActive} />
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}
