'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './AboutPreview.module.css'

export default function AboutPreview() {
  return (
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
            <h2 className={styles.title}>Despre Nossa U Dessert</h2>
            <p className={styles.description}>
              La Nossa U Dessert, transformăm pasiunea pentru dulciuri în artă culinară. 
              Fiecare desert este creat cu atenție la detalii, folosind doar ingrediente 
              premium și rețete tradiționale îmbunătățite cu un twist modern.
            </p>
            <p className={styles.description}>
              Ne mândrim cu faptul că oferim experiențe gustative unice, de la torturi 
              personalizate pentru momentele tale speciale, până la prăjituri fine care 
              transformă orice zi într-o sărbătoare.
            </p>
            <Link href="/despre-noi" className="btn btn-secondary">
              Află mai multe
            </Link>
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
  )
}

