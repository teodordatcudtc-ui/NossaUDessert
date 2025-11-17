'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Gallery from '@/components/Gallery'
import styles from './page.module.css'

const values = [
  {
    title: 'Ingrediente Premium',
    description: 'Folosim doar ingrediente de cea mai bună calitate, selectate cu grijă pentru a oferi gust autentic.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Pasiune și Artă',
    description: 'Fiecare desert este creat cu pasiune și atenție la detalii, transformând dulciurile în artă culinară.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Tradiție Modernă',
    description: 'Combinăm rețete tradiționale cu tehnici moderne pentru a crea experiențe gustative unice.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Personalizare',
    description: 'Oferim soluții personalizate pentru fiecare eveniment, de la torturi de nuntă la deserturi pentru ocazii speciale.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function DespreNoiPage() {
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
            Despre Nossa U Dessert
          </motion.h1>
        </div>
      </div>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.content}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.text}
            >
              <h2 className={styles.sectionTitle}>Povestea noastră</h2>
              <p className={styles.paragraph}>
                La Nossa U Dessert, credem că fiecare desert spune o poveste. Începutul nostru 
                a fost marcat de o pasiune profundă pentru arta culinară și dorința de a aduce 
                bucurie prin dulciuri de excepție.
              </p>
              <p className={styles.paragraph}>
                Fiecare produs pe care îl creăm este rezultatul unei combinații perfecte între 
                ingrediente premium, tehnici tradiționale și inovație modernă. Ne mândrim cu 
                faptul că transformăm momentele speciale ale clienților noștri în experiențe 
                memorabile prin deserturile noastre.
              </p>
              <p className={styles.paragraph}>
                Echipa noastră de cofetari experimentați lucrează cu dedicare pentru a crea 
                produse care nu doar că au un gust excepțional, dar și o prezentare impecabilă. 
                De la torturi personalizate pentru nunți și zile de naștere, până la prăjituri 
                fine pentru momentele de zi cu zi, fiecare desert este creat cu atenție la detalii.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.imageContainer}
            >
              <div className={styles.imagePlaceholder}>
                <span>🍰</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.valuesTitle}
          >
            Valorile noastre
          </motion.h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.valueCard}
              >
                <div className={styles.valueIcon} style={{ color: 'var(--color-primary)' }}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.galleryTitle}
          >
            Galerie
          </motion.h2>
          <Gallery />
        </div>
      </section>
    </div>
  )
}

