import { render, screen } from '@testing-library/react'
import { Heading } from '.'

describe('Heading Component', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<Heading>Test Heading</Heading>)
    expect(getByText('Test Heading')).toBeInTheDocument()
  })

  it('should render with tailwind variant styles', () => {
    const { getByText } = render(
      <Heading size="h3" color="error" alignment="center" weight="bold">
        Styled Text
      </Heading>,
    )

    const renderedText = getByText('Styled Text')

    expect(renderedText).toHaveClass(
      'text-4xl leading-8 text-error font-bold text-center',
    )
  })

  it('should accept and render with a custom className', () => {
    const { getByText } = render(
      <Heading className="p-4" size="h3" color="gray-0" weight="semibold">
        Add padding
      </Heading>,
    )

    const renderedText = getByText('Add padding')

    expect(renderedText).toHaveClass(
      'text-4xl leading-8 text-gray-0 font-semibold p-4',
    )
  })

  it('should override tailwind variant styles', () => {
    const { getByText } = render(
      <Heading
        className="text-gray-1"
        size="h3"
        color="gray-0"
        weight="semibold"
      >
        Overridden Styles
      </Heading>,
    )

    const renderedText = getByText('Overridden Styles')

    expect(renderedText).toHaveClass(
      'text-4xl leading-8 font-semibold text-gray-1',
    )
  })

  it('should render with a custom element', () => {
    render(
      <Heading as="h1" size="h3" color="gray-0" weight="semibold">
        Rendering not default tag
      </Heading>,
    )

    const renderedText = 'Rendering not default tag'

    expect(screen.getByText(renderedText).tagName).toBe('H1')
  })

  it('should render with responsive breakpoints', () => {
    render(
      <Heading
        as="label"
        size={{ initial: 'h3', sm: 'h4' }}
        color={{ initial: 'gray-0', sm: 'gray-9' }}
        weight={{ initial: 'bold', sm: 'regular' }}
      >
        Adding breakpoints on styles
      </Heading>,
    )

    const renderedText = 'Adding breakpoints on styles'

    expect(screen.getByText(renderedText)).toHaveClass(
      'sm:text-3xl sm:leading-7 text-4xl leading-8 sm:text-gray-9 text-gray-0 sm:font-normal font-bold',
    )
  })
})
