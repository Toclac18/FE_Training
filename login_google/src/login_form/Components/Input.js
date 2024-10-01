import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, register, ...props }) => {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      name={name}
      {...register(name)}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Input;
