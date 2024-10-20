import React, { useState, useEffect, useContext } from 'react';
import Navigation from './components/UI/Navigation/Navigation';
import Footer from './components/UI/Footer/Footer';
import Content from './components/Path/Content/Content';
import { AuthContext } from './context/context';
import { MenuContext } from '../src/context/MenuContext';
import '../src/translate/i18n'; 

import { AuthProvider } from './context/context';
import All from './pages/all';
import About from './pages/about';
import Register from './pages/register';
import Login from './pages/login';

import AppClasses from './App.module.css';
// import myImage from './img/Offer/offer-1.png'; 

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const { isMenuOpen, closeMenu } = useContext(MenuContext);
  
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

  return (
    <AuthProvider>
      <Navigation navigate={handleNavigate} />
      <div className={isMenuOpen ? AppClasses.blurred : ''} onClick={closeMenu}>
        <Content currentPath={currentPath} />
      </div>
      <Footer onNavigate={handleNavigate} />
    </AuthProvider>
  );
}

export default App;