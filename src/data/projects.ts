export type AccentColor = 'violet' | 'blue' | 'teal' | 'orange'

export interface Project {
  id: string
  title: string
  role: string
  period: string
  location?: string
  summary: string
  tech: string[]
  highlights: string[]
  link?: string
  accent: AccentColor
}

export const projects: Project[] = [
  {
    id: 'encode-lab',
    title: 'EnCoDe Lab — Mixed Reality Research',
    role: 'Research Assistant',
    period: 'May 2026 — Present',
    location: 'USF, Tampa, FL',
    summary:
      'Human-Computer Interaction research building mixed-reality study experiences on Magic Leap 2, as part of a 6-person team directed by Julia Woodward.',
    tech: ['C#', 'Unity', 'Magic Leap 2', 'Ultraleap'],
    accent: 'violet',
    highlights: [
      'Built a new mixed-reality study phase end-to-end on Magic Leap 2 within a phase-pipeline architecture, developing director integration, completion UI, and hand-grabbable prop prefabs.',
      'Diagnosed and fixed a broken two-handed grab interaction by tracing Unity physics through the Ultraleap Physical Hands package source, resolving grab-permission handling and kinematic vs. velocity-based rigidbody movement.',
    ],
  },
  {
    id: 'first-global',
    title: 'FIRST Global Staff Operations Platform',
    role: 'Lead Developer',
    period: 'April 2026 — Present',
    location: 'Remote, South Korea',
    summary:
      'A staff-operations PWA coordinating ~300 staff and volunteers across 10 role types for the 191-team FIRST Global Challenge.',
    tech: ['Next.js 16', 'TypeScript', 'Prisma', 'Supabase', 'PostgreSQL', 'Vercel'],
    accent: 'blue',
    highlights: [
      'Architected and built the platform from scratch to replace paper sheets and word-of-mouth coordination.',
      'Built a 29-table Prisma/Postgres schema powering digital judge evaluations, Step & Repeat photo tracking, and broadcast announcements.',
    ],
  },
  {
    id: 'mox',
    title: 'Mox — Cross-Platform File Relay',
    role: 'Creator and Developer',
    period: 'May 2026',
    summary:
      'A cross-platform file-relay app moving files up to 500MB between Mac and Android through a private Supabase bucket.',
    tech: ['Swift', 'Kotlin', 'Supabase'],
    accent: 'teal',
    highlights: [
      'Built a Swift menu-bar app and a Kotlin Android share-target so files move between Mac and Android in one hotkey.',
      'Implemented signed-URL access and a single-file relay schema, enabling native Android share-sheet integration.',
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership & Community Impact',
    role: 'Production Coordinator (Copa Ka’i) · Mentor (Team Chile)',
    period: 'Jan 2024 — Present',
    location: 'Maracaibo, Venezuela · Chile',
    summary:
      'Combining large-scale event production with long-term mentorship of a robotics team competing at FIRST Global.',
    tech: ['Event Production', 'Mentorship', 'Public Speaking', 'Fundraising'],
    accent: 'orange',
    highlights: [
      'Designed the AV plan for a 45-minute opening ceremony inspired by Super Bowl Halftime Show #50, producing 20 animations viewed by 3,000+ people.',
      'Drafted 12 role descriptions and trained 60 volunteers, empowering leaders to manage logistics for the 3-day Copa Ka’i competition.',
      'Mentored FIRST Global Team Chile, helping the team develop soft skills in communication and teamwork.',
      'Through the team’s TV, government, and radio appearances, helped raise ~$25,000 over the last two years to cover the team’s costs to compete.',
    ],
  },
]
