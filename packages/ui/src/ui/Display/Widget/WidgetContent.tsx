import * as Popover from '@radix-ui/react-popover'

import { ReactNode } from 'react'

interface WidgetContentProps extends Popover.PopperContentProps {
  children: ReactNode
}

export function WidgetContent({ children, ...props }: WidgetContentProps) {
  return (
    <Popover.Portal>
      <Popover.Content {...props}>{children}</Popover.Content>
    </Popover.Portal>
  )
}
