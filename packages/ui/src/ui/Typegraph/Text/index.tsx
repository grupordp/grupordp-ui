import { ElementType, ReactNode } from 'react'
import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'
import '../../../styles/global.css'

export interface TextProps extends VariantProps<typeof styles> {
  children: ReactNode
  as?: ElementType
  className?: string
}

export function Text({
  children,
  as,
  size,
  color,
  alignment,
  className,
  weight,
}: TextProps) {
  const Component = as || 'span'
  const componentStyles = styles({
    size,
    color,
    alignment,
    className,
    weight,
  })

  return (
    <Component className={componentStyles} role="text" aria-label="text">
      {children}
    </Component>
  )
}

Text.displayName = 'Text'
