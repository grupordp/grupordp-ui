import { VariantProps } from 'tailwind-variants'
import { styles } from './styles'
import { ComponentProps, ReactNode } from 'react'

interface CheckboxRootProps
  extends VariantProps<typeof styles>,
    ComponentProps<'div'> {
  children: ReactNode
}

export function CheckboxRoot({
  children,
  size,
  variant,
  className,
  isChecked,
}: CheckboxRootProps) {
  const componentStyles = styles().container({
    className,
    size,
    variant,
    isChecked,
  })

  return <div className={componentStyles}>{children}</div>
}

CheckboxRoot.displayName = 'Root'
