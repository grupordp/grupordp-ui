import { ReactNode } from 'react'
import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'

interface NotificationTextContainerProps extends VariantProps<typeof styles> {
  children: ReactNode
  className?: string
}

export function NotificationTextContainer({
  children,
  className,
}: NotificationTextContainerProps) {
  const componentStyles = styles().textContainer({ className })
  return <div className={componentStyles}>{children}</div>
}
