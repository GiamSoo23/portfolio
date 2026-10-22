import { useEffect, useState } from 'react'
import type { Photo } from '../data/types'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'

interface Props {
  images: Photo[]
  emoji: string
  className?: string
}

export function ProjectGallery({ images, emoji, className = '' }: Props) {
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

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div className={`project-thumb ${className}`}>
      <img src={images[index].src} alt={images[index].alt} />

      {images.length > 1 && (
        <>
          <button
            className="project-gallery__nav project-gallery__nav--prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
          >
            <ChevronLeftIcon size={18} />
          </button>
          <button
            className="project-gallery__nav project-gallery__nav--next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
          >
            <ChevronRightIcon size={18} />
          </button>

          <div className="project-gallery__dots">
            {images.map((photo, i) => (
              <button
                key={photo.src}
                className={`project-gallery__dot ${i === index ? 'is-active' : ''}`}
                aria-label={`Show photo ${i + 1}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setIndex(i)
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
