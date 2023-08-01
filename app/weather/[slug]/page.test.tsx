import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import useForecast from '@/hooks/useForecast'
import Page from './page'
import { Forecast } from '@/interfaces/cities.interface'

jest.mock('@/hooks/useForecast')

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

describe('Page', () => {
  it('should render Loading component when data is loading', () => {
    ;(useForecast as jest.Mock).mockReturnValue({
      forecast: null,
      error: { isError: false, message: '' },
      isLoading: true
    })
    const params = { slug: '' }
    render(<Page params={params} />)
    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })

  it('should render error message when there is an error', () => {
    const error = { isError: true, message: 'Error message' }
    ;(useForecast as jest.Mock).mockReturnValue({
      forecast: null,
      error,
      isLoading: false
    })
    const params = { slug: '' }
    render(<Page params={params} />)
    expect(screen.getByText(error.message)).toBeInTheDocument()
  })

  it('should render forecast when there is no error', () => {
    ;(useForecast as jest.Mock).mockReturnValue({
      forecast: mockForecast,
      error: { isError: false, message: '' },
      isLoading: false
    })
    const params = { slug: '' }
    render(<Page params={params} />)
    expect(screen.getByTestId('forecast')).toBeInTheDocument()
  })
})
