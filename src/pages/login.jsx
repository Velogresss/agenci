import React from 'react';
import LoginComponent from '../components/UI/LoginComponent/LoginComponent';
import GetToken from '../components/UI/GetToken/GetToken'
import classes from './login.module.css'

function Login() {
  return (
    <div className={classes.loginFormContainer}>
      <GetToken/>
      <LoginComponent connection="http://localhost:5082" />
    </div>
  );
}

export default Login;