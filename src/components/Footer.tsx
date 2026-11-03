import { contactLinks, SITE_NAME } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__links" aria-label="Contact">
          {contactLinks.map(({ kind, label, href }) => (
            <a key={kind} href={href} {...(kind === 'email' ? {} : { target: '_blank', rel: 'noreferrer' })}>
              {label}
            </a>
          ))}
        </nav>
        <p className="footer__copy">
          © {new Date().getFullYear()} {SITE_NAME}. Built with React.
        </p>
      </div>
    </footer>
  )
}
