import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonRootProps } from '@rdpgrupo/ui'
import { Rocket } from 'lucide-react'

export default {
    title: 'Form/Button',
    component: Button.Root,
    args: {
        children: 'Entrar',
        variant: 'primary',
        size: 'md',
    },
    argTypes: {
        icon: {
            table: {
                disable: true,
            },
        },
        children: {
            name: 'text',
            defaultValue: 'Entrar',
            description: 'Define o texto do botão'
        },
        size: {
            options: ['sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
            description: 'Define o tamanho do botão',
            defaultValue: 'md'
        },
        variant: {
            options: ['primary', 'secondary', 'tertiary', 'quaternary'],
            description: 'Define o estilo do botão',
            defaultValue: 'primary',
            control: { type: 'select' },
        },
        isStroke: {
            options: [true, false],
            control: { type: 'select' },
            defaultValue: false,
            description: 'Define se o botão é do tipo Stroke'
        },
        className: {
            description: 'Esta propriedade permite sobrepor estilos do componente',
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'Componente de botão para interações do usuário com a aplicação.',
            },
        },
    },
    tags: ['autodocs'],
} as Meta<ButtonRootProps>

export const DefaultButton: StoryObj<ButtonRootProps> = {
    render: (args) => (
        <Button.Root {...args}>
            Entrar
            <Button.Icon icon={Rocket} size={args.size} />
        </Button.Root>
    )
}

export const NoIcon: StoryObj<ButtonRootProps> = {}

export const StrokeAppearence: StoryObj<ButtonRootProps> = {
    args: {
        isStroke: true
    }
}

export const Disabled: StoryObj<ButtonRootProps> = {
    args: {
        disabled: true
    }
}

export const SecondaryVariant: StoryObj<ButtonRootProps> = {
    args: {
        variant: 'secondary'
    },
    render: (args) => (
        <Button.Root {...args}>
            Entrar
            <Button.Icon icon={Rocket} size={args.size} />
        </Button.Root>
    )
}

export const SecondaryNoIcon: StoryObj<ButtonRootProps> = {
    args: {
        variant: 'secondary',
    }
}

export const SecondaryStroke: StoryObj<ButtonRootProps> = {
    args: {
        variant: 'secondary',
        isStroke: true
    }
}

export const SecondaryDisabled: StoryObj<ButtonRootProps> = {
    args: {
        variant: 'secondary',
        disabled: true
    }
}

export const TertiaryVariant: StoryObj<ButtonRootProps> = {
    args: {
        variant: 'tertiary'
    }
}

export const TertiaryStroke: StoryObj<ButtonRootProps> = {
    args: {
        variant: 'tertiary',
        isStroke: true,
    }
}