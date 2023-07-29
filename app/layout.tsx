'use client'
import Form from '@/components/Form/Form'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import useWeather from '@/hooks/useWeather'
import Forecast from '@/components/Forecast/Forecast'

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
  const {
    search,
    options,
    forecast,
    handleSearch,
    handleSubmit,
    onSelectOption,
    isLoading,
    error
  } = useWeather()
  return (
    <html lang='en'>
      <body
        className={
          inter.className +
          'flex min-h-screen flex-col items-center justify-between p-24'
        }
      >
        <Form
          search={search}
          options={options}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
          onSelectOption={onSelectOption}
        />
        {forecast !== null && error === null && (
          <section className='forecast-section'>
            {isLoading ? (
              <h2 className='loading'>Loading...</h2>
            ) : (
              <Forecast forecast={forecast} />
            )}
          </section>
        )}
        {error && <p>{error}</p>}

        {children}
      </body>
    </html>
  )
}
