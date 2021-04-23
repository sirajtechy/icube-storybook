import React , {useState } from 'react';
import {Input} from './Input';
import { action ,storiesOf} from '@storybook/addon-actions';

export default {
    title: 'Form/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' } 
      } ,
  }
  


//👇 We create a “template” of how args map to rendering
// const Template = (args) => <Input {...args}  onChange={action("Button is clicked")} />;
 
const Template = args => {
  const [value, setValue] = useState(args.value ?? '');
  return (
    <>
      <Input
        {...args}
        onChange={(e)=>{setValue(e.target.value)}}
        value={value}
      />
      <pre style={{ marginTop: 10 }}>
        {JSON.stringify({ value }, null, 2)}
      </pre>
    </>
  );
};
export const  TextBox = Template.bind({});
TextBox.args = { type: 'text', placeholder: 'placeholder' , id : "id" , name : "name" , className :"className" ,
value: ''  , style :{backgroundColor:"white"} ,disabled:false , size: 0};
 
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