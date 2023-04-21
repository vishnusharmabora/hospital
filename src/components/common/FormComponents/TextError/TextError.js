import React from "react";
import "./TextError.css";

const TextError = (props) => {
  return <span className="text_err">{props.children}</span>;
};

export default TextError;
