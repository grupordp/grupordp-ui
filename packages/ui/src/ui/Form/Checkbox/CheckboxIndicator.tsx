import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { VariantProps } from 'tailwind-variants'
import { styles } from './styles'

interface CheckboxIndicatorProps
  extends CheckboxPrimitive.CheckboxIndicatorProps,
    VariantProps<typeof styles> {}

export function CheckboxIndicator({
  size,
  variant,
  className,
  ...props
}: CheckboxIndicatorProps) {
  const componentStyles = styles().indicator({ className, size, variant })

  return (
    <CheckboxPrimitive.CheckboxIndicator
      asChild
      className={componentStyles}
      {...props}
    >
      <Check />
    </CheckboxPrimitive.CheckboxIndicator>
  )
}

CheckboxIndicator.displayName = 'Indicator'
