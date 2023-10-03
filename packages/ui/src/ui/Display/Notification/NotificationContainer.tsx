import { ReactNode } from 'react'

import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'

import { Text } from '../../../'

export interface NotificationContainerProps
  extends VariantProps<typeof styles> {
  children: ReactNode
  className?: string
  totalNotifications: number
  onReset?: () => void
}

export function NotificationContainer({
  children,
  className,
  totalNotifications,
  onReset,
}: NotificationContainerProps) {
  const { container, reset, header, content } = styles()

  return (
    <div className={container({ className })}>
      <header className={header()}>
        <Text as="span" color="gray-2" size="p4">
          {totalNotifications} notificações
        </Text>

        <button className={reset()} onClick={onReset}>
          Marcar como lida
        </button>
      </header>
      <div className={content()}>{children}</div>
    </div>
  )
}
