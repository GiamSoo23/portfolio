import { useEffect, useState } from 'react'
import { pages, type PageId } from '../data/site'

export interface Route {
  page: PageId
  /** Optional card to scroll to, from `#/<page>/<entryId>`. */
  entryId?: string
}

function parseHash(hash: string): Route {
  const [pageSegment, entryId] = hash.replace(/^#\/?/, '').split('/')
  const page = pages.find((p) => p.id === pageSegment)
  // Unknown routes (and the empty hash) fall back to Home.
  if (!page || page.id === 'home') return { page: 'home', entryId: entryId || undefined }
  return { page: page.id, entryId: entryId || undefined }
}

export function routeHref(page: PageId, entryId?: string) {
  const base = page === 'home' ? '#/' : `#/${page}`
  return entryId ? `${base}/${entryId}` : base
}

/** Tiny hash router: reads `window.location.hash` and re-renders on `hashchange` (links, back and forward). */
export function useHashRoute(): Route {
  const [route, setRoute] = useState(() => parseHash(window.location.hash))

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}
