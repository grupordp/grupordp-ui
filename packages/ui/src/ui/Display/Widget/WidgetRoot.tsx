import * as Popover from '@radix-ui/react-popover'
import { ReactNode } from 'react'

interface WidgetRootProps extends Popover.PopoverProps {
  children: ReactNode
}

export function WidgetRoot({ children, ...props }: WidgetRootProps) {
  return <Popover.Root {...props}>{children}</Popover.Root>
}
