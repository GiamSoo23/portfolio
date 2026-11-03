import type { AccentColor } from './types'

export interface SkillUse {
  label: string
  /** Hash route to the entry, or an external URL. Omitted when there is nothing to link to. */
  href?: string
}

export interface Skill {
  name: string
  usedIn: SkillUse[]
}

export interface SkillGroup {
  id: string
  title: string
  accent: AccentColor
  skills: Skill[]
}

const ENCODE: SkillUse = { label: 'EnCoDe Lab', href: '#/experience/encode-lab' }
const FGC_PLATFORM: SkillUse = { label: 'FIRST Global platform', href: '#/experience/first-global-platform' }
const FGC: SkillUse = { label: 'FIRST Global', href: '#/leadership/first-global' }
const COPA: SkillUse = { label: 'Copa Ka’i', href: '#/leadership/copa-kai' }
const PANELLY: SkillUse = { label: 'Panelly', href: '#/projects/panelly' }
const MOX: SkillUse = { label: 'Mox', href: '#/projects/mox' }
const MOLES: SkillUse = { label: 'M.O.L.E.S.', href: '#/projects/moles' }
const THIS_SITE: SkillUse = { label: 'this site', href: 'https://github.com/giamsoo23/portfolio' }
const IBM_Z_XPLORE: SkillUse = { label: 'IBM Z Xplore', href: '#/skills/certifications' }

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    accent: 'orange',
    skills: [
      { name: 'TypeScript', usedIn: [FGC_PLATFORM, PANELLY, THIS_SITE] },
      { name: 'Python', usedIn: [MOLES] },
      { name: 'C++', usedIn: [MOLES] },
      { name: 'C#', usedIn: [ENCODE] },
      { name: 'Swift', usedIn: [MOX] },
      { name: 'Kotlin', usedIn: [MOX] },
      { name: 'SQL', usedIn: [FGC_PLATFORM] },
      { name: 'HTML/CSS', usedIn: [THIS_SITE] },
    ],
  },
  {
    id: 'web',
    title: 'Web and backend',
    accent: 'blue',
    skills: [
      { name: 'React', usedIn: [FGC_PLATFORM, PANELLY, THIS_SITE] },
      { name: 'Next.js', usedIn: [FGC_PLATFORM, PANELLY] },
      { name: 'Node.js', usedIn: [FGC_PLATFORM, PANELLY] },
      { name: 'Prisma', usedIn: [FGC_PLATFORM] },
      { name: 'Zod', usedIn: [PANELLY] },
      { name: 'Tailwind CSS', usedIn: [FGC_PLATFORM, PANELLY] },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud and data',
    accent: 'teal',
    skills: [
      { name: 'Supabase', usedIn: [FGC_PLATFORM, MOX] },
      { name: 'PostgreSQL', usedIn: [FGC_PLATFORM] },
      { name: 'Vercel', usedIn: [FGC_PLATFORM] },
      { name: 'GitHub Actions', usedIn: [THIS_SITE] },
    ],
  },
  {
    id: 'mainframe',
    title: 'Mainframe',
    accent: 'violet',
    skills: [
      { name: 'COBOL', usedIn: [IBM_Z_XPLORE] },
      { name: 'JCL', usedIn: [IBM_Z_XPLORE] },
      { name: 'Zowe', usedIn: [IBM_Z_XPLORE] },
      { name: 'z/OS basics', usedIn: [IBM_Z_XPLORE] },
    ],
  },
  {
    id: 'ai',
    title: 'AI',
    accent: 'pink',
    skills: [
      { name: 'Gemini AI SDK', usedIn: [PANELLY] },
      { name: 'Claude Code', usedIn: [{ label: 'daily development' }] },
    ],
  },
  {
    id: 'hardware',
    title: 'Hardware and XR',
    accent: 'red',
    skills: [
      { name: 'ESP32', usedIn: [MOLES] },
      { name: 'Magic Leap 2', usedIn: [ENCODE] },
      { name: 'Ultraleap', usedIn: [ENCODE] },
      { name: 'Unity', usedIn: [ENCODE] },
      { name: '3D printing', usedIn: [MOLES] },
    ],
  },
  {
    id: 'production',
    title: 'Production',
    accent: 'gold',
    skills: [
      { name: 'Video and photo production', usedIn: [FGC, COPA] },
      { name: 'AV planning', usedIn: [COPA] },
      { name: 'AutoCAD', usedIn: [FGC, COPA] },
    ],
  },
  {
    id: 'spoken',
    title: 'Spoken languages',
    accent: 'green',
    skills: [
      { name: 'English', usedIn: [] },
      { name: 'Spanish', usedIn: [] },
    ],
  },
]

export type CertificationStatus = 'Earned' | 'Joined' | 'Planned'

export interface Certification {
  id: string
  name: string
  issuer: string
  status: CertificationStatus
  /** Shown next to the status, e.g. "2026" or "October 2026". */
  date?: string
  verifyUrl?: string
  note?: string
}

export const certifications: Certification[] = [
  {
    id: 'ibm-z-xplore',
    name: 'IBM Z Xplore: Concepts badge',
    issuer: 'IBM',
    status: 'Earned',
    date: '2026', // TODO(Gregory): exact date
    // TODO(Gregory): Credly link (verifyUrl)
    note: 'Mainframe fundamentals on z/OS: JCL, COBOL, and Zowe. More badges in progress.',
  },
  {
    id: 'ibm-z-ambassador',
    name: 'IBM Z Student Ambassador',
    issuer: 'IBM',
    status: 'Joined',
    date: 'October 2026',
  },
  {
    id: 'az-900',
    // TODO(Gregory): confirm the exact certification and a target date on Microsoft Learn
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    status: 'Planned',
  },
]
