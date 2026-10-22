import { useEffect, useRef, useState } from 'react'
import { pages, type PageId } from '../data/site'
import { routeHref } from '../hooks/useHashRoute'
import './Navbar.css'

interface Props {
  active: PageId
}

export function Navbar({ active }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On narrow screens the pill row scrolls sideways; keep the active link centered in view.
  useEffect(() => {
    const nav = navRef.current
    const link = nav?.querySelector<HTMLElement>('[aria-current="page"]')
    if (!nav || !link) return
    nav.scrollTo({ left: link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2, behavior: 'smooth' })
  }, [active])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <nav ref={navRef} className="navbar__links neu-flat" aria-label="Main">
          {pages
            .filter((page) => page.visible)
            .map((page) => (
              <a
                key={page.id}
                href={routeHref(page.id)}
                className={`navbar__link ${active === page.id ? 'is-active' : ''}`}
                aria-current={active === page.id ? 'page' : undefined}
              >
                {page.label}
              </a>
            ))}
        </nav>
      </div>
    </header>
  )
}
