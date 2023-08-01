import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import DayInformation from './DayInformation'
import { Forecast } from '@/interfaces/cities.interface'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />
  }
}))

const mockForecast: Forecast = {
  name: 'City Name',
  country: 'Country Name',
  weather: {
    description: 'Sunny',
    main: 'Clear',
    icon: '01d'
  },
  sunrise: 92291,
  sunset: 91291,
  clouds: 91,
  main: {
    temp: 25,
    temp_max: 30,
    temp_min: 20,
    pressure: 1010,
    humidity: 60,
    feels_like: 26
  },
  wind: {
    speed: 5,
    deg: 90
  }
}
describe('DayInformation', () => {
  it('renders correctly with forecast data', () => {
    render(<DayInformation forecast={mockForecast} />)

    const img = screen.getByAltText('Sunny')
    expect(img).toHaveAttribute(
      'src',
      `https://openweathermap.org/img/wn/${mockForecast.weather.icon}@2x.png`
    )

    expect(screen.getByText("Today's information")).toBeInTheDocument()
    expect(screen.getByText('Sunny')).toBeInTheDocument()
    expect(screen.getByText('Country Name')).toBeInTheDocument()

    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('H: 30')).toBeInTheDocument()
    expect(screen.getByText('L: 20')).toBeInTheDocument()
    expect(screen.getByText('Feels like 26')).toBeInTheDocument()
    expect(screen.getByText('Change to °F')).toBeInTheDocument()
  })

  it('renders nothing when forecast data is null', () => {
    render(<DayInformation forecast={null} />)

    expect(screen.queryByText("Today's information")).toBeNull()
    expect(screen.queryByAltText('Sunny')).toBeNull()
    expect(screen.queryByText('Country Name')).toBeNull()

    expect(screen.queryByText('25')).toBeNull()
    expect(screen.queryByText('H: 30')).toBeNull()
    expect(screen.queryByText('L: 20')).toBeNull()
    expect(screen.queryByText('Feels like 26')).toBeNull()
    expect(screen.queryByText('Change to °F')).toBeNull()
  })
})
