import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import SWRegister from './sw-register'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quran Mood Finder - Islamic Guidance Based on Your Emotions',
  description: 'Find Quran verses, surahs, tafsir, and duas based on your emotional state',
  manifest: '/manifest.json',
  themeColor: '#1e293b',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Quran Mood Finder',
  },
  icons: {
    icon: '/icon-192.png',
    apple: '/icon-192.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <SWRegister />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

