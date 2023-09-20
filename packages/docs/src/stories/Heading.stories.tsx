
import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@rdpgrupo/ui'

export default {
  title: 'Typegraph/Heading',
  component: Heading,
  args: {
    children: 'Grupo Educacional RDP',
    size: 'h3',
    color: 'primary',
    weight: 'semibold',
    alignment: 'left',
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente para exibição de títulos.',
      },
    },
  },
  argTypes: {
    size: {
      description: 'Define o tamanho do texto',
      defaultValue: 'p3',
      options: ['h1', 'h2', 'p3', 'p4', 'p5'],
      control: { type: 'select' }
    },
    color: {
      control: { type: 'select' },
      options: [
        'transparent',
        'primary',
        'primary-w50',
        'primary-w25',
        'primary-b10',
        'primary-b25',
        'primary-b50',

        'warning',
        'warning-w50',
        'warning-b10',
        'warning-b50',

        'error',
        'error-w50',
        'error-b10',
        'error-b50',

        'info',
        'info-w50',
        'info-b10',
        'info-b50',

        'gray-0',
        'gray-1',
        'gray-2',
        'gray-3',
        'gray-4',
        'gray-5',
        'gray-6',
        'gray-7',
        'gray-8',
        'gray-9',
        'gray-7-b10',
        'gray-8-b10',
      ],
      defaultValue: 'primary',
      description: 'Define a cor do texto',
    },
    children: {
      name: 'content',
      defaultValue: 'Grupo Educacional RDP',
      description: 'Define o conteúdo do texto'
    },
    as: {
      description: 'Define uma nova tag HTML como base do componente',
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4']
    },
    weight: {
      options: ['bold', 'semibold', 'medium', 'regular'],
      control: { type: 'select' },
      description: 'Define o peso da fonte do texto',
      defaultValue: 'semibold',
    },
    alignment: {
      options: ['center', 'left', 'right'],
      control: { type: 'select' },
      description: 'Define o alinhamento do texto',
      defaultValue: 'left',
    },
    className: {
      description: 'Esta propriedade permite sobrepor estilos do componente',
    }
  },
  tags: ['autodocs'],
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
}