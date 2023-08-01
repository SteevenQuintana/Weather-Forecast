import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Highlight from './Highlight'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />
  }
}))

const mockHighlight = {
  title: 'Title',
  img: 'img',
  description: 'description',
  unit: '%'
}

describe('Highlight', () => {
  it('should render successfully', () => {
    render(<Highlight {...mockHighlight} />)

    expect(screen.getByText(mockHighlight.title)).toBeInTheDocument()
    expect(screen.getByAltText(mockHighlight.description)).toBeInTheDocument()
    expect(screen.getByText(mockHighlight.description)).toBeInTheDocument()
    expect(screen.getByText(mockHighlight.unit)).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<Highlight {...mockHighlight} />)
    expect(container).toMatchSnapshot()
  })
})
