import { useEffect, useState } from 'react'

interface Props {
  images: string[]
  alt: string
  emoji: string
  className?: string
}

export function ProjectGallery({ images, alt, emoji, className = '' }: Props) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [images])

  if (images.length === 0) {
    return (
      <div className={`project-thumb ${className}`}>
        <span className="project-thumb__emoji" aria-hidden="true">
          {emoji}
        </span>
      </div>
    )
  }

  return (
    <div className={`project-thumb ${className}`}>
      <img src={images[index]} alt={`${alt} — photo ${index + 1}`} />

      {images.length > 1 && (
        <div className="project-gallery__dots">
          {images.map((src, i) => (
            <button
              key={src}
              className={`project-gallery__dot ${i === index ? 'is-active' : ''}`}
              aria-label={`Show photo ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
