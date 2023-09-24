import type { StoryObj, Meta } from '@storybook/react'
import { Checkbox, CheckboxBoxProps } from '@rdpgrupo/ui/src/client-components'

import React, { useState } from 'react'

export default {
    title: 'Form/Checkbox',
    component: Checkbox.Box,
    args: {
        variant: 'default',
        size: 'default',
        isChecked: false
    },
    argTypes: {
        variant: {
            options: ['default'],
            control: { type: 'select' },
            description: 'Define os estilos do componente',
            defaultValue: 'default',
          },
          size: {
            options: ['default'],
            control: { type: 'select' },
            description: 'Define os tamanhos do componente',
            defaultValue: 'default',
          },
          isChecked: {
            options: [true, false],
            control: { type: 'select' },
            description: 'Propriedade aplicada somente ao elemento de container',
            defaultValue: false,
          },
    },
    tags: ['autodocs'],

} as Meta<CheckboxBoxProps>

export const Default: StoryObj<CheckboxBoxProps> = {
    args: {},
    render: (args) => {
        const [isChecked, setIsChecked] = useState(false)
        return  (
            <Checkbox.Root variant={args.variant} size={args.size} isChecked={isChecked}>
                <Checkbox.Box 
                    {...args} 
                    onCheckedChange={() => setIsChecked(state => !state)}
                >
                    <Checkbox.Indicator variant={args.variant} size={args.size} />
                </Checkbox.Box>
            </Checkbox.Root>
        )
    }
}