import { contactLinks, currently, hero, SITE_NAME } from '../data/site'
import { routeHref } from '../hooks/useHashRoute'
import { Greeting } from './Greeting'
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from './icons'
import './Hero.css'

const SOCIAL_ICONS = { linkedin: LinkedInIcon, github: GitHubIcon }

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="section-label">Computer Science @ USF</p>
          <Greeting />
          <h1 className="hero__title page-title" tabIndex={-1}>
            I'm <span className="hero__accent">Gregory</span>.<br />
            I build interactive systems.
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>

          <div className="hero__actions">
            <a className="neu-btn hero__cta" href={routeHref('experience')}>
              Check My Work <ArrowRightIcon size={16} />
            </a>
          </div>

          <div className="hero__socials">
            {contactLinks.map(({ kind, label, href }) => {
              const Icon = SOCIAL_ICONS[kind]
              return (
                <a
                  key={kind}
                  className="neu-icon-btn hero__social"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo neu-raised">
            <img src={hero.avatar} alt={SITE_NAME} />
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="currently" aria-label="Currently">
          {currently.map((item) => (
            <li key={item} className="currently__pill neu-pressed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
