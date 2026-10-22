import { EntryGrid } from '../components/EntryGrid'
import { projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <EntryGrid
      entries={projects}
      label="Selected Work"
      title="Projects"
      subtitle="Things I've built at hackathons and on my own, usually with great teammates."
    />
  )
}
