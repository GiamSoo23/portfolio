import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { accentStyle } from '../data/accentColors'
import { certifications, skillGroups, type SkillGroup, type SkillUse } from '../data/skills'

function UsedInLink({ use }: { use: SkillUse }) {
  if (!use.href) return <>{use.label}</>
  const external = use.href.startsWith('http')
  return (
    <a href={use.href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {use.label}
    </a>
  )
}

function SkillGroupCard({ group }: { group: SkillGroup }) {
  const [selected, setSelected] = useState<string | null>(null)
  // Hover previews a skill; a click or tap pins it so the pointer can travel down to the links.
  const [pinned, setPinned] = useState(false)
  const skill = group.skills.find((s) => s.name === selected)
  const hasUses = group.skills.some((s) => s.usedIn.length > 0)

  return (
    <div className="skill-group neu-raised" style={accentStyle(group.accent)}>
      <h2 className="skill-group__title">{group.title}</h2>
      <div className="skill-group__chips">
        {group.skills.map((s) =>
          s.usedIn.length > 0 ? (
            <button
              key={s.name}
              className={`skill-chip neu-btn ${s.name === selected ? 'is-active' : ''}`}
              aria-pressed={s.name === selected}
              onMouseEnter={() => !pinned && setSelected(s.name)}
              onFocus={() => setSelected(s.name)}
              onClick={() => {
                setSelected(s.name)
                setPinned(true)
              }}
            >
              {s.name}
            </button>
          ) : (
            <span key={s.name} className="skill-chip skill-chip--static neu-pressed">
              {s.name}
            </span>
          ),
        )}
      </div>
      {hasUses && (
        <p className="skill-group__used" aria-live="polite">
          {skill ? (
            <>
              <span className="skill-group__used-label">{skill.name} used in: </span>
              {skill.usedIn.map((use, i) => (
                <span key={use.label}>
                  {i > 0 && ', '}
                  <UsedInLink use={use} />
                </span>
              ))}
            </>
          ) : (
            <span className="skill-group__hint">Hover or tap a skill to see where I used it.</span>
          )}
        </p>
      )}
    </div>
  )
}

export function SkillsPage() {
  return (
    <section className="projects page">
      <div className="container">
        <PageHeader
          label="Toolbox"
          title="Skills"
          subtitle="Only things I have actually used in the work on this site. Pick a skill to jump to where it shows up."
        />

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <SkillGroupCard key={group.id} group={group} />
          ))}
        </div>

        <div className="skills__section" data-entry-id="certifications" tabIndex={-1}>
          <h2 className="section-heading">Certifications and badges</h2>
          <div className="certs__grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="cert neu-raised-sm">
                <span className={`cert__status cert__status--${cert.status.toLowerCase()}`}>
                  {cert.status}
                  {cert.date ? ` · ${cert.date}` : ''}
                </span>
                <p className="cert__name">{cert.name}</p>
                <p className="cert__issuer">{cert.issuer}</p>
                {cert.note && <p className="cert__note">{cert.note}</p>}
                {cert.verifyUrl && (
                  <a className="text-link" href={cert.verifyUrl} target="_blank" rel="noreferrer">
                    Verify
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
