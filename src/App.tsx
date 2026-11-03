import { useEffect, useRef, type ComponentType } from 'react'
import './App.css'
import { AmbientBackground } from './components/AmbientBackground'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { pages, SITE_NAME, type PageId } from './data/site'
import { useHashRoute } from './hooks/useHashRoute'
import { ExperiencePage } from './pages/ExperiencePage'
import { HomePage } from './pages/HomePage'
import { LeadershipPage } from './pages/LeadershipPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { SkillsPage } from './pages/SkillsPage'

const PAGE_COMPONENTS: Record<PageId, ComponentType> = {
  home: HomePage,
  experience: ExperiencePage,
  projects: ProjectsPage,
  leadership: LeadershipPage,
  skills: SkillsPage,
}

function App() {
  const route = useHashRoute()
  const isFirstRender = useRef(true)
  const Page = PAGE_COMPONENTS[route.page]

  useEffect(() => {
    const page = pages.find((p) => p.id === route.page)
    document.title = route.page === 'home' ? `${SITE_NAME} | Portfolio` : `${page?.title} | ${SITE_NAME}`

    const firstRender = isFirstRender.current
    isFirstRender.current = false

    // `#/<page>/<entryId>` scrolls to and focuses that card instead of the top of the page.
    const target = route.entryId
      ? document.querySelector<HTMLElement>(`[data-entry-id="${CSS.escape(route.entryId)}"]`)
      : null
    if (target) {
      target.scrollIntoView({ block: 'center' })
      target.focus({ preventScroll: true })
      return
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
    // Leave focus alone on the very first load so the page does not open with a focused heading.
    if (!firstRender) document.querySelector<HTMLElement>('main .page-title')?.focus({ preventScroll: true })
  }, [route.page, route.entryId])

  return (
    <>
      <AmbientBackground />
      <Navbar active={route.page} />
      <main>
        <Page key={route.page} />
      </main>
      <Footer />
    </>
  )
}

export default App
