'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.css'

const commandButtonStyle = {
  background: '#553123',
  color: '#ffffff',
  border: '2px solid #553123',
  boxShadow: '0 4px 15px rgba(85, 49, 35, 0.6)',
  transition: 'all 0.3s ease',
}

const commandButtonHoverStyle = {
  background: '#88655f',
  borderColor: '#88655f',
  boxShadow: '0 6px 20px rgba(136, 101, 95, 0.7)',
}

const heroProducts = [
  {
    id: 1,
    name: 'Entremet Ruby',
    description: 'Glazură oglindă și mousse de fructe roșii',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Tartă Framboise',
    description: 'Cremă vanilie și zmeură proaspătă',
    image:
      'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
]

export default function Hero() {
  const [activeProduct, setActiveProduct] = useState(0)
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
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % heroProducts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      className={styles.hero}
      style={isMobile ? { paddingTop: '150px' } : {}}
    >
      <div className={styles.backgroundImage}>
        <Image
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Deserturi premium"
          fill
          className={styles.bgImage}
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.overlay}></div>
      
      {/* Elemente decorative */}
      <div className={styles.decorativeElements}>
        <motion.div
          className={styles.circle1}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className={styles.circle2}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className={styles.shape1}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={styles.shape2}
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.textContent}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={styles.badge}
            >
              ✨ Deserturi Premium
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={styles.title}
            >
              Descoperă magia dulce a{' '}
              <span className={styles.highlight}>Nossa U Dessert</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={styles.subtitle}
            >
              Deserturi artizanale preparate cu pasiune și ingrediente premium. 
              Transformăm momentele tale speciale în experiențe gustative de neuitat.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={styles.ctaGroup}
            >
              <Link href="/meniu" className={`btn btn-primary ${styles.ctaButton}`}>
                Explorează meniul
              </Link>
              <Link 
                href="/contact" 
                className={`btn btn-secondary ${styles.ctaButton}`}
                style={commandButtonStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, commandButtonHoverStyle)
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, commandButtonStyle)
                }}
              >
                Comandă acum
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.imageContent}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tort premium"
                fill
                className={styles.heroImage}
                sizes="(max-width: 768px) 0vw, 40vw"
              />
              <motion.div
                className={styles.floatingBadge}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <svg
                  className={styles.badgeIcon}
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <span className={styles.badgeText}>100%</span>
                  <span className={styles.badgeSubtext}>Artizanale</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className={styles.mobileCarousel}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={styles.mobileCard}
            >
              <div className={styles.mobileImage}>
                <Image
                  src={heroProducts[activeProduct].image}
                  alt={heroProducts[activeProduct].name}
                  fill
                  sizes="80vw"
                />
              </div>
              <div className={styles.mobileDetails}>
                <h3>{heroProducts[activeProduct].name}</h3>
                <p>{heroProducts[activeProduct].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className={styles.mobileDots}>
            {heroProducts.map((product, index) => (
              <button
                key={product.id}
                aria-label={`Vezi ${product.name}`}
                className={`${styles.dot} ${index === activeProduct ? styles.activeDot : ''}`}
                onClick={() => setActiveProduct(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>↓</span>
        </motion.div>
      </div>
    </section>
  )
}

