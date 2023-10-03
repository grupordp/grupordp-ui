import type { StoryObj, Meta } from '@storybook/react'
import { Separator, SeparatorProps } from '@rdpgrupo/ui'

export default {
    title: 'Display/Separator',
    component: Separator,
    args: {
        orientation: 'horizontal',
        className: 'bg-gray-7 data-[orientation=horizontal]:h-px'
    },
    tags: ['autodocs'],
} as Meta<SeparatorProps>

export const Default: StoryObj<SeparatorProps> = {}