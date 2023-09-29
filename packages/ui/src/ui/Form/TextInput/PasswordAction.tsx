import '../../../styles/global.css'

import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'
import { ComponentProps } from 'react'

import { IconEyeRegular, IconEyeCrossedRegular } from '../../Icons'

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

  const Icon = isPasswordHidden ? IconEyeRegular : IconEyeCrossedRegular

  return (
    <button {...props}>
      <Icon className={componentStyles} />
    </button>
  )
}

PasswordAction.displayName = 'PasswordAction'
