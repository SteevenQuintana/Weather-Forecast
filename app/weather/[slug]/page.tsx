'use client'
import useForecast from '@/hooks/useForecast'
import Forecast from '@/components/Forecast/Forecast'
import Loading from '../../loading'

export default function Page({ params }: { params: { slug: string } }) {
  const { forecast, error, isLoading } = useForecast(params.slug)

  if (isLoading) {
    return <Loading />
  }

  if (error.isError) {
    return <p>{error.message}</p>
  }

  return (
    <section>
      <Forecast forecast={forecast} />
    </section>
  )
}
