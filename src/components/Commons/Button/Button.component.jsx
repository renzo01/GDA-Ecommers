import React from "react";
import "./Button.styles.css";
const Button = ({ type, title, ...otherProps }) => {
  return <div className={type}>{title}</div>;
};
export default Button;
