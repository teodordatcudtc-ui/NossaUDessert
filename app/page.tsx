import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import Reviews from '@/components/Reviews'
import AboutPreview from '@/components/AboutPreview'
import styles from './page.module.css'

export const metadata = {
  title: 'Acasă - Nossa U Dessert | Cofetărie Premium București',
  description: 'Descoperă magia dulce a Nossa U Dessert. Cofetărie premium din București cu deserturi artizanale, torturi personalizate și prăjituri de excepție.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Reviews />
      <AboutPreview />
    </>
  )
}

