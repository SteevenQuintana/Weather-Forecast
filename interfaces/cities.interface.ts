export interface Option {
  name: string
  lat: number | string
  lon: number | string
  country: string
}

export interface Forecast {
  name: string
  country: string
  sunrise: number
  sunset: number
  clouds: number
  main: ForecastInfo
  weather: WeatherInfo
  wind: WindInfo
}

interface ForecastInfo {
  temp: number
  temp_max: number
  temp_min: number
  pressure: number
  humidity: number
  feels_like: number
}

interface WeatherInfo {
  description: string
  main: string
  icon: string
}

interface WindInfo {
  speed: number
  deg: number
}

export interface ForecastProps {
  forecast: Forecast | null
}
