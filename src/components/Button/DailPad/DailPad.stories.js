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
  const [value,setValue] = useState('')
  const DailPadLogic =  (e)=>{
    let Params = e.target.id
    switch(Params){
      case 'OK':
        return onsubmit()
      case 'X' :
      let RemoveOperation =  value.split("") 
      RemoveOperation.pop();
      return setValue(RemoveOperation.join(''))  
      default :
        return  setValue(prevArray => [...prevArray, Params].join(''))
    }
   
  }

  onsubmit = ()=>{
    console.log("submit")
  }
  const inputOnChange = (e)=>{
    if(!/^[0-9]+$/.test(e.target.value)){
      setValue('')
    }
    else{
  setValue(e.target.value)
    }
   }
  
  return (
    <>
      <DailPadDesign  onClick={(e)=>DailPadLogic(e)} onSubmit={()=>onsubmit()} onChange={(e)=>inputOnChange(e)} value={value}  {...args} />
      <pre style={{ marginTop: 10 }}>
        {JSON.stringify({ value }, null, 2)}
      </pre>
    </>
  );
};
export const  DailPad = Template.bind({});
DailPad.args ={ type: 'text', placeholder:" " , id : "id" , name : "name" , className :"" , Borderless:true,
 style :{backgroundColor:"white"} ,disabled:false , size: 0 , label:"User", error:false,Errormessage:"We are handle error"};
 
  