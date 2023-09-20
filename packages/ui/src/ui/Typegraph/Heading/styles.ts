import { tv } from 'tailwind-variants'

export const styles = tv(
  {
    variants: {
      size: {
        h1: 'text-6xl leading-10',
        h2: 'text-5xl leading-9',
        h3: 'text-4xl leading-8',
        h4: 'text-3xl leading-7',
        h5: 'text-2xl leading-6',
      },
      color: {
        transparent: 'text-transparent',
        primary: 'text-primary',
        'primary-w50': 'text-primary-w50',
        'primary-w25': 'text-primary-w25',
        'primary-b10': 'text-primary-b10',
        'primary-b25': 'text-primary-b25',
        'primary-b50': 'text-primary-b50',

        warning: 'text-warning',
        'warning-w50': 'text-warning-w50',
        'warning-b10': 'text-warning-b10',
        'warning-b50': 'text-warning-b50',

        error: 'text-error',
        'error-w50': 'text-error-w50',
        'error-b10': 'text-error-b10',
        'error-b50': 'text-error-b50',

        info: 'text-info',
        'info-w50': 'text-info-w50',
        'info-b10': 'text-info-b10',
        'info-b50': 'text-info-b50',

        'gray-0': 'text-gray-0',
        'gray-1': 'text-gray-1',
        'gray-2': 'text-gray-2',
        'gray-3': 'text-gray-3',
        'gray-4': 'text-gray-4',
        'gray-5': 'text-gray-5',
        'gray-6': 'text-gray-6',
        'gray-7': 'text-gray-7',
        'gray-8': 'text-gray-8',
        'gray-9': 'text-gray-9',
        'gray-7-b10': 'text-gray-7-b10',
        'gray-8-b10': 'text-gray-8-b10',
      },
      weight: {
        regular: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
      alignment: {
        center: 'text-center',
        left: 'text-left',
        right: 'text-right',
      },
    },
  },
  {
    responsiveVariants: ['2xl', 'lg', 'md', 'sm', 'xl'],
  },
)
