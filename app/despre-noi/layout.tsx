import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Despre noi - Nossa U Dessert | Povestea noastră',
  description: 'Află mai multe despre Nossa U Dessert. Pasiunea noastră pentru deserturi artizanale, ingrediente premium și experiențe gustative unice.',
}

export default function DespreNoiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

