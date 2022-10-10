import { Box, BoxProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Box",
  component: Box,

  args: {
    children: (
      <>
        <span>Testing Box element</span>
      </>
    ),
  },
} as Meta;

export const Primary: StoryObj<BoxProps> = {};
