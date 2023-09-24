import { VariantProps } from 'tailwind-variants'
import { styles } from './styles'

import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof styles> {}

const TextInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputInputProps
> = ({ variant, className, large, ...props }, ref) => {
  const componentStyles = styles().input({ className, variant, large })

  return (
    <input
      className={componentStyles}
      autoComplete="off"
      {...props}
      ref={ref}
    />
  )
}

export const TextInputInput = forwardRef(TextInputBase)

TextInputInput.displayName = 'Input'
