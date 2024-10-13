import React, { useState, useEffect } from 'react';
import Navigation from './components/UI/Navigation/Navigation';
import Footer from './components/UI/Footer/Footer';
import Content from './components/Path/Content/Content';
import { AuthContext } from './context/context';
import '../src/translate/i18n'; 

import { AuthProvider } from './context/context';  // Імпорт провайдера контексту
import All from './pages/all';
import About from './pages/about';
import Register from './pages/register';
import Login from './pages/login';

//  -- Delete -- //
import Greeting from './Greeting';
import Product from './Product';
import productsData from './ProductData';

const products = [
  { name: 'Телефон', price: 5000, description: 'Сучасний смартфон з потужною камерою' },
  { name: 'Ноутбук', price: 15000, description: 'Портативний комп\'ютер для роботи та ігор' },
  { name: 'Навушники', price: 1000, description: 'Безпровідні навушники з чистим звуком' }
];

// <!- Delete -->

// import myImage from './img/Offer/offer-1.png'; 

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handleNavigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onPopState);

    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

//
const productElements = productsData.map(product => (
  <Product 
    key={product.name} 
    name={product.name} 
    price={product.price} 
    description={product.description} 
  />
));
//

  return (
    <AuthProvider>
      <Navigation navigate={handleNavigate} />
      <Content currentPath={currentPath} />
      <Footer onNavigate={handleNavigate} />
      {/* Delete after #3 */}
            {/* Привітання для користувача з іменем */}
            <Greeting name="Іван" />

            {/* Привітання для користувача без імені */}
            <Greeting />

            {productElements}
      {/* Delete to this */}
      </AuthProvider>
  );
}

export default App;