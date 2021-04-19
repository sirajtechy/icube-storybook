import React  from 'react';
import PropTypes from "prop-types";

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

  
  Input.propTypes = {
    /**
     * Is this the principal to call the type of Input Textbox Eg: Number 
     */
    type: PropTypes.string,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
/**
     * Placeholder Value
     */
 placeholder: PropTypes.string,
 /**
     * The HTML id attribute is used to specify a unique id for an HTML element
     */
 id: PropTypes.string,
 /**
     * The maxlength attribute specifies the maximum number of characters allowed in the input element.
     */
  maxlength: PropTypes.number,
  /**
     *The HTML style attribute is used to add styles to an element, such as color, font, size, and more.
     */
     style: PropTypes.object,
     /**
     *The name attribute specifies the name of an input element.
     */
     name: PropTypes.string,
     /**
     *The value attribute specifies the value of an input element.
     */
     value: PropTypes.string,
   /**
     * For input elements, the size attribute specifies the visible width, in characters, of an input element.
     */
    size: PropTypes.number,
 /**
     * The HTML class attribute is used to specify a class for an HTML element.
     */
  className: PropTypes.string,
    /**
     * Disable button flag
     */
    disabled: PropTypes.bool,
    /**
    /**
    * Optional click handler
    */
    onClick: PropTypes.func,
  };