const config = {
  CITY_API: `${process.env.NEXT_PUBLIC_BASE_URL}/geo/1.0/direct?limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}&`,
  WEATHER_API: `${process.env.NEXT_PUBLIC_BASE_URL}/data/2.5/weather?exclude=minutely&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}&`
}

export default config
