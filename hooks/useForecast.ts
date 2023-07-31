import config from '@/config/config'
import { Forecast, Option } from '@/interfaces/cities.interface'
import { getData } from '@/services/api'
import { useCallback, useEffect, useState } from 'react'
import useSearch from './useSearch'

const useForecast = (query: string) => {
  const [forecast, setForecast] = useState<Forecast | null>(null)
  const [error, setError] = useState({ isError: false, message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const { getCityInfo } = useSearch()

  const [cityInfo, setCityInfo] = useState<Option>({
    name: '',
    country: '',
    lat: '',
    lon: ''
  })

  const getWeatherInfo = useCallback(async (option: Option) => {
    setIsLoading(true)
    try {
      const data = await getData(
        `${config.WEATHER_API}&lat=${option.lat}&lon=${option.lon}`
      )

      const forecastInfo: Forecast = {
        name: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        clouds: data.clouds.all,
        main: data.main,
        weather: data.weather[0],
        wind: data.wind
      }

      setForecast(forecastInfo)
      setError({ isError: false, message: '' })
    } catch (err) {
      setError({ isError: true, message: (err as Error).message })
    } finally {
      setIsLoading(false)
    }
  }, [])

  const splited = query.split('_')

  const fetchCityInfo = async () => {
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

  useEffect(() => {
    fetchCityInfo()
  }, [query])

  useEffect(() => {
    if (cityInfo.name && cityInfo.lat && cityInfo.lon) getWeatherInfo(cityInfo)
  }, [cityInfo])

  return { forecast, error, isLoading }
}

export default useForecast
