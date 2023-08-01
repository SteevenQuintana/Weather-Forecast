import humidity from '@/public/assets/humidity.svg'
import wind from '@/public/assets/wind.svg'
import sunrise from '@/public/assets/sunrise.svg'
import sunset from '@/public/assets/sunset.svg'
import clouds from '@/public/assets/clouds.svg'
import pressure from '@/public/assets/pressure.svg'
import Highlight from './Highlight'

import { ForecastProps } from '@/interfaces/cities.interface'
import { getHour } from '@/helper/format'

const Highlights = ({ forecast }: ForecastProps) => {
  if (forecast === null) return
  return (
    <div className='h-full mx-4 md:mx-0 mb-8 text-center flex flex-col bg-[#3054b7ca] p-4 rounded-2xl dark:bg-[#3a4957cc]'>
      <h2 className='text-2md font-bold mb-4'>Today's Highlights</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3 h-full'>
        <Highlight
          title='Humidity'
          img={humidity}
          description={forecast.main.humidity}
          unit='%'
        />
        <Highlight
          title='Wind Speed'
          img={wind}
          description={forecast.wind.speed}
          unit='m/s'
        />
        <Highlight
          title='Clouds'
          img={clouds}
          description={forecast.clouds}
          unit='%'
        />
        <Highlight
          title='Sunrise'
          img={sunrise}
          description={getHour(forecast.sunrise)}
          unit='a.m.'
        />
        <Highlight
          title='Sunset'
          img={sunset}
          description={getHour(forecast.sunset)}
          unit='p.m.'
        />
        <Highlight
          title='Pressure'
          img={pressure}
          description={forecast.main.pressure}
          unit='hPa'
        />
      </div>
    </div>
  )
}

export default Highlights
