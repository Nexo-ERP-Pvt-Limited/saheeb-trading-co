import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Saheeb Trading Co. | Surgical, Veterinary & Dental Instruments',
  description:
    'Saheeb Trading Co. is a leading manufacturer and exporter of high-quality surgical, veterinary, dental, and equestrian instruments from Sialkot, Pakistan.',
  keywords: [
    'surgical instruments',
    'veterinary instruments',
    'dental instruments',
    'equestrian supplies',
    'hoof knife',
    'Sialkot',
    'Pakistan',
    'Saheeb Trading',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/apple-icon.png', type: 'image/png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'Saheeb Trading Co. | Surgical, Veterinary & Dental Instruments',
    description:
      'Leading manufacturer and exporter of high-quality surgical, veterinary, dental, and equestrian instruments from Sialkot, Pakistan.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Saheeb Trading Co.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  )
}
