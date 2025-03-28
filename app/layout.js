import { Inter, Roboto_Condensed } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoCondensed = Roboto_Condensed({ 
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'LOGWEAR| Advanced Protection for Lumberjacks',
  description: 'Professional-grade protective jackets for lumberjacks. Engineered for safety, comfort, and durability in the toughest environments.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoCondensed.variable}`}>{children}</body>
    </html>
  )
}