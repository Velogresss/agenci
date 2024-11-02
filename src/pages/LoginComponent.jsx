import React, { useState } from 'react';
import { AES } from '../AES/AES';

const LoginPage = ({ connection }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const userAgent = navigator.userAgent;
    const data = {
      "data": {
          "login": login,
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
      }

      return res;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Login:
            <input 
              type="text" 
              value={login} 
              onChange={(e) => setLogin(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;