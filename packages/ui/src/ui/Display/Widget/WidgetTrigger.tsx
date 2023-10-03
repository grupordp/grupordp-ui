import * as Popover from '@radix-ui/react-popover'
import { ReactNode } from 'react'

interface WidgetTriggerProps extends Popover.PopoverTriggerProps {
  children: ReactNode
}

export function WidgetTrigger({ children, ...props }: WidgetTriggerProps) {
  return <Popover.Trigger {...props}>{children}</Popover.Trigger>
}
