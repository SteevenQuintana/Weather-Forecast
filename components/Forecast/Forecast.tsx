import { ForecastProps } from '../../interfaces/cities.interface'
import Highlights from './Highlights/Highlights'
import DayInformation from './DayInformation/DayInformation'

const Forecast = ({ forecast }: ForecastProps) => (
  <div
    className='flex flex-col md:grid sm:grid-cols-[30%_70%] gap-4 mx-2 md:pr-4'
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
