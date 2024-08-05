import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children, container }) => {
  return ReactDOM.createPortal(children, container);
};

export default Portal;
