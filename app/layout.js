import { Inter, Roboto_Condensed } from 'next/font/google'
import './globals.css'
import InstallPrompt from '../components/installprompt'

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
  title: 'LOGWEAR | Advanced Protection for Lumberjacks',
  description: 'Professional-grade protective jackets for lumberjacks. Engineered for safety, comfort, and durability in the toughest environments.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'LOGWEAR'
  }
}

export const viewport = {
  themeColor: '#ff6b35',
  width: 'device-width',
  initialScale: 1,
  userScalable: false
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ff6b35" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className={`${inter.variable} ${robotoCondensed.variable}`}>
        {children}
        <InstallPrompt />
        <script src="/register-sw.js" defer></script>
      </body>
    </html>
  )
}