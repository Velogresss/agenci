import React, { useContext } from 'react';
import './login.css';
import { AuthContext } from '../context/context';

import Link from '../../src/components/UI/LinksFooter/LinksFooter'

import GetTokenComponent from '../components/API/GetTokenComponent'

const AuthButton = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  const handleAuthToggle = () => {
    if (isAuthenticated) {
      logout();
    } else {
      login();
    }
  };

  return (
    // <button onClick={handleAuthToggle}>
    //   {isAuthenticated ? 'Вийти' : 'Увійти'}
    // </button>
    <div>
      <GetTokenComponent onClick={handleAuthToggle}/>
      <Link/>
    </div>
  );
};

export default AuthButton;