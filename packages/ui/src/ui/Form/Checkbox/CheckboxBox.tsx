import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'
import { ReactNode } from 'react'

export interface CheckboxBoxProps
  extends VariantProps<typeof styles>,
    CheckboxPrimitive.CheckboxProps {
  children: ReactNode
}

export function CheckboxBox({
  children,
  size,
  variant,
  className,
  ...props
}: CheckboxBoxProps) {
  const componentStyles = styles().box({ className, size, variant })
  return (
    <CheckboxPrimitive.Root
      className={componentStyles}
      role="checkbox"
      aria-label="checkbox"
      {...props}
    >
      {children}
    </CheckboxPrimitive.Root>
  )
}

CheckboxBox.displayName = 'Box'
