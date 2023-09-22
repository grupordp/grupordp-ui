import { tv } from 'tailwind-variants'

export const styles = tv(
  {
    slots: {
      root: 'flex justify-center items-center w-full px-5',
      input:
        'w-full bg-transparent flex-1 border-0 outline-none focus:ring-0 px-3',
      icon: '',
      status: '',
      passwordAction: '',
    },
    variants: {
      variant: {
        default: {
          root: 'bg-gray-8 text-gray-3 focus-within:ring-2 ring-gray-7',
          input: 'placeholder:text-gray-4',
          icon: 'text-gray-4',
          status: 'text-gray-4',
          passwordAction: 'text-gray-4',
        },
      },
      large: {
        sm: {
          root: 'h-10 rounded-xl',
          input: 'text-sm leading-2 placeholder:text-sm placeholder:leading-2',
          icon: 'w-3.5 h-3.5',
          status: 'w-3.5 h-3.5',
          passwordAction: 'w-3.5 h-3.5',
        },
        md: {
          root: 'h-12 rounded-[0.875rem]',
          input: 'text-md leading-3 placeholder:text-md placeholder:leading-3',
          icon: 'w-4 h-4',
          status: 'w-4 h-4',
          passwordAction: 'w-4 h-4',
        },
        lg: {
          root: 'h-14 rounded-2xl',
          input: 'text-lg leading-4 placeholder:text-lg placeholder:leading-4',
          icon: 'w-[1.125rem] h-[1.125rem]',
          status: 'w-[1.125rem] h-[1.125rem]',
          passwordAction: 'w-[1.125rem] h-[1.125rem]',
        },
      },
      error: {
        true: {
          root: 'ring-2 ring-error-b10',
          input: '',
          icon: '',
          status: 'text-error-b10',
        },
        false: {
          status: 'text-primary',
        },
      },
    },
  },
  {
    responsiveVariants: ['2xl', 'lg', 'md', 'sm', 'xl'],
  },
)
