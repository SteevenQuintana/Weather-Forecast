import { ForecastProps } from '@/interfaces/cities.interface'
import DayDetails from './DayDetails'
import Image from 'next/image'

const DayInformation = ({ forecast }: ForecastProps) => {
  if (forecast === null) return
  return (
    <div className='h-full flex flex-col justify-between items-center text-center bg-[#3054b7ca] p-4 rounded-2xl dark:bg-[#3a4957cc] mx-4 md:mx-0'>
      <h2 className='text-2md font-bold'>Today's information</h2>
      <div className='h-[140px] flex w-[200px] overflow-hidden object-cover'>
        <Image
          src={`https://openweathermap.org/img/wn/${forecast.weather.icon}@2x.png`}
          alt={forecast.weather.description}
          width={100}
          height={100}
          className='mx-auto my-0 scale-[1.7]'
          priority
        />
      </div>
      <div className='max-h-full h-[340px] w-full'>
        <DayDetails forecast={forecast} />
      </div>
    </div>
  )
}

export default DayInformation
