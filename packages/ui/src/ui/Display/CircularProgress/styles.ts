import { tv } from 'tailwind-variants'

export const styles = tv({
  slots: {
    root: 'relative bg-opacity-23 bg-gray-9/30 rounded-full backdrop-blur-[23px]',
    text: 'font-semibold text-gray-0',
  },

  variants: {
    size: {
      lg: {
        root: 'w-32 h-32',
        text: 'text-4xl',
      },

      md: {
        root: 'w-20 h-20',
        text: 'text-xl',
      },

      sm: {
        root: 'w-10 h-10',
        text: 'text-[0.625rem]',
      },
    },
  },
})
