import { tv } from 'tailwind-variants'

export const styles = tv(
  {
    base: 'rounded-full inline-block overflow-hidden shadow-black/40 shadow-md',
    variants: {
      size: {
        xs: 'w-9 h-9',
        sm: 'w-11 h-11',
        md: 'w-14 h-14',
        lg: 'w-16 h-16',
      },
    },
  },
  {
    responsiveVariants: ['2xl', 'lg', 'md', 'sm', 'xl'],
  },
)
