import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Form from '@/components/Form/WeatherForm'
import ToasterProvider from '@/providers/TotasterProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather Forecast',
  description: 'Get real-time weather updates and location-specific forecasts.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`min-h-screen pt-8 ${inter.className}`}>
        <ToasterProvider />
        <Form />
        {children}
      </body>
    </html>
  )
}
