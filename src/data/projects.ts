const asset = (name: string) => `${import.meta.env.BASE_URL}projects/${name}`

const encode1 = asset('encode-1.jpeg')
const first1 = asset('first-1.jpeg')
const first2 = asset('first-2.jpeg')
const first3 = asset('first-3.jpeg')
const first4 = asset('first-4.jpeg')
const first5 = asset('first-5.jpeg')
const fgcops1 = asset('fgcops-1.jpeg')
const fgcops2 = asset('fgcops-2.jpeg')
const fgcops3 = asset('fgcops-3.jpeg')
const mox1 = asset('mox-1.jpg')
const mox2 = asset('mox-2.jpeg')
const panelly1 = asset('panelly-1.jpeg')
const panelly2 = asset('panelly-2.jpeg')
const panelly3 = asset('panelly-3.jpeg')
const panelly4 = asset('panelly-4.jpg')
const productioncopa1 = asset('productioncopa-1.jpeg')
const productioncopa2 = asset('productioncopa-2.jpg')
const productioncopa3 = asset('productioncopa-3.jpeg')
const productioncopa4 = asset('productioncopa-4.jpeg')
const productionfgc1 = asset('productionfgc-1.jpeg')
const productionfgc2 = asset('productionfgc-2.jpeg')
const productionfgc3 = asset('productionfgc-3.jpg')
const productionfgc4 = asset('productionfgc-4.jpg')
const shpe1 = asset('shpe-1.jpeg')
const shpe2 = asset('shpe-2.jpeg')
const shpe3 = asset('shpe-3.jpeg')
const shpe4 = asset('shpe-4.jpeg')
const teamchile1 = asset('teamchile-1.jpg')

export type AccentColor = 'violet' | 'blue' | 'teal' | 'orange' | 'pink' | 'gold' | 'red' | 'green'

export interface ProjectSubsection {
  id: string
  label: string
  period?: string
  location?: string
  images: string[]
  highlights: string[]
}

export interface Project {
  id: string
  title: string
  role: string
  period: string
  location?: string
  summary: string
  tech: string[]
  /** Used when the project has a single flat gallery (no subsections). */
  highlights?: string[]
  link?: string
  accent: AccentColor
  /** Project photos, served from public/projects/. First image is used as the card thumbnail; all are shown in the modal gallery. Falls back to `emoji` when empty. Ignored when `subsections` is set. */
  images?: string[]
  /** When set, the modal shows a toggle to switch between sub-galleries (e.g. two different roles under one card). */
  subsections?: ProjectSubsection[]
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
    images: [encode1],
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
    images: [first1, first2, first3, first4, first5, fgcops1, fgcops2, fgcops3],
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
    images: [mox1, mox2],
    highlights: [
      'Built a Swift menu-bar app and a Kotlin Android share-target so files move between Mac and Android in one hotkey.',
      'Implemented signed-URL access and a single-file relay schema, enabling native Android share-sheet integration.',
    ],
  },
  {
    id: 'production',
    title: 'Event Production',
    role: 'Production Coordinator',
    period: 'Jan 2024 — Present',
    tech: ['Event Production', 'AV Design', 'Logistics', 'Team Training'],
    accent: 'orange',
    emoji: '🎬',
    summary: 'Live event production across two very different stages: a robotics world championship and a national opening ceremony.',
    subsections: [
      {
        id: 'fgc',
        label: 'FIRST Global Challenge',
        images: [productionfgc1, productionfgc2, productionfgc3, productionfgc4],
        highlights: [
          '⚠️ Placeholder — tell Claude the details of your FIRST Global Challenge production work and this will be replaced.',
        ],
      },
      {
        id: 'copa-kai',
        label: 'Copa Ka’i',
        location: 'Maracaibo, Venezuela',
        images: [productioncopa1, productioncopa2, productioncopa3, productioncopa4],
        highlights: [
          'Designed the AV plan for a 45-minute opening ceremony inspired by Super Bowl Halftime Show #50, producing 20 animations viewed by 3,000+ people.',
          'Drafted 12 role descriptions and trained 60 volunteers, empowering leaders to manage logistics for the 3-day Copa Ka’i competition.',
        ],
      },
    ],
  },
  {
    id: 'team-chile',
    title: 'FIRST Global Team Chile',
    role: 'Mentor',
    period: '2024 — Present',
    location: 'Chile',
    summary: 'Long-term mentorship of a robotics team competing at FIRST Global, on both soft skills and fundraising.',
    tech: ['Mentorship', 'Public Speaking', 'Fundraising'],
    accent: 'red',
    emoji: '🇨🇱',
    images: [teamchile1],
    highlights: [
      'Mentored FIRST Global Team Chile, helping the team develop soft skills in communication and teamwork.',
      'Through the team’s TV, government, and radio appearances, helped raise ~$25,000 over the last two years to cover the team’s costs to compete.',
    ],
  },
  {
    id: 'volunteering',
    title: 'Volunteering',
    role: 'Various Roles',
    period: 'Ongoing',
    summary: 'Volunteer work across multiple organizations and initiatives — photos and details coming soon.',
    tech: ['Community', 'Service'],
    accent: 'green',
    emoji: '🙌',
    highlights: [
      '⚠️ Placeholder — tell Claude about your volunteering experience and this will be replaced.',
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
