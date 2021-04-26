import React from 'react';
import PropTypes from "prop-types";
import "./Input.css";

export const Input = (props) => {

      let rendercomponet ; 
              switch(props.type){
                    case "text" : 
                       rendercomponet = <div className={`${props.Borderless ?'disableBorder':'enableBorder'}`}> <div className="floating-label">
                       <input className={`floating-input ${props.error ? 'InputErrorMsg':''}`}style={props.style} id={props.id} type= {props.type} name={props.name}  
                       value ={props.value} onBlur={props.onBlur} onChange={props.onChange} maxLength={props.maxlength} size={props.size} disabled={props.disabled} placeholder={props.placeholder} />
                       <span className="highlight"></span>
                       <label >{props.label}</label>
                       {props.error && (
                        <div style={{paddingTop:10,backgroundColor:'none',color:'#ed4545',fontSize:13}}>{props.Errormessage}</div>
                      )}
                      </div>
                      </div>
                       break;
                    case "DropDown": 
                       rendercomponet =  <div className={`${props.Borderless ?'disableBorder':'enableBorder'}`}>  <div className="floating-label">
                        <select
                       name={props.name}
                       className={`floating-select ${props.error ? 'InputErrorMsg':''} ${props.className}`}
                       disabled={props.disabled}
                       DropdownValue={props.value}
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
                     <span className="highlight"></span>
                     <label>{props.label}</label>
                     {props.error && (
                        <div style={{paddingTop:10,backgroundColor:'none',color:'#ed4545',fontSize:13}}>{props.Errormessage}</div>
                      )}
                     </div>
                     </div>
                       break;
                    default:
                    rendercomponet = <div className={`${props.Borderless ?'disableBorder':'enableBorder'}`}>  <div className="floating-label">
                    <input  className={`floating-input ${props.error ? 'InputErrorMsg':''}`} style={props.style} id={props.id} type= {props.type} name={props.name}  
                    value ={props.value} onChange={props.onChange} maxLength={props.maxlength} size={props.size} disabled={props.disabled} placeholder={props.placeholder}/>
                    <span className="highlight"></span>
                    <label>{props.label}</label>
                    {props.error && (
                     <div style={{paddingTop:10,backgroundColor:'none',color:'#ed4545',fontSize:13}}>{props.Errormessage}</div>
                   )}
                   </div>
                   </div>
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
    type: PropTypes.oneOf(["text", "number", "email", "password"]),
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
    * Optional onChange handler
    */
    onChange: PropTypes.func.isRequired,
    /**
    /**
    *  onBlur handler
    */
    onBlur: PropTypes.func,
  };

  Input.defaultProps = {
    name: "name",
    placeholder: "",
    disabled: false,
    type: "text",
    // pattern: null
  };
 
