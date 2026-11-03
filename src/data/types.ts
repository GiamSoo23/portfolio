export type AccentColor = 'violet' | 'blue' | 'teal' | 'orange' | 'pink' | 'gold' | 'red' | 'green'

export interface Photo {
  src: string
  alt: string
}

export interface EntryLink {
  label: string
  href: string
}

export interface EntrySubsection {
  id: string
  label: string
  /** Overrides the parent entry's role while this subsection is selected. */
  role?: string
  /** Overrides the parent entry's summary while this subsection is selected. */
  summary?: string
  /** Overrides the parent entry's tagline while this subsection is selected. */
  tagline?: string
  period?: string
  location?: string
  images: Photo[]
  highlights: string[]
}

export interface Entry {
  id: string
  title: string
  role: string
  period?: string
  location?: string
  /** Hackathon or event name, e.g. "ShellHacks 2026". */
  event?: string
  summary: string
  /** One line for the card. The full `summary` stays in the modal. */
  tagline?: string
  tech: string[]
  /** Used when the entry has a single flat gallery (no subsections). */
  highlights?: string[]
  links?: EntryLink[]
  /** Teammates' full names, shown as "Built with ...". */
  team?: string[]
  accent: AccentColor
  /** Photos served from public/projects/. The first one is the card thumbnail. Falls back to `emoji` when empty. Ignored when `subsections` is set. */
  images?: Photo[]
  /** When set, the card and modal show a toggle to switch between sub-galleries (e.g. two different roles under one card). */
  subsections?: EntrySubsection[]
  emoji: string
  /** Shows a "Currently Working" badge on the card. */
  currentlyWorking?: boolean
  /** When true, the entry is not rendered anywhere on the site. */
  draft?: boolean
}

export const asset = (name: string) => `${import.meta.env.BASE_URL}projects/${name}`

/** The single place where draft entries are filtered out. */
export function published<T extends { draft?: boolean }>(items: T[]): T[] {
  return items.filter((item) => !item.draft)
}

/** Resolves what to show for an entry, letting the selected subsection override the parent's fields. */
export function entryView(entry: Entry, subIndex = 0) {
  const sub = entry.subsections?.[subIndex]
  return {
    sub,
    role: sub?.role ?? entry.role,
    summary: sub?.summary ?? entry.summary,
    tagline: sub?.tagline ?? entry.tagline ?? sub?.summary ?? entry.summary,
    period: sub?.period ?? entry.period,
    location: sub?.location ?? entry.location,
    images: sub ? sub.images : (entry.images ?? []),
    highlights: sub ? sub.highlights : (entry.highlights ?? []),
  }
}

/** "A", "A and B", "A, B, and C". */
export function joinNames(names: string[]) {
  if (names.length <= 2) return names.join(' and ')
  return `${names.slice(0, -1).join(', ')}, and ${names[names.length - 1]}`
}
