import React from "react";
import "./input.styles.css";

const Input = ({ type, plh, styl }) => {
  return <input type={type} placeholder={plh} className={styl} />;
};

export default Input;
