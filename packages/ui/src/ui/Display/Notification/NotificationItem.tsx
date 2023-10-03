import { ReactNode } from 'react'
import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'

export interface NotificationItemProps extends VariantProps<typeof styles> {
  children: ReactNode
  className?: string
}

export function NotificationItem({
  children,
  className,
}: NotificationItemProps) {
  const componentStyles = styles().item({ className })
  return <div className={componentStyles}>{children}</div>
}
