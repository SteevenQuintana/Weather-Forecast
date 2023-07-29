import humidity from '@/public/assets/humidity.svg'
import wind from '@/public/assets/wind.svg'
import sunrise from '@/public/assets/sunrise.svg'
import sunset from '@/public/assets/sunset.svg'
import clouds from '@/public/assets/clouds.svg'
import pressure from '@/public/assets/pressure.svg'
import Highlight from './Highlight'

import classes from './Highlights.module.css'
import { ForecastProps } from '@/interfaces/cities.interface'
import { getHour } from '@/helper/format'

const Highlights = ({ forecast }: ForecastProps) => {
  if (forecast === null) return
  return (
    <div className={classes.highlights}>
      <h2>Today's Highlights</h2>
      <div className={classes.container}>
        <Highlight
          title='Humidity'
          img={humidity}
          description={forecast.main.humidity.toString()}
          unit='%'
        />
        <Highlight
          title='Wind Speed'
          img={wind}
          description={forecast.wind.speed.toString()}
          unit='m/s'
        />
        <Highlight
          title='Clouds'
          img={clouds}
          description={forecast.clouds.toString()}
          unit='%'
        />
        <Highlight
          title='Sunrise'
          img={sunrise}
          description={getHour(forecast.sunrise).toString()}
          unit='a.m.'
        />
        <Highlight
          title='Sunset'
          img={sunset}
          description={getHour(forecast.sunset).toString()}
          unit='p.m.'
        />
        <Highlight
          title='Pressure'
          img={pressure}
          description={forecast.main.pressure.toString()}
          unit='hPa'
        />
      </div>
    </div>
  )
}

export default Highlights
