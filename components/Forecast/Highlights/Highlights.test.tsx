import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Forecast } from '@/interfaces/cities.interface'
import Highlights from './Highlights'

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

describe('Highlights', () => {
  it('should render the Highlights component', () => {
    render(<Highlights forecast={mockForecast} />)

    expect(screen.getByText("Today's Highlights")).toBeInTheDocument()
    expect(screen.getByText('Humidity')).toBeInTheDocument()
    expect(screen.getByText('Wind Speed')).toBeInTheDocument()
    expect(screen.getByText('a.m.')).toBeInTheDocument()
  })

  it('should snapshots the Highlights component', () => {
    const { container } = render(<Highlights forecast={mockForecast} />)
    expect(container).toMatchSnapshot()
  })
})
