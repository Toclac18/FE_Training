import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, register, ...props }) => {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      register={props.name}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
