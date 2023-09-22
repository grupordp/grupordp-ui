import type { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputInputProps } from '@rdpgrupo/ui'
import { EyeIcon, Lock, Mail } from 'lucide-react'

import React, { useState } from 'react'

export default {
    title: 'Form/TextInput',
    component: TextInput.Input,
    args: {
        variant: 'default',
        large: 'md'
    },
    parameters: {
        docs: {
            description: {
              component: 'Component para entrada de dado do usuário em formato de texto.',
            },
          },
    },
    
    argTypes: {
        large: {
            description: 'Define o tamanho do componente',
            defaultValue: 'md',
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' }
        },
        variant: {
            description: 'Define o estilo do componente: background e bordas, por exemplo',
            defaultValue: 'default',
            options: ['default'],
            control: { type: 'select' }
        },
        error: {
            description: 'Define estado de erro',
            defaultValue: false,
            options: [true, false],
            control: { type: 'select' }
        }
    },
    tags: ['autodocs'],
  } as Meta<TextInputInputProps>

  export const Default: StoryObj<TextInputInputProps> = {
    render: (args) => (
        <TextInput.Root {...args}>
            <TextInput.Icon icon={Mail} variant={args.variant} large={args.large} error={args.error}/>
            <TextInput.Input placeholder='Digite seu email' {...args}/>
        </TextInput.Root>
    )
  }

  export const Small: StoryObj<TextInputInputProps> = {
    args: {
        large: 'sm'
    },
    render: (args) => (
        <TextInput.Root {...args}>
            <TextInput.Icon icon={Mail} variant={args.variant} large={args.large} error={args.error}/>
            <TextInput.Input placeholder='Digite seu email' {...args}/>
        </TextInput.Root>
    )
  }

  export const Medium: StoryObj<TextInputInputProps> = {
    args: {
        large: 'md'
    },
    render: (args) => (
        <TextInput.Root {...args}>
            <TextInput.Icon icon={Mail} variant={args.variant} large={args.large} error={args.error}/>
            <TextInput.Input placeholder='Digite seu email' {...args}/>
        </TextInput.Root>
    )
  }

  export const Large: StoryObj<TextInputInputProps> = {
    args: {
        large: 'lg'
    },
    render: (args) => (
        <TextInput.Root {...args}>
            <TextInput.Icon icon={Mail} variant={args.variant} large={args.large} error={args.error}/>
            <TextInput.Input placeholder='Digite seu email' {...args}/>
        </TextInput.Root>
    )
  }

  export const Error: StoryObj<TextInputInputProps> = {
    args: {
        error: true
    },
    render: (args) => (
        <TextInput.Root {...args}>
            <TextInput.Icon icon={Mail} variant={args.variant} large={args.large} error={args.error}/>
            <TextInput.Input placeholder='Digite seu email' {...args}/>
            <TextInput.Actions>
                <TextInput.Status large={args.large} error={args.error}/>
            </TextInput.Actions>
        </TextInput.Root>
    )
  }

  export const Success: StoryObj<TextInputInputProps> = {
    args: {
        error: false
    },
    render: (args) => (
        <TextInput.Root {...args}>
            <TextInput.Icon icon={Mail} variant={args.variant} large={args.large} error={args.error}/>
            <TextInput.Input placeholder='Digite seu email' {...args}/>
            <TextInput.Actions>
                <TextInput.Status large={args.large} error={args.error}/>
            </TextInput.Actions>
        </TextInput.Root>
    )
  }

  export const PasswordAction: StoryObj<TextInputInputProps> = {
    args: {
        error: undefined
    },
    render: (args) => {
        const [isPasswordVisible, setPasswordVisibility] = useState(false);

        return (
            <TextInput.Root {...args}>
                <TextInput.Icon icon={Lock} variant={args.variant} large={args.large} error={args.error}/>
                <TextInput.Input placeholder='Digite sua senha' type={isPasswordVisible ? 'text' : 'password'} {...args}/>
                <TextInput.Actions>
                    <TextInput.PasswordAction 
                        onClick={() => setPasswordVisibility(state => !state)}
                        isPasswordHidden={!isPasswordVisible} 
                        variant={args.variant} 
                        large={args.large} 
                        error={args.error}
                    />
                    <TextInput.Status large={args.large} error={args.error}/>
                </TextInput.Actions>
            </TextInput.Root>
        )
    }
  }

