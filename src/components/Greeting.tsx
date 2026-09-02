import { useEffect, useState } from 'react'
import './Greeting.css'

const GREETINGS = ['Hi', 'Hola', 'Olá', 'Bonjour', 'Ciao', 'Hallo', 'こんにちは', '안녕하세요']

export function Greeting() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % GREETINGS.length)
    }, 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <p className="greeting">
      <span key={index} className="greeting__word">
        {GREETINGS[index]}
      </span>
      <span className="greeting__wave" aria-hidden="true">
        👋
      </span>
    </p>
  )
}
