import React from "react";
import gdaIcon from "../../../assets/gda-icon.png";
import "./Footer.styles.css";
const Footer = () => {
  const getCurrentYear = () => {
    let year = new Date().getFullYear();
    return year;
  };

  return (
    <div className='footer'>
      <img src={gdaIcon} alt='GDA Icon' />
      <p>GDA Soluciones. Derechos reservados 2008 - {getCurrentYear()}</p>
    </div>
  );
};
export default Footer;
