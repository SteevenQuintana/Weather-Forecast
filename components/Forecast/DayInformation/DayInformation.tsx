import { ForecastProps } from '@/interfaces/cities.interface'
import DayDetails from './DayDetails'
import classes from './DayInformation.module.css'
import Image from 'next/image'

const DayInformation = ({ forecast }: ForecastProps) => {
  if (forecast === null) return
  return (
    <div className={classes.info}>
      <h2>Today's information</h2>
      <div className={classes.img__container}>
        <Image
          src={`https://openweathermap.org/img/wn/${forecast.weather.icon}@2x.png`}
          alt={forecast.weather.description}
          width={100}
          height={100}
        />
      </div>
      <div className={classes.generalInfo}>
        <DayDetails forecast={forecast} />
      </div>
    </div>
  )
}

export default DayInformation
