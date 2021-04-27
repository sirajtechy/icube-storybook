import React , {useCallback, useState} from 'react'
import './DailPad.css'
import {Input} from '../Input/Input';
export  const DailPadDesign = ()=> {
  const [value,setValue] = useState('')
   let DailpadNumber = [1,2,3,4,5,6,7,8,9,'X',0,'OK'] ; 
   
  const DailPadLogic =  (Params)=>{
    switch(Params){
      case 'OK':
        return true
      case 'X' :
      let RemoveOperation =  value.split("") 
      RemoveOperation.pop();
      return setValue(RemoveOperation.join(''))  
      default :
        return  setValue(prevArray => [...prevArray, Params].join(''))
    }
   
  }
 const inputOnChange = (e)=>{
  if(!/^[0-9]+$/.test(e.target.value)){
    setValue('')
  }
  else{
setValue(e.target.value)
  }
 }

  
   const FocusEvent = ( )=>{
    console.log("onfocus")
   }
   const BlurEvent = ()=>{
        console.log("blur")
  }
 
  return (
    <div class="DialPadDesign">
     <Input Borderless={true} type ="text" placeholder =" "  label={"Enter AuthCode"} onChange={(e)=>{inputOnChange(e)}} value={value}/>
      <div class="grid-container">
        {
          DailpadNumber.map((data,index)=>{
             return <div class="item" onFocus={()=>FocusEvent()} onBlur={()=>BlurEvent()}  onClick={()=>DailPadLogic(data)} id={data}>{data}</div>
          })
        }
</div>
</div>
  )
}


