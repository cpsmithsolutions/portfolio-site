import Script from 'next/script'
import './globals.css'
import { Inter, Roboto} from 'next/font/google'


// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Clark Smith Full Stack Developer',
  description: 'The Portfoli site of Clark Smith, Full Stack Developer',
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
