import { ComponentProps, ElementType } from 'react'
import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'

interface NotificationIcon
  extends ComponentProps<'svg'>,
    VariantProps<typeof styles> {
  Icon: ElementType
}

export function NotificationIcon({
  Icon,
  className,
  ...props
}: NotificationIcon) {
  const componentStyles = styles().icon({ className })

  return (
    <div className="p-3 bg-primary/10 rounded-2xl after:content-[''] relative after:bg-primary after:w-[8px] after:h-[8px] after:rounded-full after:absolute after:top-0 after:right-0">
      <Icon className={componentStyles} {...props} />
    </div>
  )
}
