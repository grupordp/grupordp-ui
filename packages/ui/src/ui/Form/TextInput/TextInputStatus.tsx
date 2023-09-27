import '../../../styles/global.css'

import { XCircle, CheckCircle2 } from 'lucide-react'
import { VariantProps } from 'tailwind-variants'
import { styles } from './styles'

interface TextInputStatusProps extends VariantProps<typeof styles> {}

export function TextInputStatus({ error, large }: TextInputStatusProps) {
  const componentStyles = styles().status({ error, large })

  const StatusIcon = error ? XCircle : CheckCircle2

  if (error === undefined) {
    return null
  }

  return <StatusIcon className={componentStyles} />
}

TextInputStatus.displayName = 'Status'
