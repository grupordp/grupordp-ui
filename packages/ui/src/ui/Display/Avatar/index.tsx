import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { styles } from './styles'
import { VariantProps } from 'tailwind-variants'

export interface AvatarProps extends VariantProps<typeof styles> {
  imageLink: string
  userFallback: string
  className?: string
}

export function Avatar({
  size,
  imageLink,
  userFallback,
  className,
}: AvatarProps) {
  const componentStyles = styles({ size, className })

  return (
    <AvatarPrimitive.Root className={componentStyles}>
      <AvatarPrimitive.Image
        className="w-full h-full object-cover rounded-full"
        role="avatar"
        aria-label="avatar"
        alt="Foto de perfil do usuário"
        src={undefined ?? imageLink}
      />
      <AvatarPrimitive.AvatarFallback className="w-full h-full flex items-center justify-center rounded-full bg-gray-8 text-gray-3 font-medium">
        {userFallback}
      </AvatarPrimitive.AvatarFallback>
    </AvatarPrimitive.Root>
  )
}
