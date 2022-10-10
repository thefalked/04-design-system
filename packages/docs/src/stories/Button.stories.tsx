import { Button } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button,
} as Meta;

export const Primary: StoryObj = {
  args: {
    children: "Enviar",
  },
};

export const Big: StoryObj = {
  args: {
    size: "big",
  },
};
