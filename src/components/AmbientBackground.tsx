import { useEffect, useRef } from 'react'
import './AmbientBackground.css'

const FOLLOW_SPEED = 0.06

/** Slow gradient behind the whole site. On devices with a mouse, one glow eases toward the cursor. */
export function AmbientBackground() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }
    let frame = 0

    const step = () => {
      current.x += (target.x - current.x) * FOLLOW_SPEED
      current.y += (target.y - current.y) * FOLLOW_SPEED
      glow.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`
      const settled = Math.abs(target.x - current.x) < 0.5 && Math.abs(target.y - current.y) < 0.5
      frame = settled ? 0 : requestAnimationFrame(step)
    }

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      if (!glow.classList.contains('is-active')) {
        // Start at the cursor so the glow does not sweep in from the corner.
        current.x = e.clientX
        current.y = e.clientY
        glow.classList.add('is-active')
      }
      target.x = e.clientX
      target.y = e.clientY
      if (!frame) frame = requestAnimationFrame(step)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__blob ambient__blob--orange" />
      <div className="ambient__blob ambient__blob--violet" />
      <div ref={glowRef} className="ambient__glow" />
    </div>
  )
}
