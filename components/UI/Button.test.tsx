import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('should render a button', () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole('button', {
      name: /Click me/i
    })

    expect(button).toBeInTheDocument()
  })
})
