import { Heading, HeadingProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Heading",
  component: Heading,

  args: {
    children: 'Custom Title',
  },
} as Meta;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'By default the component will always be an `h2`, but we can change that with the prop `as`.'
      }
    }
  }
};
