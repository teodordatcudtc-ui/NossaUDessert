import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Nossa U Dessert | Ne găsești aici',
  description: 'Contactează Nossa U Dessert. Telefon: 0754 042 187. Adresă: Drumul Gura Făgetului 40, București 032601. Trimite-ne un mesaj sau sună-ne acum!',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

