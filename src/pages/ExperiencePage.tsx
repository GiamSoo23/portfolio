import { EntryGrid } from '../components/EntryGrid'
import { experience } from '../data/experience'

export function ExperiencePage() {
  return (
    <EntryGrid
      entries={experience}
      label="Where I work"
      title="Experience"
      subtitle="Research and engineering roles, from mixed reality at USF to the platform that runs staff operations at the FIRST Global Challenge."
    />
  )
}
