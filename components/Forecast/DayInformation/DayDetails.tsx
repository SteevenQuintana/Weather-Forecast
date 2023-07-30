'use client'
import { useState } from 'react'
import { roundedTemp } from '@/helper/format'
import { ForecastProps } from '@/interfaces/cities.interface'
import Button from '@/components/UI/Button'

const DayDetails = ({ forecast }: ForecastProps) => {
  const [isCelsius, setIsCelsius] = useState(true)
  const handleTempType = () => setIsCelsius(!isCelsius)
  const tempType = isCelsius ? '°C' : '°F'

  if (forecast === null) return
  return (
    <div className='h-full flex flex-col justify-between'>
      <p className='capitalize italic'>{forecast.weather.description}</p>

      <div className='flex flex-col'>
        <h3 className='text-[4rem]'>
          {roundedTemp(forecast.main.temp, isCelsius)}
          <sup className='text-[2rem] font-normal'>{tempType}</sup>
        </h3>

        <p className='flex justify-center gap-4'>
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

      <div className='flex justify-end mr-8'>
        <Button onClick={handleTempType} className='rounded-[100px]'>
          {isCelsius ? '°F' : '°C'}
        </Button>
      </div>
    </div>
  )
}

export default DayDetails
