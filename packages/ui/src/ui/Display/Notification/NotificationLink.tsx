import { VariantProps } from 'tailwind-variants'
import { Button, Text } from '../../../'
import { styles } from './styles'

interface NotificationLinkProps extends VariantProps<typeof styles> {
  linkTitle: string
  linkCover: string
  hasDownload?: boolean
  className?: string
}

export function NotificationLink({
  linkCover,
  linkTitle,
  hasDownload,
  className,
}: NotificationLinkProps) {
  const componentStyles = styles().link({ className })
  return (
    <div className={componentStyles}>
      <div className="w-12 h-11 rounded-md overflow-hidden">
        <img
          src={linkCover}
          alt="imagem"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-1">
        <Text color="gray-2" size="p5" weight="regular">
          {linkTitle}
        </Text>
        {hasDownload && (
          <Button.Root
            variant="primary"
            size="sm"
            className="rounded-[8px] text-xs h-6"
          >
            Baixar arquivo
          </Button.Root>
        )}
      </div>
    </div>
  )
}
