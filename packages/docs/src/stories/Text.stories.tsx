import { Text, TextProps } from "@ignite-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Text",
  component: Text,

  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ratione rerum aperiam dolorum, dolores pariatur necessitatibus ipsa nemo illum, sunt animi nostrum repudiandae cum, exercitationem dolor atque voluptas ad accusantium!',
  },
} as Meta;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
};
