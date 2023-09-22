import { ReactNode } from 'react'

interface TextInputActionsProps {
  children: ReactNode
}

export function TextInputActions({ children }: TextInputActionsProps) {
  return <div className="flex gap-2">{children}</div>
}
