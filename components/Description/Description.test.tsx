import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Description from './Description'

describe('Description', () => {
  it('should render the Description component', () => {
    const { getByText } = render(<Description />)

    expect(
      getByText('Welcome to the Weather Forecast Widget!')
    ).toBeInTheDocument()

    expect(
      getByText(
        /Use this widget to check the weather forecast for any city in the world/
      )
    ).toBeInTheDocument()
    expect(
      getByText(
        /Alternatively, you can directly enter the city name in the URL following this format/
      )
    ).toBeInTheDocument()
    expect(
      getByText(
        /Once you've entered a city name and clicked the "Search" button or pressed Enter/
      )
    ).toBeInTheDocument()
  })
})
