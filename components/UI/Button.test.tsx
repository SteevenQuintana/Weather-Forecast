import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('should render a button with correct children', () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole('button', {
      name: /Click me/i
    })

    expect(button).toBeInTheDocument()
  })

  it('should render a button with correct type attribute', () => {
    render(<Button type='submit'>Submit</Button>)
    const button = screen.getByText('Submit')
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('should call onClick function when the button is clicked', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    const button = screen.getByRole('button', {
      name: /Click me/i
    })
    button.click()
    expect(onClick).toHaveBeenCalled()
  })

  it('should match the snapshot', () => {
    const { container } = render(<Button>Click me</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
