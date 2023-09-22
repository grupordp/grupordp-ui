import { ComponentProps, ElementType } from 'react'
import { VariantProps } from 'tailwind-variants'
import { styles } from './styles'

export interface TextInputIconProps
  extends ComponentProps<'svg'>,
    VariantProps<typeof styles> {
  icon: ElementType
}

export function TextInputIcon({
  icon: Icon,
  className,
  variant,
  large,
  error,
}: TextInputIconProps) {
  const componentStyles = styles().icon({ className, variant, large, error })

  return <Icon className={componentStyles} />
}

TextInputIcon.displayName = 'Icon'
