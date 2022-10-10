import { Button } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button,

  args: {
    children: "Enviar",
  },
} as Meta;

export const Primary: StoryObj = {};

export const Big: StoryObj = {
  args: {
    size: "big",
  },
};
