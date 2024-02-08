import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ActualNavbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diamondback Innovators',
  description: 'A University of Maryland Organization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" /></head>
      
      <body className={inter.className}>
        <ActualNavbar/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
