import React  from 'react';


export const Input = (props) => {
      let rendercomponet ; 
    
              switch(props.type){
                    case "text" : 
                       rendercomponet = <input style={props.style} id={props.id} type= {props.type} name={props.name}  className={props.name}
                       value ={props.value} onChange={props.onChange} maxlength={props.maxlength} {...props} size={props.size} disabled={props.disabled} placeholder={props.placeholder}/>
                       break;
                    case "DropDown": 
                       rendercomponet =  <select
                       name={props.name}
                       className={props.className}
                       type={props.type}
                       disabled={props.disabled}
                       value={props.value}
                       onChange={props.onChange}
                    
                     >
                       {props.options.map(options => {
                         return (
                           <option key={options.key} value={options.value}>
                             {options.value}
                           </option>
                         );
                       })}
                     </select>
                       break;
                    case "password" : 
                       rendercomponet = <input type= {props.type} name={props.name} size={props.size}  className={props.name}
                       value ={props.value} onChange={props.onChange}  maxlength={props.maxlength} disabled={props.disabled} {...props} />
                       break;
                    default:
                    rendercomponet =  <input type= {props.type} size={props.size} name={props.name} disabled={props.disabled}  className={props.name}
                    value ={props.value} onChange={props.onChange}   maxlength={props.maxlength} {...props} />
              }
          
      
    return (
       <React.Fragment>
           {rendercomponet}
       </React.Fragment>
    );
  }