import { experience } from './experience'
import { leadership } from './leadership'
import { projects } from './projects'
import { published, type AccentColor, type Photo } from './types'
import { volunteering } from './volunteering'

export const SITE_NAME = 'Gregory Ramírez Fuentes'

export type PageId = 'home' | 'experience' | 'projects' | 'leadership' | 'skills' | 'volunteering'

export interface PageInfo {
  id: PageId
  label: string
  /** Browser tab title prefix. */
  title: string
  description: string
  accent: AccentColor
  thumbnail?: Photo
  emoji: string
  /** Hidden from the navbar and the home page cards when false. */
  visible: boolean
}

export const pages: PageInfo[] = [
  {
    id: 'home',
    label: 'Home',
    title: 'Portfolio',
    description: '',
    accent: 'orange',
    emoji: '👋',
    visible: true,
  },
  {
    id: 'experience',
    label: 'Experience',
    title: 'Experience',
    description: 'Research at the EnCoDe Lab, the platform I lead for FIRST Global, and the Hackabull app.',
    accent: 'violet',
    thumbnail: experience[0].images?.[0],
    emoji: '💼',
    visible: published(experience).length > 0,
  },
  {
    id: 'projects',
    label: 'Projects',
    title: 'Projects',
    description: 'Hackathon builds and side projects, from rubble sensors to file relays.',
    accent: 'red',
    thumbnail: projects[0].images?.[0],
    emoji: '🛠️',
    visible: published(projects).length > 0,
  },
  {
    id: 'leadership',
    label: 'Leadership',
    title: 'Leadership',
    description: 'SHPE at USF, FIRST Global, and Copa Ka’i.',
    accent: 'pink',
    thumbnail: leadership[0].images?.[0],
    emoji: '🚀',
    visible: published(leadership).length > 0,
  },
  {
    id: 'skills',
    label: 'Skills',
    title: 'Skills',
    description: 'What I work with, where I used it, plus certifications and badges.',
    accent: 'teal',
    emoji: '🧰',
    visible: true,
  },
  {
    id: 'volunteering',
    label: 'Volunteering',
    title: 'Volunteering',
    description: 'Community and outreach events.',
    accent: 'green',
    emoji: '🤝',
    visible: published(volunteering).length > 0,
  },
]

export const hero = {
  subtitle: 'Building for the messy, human side of technology.',
  avatar: `${import.meta.env.BASE_URL}avatar.jpeg`,
}

export const currently: string[] = [
  'Lead Developer, FIRST Global',
  'Research Assistant, EnCoDe Lab at USF',
]

export const about: string[] = [
  "I'm a Computer Science student at the University of South Florida who likes building technology that brings people together and makes their lives easier. I grew up between Venezuela and Chile, and robotics competitions are what first pulled me into engineering. Today I work across the full stack, with a soft spot for systems and software that talks to hardware.",
  'Outside of code, I care about opening doors for other students. I helped set the foundations for Copa Ka’i, Venezuela’s largest robotics competition, served as VP of Technology for SHPE USF, led Hackabull, and joined IBM’s Z Student Ambassador program in October 2026. I’m currently looking for Summer 2027 software engineering internships, especially on teams that move fast and give engineers real ownership.',
]

export const education = {
  degree: 'B.S. in Computer Science',
  school: 'University of South Florida',
  location: 'Tampa, FL',
  graduation: 'Expected May 2028',
  languages: 'Bilingual: English and Spanish',
}

export type ContactKind = 'email' | 'linkedin' | 'github'

export const contactLinks: { kind: ContactKind; label: string; value: string; href: string }[] = [
  { kind: 'email', label: 'Email', value: 'ramiro2112gr@gmail.com', href: 'mailto:ramiro2112gr@gmail.com' },
  {
    kind: 'linkedin',
    label: 'LinkedIn',
    value: '/in/gregoryramirezf',
    href: 'https://www.linkedin.com/in/gregoryramirezf/',
  },
  { kind: 'github', label: 'GitHub', value: '@giamsoo23', href: 'https://github.com/giamsoo23' },
]
