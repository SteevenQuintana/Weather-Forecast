'use client'
import useForecast from '@/hooks/useForecast'
import Forecast from '@/components/Forecast/Forecast'
import useSearch from '@/hooks/useSearch'
import Loading from '../../loading'

export default function Page({ params }: { params: { slug: string } }) {
  const { forecast, error, isLoading } = useForecast(params.slug)
  const { error: searchError } = useSearch()

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className='forecast-section'>
          {searchError.isError && <p>{searchError.message}</p>}

          {error.isError && <p>{error.message}</p>}

          <Forecast forecast={forecast} />
        </section>
      )}
    </>
  )
}
