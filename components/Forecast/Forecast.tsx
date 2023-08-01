import { ForecastProps } from '../../interfaces/cities.interface'
import Highlights from './Highlights/Highlights'
import DayInformation from './DayInformation/DayInformation'

const Forecast = ({ forecast }: ForecastProps) => (
  <div
    className='flex flex-col sm:grid sm:grid-cols-[40%_60%] gap-4'
    data-testid='forecast'
  >
    <article>
      <DayInformation forecast={forecast} />
    </article>
    <article>
      <Highlights forecast={forecast} />
    </article>
  </div>
)

export default Forecast
