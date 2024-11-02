import React from 'react';
import LoginComponent from './LoginComponent';
import GetToken from '../components/UI/GetToken/GetToken'

function Login() {
  return (
    <div>
      <LoginComponent connection="http://localhost:5082" />
      <GetToken/>
    </div>
  );
}

export default Login;