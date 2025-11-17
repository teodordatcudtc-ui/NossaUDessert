import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meniu - Nossa U Dessert | Produse și Prețuri',
  description: 'Explorează meniul complet al Nossa U Dessert. Torturi personalizate, prăjituri artizanale, cofetărie fină și multe altele. Prețuri și detalii despre fiecare produs.',
}

export default function MeniuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

