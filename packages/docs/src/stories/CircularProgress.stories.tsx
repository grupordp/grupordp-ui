import type { StoryObj, Meta } from '@storybook/react'
import { CircularProgress, CircularProgressProps } from '@rdpgrupo/ui'

export default {
    title: 'Display/CircularProgress',
    component: CircularProgress,
    args: {
        progress: 50,
        size: 'sm'
    },
    tags: ['autodocs'],
} as Meta<CircularProgressProps>

export const Default: StoryObj<CircularProgressProps> = {}

export const Medium: StoryObj<CircularProgressProps> = {
    args: {
        progress: 75,
        size: 'md'
    }
}

export const Large: StoryObj<CircularProgressProps> = {
    args: {
        progress: 23,
        size: 'lg'
    }
}

