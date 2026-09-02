import type { CSSProperties } from 'react'
import type { AccentColor } from './projects'

const VAR_MAP: Record<AccentColor, { color: string; glow: string }> = {
  orange: { color: 'var(--accent)', glow: 'var(--accent-glow)' },
  blue: { color: 'var(--accent-2)', glow: 'var(--accent-2-glow)' },
  teal: { color: 'var(--accent-3)', glow: 'var(--accent-3-glow)' },
  violet: { color: 'var(--accent-4)', glow: 'var(--accent-4-glow)' },
  pink: { color: 'var(--accent-5)', glow: 'var(--accent-5-glow)' },
  gold: { color: 'var(--accent-6)', glow: 'var(--accent-6-glow)' },
  red: { color: 'var(--accent-7)', glow: 'var(--accent-7-glow)' },
  green: { color: 'var(--accent-8)', glow: 'var(--accent-8-glow)' },
}

export function accentStyle(accent: AccentColor): CSSProperties {
  const { color, glow } = VAR_MAP[accent]
  return {
    '--card-accent': color,
    '--card-accent-glow': glow,
  } as CSSProperties
}
