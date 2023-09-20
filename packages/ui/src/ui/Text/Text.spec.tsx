import { render, screen } from '@testing-library/react'
import { Text } from '.'

describe('Text Component', () => {
  it('should apply styles passed via props', () => {
    const { getByText } = render(
      <Text size="p3" color="error" alignment="center" weight="bold">
        Styled Text
      </Text>,
    )

    const renderedText = getByText('Styled Text')

    expect(renderedText).toHaveClass(
      'text-base leading-4 text-error text-center font-bold',
    )
  })

  it('should apply styles via className', () => {
    const { getByText } = render(
      <Text className="p-4" size="p3" color="gray-0" weight="semibold">
        Add padding
      </Text>,
    )

    const renderedText = getByText('Add padding')

    expect(renderedText).toHaveClass(
      'text-base leading-4 text-gray-0 font-semibold p-4',
    )
  })

  it('should override default styles with className', () => {
    const { getByText } = render(
      <Text className="text-gray-1" size="p3" color="gray-0" weight="semibold">
        Overridden Styles
      </Text>,
    )

    const renderedText = getByText('Overridden Styles')

    expect(renderedText).toHaveClass(
      'text-base leading-4 text-gray-1 font-semibold',
    )
  })

  it('should render using the tag provided via the "as" prop', () => {
    render(
      <Text as="label" size="p3" color="gray-0" weight="semibold">
        Rendering not default tag
      </Text>,
    )

    const renderedText = 'Rendering not default tag'

    expect(screen.getByText(renderedText).tagName).toBe('LABEL')
  })

  it('should add breakpoints on styles', () => {
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
      'text-base leading-4 sm:text-sm sm:leading-3 text-gray-0 sm:text-gray-9 font-bold sm:font-normal',
    )
  })
})
