import { ElementType, ReactNode } from 'react'
import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'

export interface HeadingProps extends VariantProps<typeof styles> {
  children: ReactNode
  as?: ElementType
  className?: string
}

export function Heading({
  children,
  as,
  size,
  color,
  alignment,
  className,
  weight,
}: HeadingProps) {
  const Component = as || 'h2'
  const componentStyles = styles({
    size,
    color,
    alignment,
    className,
    weight,
  })

  return (
    <Component className={componentStyles} role="heading" aria-label="heading">
      {children}
    </Component>
  )
}

Heading.displayName = 'Heading'
