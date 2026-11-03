import type { PointerEvent } from 'react'

const MAX_TILT_DEG = 4

/** Spread onto a card: it leans toward a mouse cursor and tracks it with a soft glow. */
export const cardTilt = {
  onPointerMove(e: PointerEvent<HTMLElement>) {
    if (e.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    card.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * MAX_TILT_DEG * 2}deg) rotateY(${(x - 0.5) * MAX_TILT_DEG * 2}deg) translateY(-3px)`
    card.style.setProperty('--glow-x', `${x * 100}%`)
    card.style.setProperty('--glow-y', `${y * 100}%`)
  },
  onPointerLeave(e: PointerEvent<HTMLElement>) {
    e.currentTarget.style.transform = ''
  },
}
