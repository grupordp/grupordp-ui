import { tv } from 'tailwind-variants'

export const styles = tv({
  slots: {
    container:
      'w-[19.5rem] rounded-[32px] border-[1px] border-gray-5 bg-gray-8/70 backdrop-blur-[23px] overflow-hidden animate-vertical-slide-in shadow-2xl shadow-black z-10 scrollbar-none',
    header: 'flex justify-between items-center px-5 py-6 bg-gray-7',
    reset: 'text-primary text-sm hover:underline',
    content: 'max-h-[434px] overflow-auto scrollbar-none',
    textContainer: 'flex flex-col gap-2',
    item: 'flex items-start gap-4 p-3 border-t-[1px] border-gray-5',
    link: 'flex items-start justify-between gap-3 mt-2 border-[1px] border-gray-6 rounded-2xl p-3',
    icon: 'text-primary w-5 h-5',
  },
})
