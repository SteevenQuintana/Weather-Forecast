import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Option } from '@/interfaces/cities.interface'
import SearchOptions from './SearchOptions'

const mockOptions: Option[] = [
  {
    name: 'Sample City 1',
    country: 'Sample Country 1',
    lat: 1.234,
    lon: 5.678
  },
  {
    name: 'Sample City 2',
    country: 'Sample Country 2',
    lat: 9.876,
    lon: 3.21
  }
]

const mockOnSelectOption = jest.fn()

describe('SearchOptions', () => {
  it('should render SearchOptions correctly', () => {
    render(
      <SearchOptions
        options={mockOptions}
        onSelectOption={mockOnSelectOption}
      />
    )

    const searchOptionItems = screen.getAllByRole('listitem')
    expect(searchOptionItems).toHaveLength(mockOptions.length)
  })

  it("should call 'onSelectOption' when clicking on a search option", () => {
    render(
      <SearchOptions
        options={mockOptions}
        onSelectOption={mockOnSelectOption}
      />
    )

    const searchOptionItems = screen.getAllByRole('listitem')

    const buttonElement = searchOptionItems[0].querySelector('button')
    if (buttonElement) {
      fireEvent.click(buttonElement)

      expect(mockOnSelectOption).toHaveBeenCalledTimes(1)
      expect(mockOnSelectOption).toHaveBeenCalledWith(mockOptions[0])
    }
  })
})
