import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'

import DayDetails from './DayDetails'
import { Forecast } from '@/interfaces/cities.interface'

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

describe('DayDetails', () => {
  it('renders correctly with Celsius temperature', () => {
    render(<DayDetails forecast={mockForecast} />)

    expect(screen.getByText('Sunny')).toBeInTheDocument()
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('H: 30')).toBeInTheDocument()
    expect(screen.getByText('L: 20')).toBeInTheDocument()
    expect(screen.getByText('Country Name')).toBeInTheDocument()
    expect(screen.getByText('Feels like 26')).toBeInTheDocument()
    expect(screen.getByText('Change to °F')).toBeInTheDocument()
  })

  it('displays Fahrenheit temperature after clicking the temperature change button', () => {
    render(<DayDetails forecast={mockForecast} />)

    const changeTempButton = screen.getByText('Change to °F')
    fireEvent.click(changeTempButton)

    expect(screen.getByText('Sunny')).toBeInTheDocument()
    expect(screen.getByText('77')).toBeInTheDocument()
    expect(screen.getByText('H: 86')).toBeInTheDocument()
    expect(screen.getByText('L: 68')).toBeInTheDocument()
    expect(screen.getByText('Country Name')).toBeInTheDocument()
    expect(screen.getByText('Feels like 79')).toBeInTheDocument()
    expect(screen.getByText('Change °C')).toBeInTheDocument()
  })
})
