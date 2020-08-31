import React from "react";
import "./Navbar.styles.css";
import gdaIcon from "../../../assets/gda-icon.png";
import Button from "../../Commons/Button/Button.component";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <img src={gdaIcon} alt='GDA icon' />
        <p>GDA SOLUCIONES</p>
        <div className='navbar-options'>
          <ul>
            <li>
              <a>Productos</a>
            </li>
            <li>
              <a>Contactos</a>
            </li>
            <li>
              <Link to='/login'>
                <Button title='Ingresar' type='button-sing-in' />
              </Link>
            </li>
            <li>
              <Button title='Registrar' type='button-sing-up' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
