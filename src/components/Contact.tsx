import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import './Contact.css'

const CONTACT_METHODS = [
  {
    icon: MailIcon,
    label: 'Email',
    value: 'ramiro2112gr@gmail.com',
    href: 'mailto:ramiro2112gr@gmail.com',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: '/in/gregory-ramirez',
    href: 'https://linkedin.com/in/gregory-ramirez/',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: '@giamsoo23',
    href: 'https://github.com/giamsoo23',
  },
]

const CURRENT_WORK = [
  {
    title: 'Mixed-Reality HCI Research',
    org: 'EnCoDe Lab, USF',
    description: 'Building mixed-reality study experiences on Magic Leap 2 as a research assistant.',
  },
  {
    title: 'Staff Operations Platform',
    org: 'FIRST Global Challenge',
    description: 'Leading development of the platform coordinating ~300 staff and volunteers for the 191-team competition.',
  },
]

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 className="contact__title">Contact</h2>
        <p className="contact__subtitle">
          Always happy to talk research, product builds, or hackathon ideas — reach out through
          any of these.
        </p>

        <div className="contact__grid">
          <div className="contact__methods">
            {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => (
              <a key={label} className="contact-method neu-raised" href={href} target="_blank" rel="noreferrer">
                <span className="contact-method__icon neu-icon-btn">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="contact-method__label">{label}</span>
                  <span className="contact-method__value">{value}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="current-work neu-flat">
            <h3 className="current-work__title">Currently Working On</h3>
            <div className="current-work__list">
              {CURRENT_WORK.map((item) => (
                <div key={item.title} className="current-work__item neu-pressed">
                  <p className="current-work__item-title">{item.title}</p>
                  <p className="current-work__item-org">{item.org}</p>
                  <p className="current-work__item-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="footer">
          © {new Date().getFullYear()} Gregory Ramírez Fuentes. Built with React.
        </footer>
      </div>
    </section>
  )
}
