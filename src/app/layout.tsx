'use client'
import './globals.css'
import { Roboto } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Clark Smith Full Stack Developer',
  description: 'The Portfolio site of Clark Smith, Full Stack Developer',
  creator: 'Clark Smith',
  openGraph: {
    title: 'Clark Smith Full Stack Developer',
    description: 'The Portfolio site of Clark Smith, Full Stack Developer',
    url: 'https://www.clarksmith.dev',
    siteName: 'Clark Smith Full Stack Developer',
    images: [
      {
        url: '/images/preview.jpg',
        width: 800,
        height: 600,
      },
      {
        url: '/images/preview.jpg',
        width: 1800,
        height: 1600,
        alt: 'preview image',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
