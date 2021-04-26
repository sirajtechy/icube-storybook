import React , {useState } from 'react';
import {Input} from './Input';

export default {
    title: 'Form/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' } 
      } ,
  }
  


//👇 We create a “template” of how args map to rendering

 
const Template = args => {
  const [value, setValue] = useState(args.value ?? '');
  return (
    <>
      <Input
        {...args}
        onChange={(e)=>{setValue(e.target.value)}}
        onBlur = {(e)=>{return e}}
        value={value}
      />
      <pre style={{ marginTop: 10 }}>
        {JSON.stringify({ value }, null, 2)}
      </pre>
    </>
  );
};
export const  TextBox = Template.bind({});
TextBox.args = { type: 'text', placeholder:" " , id : "id" , name : "name" , className :"" , Borderless:true,
value: ''  , style :{backgroundColor:"white"} ,disabled:false , size: 0 , label:"User", error:false,Errormessage:"We are handle error"};
 
export const Select = Template.bind({});
Select.args = { type: 'DropDown', id : "id" , name : "name" , className :"" , label:"Drop", value:"" , Borderless:true, error:false,Errormessage:"We are handle error", style :{backgroundColor:"white"} ,  disabled:false  , options : [
  {
  "value":"",
  "key":""
},{
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