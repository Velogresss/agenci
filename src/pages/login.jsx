import React, { useContext } from 'react';
import './login.css';
import { AuthContext } from '../context/context';

const AuthButton = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext); // Отримуємо значення з контексту

  const handleAuthToggle = () => {
    if (isAuthenticated) {
      logout(); // Вихід
    } else {
      login(); // Увійти
    }
  };

  return (
    <button onClick={handleAuthToggle}>
      {isAuthenticated ? 'Вийти' : 'Увійти'}
    </button>
  );
};

export default AuthButton;