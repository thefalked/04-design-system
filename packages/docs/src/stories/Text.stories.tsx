import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@thefalked-ui/react'

export default {
  title: 'Form/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ratione rerum aperiam dolorum, dolores pariatur necessitatibus ipsa nemo illum, sunt animi nostrum repudiandae cum, exercitationem dolor atque voluptas ad accusantium!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
