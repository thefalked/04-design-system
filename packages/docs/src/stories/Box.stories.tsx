import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@thefalked-ui/react'

export default {
  title: 'Form/Box',
  component: Box,

  args: {
    children: <Text>Testing Box element</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
