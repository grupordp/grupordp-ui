import { render, screen } from '@testing-library/react'
import { Text } from '.'

describe('Text Component', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<Text>Test Text</Text>)
    expect(getByText('Test Text')).toBeInTheDocument()
  })

  it('should render with tailwind variant styles', () => {
    const { getByText } = render(
      <Text size="p3" color="error" alignment="center" weight="bold">
        Styled Text
      </Text>,
    )

    expect(getByText('Styled Text')).toHaveClass(
      'text-base leading-3 text-error text-center font-bold',
    )
  })

  it('should accept and render with a custom className', () => {
    const { getByText } = render(
      <Text className="p-4" size="p3" color="gray-0" weight="semibold">
        Add padding
      </Text>,
    )

    const renderedText = getByText('Add padding')

    expect(renderedText).toHaveClass(
      'text-base leading-3 text-gray-0 font-semibold p-4',
    )
  })

  it('should override tailwind variant styles', () => {
    const { getByText } = render(
      <Text className="text-gray-1" size="p3" color="gray-0" weight="semibold">
        Overridden Styles
      </Text>,
    )

    expect(getByText('Overridden Styles')).toHaveClass(
      'text-base leading-3 text-gray-1 font-semibold',
    )
  })

  it('should render with a custom element', () => {
    render(
      <Text as="label" size="p3" color="gray-0" weight="semibold">
        Rendering not default tag
      </Text>,
    )

    const renderedText = 'Rendering not default tag'

    expect(screen.getByText(renderedText).tagName).toBe('LABEL')
  })

  it('should render with responsive breakpoints', () => {
    render(
      <Text
        as="label"
        size={{ initial: 'p3', sm: 'p4' }}
        color={{ initial: 'gray-0', sm: 'gray-9' }}
        weight={{ initial: 'bold', sm: 'regular' }}
      >
        Adding breakpoints on styles
      </Text>,
    )

    const renderedText = 'Adding breakpoints on styles'

    expect(screen.getByText(renderedText)).toHaveClass(
      'text-base leading-3 sm:text-sm sm:leading-2 text-gray-0 sm:text-gray-9 font-bold sm:font-normal',
    )
  })
})
