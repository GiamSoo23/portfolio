import { useEffect, useState } from 'react'
import { CloseIcon, MenuIcon } from './icons'
import './Navbar.css'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavigate = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <button className="navbar__brand neu-btn" onClick={() => handleNavigate('home')}>
          GR
        </button>

        <nav className="navbar__links neu-flat">
          {LINKS.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${active === link.id ? 'is-active' : ''}`}
              onClick={() => handleNavigate(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="navbar__toggle neu-icon-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile container">
          <div className="navbar__mobile-panel neu-flat">
            {LINKS.map((link) => (
              <button
                key={link.id}
                className={`navbar__link navbar__link--mobile ${active === link.id ? 'is-active' : ''}`}
                onClick={() => handleNavigate(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
