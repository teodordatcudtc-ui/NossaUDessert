'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Reviews.module.css'

const reviews = [
  {
    id: 1,
    name: 'Maria Popescu',
    rating: 5,
    comment: 'Tortul pentru ziua de naștere a fiicei mele a fost absolut perfect! Gust excelent și prezentare impecabilă. Recomand cu căldură!',
    date: 'Acum 2 săptămâni',
  },
  {
    id: 2,
    name: 'Alexandru Ionescu',
    rating: 5,
    comment: 'Cea mai bună cofetărie din București! Prăjiturile sunt delicioase și ingredientele sunt de calitate superioară. Voi reveni cu siguranță.',
    date: 'Acum 1 lună',
  },
  {
    id: 3,
    name: 'Elena Georgescu',
    rating: 5,
    comment: 'Am comandat un tort personalizat pentru nuntă și a fost exact ce ne-am dorit. Echipa este foarte profesională și atenți la detalii.',
    date: 'Acum 3 săptămâni',
  },
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Ce spun clienții noștri</h2>
          <p className={styles.subtitle}>
            Suntem mândri de feedback-ul pozitiv al clienților noștri
          </p>
        </motion.div>

        <div className={styles.wrapper}>
          <div className={`${styles.grid} ${isMobile ? styles.carousel : ''}`}>
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.card}
                style={isMobile ? {
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                  opacity: index === currentIndex ? 1 : 0.3,
                } : {}}
              >
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={i < review.rating ? '#FFD700' : '#E0E0E0'}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                </div>
                <p className={styles.comment}>&ldquo;{review.comment}&rdquo;</p>
                <div className={styles.footer}>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.date}>{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {isMobile && (
            <div className={styles.dots}>
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

