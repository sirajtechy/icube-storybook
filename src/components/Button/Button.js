import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, backgroundColor, size, design, label, ...props }) => {
  let mode;
  switch (type) {
    case "primary":
      mode = "button--primary";
      break;
    case "secondary":
      mode = "button--secondary";
      break;
    case "borderLess":
      mode = "button--borderLess";
      break;
    case "success":
      mode = "button--success";
      break;
    case "alert":
      mode = "button--alert";
      break;
    case "warning":
      mode = "button--warning";
      break;
    default:
      mode = "button--primary";
      break;
  }
  return (
    <button
      type="button"
      className={["button", `button--${size}`, `button--${design}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      disabled={props.disabled}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.string,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Disable button flag
   */
  disabled: PropTypes.bool,
  /**
   * Button design
   */
  design: PropTypes.oneOf(["fill", "rounded", "ghost"]),
  /**
  * Optional click handler
  */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  type: 'primary',
  size: "medium",
  design: "fill",
  disabled: false,
  onClick: undefined,
};
