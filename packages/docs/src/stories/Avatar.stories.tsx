import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@rdpgrupo/ui'

export default {
    title: 'Display/Avatar',
    component: Avatar,
    args: {
        imageLink: 'http://github.com/yale1995.png',
        size: 'md',
        userFallback: 'YH'
    },
    tags: ['autodocs'],
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const Fallback: StoryObj<AvatarProps> = {
    args: {
        imageLink: undefined,
    }
}