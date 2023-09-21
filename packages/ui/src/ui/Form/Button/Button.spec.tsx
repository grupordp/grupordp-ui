import { render, screen } from '@testing-library/react'
import { Button } from '.'
import { Rocket } from 'lucide-react'

describe('Button Component', () => {
  it('should render without crashing', () => {
    const { getByText, container } = render(
      <Button.Root>
        Test Button
        <Button.Icon icon={Rocket} />
      </Button.Root>,
    )
    expect(getByText('Test Button')).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('should render with tailwind variant styles', () => {
    const { getByText, container } = render(
      <Button.Root size="md" variant="primary">
        Button Default
        <Button.Icon icon={Rocket} size="md" />
      </Button.Root>,
    )

    const renderedText = getByText('Button Default')

    expect(renderedText).toHaveClass(
      'text-base rounded-[0.875rem] h-12 bg-primary border-primary enabled:hover:bg-primary-b10 text-gray-0',
    )

    expect(container.querySelector('svg')).toHaveClass('w-4 h-4')
  })

  it('should accept and render with a custom className', () => {
    const { getByText, container } = render(
      <Button.Root className="p-4 ml-4" size="lg" variant="secondary">
        Button Secondary
        <Button.Icon className="p-3 m-3" icon={Rocket} size="md" />
      </Button.Root>,
    )

    const renderedText = getByText('Button Secondary')

    expect(renderedText).toHaveClass(
      'bg-gray-8 border-gray-8 enabled:hover:bg-gray-8-b10 text-gray-4 text-lg rounded-2xl h-14 p-4 ml-4',
    )

    expect(container.querySelector('svg')).toHaveClass('w-4 h-4 p-3 m-3')
  })

  it('should override tailwind variant styles', () => {
    const { getByText, container } = render(
      <Button.Root className="text-gray-1" size="md" variant="secondary">
        Overridden Styles
        <Button.Icon className="w-3 h-3" icon={Rocket} size="md" />
      </Button.Root>,
    )

    const renderedText = getByText('Overridden Styles')

    expect(renderedText).toHaveClass(
      'text-base rounded-[0.875rem] h-12 bg-gray-8 border-gray-8 enabled:hover:bg-gray-8-b10 text-gray-1',
    )

    expect(container.querySelector('svg')).toHaveClass('w-3 h-3')
  })

  it('should add breakpoints on styles', () => {
    const { container } = render(
      <Button.Root size={{ initial: 'md', sm: 'sm' }} variant="secondary">
        Adding breakpoints
        <Button.Icon icon={Rocket} size={{ initial: 'md', sm: 'sm' }} />
      </Button.Root>,
    )

    const renderedText = 'Adding breakpoints'

    expect(screen.getByText(renderedText)).toHaveClass(
      'bg-gray-8 border-gray-8 enabled:hover:bg-gray-8-b10 text-gray-4 text-base rounded-[0.875rem] h-12 sm:text-sm sm:rounded-xl sm:h-10',
    )
    expect(container.querySelector('svg')).toHaveClass(
      'w-4 h-4 sm:w-3.5 sm:h-3.5',
    )
  })
})
