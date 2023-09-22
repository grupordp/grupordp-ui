import { tv } from 'tailwind-variants'

export const styles = tv({
  slots: {
    container: 'flex items-center justify-center rounded-full',
    box: 'flex items-center justify-center p-0',
    indicator:
      'data-[state="checked"]:animate-vertical-slide-in data-[state="unchecked"]:animate-vertical-slide-out',
  },
  variants: {
    variant: {
      default: {
        container: 'hover:bg-gray-4/[0.12]',
        box: 'rounded ring-2 data-[state="unchecked"]:ring-gray-4 data-[state="checked"]:ring-primary data-[state="checked"]:bg-primary data-[state="unchecked"]:bg-transparent',
        indicator: 'text-gray-0',
      },
    },
    size: {
      default: {
        container: 'w-9 h-9',
        box: 'w-4 h-4',
        indicator: 'w-4 h-4',
      },
    },
    isChecked: {
      true: {
        container: 'hover:bg-primary/[0.12]',
      },
    },
  },
})
