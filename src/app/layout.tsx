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
        url: 'https://clarksmith.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmrg9gspwlszz%2F7lPe1ziYbXKC1JBCEja3lG%2F5449926b85a176382fdbc2e9a3ab85b5%2Fprofile-pic-2.jpeg&w=256&q=75',
        width: 600,
        height: 600,
      },
      {
        url: 'https://clarksmith.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmrg9gspwlszz%2F7lPe1ziYbXKC1JBCEja3lG%2F5449926b85a176382fdbc2e9a3ab85b5%2Fprofile-pic-2.jpeg&w=256&q=75',
        width: 1600,
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
