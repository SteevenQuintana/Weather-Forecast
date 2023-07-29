import { ForecastProps } from '../../interfaces/cities.interface'
import Highlights from './Highlights/Highlights'
import DayInformation from './DayInformation/DayInformation'
import classes from './Forecast.module.css'

const Forecast = ({ forecast }: ForecastProps) => {
  return (
    <div className={classes.forecast}>
      <article>
        <DayInformation forecast={forecast} />
      </article>
      <article>
        <Highlights forecast={forecast} />
      </article>
    </div>
  )
}

export default Forecast
