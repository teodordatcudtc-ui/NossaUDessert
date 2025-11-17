'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'
import styles from './page.module.css'

export default function ContactPage() {
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
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.subtitle}
          >
            Suntem aici pentru tine! Contactează-ne pentru comenzi sau întrebări.
          </motion.p>
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
              className={styles.info}
            >
              <h2 className={styles.sectionTitle}>Date de contact</h2>
              
              <div className={styles.contactItem}>
                <div className={styles.icon}>📞</div>
                <div>
                  <h3 className={styles.contactTitle}>Telefon</h3>
                  <a href="tel:0754042187" className={styles.contactLink}>
                    0754 042 187
                  </a>
                  <a 
                    href="tel:0754042187" 
                    className={`btn btn-primary ${styles.callButton}`}
                  >
                    Sună acum
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.icon}>📍</div>
                <div>
                  <h3 className={styles.contactTitle}>Adresă</h3>
                  <a
                    href="https://www.google.com/maps?q=Drumul+Gura+Făgetului+40,+București+032601"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    Drumul Gura Făgetului 40<br />
                    București 032601
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.icon}>📱</div>
                <div>
                  <h3 className={styles.contactTitle}>Social Media</h3>
                  <a
                    href="https://www.instagram.com/nossaudessert/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    @nossaudessert
                  </a>
                </div>
              </div>

              <div className={styles.hours}>
                <h3 className={styles.contactTitle}>Program</h3>
                <p className={styles.hoursText}>
                  Luni - Vineri: 09:00 - 19:00<br />
                  Sâmbătă: 09:00 - 18:00<br />
                  Duminică: 10:00 - 16:00
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.formContainer}
            >
              <h2 className={styles.sectionTitle}>Trimite-ne un mesaj</h2>
              <ContactForm />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.mapContainer}
          >
            <h2 className={styles.sectionTitle}>Ne găsești aici</h2>
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6397.7419240159825!2d26.196281342509504!3d44.415312078156525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fd2cc5cd6c11%3A0x7cbed5901d881f26!2sNossa%20U%20Dessert!5e0!3m2!1sen!2sro!4v1763382036516!5m2!1sen!2sro"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația Nossa U Dessert"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

