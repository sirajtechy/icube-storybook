import React from 'react';
import { action } from "@storybook/addon-actions";

import { Button } from './Button';

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    label: 'Button'
  }
};

const Template = (args) => <Button {...args} onClick={action("Button is clicked")}/>;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary'
};

export const BorderLess = Template.bind({});
BorderLess.args = {
  type: 'borderLess'
};

export const Success = Template.bind({});
Success.args = {
  type: 'success'
};

export const Alert = Template.bind({});
Alert.args = {
  type: 'alert',
}

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning'
}

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
