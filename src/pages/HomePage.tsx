import { cardTilt } from '../components/cardTilt'
import { Hero } from '../components/Hero'
import { ArrowRightIcon } from '../components/icons'
import { ProjectThumb } from '../components/ProjectThumb'
import { accentStyle } from '../data/accentColors'
import { about, education, pages } from '../data/site'
import { routeHref } from '../hooks/useHashRoute'

export function HomePage() {
  return (
    <>
      <Hero />

      <section className="home-about">
        <div className="container home-about__inner">
          <div>
            <p className="section-label">About</p>
            <h2 className="projects__title">A bit about me</h2>
            {about.map((paragraph) => (
              <p key={paragraph} className="home-about__text">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="education neu-raised">
            <p className="section-label">Education</p>
            <p className="education__degree">{education.degree}</p>
            <p className="education__school">{education.school}</p>
            <p className="education__meta">
              {education.location} · {education.graduation}
            </p>
            <p className="education__meta">{education.languages}</p>
          </div>
        </div>
      </section>

      <section className="projects home-pages">
        <div className="container">
          <p className="section-label">Explore</p>
          <h2 className="projects__title">What I've been up to</h2>
          <div className="projects__grid home-pages__grid">
            {pages
              .filter((page) => page.id !== 'home' && page.visible)
              .map((page) => (
                <a
                  key={page.id}
                  href={routeHref(page.id)}
                  className="project-card project-card--link neu-raised"
                  style={accentStyle(page.accent)}
                  {...cardTilt}
                >
                  <ProjectThumb cover={page.thumbnail} emoji={page.emoji} />
                  <div className="project-card__body">
                    <h3 className="project-card__title">{page.label}</h3>
                    <p className="project-card__summary">{page.description}</p>
                  </div>
                  <span className="project-card__expand neu-btn">
                    Open {page.label} <ArrowRightIcon size={16} />
                  </span>
                </a>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
