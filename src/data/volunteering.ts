import type { Photo } from './types'

export interface VolunteerEntry {
  id: string
  organization: string
  event: string
  date: string
  location: string
  role: string
  /** One or two plain sentences. */
  description: string
  image?: Photo
  draft?: boolean
}

export const volunteering: VolunteerEntry[] = [
  {
    id: 'microsoft-tampa',
    organization: 'Microsoft',
    event: 'TODO', // TODO(Gregory): Microsoft community events in Tampa: event names
    date: 'TODO', // TODO(Gregory): dates
    location: 'Tampa, FL',
    role: 'TODO', // TODO(Gregory): what you did
    description: 'TODO',
    draft: true,
  },
  {
    id: 'dia-de-ciencias',
    organization: 'TODO', // TODO(Gregory): Día de Ciencias organizer
    event: 'Día de Ciencias',
    date: 'TODO', // TODO(Gregory): date
    location: 'TODO',
    role: 'TODO', // TODO(Gregory): what you did
    description: 'TODO',
    draft: true,
  },
  {
    id: 'ftc-tampa',
    organization: 'FIRST',
    event: 'TODO', // TODO(Gregory): FIRST Tech Challenge event in Tampa
    date: 'TODO', // TODO(Gregory): date
    location: 'Tampa, FL',
    role: 'TODO', // TODO(Gregory): judge, referee, field volunteer?
    description: 'TODO',
    draft: true,
  },
]
