import '../../../styles/global.css'

import { ComponentProps, ReactNode } from 'react'
import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'

export interface ButtonRootProps
  extends VariantProps<typeof styles>,
    ComponentProps<'button'> {
  children: ReactNode
}

export function ButtonRoot({
  children,
  isStroke,
  size,
  variant,
  className,
  ...props
}: ButtonRootProps) {
  const componentStyles = styles().root({
    isStroke,
    size,
    variant,
    className,
  })

  return (
    <button className={componentStyles} {...props}>
      {children}
    </button>
  )
}
