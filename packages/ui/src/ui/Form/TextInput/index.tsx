import { TextInputRoot, TextInputRootProps } from './TextInputRoot'
import { TextInputInput, TextInputInputProps } from './TextInputInput'
import { TextInputIcon, TextInputIconProps } from './TextInputIcon'
import { TextInputActions } from './TextInputActions'
import { TextInputStatus } from './TextInputStatus'
import { PasswordAction } from './PasswordAction'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
  Actions: TextInputActions,
  Status: TextInputStatus,
  PasswordAction,
}

export type { TextInputRootProps, TextInputInputProps, TextInputIconProps }
