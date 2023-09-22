import { render, screen, fireEvent } from '@testing-library/react'
import { Checkbox } from '.'

describe('Checkbox Component', () => {
  it('should render with default props', () => {
    render(
      <Checkbox.Root variant="default" size="default">
        <Checkbox.Box variant="default" size="default">
          <Checkbox.Indicator variant="default" size="default" />
        </Checkbox.Box>
      </Checkbox.Root>,
    )

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('should render with default styles', () => {
    const { container } = render(
      <Checkbox.Root variant="default" size="default">
        <Checkbox.Box variant="default" size="default">
          <Checkbox.Indicator variant="default" size="default" />
        </Checkbox.Box>
      </Checkbox.Root>,
    )

    expect(container.querySelector('div')).toHaveClass(
      'flex items-center justify-center rounded-full w-9 h-9',
    )
    expect(container.querySelector('button[role="checkbox"]')).toHaveClass(
      'flex items-center justify-center p-0 w-4 h-4',
    )

    fireEvent.click(screen.getByRole('checkbox'))

    expect(container.querySelector('svg')).toHaveClass(
      'w-4 h-4 text-gray-0 data-[state="checked"]:animate-vertical-slide-in data-[state="unchecked"]:animate-vertical-slide-out',
    )
  })

  it('should be checked when clicked', () => {
    render(
      <Checkbox.Root variant="default" size="default">
        <Checkbox.Box variant="default" size="default">
          <Checkbox.Indicator variant="default" size="default" />
        </Checkbox.Box>
      </Checkbox.Root>,
    )

    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked()
  })

  it('should override tailwind variant styles', () => {
    const { container } = render(
      <Checkbox.Root variant="default" size="default">
        <Checkbox.Box
          variant="default"
          size="default"
          className='data-[state="unchecked"]:bg-red-500 data-[state="checked"]:bg-green-500'
        >
          <Checkbox.Indicator
            variant="default"
            size="default"
            className="text-red-500"
          />
        </Checkbox.Box>
      </Checkbox.Root>,
    )

    expect(container.querySelector('button[role="checkbox"]')).toHaveClass(
      'data-[state="unchecked"]:bg-red-500 data-[state="checked"]:bg-green-500',
    )

    expect(container.querySelector('button[role="checkbox"]')).not.toHaveClass(
      'bg-transparent',
    )

    expect(container.querySelector('button[role="checkbox"]')).not.toHaveClass(
      'bg-primary',
    )

    fireEvent.click(screen.getByRole('checkbox'))

    expect(container.querySelector('svg')).toHaveClass('text-red-500')
    expect(container.querySelector('svg')).not.toHaveClass('text-gray-0')
  })
})
