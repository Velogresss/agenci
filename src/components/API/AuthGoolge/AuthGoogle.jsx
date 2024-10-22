import React from 'react';

import imgGoogle from '../../../img/footer/imageGoogle.png';
import classes from './AuthGoogle.module.css'

const AuthGoolge = ({ connection }) => {
  const TokenServerInfoData__AuthGoogle = async () => {
    const token = localStorage.getItem('dc_auth_key');
    if (token == null) {
      alert("Користувач не отримав унікальні токени");
      return;
    }

    const userAgent = navigator.userAgent; 
    const url = `${connection}/google/${encodeURIComponent(userAgent)}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const res = await response.json();
      if (res.meta.code === 200) {
        window.location.href = res.data;
      }
    } catch (error) {
      console.error('Помилка:', error);
    }
  };

  return (
    <div>
      <img className={classes.img2} onClick={TokenServerInfoData__AuthGoogle} src={imgGoogle} alt="Google" />
    </div>
  );
};

export default AuthGoolge;