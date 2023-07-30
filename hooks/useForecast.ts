import config from '@/config/config'
import { Forecast, Option } from '@/interfaces/cities.interface'
import { getData } from '@/services/api'
import { useCallback, useState } from 'react'

const useForecast = () => {
  const [forecast, setForecast] = useState<Forecast | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const getWeatherInfo = useCallback(async (option: Option) => {
    if (!option.lat || !option.lon) return
    try {
      setIsLoading(true)
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
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { getWeatherInfo, forecast, isLoading, error }
}

export default useForecast
