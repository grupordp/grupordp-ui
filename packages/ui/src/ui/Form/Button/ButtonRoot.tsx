import '../../../styles/global.css'

import { ComponentProps, ReactNode, forwardRef } from 'react'
import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'

export interface ButtonRootProps
  extends VariantProps<typeof styles>,
    ComponentProps<'button'> {
  children: ReactNode
}

export const ButtonRoot = forwardRef<HTMLButtonElement, ButtonRootProps>(
  ({ children, isStroke, size, variant, className, ...props }, ref) => {
    const componentStyles = styles().root({
      isStroke,
      size,
      variant,
      className,
    })

    return (
      <button className={componentStyles} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

ButtonRoot.displayName = 'Root'
