import { EntryGrid } from '../components/EntryGrid'
import { ArrowRightIcon } from '../components/icons'
import { hackathons, projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <EntryGrid
      entries={projects}
      label="Selected Work"
      title="Projects"
      subtitle="Things I've built at hackathons and on my own, usually with great teammates."
    >
      <div className="timeline">
        <h2 className="timeline__title">Hackathon timeline</h2>
        <ol className="timeline__list">
          {hackathons.map((h) => (
            <li key={h.id} className="timeline__item">
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card neu-raised-sm">
                <p className="timeline__name">{h.name}</p>
                <p className="timeline__meta">{h.meta}</p>
                <p className="timeline__desc">{h.description}</p>
                {h.href && (
                  <a className="timeline__link" href={h.href}>
                    See the card <ArrowRightIcon size={14} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </EntryGrid>
  )
}
