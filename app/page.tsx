'use client'
import Forecast from '@/components/Forecast/Forecast'
import useWeather from '@/hooks/useWeather'

export default function Home() {
  const { forecast, isLoading, error } = useWeather()
  console.log(forecast)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {/* {forecast !== null && error === null && (
        <section className='forecast-section'>
          {isLoading ? (
            <h2 className='loading'>Loading...</h2>
          ) : (
            <Forecast forecast={forecast} />
          )}
        </section>
      )}
      {error && <p>{error}</p>} */}
    </main>
  )
}
