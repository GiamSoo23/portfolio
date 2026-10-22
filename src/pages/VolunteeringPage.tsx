import { ArrowRightIcon } from '../components/icons'
import { PageHeader } from '../components/PageHeader'
import { ProjectThumb } from '../components/ProjectThumb'
import { accentStyle } from '../data/accentColors'
import { routeHref } from '../hooks/useHashRoute'
import { published } from '../data/types'
import { volunteering } from '../data/volunteering'

export function VolunteeringPage() {
  const visible = published(volunteering)

  return (
    <section className="projects page">
      <div className="container">
        <PageHeader
          label="Giving back"
          title="Volunteering"
          subtitle="Community and outreach events where I lent a hand."
        />

        {visible.length === 0 && <p className="page__empty">More coming soon.</p>}

        <div className="projects__grid">
          {visible.map((v) => (
            <article key={v.id} className="project-card project-card--static neu-raised" style={accentStyle('green')}>
              {v.image && <ProjectThumb cover={v.image} emoji="🤝" />}
              <div className="project-card__body volunteer__body">
                <p className="project-card__role">{v.role}</p>
                <h2 className="project-card__title">
                  {v.organization}: {v.event}
                </h2>
                <p className="project-card__meta">
                  {v.date} · {v.location}
                </p>
                <p className="project-card__summary">{v.description}</p>
              </div>
            </article>
          ))}

          <a
            className="project-card project-card--link neu-raised"
            style={accentStyle('red')}
            href={routeHref('leadership', 'first-global')}
          >
            <div className="project-card__body volunteer__body">
              <p className="project-card__role">Production Volunteer</p>
              <h2 className="project-card__title">FIRST Global Challenge 2026</h2>
              <p className="project-card__summary">
                Behind the camera with the Production team in Incheon. The full story lives on the Leadership page.
              </p>
              <span className="text-link">
                Go to Leadership <ArrowRightIcon size={14} />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
