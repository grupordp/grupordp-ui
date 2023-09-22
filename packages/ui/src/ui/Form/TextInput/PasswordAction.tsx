import { Eye, EyeOff } from 'lucide-react'
import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'
import { ComponentProps } from 'react'

interface PasswordActionProps
  extends VariantProps<typeof styles>,
    ComponentProps<'button'> {
  isPasswordHidden: boolean
}

export function PasswordAction({
  large,
  isPasswordHidden,
  className,
  ...props
}: PasswordActionProps) {
  const componentStyles = styles().passwordAction({ large, className })

  const Icon = isPasswordHidden ? Eye : EyeOff

  return (
    <button {...props}>
      <Icon className={componentStyles} />
    </button>
  )
}
