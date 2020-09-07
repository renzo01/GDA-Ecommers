import React from "react";
import GdaIcon from "../../../assets/gda-icon.png";
import { Link } from "react-router-dom";
import "./Login.styles.css";
import Button from "../../Commons/Button/Button.component";
import Input from "../../Commons/Input/Input.component";
const Login = () => {
  return (
    <div className='login'>
      <Link to='/'>
        <img src={GdaIcon} alt='GDA ICON' className='login-icon' />
      </Link>
      <form className='login-form'>
        <h2>INGRESAR</h2>
        <label for='email'>CORREO</label>
        <br />
        <Input type='text' plh='Ingresa tu correo' styl='login-input' />
        <br />
        <label>CONTRASEÑA</label>
        <br />
        <Input type='password' plh='Ingresa tu contraseña' styl='login-input' />
        <Button title='INGRESAR' type='button-login' />
        <Link>No recuerdas tu contraseña?</Link>
      </form>
    </div>
  );
};

export default Login;
