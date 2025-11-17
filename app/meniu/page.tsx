'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import styles from './page.module.css'

const categories = ['Toate', 'Torturi', 'Prăjituri', 'Cofetărie Fină', 'Deserturi Speciale']

const products = [
  {
    id: 1,
    name: 'Tort Ciocolată Premium',
    category: 'Torturi',
    description: 'Tort cu ciocolată belgiană și cremă de vanilie',
    price: '280 lei',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Tort Fructe Proaspete',
    category: 'Torturi',
    description: 'Tort cu fructe de sezon și cremă ușoară',
    price: '250 lei',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Tort Red Velvet',
    category: 'Torturi',
    description: 'Tort clasic red velvet cu cremă de brânză',
    price: '270 lei',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Ecler Ciocolată',
    category: 'Prăjituri',
    description: 'Ecler cu cremă de ciocolată și glazură',
    price: '15 lei',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Croissant cu Ciocolată',
    category: 'Prăjituri',
    description: 'Croissant proaspăt cu ciocolată belgiană',
    price: '12 lei',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Tartă cu Fructe',
    category: 'Prăjituri',
    description: 'Tartă cu fructe proaspete și cremă vanilie',
    price: '18 lei',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    name: 'Macarons Mix',
    category: 'Cofetărie Fină',
    description: 'Set de 6 macarons cu arome variate',
    price: '45 lei',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    name: 'Trufe Ciocolată',
    category: 'Cofetărie Fină',
    description: 'Trufe artizanale cu ciocolată premium',
    price: '20 lei',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4b942f89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    name: 'Tiramisu',
    category: 'Deserturi Speciale',
    description: 'Tiramisu autentic italian',
    price: '35 lei',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    name: 'Cheesecake cu Fructe',
    category: 'Deserturi Speciale',
    description: 'Cheesecake cremos cu topping de fructe',
    price: '32 lei',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
]

export default function MeniuPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') ?? ''
  const [selectedCategory, setSelectedCategory] = useState('Toate')
  const [searchTerm, setSearchTerm] = useState(initialQuery)

  useEffect(() => {
    setSearchTerm(initialQuery)
  }, [initialQuery])

  const normalizedSearch = searchTerm.trim().toLowerCase()

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'Toate' || product.category === selectedCategory
    const matchesSearch =
      !normalizedSearch ||
      product.name.toLowerCase().includes(normalizedSearch) ||
      product.description.toLowerCase().includes(normalizedSearch)
    return matchesCategory && matchesSearch
  })

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            Meniul nostru
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.subtitle}
          >
            Descoperă selecția noastră de deserturi premium
          </motion.p>
        </div>
      </div>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.searchBar}>
            <input
              type="search"
              placeholder="Caută un desert..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button type="button" onClick={() => setSearchTerm('')}>
                Șterge
              </button>
            )}
          </div>

          <div className={styles.filters}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.grid}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={styles.card}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <span className={styles.category}>{product.category}</span>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.description}>{product.description}</p>
                    <div className={styles.price}>{product.price}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}

