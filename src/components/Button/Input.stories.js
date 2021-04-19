import React from 'react';
import {Input} from './Input';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Form/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' }
      }
  }


//👇 We create a “template” of how args map to rendering
const Template = (args) => <Input {...args}  onChange={action("Button is clicked")} />;

export const  TextBox = Template.bind({});
TextBox.args = { type: 'text', placeholder: 'placeholder' , id : "id" , name : "name" , className :"className" ,
value :"user"  , style :{backgroundColor:"white"} , maxlength:2 ,disabled:false , size: 0};
 
export const Select = Template.bind({});
Select.args = { type: 'DropDown', placeholder: 'placeholder' , id : "id" , name : "name" , className :"className" ,
value :"user"  , style :{backgroundColor:"white"} ,  disabled:false  , options : [{
    "value": "Alberta",
    "key": "AB"
  },
  {
    "value": "British Columbia",
    "key": "BC"
  },
  {
    "value": "Manitoba",
    "key": "MB"
  },
  {
    "value": "New Brunswick",
    "key": "NB"
  }] };