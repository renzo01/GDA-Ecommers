import React from "react";
import "./Navbar.styles.css";
import gdaIcon from "../../../assets/gda-icon.png";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <img src={gdaIcon} alt='GDA icon' />
        <p>GDA SOLUCIONES</p>
        <ul>
          <li>
            <a href='#'>Productos</a>
          </li>
          <li>
            <a href='#'>Contactos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
