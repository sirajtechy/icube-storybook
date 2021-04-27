import React , {useState } from 'react';
import {DailPadDesign} from './DailPad';

export default {
    title: 'Form/Dialpad',
    component: DailPadDesign,
    argTypes: {
        backgroundColor: { control: 'color' } 
      } ,
  }
  


//👇 We create a “template” of how args map to rendering

 
const Template = args => {
  
  return (
    <>
      <DailPadDesign />
    </>
  );
};
export const  DailPad = Template.bind({});
DailPad.args = {};
  