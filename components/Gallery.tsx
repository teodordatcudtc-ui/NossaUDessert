'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import styles from './Gallery.module.css'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Torturi premium',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Prăjituri artizanale',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Cofetărie fină',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Deserturi speciale',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Produse premium',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Torturi personalizate',
  },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.gallery}>
      <div className={styles.carousel}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={styles.carouselItem}
          >
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className={styles.carouselImage}
              sizes="100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <button
          className={styles.prevButton}
          onClick={() => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          className={styles.nextButton}
          onClick={() => setCurrentIndex((prev) => (prev + 1) % galleryImages.length)}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      <div className={styles.thumbnails}>
        {galleryImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.thumbnail} ${index === currentIndex ? styles.active : ''}`}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={styles.thumbnailImage}
              sizes="(max-width: 768px) 20vw, 150px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

