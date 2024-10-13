import React, { useState, useEffect } from 'react';
import Navigation from './Navigation'; 

import All from '../../../pages/all'
import About from '../../../pages/about'

const Router = () => {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);
  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setRoute(path);
  };

  const renderComponent = () => {
    switch (route) {
      case '/about':
        return <About/>;
      case '/contacts':
        return <div>Контакти</div>;
      case '/login':
        return <div>Увійти</div>;
      case '/register':
        return <div>Реєстрація</div>;
      case '/flights':
        return <div>Авіарейси</div>;
      case '/accommodation':
        return <All/>;
      case '/leisure':
        return <div>Дозвілля</div>;
      case '/airport-taxi':
        return <div>Таксі з/до аеропорту</div>;
      default:
        return <div>Головна сторінка</div>;
    }
  };

  return (
    <div>
      <Navigation navigate={navigate} />
      {renderComponent()}
    </div>
  );
}

export default Router;