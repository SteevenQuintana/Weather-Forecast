'use client'
import useForecast from '@/hooks/useForecast'
import Forecast from '@/components/Forecast/Forecast'
import useSearch from '@/hooks/useSearch'
import { Option } from '@/interfaces/cities.interface'
import { useEffect, useState } from 'react'

export default function Page({ params }: { params: { slug: string } }) {
  const { getCityInfo } = useSearch()
  const { forecast, getWeatherInfo, error, isLoading } = useForecast()
  const [cityInfo, setCityInfo] = useState<Option>({
    name: '',
    country: '',
    lat: '',
    lon: ''
  })
  const splited = params.slug.split('_')

  useEffect(() => {
    async function fetchCityInfo() {
      if (splited.length >= 2) {
        setCityInfo({
          name: splited[0],
          country: splited[1],
          lat: splited[2],
          lon: splited[3]
        })
      } else {
        const fetchedCityInfo = await getCityInfo(splited[0])
        if (fetchedCityInfo) {
          setCityInfo({
            name: fetchedCityInfo.name,
            country: fetchedCityInfo.country,
            lat: fetchedCityInfo.lat,
            lon: fetchedCityInfo.lon
          })
        }
      }
    }
    fetchCityInfo()
  }, [params.slug])

  useEffect(() => {
    getWeatherInfo(cityInfo)
  }, [cityInfo])

  return (
    <>
      {forecast != null && (
        <section className='forecast-section'>
          {isLoading ? (
            <h2 className='loading'>Loading...</h2>
          ) : (
            <Forecast forecast={forecast} />
          )}
        </section>
      )}
      {error && <p>{error}</p>}
    </>
  )
}
