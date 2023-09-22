import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Mail } from 'lucide-react'
import { TextInput } from '.'
import { useState } from 'react'

describe('TextInput Component', () => {
  it('should render with default props', () => {
    render(
      <TextInput.Root large="md" variant="default" error={undefined}>
        <TextInput.Input
          placeholder="Digite seu email"
          large="md"
          variant="default"
          error={undefined}
        />
      </TextInput.Root>,
    )

    expect(screen.getByPlaceholderText('Digite seu email')).toBeInTheDocument()
  })

  it('should render with an icon', () => {
    const { container } = render(
      <TextInput.Root large="md" variant="default" error={undefined}>
        <TextInput.Icon icon={Mail} />
        <TextInput.Input placeholder="Digite seu email" />
      </TextInput.Root>,
    )

    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('should render with tailwind variant styles', () => {
    const { container } = render(
      <TextInput.Root large="md" variant="default" error={undefined}>
        <TextInput.Icon icon={Mail} large="md" variant="default" />
        <TextInput.Input
          placeholder="Digite seu email"
          variant="default"
          large="md"
        />
      </TextInput.Root>,
    )

    expect(container.querySelector('div')).toHaveClass(
      'flex justify-center items-center w-full px-5 bg-gray-8 text-gray-3 focus-within:ring-2 ring-gray-7 h-12 rounded-[0.875rem]',
    )

    expect(container.querySelector('svg')).toHaveClass('w-4 h-4 text-gray-4')
    expect(container.querySelector('input')).toHaveClass(
      'w-full bg-transparent flex-1 border-0 outline-none focus:ring-0 px-3 placeholder:text-gray-4 text-md leading-3 placeholder:text-md placeholder:leading-3',
    )
  })

  it('should render in error state', () => {
    const { container } = render(
      <TextInput.Root large="md" variant="default" error={true}>
        <TextInput.Icon icon={Mail} large="md" variant="default" />
        <TextInput.Input placeholder="Digite seu email" />
        <TextInput.Actions>
          <TextInput.Status large="md" variant="default" error={true} />
        </TextInput.Actions>
      </TextInput.Root>,
    )

    expect(container.querySelector('div')).toHaveClass(
      'flex justify-center items-center w-full px-5 bg-gray-8 text-gray-3 focus-within:ring-2 ring-2 ring-error-b10 h-12 rounded-[0.875rem]',
    )

    expect(container.querySelector('.text-error-b10')).toBeInTheDocument()
  })

  it('should override tailwind variant styles', () => {
    const { container } = render(
      <TextInput.Root
        className="bg-red-500"
        large="md"
        variant="default"
        error={true}
      >
        <TextInput.Icon
          className="text-blue-300"
          icon={Mail}
          large="md"
          variant="default"
        />
        <TextInput.Input placeholder="Digite seu email" />
        <TextInput.Actions>
          <TextInput.Status large="md" variant="default" error={true} />
        </TextInput.Actions>
      </TextInput.Root>,
    )

    expect(container.querySelector('div')).toHaveClass(
      'flex justify-center items-center w-full px-5 text-gray-3 focus-within:ring-2 h-12 rounded-[0.875rem] ring-2 ring-error-b10 bg-red-500 bg-red-500',
    )
    expect(container.querySelector('svg.text-blue-300')).toBeInTheDocument()
    expect(container.querySelector('svg.text-gray-4')).not.toBeInTheDocument()
  })

  it('should toggle password visibility', async () => {
    function TestComponent() {
      const [isPasswordHidden, setIsPasswordHidden] = useState(true)

      return (
        <TextInput.Root large="md" variant="default" error={true}>
          <TextInput.Icon icon={Mail} large="md" variant="default" />
          <TextInput.Input
            placeholder="Digite sua senha"
            type={isPasswordHidden ? 'password' : 'text'}
          />
          <TextInput.Actions>
            <TextInput.PasswordAction
              isPasswordHidden={isPasswordHidden}
              onClick={() => setIsPasswordHidden(!isPasswordHidden)}
              large="md"
              variant="default"
            />
            <TextInput.Status large="md" variant="default" error={true} />
          </TextInput.Actions>
        </TextInput.Root>
      )
    }

    render(<TestComponent />)

    const input = screen.getByPlaceholderText('Digite sua senha')
    expect(input).toHaveAttribute('type', 'password')

    fireEvent.click(screen.getByRole('button'))

    await waitFor(() => {
      expect(input).toHaveAttribute('type', 'text')
    })

    fireEvent.click(screen.getByRole('button'))

    await waitFor(() => {
      expect(input).toHaveAttribute('type', 'password')
    })
  })
})
