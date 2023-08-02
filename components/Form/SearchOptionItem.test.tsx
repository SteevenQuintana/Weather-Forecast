import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import SearchOptionItem from './SearchOptionItem'
import { Option } from '@/interfaces/cities.interface'

const mockOption: Option = {
  name: 'test',
  lat: '1',
  lon: '2',
  country: 'country_test'
}

const mockOnSelectOption = jest.fn()

describe('SearchOptionItem', () => {
  it('should render successfully', () => {
    render(
      <SearchOptionItem
        option={mockOption}
        onSelectOption={mockOnSelectOption}
      />
    )

    const buttonElement = screen.getByRole('button', {
      name: `${mockOption.name}, ${mockOption.country}`
    })
    expect(buttonElement).toBeInTheDocument()
  })

  it('should call onSelectOption function when the button is clicked', () => {
    render(
      <SearchOptionItem
        option={mockOption}
        onSelectOption={mockOnSelectOption}
      />
    )

    const buttonElement = screen.getByRole('button', {
      name: `${mockOption.name}, ${mockOption.country}`
    })
    fireEvent.click(buttonElement)

    expect(mockOnSelectOption).toHaveBeenCalledTimes(1)
    expect(mockOnSelectOption).toHaveBeenCalledWith(mockOption)
  })
})
