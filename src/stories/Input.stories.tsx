import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input } from "./Input";

export default {
    title: 'Input',
    component: Input,
    argTypes: {

    },

} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
    label: 'Your name',
    size: 'large'
};

export const Medium = Template.bind({})
Medium.args = {
    label: 'Your Name',
    size: 'medium'
}

export const Large = Template.bind({})
Large.args = {
    label: 'Your Name',
    size: 'large'
}