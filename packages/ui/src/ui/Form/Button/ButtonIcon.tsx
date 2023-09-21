import '../../../styles/global.css'

import { ComponentProps, ElementType } from 'react'
import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'

export interface ButtonIconProps
  extends VariantProps<typeof styles>,
    ComponentProps<'svg'> {
  icon: ElementType
}

export function ButtonIcon({
  icon: Icon,
  size,
  className,
  ...props
}: ButtonIconProps) {
  const componentStyles = styles().icon({ size, className })

  return <Icon className={componentStyles} {...props} />
}
