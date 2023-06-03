import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { BackToTop } from './components/back-to-black'

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | José Filipe',
  },
  icons: [{ url: '/images/logo2.png' }],
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        {children}
      </body>
      <BackToTop />
    </html>
  )
}
