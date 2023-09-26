import '../../../styles/global.css'

import { ComponentProps, ReactNode } from 'react'
import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'

export interface TextInputRootProps
  extends ComponentProps<'div'>,
    VariantProps<typeof styles> {
  children: ReactNode
}

export function TextInputRoot({
  children,
  className,
  variant,
  large,
  error,
  ...props
}: TextInputRootProps) {
  const componentStyles = styles().root({ className, variant, large, error })

  return (
    <div className={componentStyles} {...props}>
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'Root'
