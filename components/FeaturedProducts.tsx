'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import styles from './FeaturedProducts.module.css'

const featuredProducts = [
  {
    id: 1,
    name: 'Tort Ciocolată Premium',
    description: 'Tort cu ciocolată belgiană și cremă de vanilie',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '280 lei',
    category: 'Torturi',
  },
  {
    id: 2,
    name: 'Tort Fructe Proaspete',
    description: 'Tort cu fructe de sezon și cremă ușoară',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '250 lei',
    category: 'Torturi',
  },
  {
    id: 3,
    name: 'Ecler Ciocolată',
    description: 'Ecler cu cremă de ciocolată și glazură',
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '15 lei',
    category: 'Prăjituri',
  },
  {
    id: 4,
    name: 'Croissant cu Ciocolată',
    description: 'Croissant proaspăt cu ciocolată belgiană',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '12 lei',
    category: 'Prăjituri',
  },
  {
    id: 5,
    name: 'Macarons Mix',
    description: 'Set de 6 macarons cu arome variate',
    image:
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '45 lei',
    category: 'Cofetărie Fină',
  },
  {
    id: 6,
    name: 'Tiramisu',
    description: 'Tiramisu autentic italian',
    image:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '35 lei',
    category: 'Deserturi Speciale',
  },
  {
    id: 7,
    name: 'Cheesecake cu Fructe',
    description: 'Cheesecake cremos cu topping de fructe de pădure',
    image:
      'https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '32 lei',
    category: 'Deserturi Speciale',
  },
  {
    id: 8,
    name: 'Trufe de Ciocolată Ruby',
    description: 'Set de trufe artizanale cu ciocolată ruby și fistic',
    image:
      'https://images.unsplash.com/photo-1606312619070-d48b4b942f89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: '55 lei',
    category: 'Cofetărie Fină',
  },
]

export default function FeaturedProducts() {
  const gridRef = useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkViewport = () => {
      if (typeof window === 'undefined') return
      setIsMobile(window.innerWidth <= 768)
    }
    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  useEffect(() => {
    if (!isMobile || !gridRef.current) return

    const container = gridRef.current
    let currentIndex = 0

    const autoScroll = () => {
      if (!container?.children.length) return
      currentIndex = (currentIndex + 1) % container.children.length
      const cardWidth =
        (container.children[0] as HTMLElement)?.offsetWidth ?? container.clientWidth
      container.scrollTo({
        left: currentIndex * (cardWidth + 20),
        behavior: 'smooth',
      })
    }

    const interval = setInterval(autoScroll, 4000)
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
          <h2 className={styles.title}>Produsele noastre</h2>
          <p className={styles.subtitle}>
            Descoperă selecția noastră de deserturi premium, preparate cu ingrediente de cea mai bună calitate
          </p>
        </motion.div>

        <div
          className={`${styles.grid} ${isMobile ? styles.mobileGrid : ''}`}
          ref={gridRef}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${styles.card} ${isMobile ? styles.mobileCard : ''}`}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productPrice}>{product.price}</p>
                  </div>
                </div>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.cardTitle}>{product.name}</h3>
                <p className={styles.cardDescription}>{product.description}</p>
                <div className={styles.price}>{product.price}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.cta}
        >
          <Link href="/meniu" className="btn btn-primary">
            Vezi toate produsele
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

