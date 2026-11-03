import { useEffect, useRef, useState } from 'react'
import { pages, type PageId } from '../data/site'
import { routeHref } from '../hooks/useHashRoute'
import { BriefcaseIcon, ChevronDownIcon, HomeIcon, UserIcon } from './icons'
import './Navbar.css'

const MENUS: { id: string; label: string; Icon: typeof UserIcon; pageIds: PageId[] }[] = [
  { id: 'work', label: 'Work', Icon: BriefcaseIcon, pageIds: ['experience', 'projects'] },
  { id: 'about', label: 'About', Icon: UserIcon, pageIds: ['leadership', 'skills'] },
]

interface Props {
  active: PageId
}

export function Navbar({ active }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!openMenu) return
    const close = () => setOpenMenu(null)
    const onPointerDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) close()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      navRef.current?.querySelector<HTMLElement>('[aria-expanded="true"]')?.focus()
      close()
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    window.addEventListener('hashchange', close)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('hashchange', close)
    }
  }, [openMenu])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <nav ref={navRef} className="navbar__links neu-flat" aria-label="Main">
          <a
            href={routeHref('home')}
            className={`navbar__link ${active === 'home' ? 'is-active' : ''}`}
            aria-current={active === 'home' ? 'page' : undefined}
          >
            <HomeIcon size={16} />
            Home
          </a>

          {MENUS.map(({ id, label, Icon, pageIds }) => {
            const items = pages.filter((page) => pageIds.includes(page.id) && page.visible)
            const isOpen = openMenu === id
            return (
              <div key={id} className="navbar__menu">
                <button
                  className={`navbar__link ${pageIds.includes(active) ? 'is-active' : ''}`}
                  aria-expanded={isOpen}
                  aria-controls={`navbar-menu-${id}`}
                  onClick={() => setOpenMenu(isOpen ? null : id)}
                >
                  <Icon size={16} />
                  {label}
                  <ChevronDownIcon size={14} className={`navbar__chevron ${isOpen ? 'is-open' : ''}`} />
                </button>

                {isOpen && (
                  <ul id={`navbar-menu-${id}`} className="navbar__panel neu-flat">
                    {items.map((page) => (
                      <li key={page.id}>
                        <a
                          href={routeHref(page.id)}
                          className={`navbar__panel-link ${active === page.id ? 'is-active' : ''}`}
                          aria-current={active === page.id ? 'page' : undefined}
                          onClick={() => setOpenMenu(null)}
                        >
                          {page.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
