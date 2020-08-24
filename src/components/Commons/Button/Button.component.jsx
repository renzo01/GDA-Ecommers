import React from "react";
import "./Button.styles.css";
const Button = (prop) => {
  return <div className={prop.type}>{prop.title}</div>;
};
export default Button;
