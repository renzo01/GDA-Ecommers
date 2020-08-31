import React from "react";
import GdaIcon from "../../../assets/gda-icon.png";
import { Link } from "react-router-dom";
import "./Login.styles.css";
import Button from "../../Commons/Button/Button.component";
const Login = () => {
  return (
    <div className='login'>
      <Link to='/'>
        <img src={GdaIcon} alt='GDA ICON' className='login-icon' />
      </Link>
      <form>
        <h2>Ingresar</h2>
        <label for='email'>CORREO</label>
        <input type='email' id='email' />
        <label>CONTRASEÑA</label>
        <input type='password' />
        <Button title='INGRESAR' type='button-login' />
        <Link>No recuerdas tu contraseña?</Link>
      </form>
    </div>
  );
};

export default Login;
