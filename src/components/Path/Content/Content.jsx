import React from 'react';
import All from '../../../pages/all';
import About from '../../../pages/about';
import Register from '../../../pages/register';
import Login from '../../../pages/login'
import Contacts from '../../../pages/contacts'
import Leisure from '../../../pages/leisure'

const Content = ({ currentPath }) => {
  switch (currentPath) {
    case '/about':
      return <About />;
    case '/accommodation':
      return <div>Помешкання</div>;
    case '/contacts':
      return <Contacts/>;
    case '/flights':
      return <div>Авіарейси</div>;
    case '/leisure':
      return <Leisure/>;
    case '/airport-taxi':
      return <div>Таксі з/до аеропорту</div>;
    case '/support':
      return <div>Служба підтримки клієнтів</div>;
    case '/guarantee':
      return <div>Гарантія обслуговування</div>;
    case '/login':
      return <Login/>;
    case '/register':
      return <Register />;
    default:
      return <All />;
  }
};

export default Content;