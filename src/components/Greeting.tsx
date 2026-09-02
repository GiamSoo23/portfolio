import { useEffect, useRef, useState } from 'react'
import './Greeting.css'

const GREETINGS = ['Hi', 'Hola', 'Olá', 'Bonjour', 'Ciao', 'Hallo', 'こんにちは', '안녕하세요']
const GLITCH_CHARS = '!<>-_\\/[]{}—=+*^?#$%&aeiouAEIOU'
const HOLD_MS = 1500
const FRAME_MS = 35

function randomChar() {
  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
}

export function Greeting() {
  const [display, setDisplay] = useState(GREETINGS[0])
  const wordIndex = useRef(0)
  const timers = useRef<{ interval?: ReturnType<typeof setInterval>; timeout?: ReturnType<typeof setTimeout> }>({})

  useEffect(() => {
    const advance = () => {
      wordIndex.current = (wordIndex.current + 1) % GREETINGS.length
      const target = GREETINGS[wordIndex.current]
      const totalFrames = target.length * 3 + 6
      let frame = 0

      timers.current.interval = setInterval(() => {
        frame++
        const revealCount = Math.floor((frame / totalFrames) * target.length)
        let out = ''
        for (let i = 0; i < target.length; i++) {
          out += i < revealCount ? target[i] : randomChar()
        }
        setDisplay(out)

        if (frame >= totalFrames) {
          clearInterval(timers.current.interval)
          setDisplay(target)
          timers.current.timeout = setTimeout(advance, HOLD_MS)
        }
      }, FRAME_MS)
    }

    timers.current.timeout = setTimeout(advance, HOLD_MS)

    return () => {
      clearInterval(timers.current.interval)
      clearTimeout(timers.current.timeout)
    }
  }, [])

  return (
    <p className="greeting">
      <span className="greeting__word">{display}</span>
      <span className="greeting__wave" aria-hidden="true">
        👋
      </span>
    </p>
  )
}
