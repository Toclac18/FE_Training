import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
};

export default Button;
