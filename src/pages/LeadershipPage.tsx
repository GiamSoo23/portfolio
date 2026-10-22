import { EntryGrid } from '../components/EntryGrid'
import { leadership } from '../data/leadership'

export function LeadershipPage() {
  return (
    <EntryGrid
      entries={leadership}
      label="Leadership & Production"
      title="Leadership"
      subtitle="Opening doors for other students: organizing hackathons, mentoring robotics teams, and producing live events."
    />
  )
}
