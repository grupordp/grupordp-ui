import * as SeparatorPrimitive from '@radix-ui/react-separator'

export interface SeparatorProps extends SeparatorPrimitive.SeparatorProps {
  className?: string
}

export function Separator({
  className = 'bg-gray-7 data-[orientation=horizontal]:h-px',
  ...props
}: SeparatorProps) {
  return <SeparatorPrimitive.Root className={className} {...props} />
}
