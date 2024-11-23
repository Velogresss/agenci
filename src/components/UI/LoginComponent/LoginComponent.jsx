import React, { useState, useContext } from 'react';
import { AES } from '../../../AES/AES';
import classes from './LoginComponent.module.css';
import LinksFooter from '../LinksFooter/LinksFooter'

import { AuthContext } from '../../../context/context';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ connection }) => {
  const [Login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const userAgent = navigator.userAgent;
    const data = {
      "data": {
          "login": Login,
          "password": password
      },
      "user_agent": userAgent
    }; 
    const salt = localStorage.getItem("dc_server_salt");
    const token = localStorage.getItem("dc_auth_key");

    if (salt == null || token == null) {
      alert("User did not receive unique tokens");
      return;
    }

    try {
      const encryptedData = await AES.encrypt(JSON.stringify(data), salt);
      const url = `${connection}/${encodeURIComponent(encryptedData.encrypted)}/${encodeURIComponent(encryptedData.iv)}`;

      const response = await fetch(url, { 
        method: "GET", 
        headers: { 
          "Authorization": `Bearer ${token}`, 
          "Content-Type": "application/json" 
        } 
      });

      const res = await response.json();
      if (res.meta.code === 200) {
        localStorage.setItem("user_data", JSON.stringify(res.data));
        login();
        navigate('/all');
      }

      return res;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={classes.LoginContainer}>
      <h2>Вхід</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.labelContainer}>
          <label>
            <span>Логін:</span>
            <input 
              type="text" 
              value={Login} 
              onChange={(e) => setLogin(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div className={classes.labelContainer}>
          <label>
            <span>Пароль:</span>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div className={classes.LinksFooterContainer}>
          <LinksFooter/>
        </div>
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
};

export default LoginPage;