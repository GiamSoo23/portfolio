import { asset, type Entry } from './types'

export const experience: Entry[] = [
  {
    id: 'encode-lab',
    title: 'EnCoDe Lab, Mixed Reality Research',
    role: 'Research Assistant',
    period: 'May 2026 - Present',
    location: 'USF, Tampa, FL',
    summary:
      'Human-computer interaction research building mixed-reality study experiences on Magic Leap 2, as part of a 6-person team directed by Julia Woodward.',
    tech: ['C#', 'Unity', 'Magic Leap 2', 'Ultraleap'],
    accent: 'violet',
    emoji: '🥽',
    currentlyWorking: true,
    images: [
      { src: asset('encode-1.jpeg'), alt: 'EnCoDe Lab workstation with a mixed-reality study scene open in Unity' },
    ],
    highlights: [
      'Built a new mixed-reality study phase end-to-end on Magic Leap 2 within a phase-pipeline architecture, developing director integration, completion UI, and hand-grabbable prop prefabs.',
      'Diagnosed and fixed a broken two-handed grab interaction by tracing Unity physics through the Ultraleap Physical Hands package source, resolving grab-permission handling and kinematic vs. velocity-based rigidbody movement.',
      'Selected for the Computing Research Association (CRA) UR2PhD Undergraduate Research Training Course (Fall 2026).'
    ],
  },
  {
    id: 'first-global-platform',
    title: 'FIRST Global Staff Operations Platform',
    role: 'Lead Developer',
    period: 'April 2026 - Present',
    location: 'Remote',
    summary:
      'A web app that replaced paper sheets and word-of-mouth coordination for about 300 staff and volunteers across 10 roles at the FIRST Global Challenge, a robotics competition with 191 national teams.',
    tech: ['Next.js 16', 'TypeScript', 'Prisma', 'Supabase', 'PostgreSQL', 'Vercel'],
    accent: 'blue',
    emoji: '🌐',
    currentlyWorking: true,
    images: [
      { src: asset('fgcops-1.jpeg'), alt: 'Step & Repeat tracker showing which national teams have been filmed' },
      { src: asset('fgcops-2.jpeg'), alt: 'Dialog for paging a team to a filming station' },
      { src: asset('fgcops-3.jpeg'), alt: 'Judging dashboard listing the teams assigned to a judging panel' },
      { src: asset('fgcops-4.jpeg'), alt: 'Sign-in screen where staff choose their role' },
    ],
    highlights: [
      'Architected and built the platform from scratch to replace paper sheets and word-of-mouth coordination.',
      'Built a 29-table Prisma/Postgres schema powering digital judge evaluations, Step & Repeat photo tracking, and broadcast announcements.',
    ],
  },
]
