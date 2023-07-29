import { useEffect, useState } from 'react'
import config from '../config/config'
import { Forecast, Option } from '../interfaces/cities.interface'
// import withCities from '../mocks/with-cities-results.json'
// import withWeather from '../mocks/with-weather-results.json'
import { getData } from '../services/api'

const useWeather = () => {
  const [search, setSearch] = useState<string>('')
  const [options, setOptions] = useState<Option[]>([])
  const [city, setCity] = useState<Option | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [forecast, setForecast] = useState<Forecast | null>(null)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (value.startsWith(' ')) return
    setSearch(value)
    getCityInfo(value)
  }

  const getCityInfo = async (value: string) => {
    if (value.trim() === '') return
    try {
      const data = await getData(`${config.CITY_API}&q=${value.trim()}`)
      const dataNeeded = data.map((data: any) => ({
        name: data.name,
        lat: data.lat,
        lon: data.lon,
        country: data.country
      }))
      setOptions(dataNeeded)
    } catch (err) {
      setError((err as Error).message)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (city !== null && options.length > 0) {
      setCity(options[0])
      getWeatherInfo(options[0])
    } else if (city !== null) {
      getWeatherInfo(city)
    }
    setOptions([])
    setCity(null)
  }

  const onSelectOption = (option: Option) => {
    setCity(option)
    getWeatherInfo(option)
    setOptions([])
  }

  const getWeatherInfo = async (option: Option) => {
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
  }

  useEffect(() => {
    if (city !== null) {
      setSearch(city.name)
      setOptions([])
    }
    console.log(city)
  }, [city])

  return {
    search,
    options,
    forecast,
    handleSearch,
    handleSubmit,
    onSelectOption,
    isLoading,
    error
  }
}
export default useWeather
