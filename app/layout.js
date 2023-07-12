import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Site for Kevin Dietmeyer',
  description: 'I am a software engineer. I build amazing things.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-gray-900'}>{children}</body>
    </html>
  )
}
