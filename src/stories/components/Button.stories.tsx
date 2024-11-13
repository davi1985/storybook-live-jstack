import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/Button'
import { action } from '@storybook/addon-actions'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    size: 'default',
    onClick: action('Button clicked'),
  },
  argTypes: {
    disabled: { control: 'boolean' },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: 'inline-radio',
      table: {
        type: {
          summary: 'enum (string)',
          detail: "'default' | 'sm' | 'lg' | 'icon'",
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
    variant: {
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      control: 'select',
      table: {
        type: {
          summary: 'enum (string)',
          detail:
            "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
  },
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'sm',
    variant: 'default',
    disabled: true,
  },
  name: 'Default',
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
  render: (props) => <Button {...props}>Secondary</Button>,
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
}

export const Cancel: Story = {
  args: {
    children: 'Cancel',
    variant: 'destructive',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
}

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
}
