import { Box, BoxProps, Text } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Box',
  component: Box,

  args: {
    children: <Text>Testing Box element</Text>,
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
