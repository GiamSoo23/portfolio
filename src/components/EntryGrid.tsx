import { useState, type ReactNode } from 'react'
import { published, type Entry } from '../data/types'
import { PageHeader } from './PageHeader'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import './EntryGrid.css'

interface Props {
  entries: Entry[]
  label: string
  title: string
  subtitle: string
  /** Extra content rendered below the grid, e.g. the hackathon timeline. */
  children?: ReactNode
}

export function EntryGrid({ entries, label, title, subtitle, children }: Props) {
  const [active, setActive] = useState<{ entry: Entry; subIndex: number } | null>(null)
  const visible = published(entries)

  return (
    <section className="projects page">
      <div className="container">
        <PageHeader label={label} title={title} subtitle={subtitle} />

        <div className="projects__grid">
          {visible.map((entry) => (
            <ProjectCard
              key={entry.id}
              entry={entry}
              onExpand={(e, subIndex) => setActive({ entry: e, subIndex })}
            />
          ))}
        </div>

        {children}
      </div>

      {active && (
        <ProjectModal entry={active.entry} initialSubIndex={active.subIndex} onClose={() => setActive(null)} />
      )}
    </section>
  )
}
