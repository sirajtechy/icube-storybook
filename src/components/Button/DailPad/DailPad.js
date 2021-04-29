import React  from 'react'
import './DailPad.css'
import {Input} from '../Input/Input';
export  const DailPadDesign = (props)=> {
  
   let DailpadNumber = [1,2,3,4,5,6,7,8,9,'X',0,'OK'] ; 
 
 
  return (
    <div class="DialPadDesign">
     <Input style={props.style} id={props.id} type= {props.type} name={props.name}  onKeyDown={props.onKeyDown} 
               label={props.label}  Borderless={props.Borderless}   onBlur={props.onBlur}  maxLength={props.maxlength} size={props.size} disabled={props.disabled} placeholder={props.placeholder}
               value ={props.value}  onChange={props.onChange} />
      <div class="grid-container">
        {
          DailpadNumber.map((data,index)=>{
             return <div class="item"   onClick={props.onClick} id={data}>{data}</div>
          })
        }
</div>
</div>
  )
}


