import React, { Children } from 'react';
import { Story, Meta } from '@storybook/react';
import { NewButton } from './NewButton';

export default {
  title: 'Core/NewButton',
  component: NewButton,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Parameters<typeof NewButton>[0]> = (args) => <NewButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    children: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    children: 'Secondary'
};


