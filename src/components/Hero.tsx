import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MailIcon, UserIcon } from './icons'
import './Hero.css'

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="section-label">Computer Science @ USF</p>
          <h1 className="hero__title">
            Hi, I'm <span className="hero__accent">Gregory</span>.<br />
            I build interactive systems.
          </h1>
          <p className="hero__subtitle">
            From mixed-reality research on Magic Leap 2 to full-stack platforms coordinating
            hundreds of people — I like turning messy, real-world coordination problems into
            software that just works.
          </p>

          <div className="hero__actions">
            <button className="neu-btn hero__cta" onClick={() => scrollTo('projects')}>
              View Projects <ArrowRightIcon size={16} />
            </button>
            <button className="neu-btn hero__cta hero__cta--ghost" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>

          <div className="hero__socials">
            <a
              className="neu-icon-btn hero__social"
              href="https://github.com/giamsoo23"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              className="neu-icon-btn hero__social"
              href="https://linkedin.com/in/gregory-ramirez/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              className="neu-icon-btn hero__social"
              href="mailto:ramiro2112gr@gmail.com"
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo neu-raised">
            {/* TODO: reemplaza este placeholder con tu foto en src/assets/avatar.jpg
                y usa <img src={avatar} alt="Gregory Ramírez Fuentes" /> en su lugar */}
            <UserIcon size={96} className="hero__photo-icon" />
          </div>
        </div>
      </div>
    </section>
  )
}
