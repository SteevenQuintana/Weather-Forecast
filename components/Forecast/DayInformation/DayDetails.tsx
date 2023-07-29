import { useState } from 'react'
import { roundedTemp } from '@/helper/format'
import { ForecastProps } from '@/interfaces/cities.interface'
import classes from './DayDetails.module.css'

const DayDetails = ({ forecast }: ForecastProps) => {
  const [isCelsius, setIsCelsius] = useState(true)
  const handleTempType = () => setIsCelsius(!isCelsius)
  const tempType = isCelsius ? '°C' : '°F'
  const date = new Date()
  if (forecast === null) return
  return (
    <div className={classes.details}>
      <p className={classes.description}>{forecast.weather.description}</p>

      <div className={classes.temp}>
        <h3 className={classes.mainTemp}>
          {roundedTemp(forecast.main.temp, isCelsius)}
          <sup>{tempType}</sup>
        </h3>

        <p className={classes.boundaries}>
          <span>
            H: {roundedTemp(Math.ceil(forecast.main.temp_max), isCelsius)}{' '}
            <span>{tempType}</span>
          </span>
          <span>
            L: {roundedTemp(Math.floor(forecast.main.temp_min), isCelsius)}{' '}
            <span>{tempType}</span>
          </span>
        </p>
      </div>
      <p>
        {forecast.name}, <span>{forecast.country}</span>
      </p>
      <p>
        Feels like {roundedTemp(forecast.main.feels_like, isCelsius)}{' '}
        <span>{tempType}</span>
      </p>
      <p>{date.toLocaleDateString('EN', { dateStyle: 'long' })}</p>
      <div className={classes.btn}>
        <button type='button' onClick={handleTempType}>
          {isCelsius ? '°F' : '°C'}
        </button>
      </div>
    </div>
  )
}

export default DayDetails
