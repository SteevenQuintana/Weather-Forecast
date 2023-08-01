import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'
import useSearch from '@/hooks/useSearch'

jest.mock('@/hooks/useSearch')

describe('Form Component', () => {
  it('should render the Form component correctly', () => {
    ;(useSearch as jest.Mock).mockReturnValue({
      handleSearch: jest.fn(),
      search: '',
      options: [],
      onSelectOption: jest.fn(),
      handleSubmit: jest.fn()
    })
    render(<Form />)
    expect(screen.getByText('Weather Forecast')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Washington D.C, Ankara...')
    ).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('should call handleSearch when the input value changes', async () => {
    const user = userEvent.setup()
    const mockedHandleSearch = jest.fn()
    ;(useSearch as jest.Mock).mockReturnValue({
      handleSearch: mockedHandleSearch,
      search: '',
      options: [],
      onSelectOption: jest.fn(),
      handleSubmit: jest.fn()
    })

    render(<Form />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    await user.type(input, 'New York')
    expect(mockedHandleSearch).toHaveBeenCalledTimes(8)
  })

  it('should call handleSubmit when the form is submitted', async () => {
    const user = userEvent.setup()
    const mockedHandleSubmit = jest.fn()
    ;(useSearch as jest.Mock).mockReturnValue({
      handleSearch: jest.fn(),
      search: '',
      options: [],
      onSelectOption: jest.fn(),
      handleSubmit: mockedHandleSubmit
    })

    render(<Form />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    await user.type(input, 'New York')

    const button = screen.getByRole('button', { name: 'Search' })

    await user.click(button)
    expect(mockedHandleSubmit).toHaveBeenCalled()
  })

  it('should render options correctly', () => {
    const options = [
      { name: 'Option 1', country: 'Country 1', lat: 1, lon: 1 },
      { name: 'Option 2', country: 'Country 2', lat: 2, lon: 2 }
    ]
    ;(useSearch as jest.Mock).mockReturnValue({
      handleSearch: jest.fn(),
      search: '',
      options,
      onSelectOption: jest.fn(),
      handleSubmit: jest.fn()
    })

    render(<Form />)

    const country1Elements = screen.getAllByText((_, element) => {
      const textContent = element?.textContent ?? ''
      return textContent.includes('Country 1')
    })

    expect(country1Elements.length).toBeGreaterThan(0)
    country1Elements.forEach((element) => {
      expect(element).toBeInTheDocument()
    })
  })

  it('should call onSelectOption when an option button is clicked', async () => {
    const user = userEvent.setup()
    const options = [{ name: 'Option 1', country: 'Country 1', lat: 1, lon: 1 }]
    const mockedOnSelectOption = jest.fn()
    ;(useSearch as jest.Mock).mockReturnValue({
      handleSearch: jest.fn(),
      search: '',
      options,
      onSelectOption: mockedOnSelectOption,
      handleSubmit: jest.fn()
    })

    render(<Form />)
    const optionButton = screen.getByRole('button', {
      name: 'Option 1, Country 1'
    })
    await user.click(optionButton)
    expect(mockedOnSelectOption).toHaveBeenCalledWith(options[0])
  })
})
