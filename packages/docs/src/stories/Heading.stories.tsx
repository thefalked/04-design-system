import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@thefalked-ui/react'

export default {
  title: 'Form/Heading',
  component: Heading,

  args: {
    children: 'Custom Title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the component will always be an `h2`, but we can change that with the prop `as`.',
      },
    },
  },
}
