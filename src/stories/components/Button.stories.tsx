import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    size: 'default',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: 'inline-radio',
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
    },
  },
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'sm',
    variant: 'destructive',
    disabled: true,
  },

  name: 'Primary',
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
