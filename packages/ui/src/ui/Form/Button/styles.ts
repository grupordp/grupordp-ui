import { tv } from 'tailwind-variants'

export const styles = tv(
  {
    slots: {
      root: 'w-full flex items-center justify-center gap-2.5 font-medium border-[1.5px] disabled:opacity-40 duration-300',
      icon: '',
    },
    variants: {
      size: {
        sm: {
          root: 'text-sm rounded-xl h-10',
          icon: 'w-3.5 h-3.5',
        },
        md: {
          root: 'text-base rounded-[0.875rem] h-12',
          icon: 'w-4 h-4',
        },
        lg: {
          root: 'text-lg rounded-2xl h-14',
          icon: 'w-[1.125rem] h-[1.125rem]',
        },
        xl: {
          root: 'text-xl rounded-2xl h-14',
          icon: 'w-5 h-5',
        },
      },
      variant: {
        primary: {
          root: 'bg-primary border-primary enabled:hover:bg-primary-b10 text-gray-0',
        },
        secondary: {
          root: 'bg-gray-8 border-gray-8 enabled:hover:bg-gray-8-b10 text-gray-4',
        },
        tertiary: {
          root: 'bg-gray-7 border-gray-7 enabled:hover:bg-gray-7-b10 text-gray-4',
        },
      },
      isStroke: {
        true: {
          root: 'bg-transparent',
        },
      },
    },
  },
  {
    responsiveVariants: ['2xl', 'lg', 'md', 'sm', 'xl'],
  },
)
