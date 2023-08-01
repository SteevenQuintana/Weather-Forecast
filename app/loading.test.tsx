import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Loading from './loading'

describe('loading', () => {
  it('should match snapshot', () => {
    const { container } = render(<Loading />)
    expect(container).toMatchSnapshot()
  })
})
