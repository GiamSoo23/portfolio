import { contactLinks } from '../data/site'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import './Contact.css'

const ICONS = { email: MailIcon, linkedin: LinkedInIcon, github: GitHubIcon }

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 className="contact__title">Contact</h2>
        <p className="contact__subtitle">
          Always happy to talk research, product builds, or hackathon ideas. Reach out through any of these.
        </p>

        <div className="contact__methods">
          {contactLinks.map(({ kind, label, value, href }) => {
            const Icon = ICONS[kind]
            return (
              <a key={kind} className="contact-method neu-raised" href={href} target="_blank" rel="noreferrer">
                <span className="contact-method__icon neu-icon-btn">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="contact-method__label">{label}</span>
                  <span className="contact-method__value">{value}</span>
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
