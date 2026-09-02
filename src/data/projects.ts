import first1 from '../assets/projects/first-1.jpeg'
import first2 from '../assets/projects/first-2.jpeg'
import first3 from '../assets/projects/first-3.jpeg'
import first4 from '../assets/projects/first-4.jpeg'
import first5 from '../assets/projects/first-5.jpeg'
import panelly1 from '../assets/projects/panelly-1.jpeg'
import panelly2 from '../assets/projects/panelly-2.jpeg'
import panelly3 from '../assets/projects/panelly-3.jpeg'
import panelly4 from '../assets/projects/panelly-4.jpg'
import shpe1 from '../assets/projects/shpe-1.jpeg'
import shpe2 from '../assets/projects/shpe-2.jpeg'
import shpe3 from '../assets/projects/shpe-3.jpeg'
import shpe4 from '../assets/projects/shpe-4.jpeg'

export type AccentColor = 'violet' | 'blue' | 'teal' | 'orange' | 'pink' | 'gold'

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
  /** Project photos (imported from src/assets/projects). First image is used as the card thumbnail; all are shown in the modal gallery. Falls back to `emoji` when empty. */
  images?: string[]
  emoji: string
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
    emoji: '🥽',
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
    emoji: '🌐',
    images: [first1, first2, first3, first4, first5],
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
    emoji: '🔁',
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
    emoji: '🤝',
    highlights: [
      'Designed the AV plan for a 45-minute opening ceremony inspired by Super Bowl Halftime Show #50, producing 20 animations viewed by 3,000+ people.',
      'Drafted 12 role descriptions and trained 60 volunteers, empowering leaders to manage logistics for the 3-day Copa Ka’i competition.',
      'Mentored FIRST Global Team Chile, helping the team develop soft skills in communication and teamwork.',
      'Through the team’s TV, government, and radio appearances, helped raise ~$25,000 over the last two years to cover the team’s costs to compete.',
    ],
  },
  {
    id: 'shpe',
    title: 'SHPE HackJam & Hack-A-Bull',
    role: 'VP of Technology, SHPE at USF',
    period: 'April 2025 — April 2026',
    location: 'Tampa, FL',
    summary:
      'Directing strategic vision for two annual hackathons — HackJam and Hack-A-Bull — securing funding and shaping the tech behind the attendee experience.',
    tech: ['Event Strategy', 'Sponsorship', 'Product Concept', 'NFC'],
    accent: 'pink',
    emoji: '🚀',
    images: [shpe1, shpe2, shpe3, shpe4],
    highlights: [
      'Direct strategic vision for 2 annual hackathons, HackJam and Hack-A-Bull, obtaining $20,000 through partnerships with SHPE, MLH, and SASE, and companies like Microsoft, Velera, and Amgen, impacting 515 students.',
      'Developed the concept for the Hackabull Web and Mobile App, supporting brainstorming, design, and testing of event schedules, participant resources, and NFC-based attendee networking through participant lanyards.',
    ],
  },
  {
    id: 'panelly',
    title: 'Panelly — Solar Savings Estimator',
    role: 'Backend Lead',
    period: 'July 2026',
    summary:
      'A solar-savings estimation pipeline combining the Google Solar API, EIA API, and Google Places to give homeowners a realistic savings estimate.',
    tech: ['Next.js', 'Google Solar API', 'EIA API', 'Zod'],
    accent: 'gold',
    emoji: '☀️',
    images: [panelly1, panelly2, panelly3, panelly4],
    highlights: [
      'Built the core solar-savings estimation pipeline using the Google Solar API, EIA API, and Google Places, adding a fallback for API coverage gaps.',
      'Excluded the recently repealed federal solar tax credit after researching current policy, keeping estimates accurate.',
      'Led and mentored a 4-person team as the sole backend developer, defining a shared Zod contract that let teammates build the UI, database, and gamification in parallel through a mid-project pivot in input design.',
    ],
  },
]
