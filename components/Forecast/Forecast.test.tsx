import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Forecast from './Forecast'
import { Forecast as ForecastInterface } from '@/interfaces/cities.interface'

const mockForecast: ForecastInterface = {
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

describe('Forecast', () => {
  it('should render successfully', () => {
    render(<Forecast forecast={mockForecast} />)
    expect(screen.getByText(mockForecast.country)).toBeInTheDocument()
    expect(
      screen.getByText(mockForecast.weather.description)
    ).toBeInTheDocument()
  })

  it('should snapshots the Forecast component', () => {
    const { container } = render(<Forecast forecast={mockForecast} />)
    expect(container).toMatchSnapshot()
  })
})
