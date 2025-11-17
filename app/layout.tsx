import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nossa U Dessert - Cofetărie Premium București | Deserturi Artizanale',
  description: 'Descoperă magia dulce a Nossa U Dessert. Cofetărie premium din București cu deserturi artizanale, torturi personalizate și prăjituri de excepție. Ingrediente premium, gust autentic.',
  keywords: 'cofetărie București, deserturi artizanale, torturi personalizate, prăjituri premium, cofetărie fină, Nossa U Dessert, dulciuri București, torturi de nuntă, torturi de ziua nașterii',
  authors: [{ name: 'Nossa U Dessert' }],
  openGraph: {
    title: 'Nossa U Dessert - Cofetărie Premium București',
    description: 'Descoperă magia dulce a Nossa U Dessert. Deserturi artizanale cu ingrediente premium.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'Nossa U Dessert',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://nossaudessert.ro" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              "name": "Nossa U Dessert",
              "image": "https://nossaudessert.ro/og-image.jpg",
              "description": "Cofetărie premium din București cu deserturi artizanale",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Drumul Gura Făgetului 40",
                "addressLocality": "București",
                "postalCode": "032601",
                "addressCountry": "RO"
              },
              "telephone": "+40754042187",
              "url": "https://nossaudessert.ro",
              "sameAs": [
                "https://www.instagram.com/nossaudessert/"
              ],
              "priceRange": "$$",
              "servesCuisine": "Desserts"
            })
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

