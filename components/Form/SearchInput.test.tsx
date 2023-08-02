import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchInput from './SearchInput'

const mockHandleSearch = jest.fn()

describe('SearchInput', () => {
  it('should render successfully SearchInput component', () => {
    render(<SearchInput search='' handleSearch={mockHandleSearch} />)

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it("should call handleSearch function when the input's value changes", async () => {
    const user = userEvent.setup()
    render(<SearchInput search='' handleSearch={mockHandleSearch} />)

    const input = screen.getByRole('textbox')

    await user.type(input, 'New York')
    expect(mockHandleSearch).toHaveBeenCalledTimes(8)
  })

  it('should match snapshot', () => {
    const { container } = render(
      <SearchInput search='' handleSearch={mockHandleSearch} />
    )
    expect(container).toMatchSnapshot()
  })
})
