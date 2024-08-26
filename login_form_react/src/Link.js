import React from "react";
import PropTypes from "prop-types";

const Link = ({ href, className, children, target }) => {
  return (
    <a href={href} className={className} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
};

Link.defaultProps = {
  className: "",
  target: "_self",
};

export default Link;
