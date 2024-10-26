// import React, { useState, useEffect, useContext } from 'react';
// import Navigation from './components/UI/Navigation/Navigation';
// import Footer from './components/UI/Footer/Footer';
// import Content from './components/Path/Content/Content';
// import { MenuContext } from '../src/context/MenuContext';
// import '../src/translate/i18n'; 

// import { AuthProvider } from './context/context';

// import AppClasses from './App.module.css';

// const App = () => {
//   const [isAuth, setIsAuth] = useState(false);
//   const [currentPath, setCurrentPath] = useState(window.location.pathname + '/all');
//   const { isMenuOpen, closeMenu } = useContext(MenuContext);
  
//   const handleNavigate = (path) => {
//     window.history.pushState({}, '', path);
//     setCurrentPath(path);
//   };

//   useEffect(() => {
//     const onPopState = () => {
//       setCurrentPath(window.location.pathname);
//     };

//     window.addEventListener('popstate', onPopState);

//     return () => {
//       window.removeEventListener('popstate', onPopState);
//     };
//   }, []);

//   return (
//     <AuthProvider>
//       <Navigation navigate={handleNavigate} />
//       <div className={isMenuOpen ? AppClasses.blurred : ''} onClick={closeMenu}>
//         <Content currentPath={currentPath} />
//       </div>
//       <Footer navigate={handleNavigate} />
//     </AuthProvider>
//   );
// }

// export default App;

import React, { useState, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/UI/Navigation/Navigation';
import Footer from './components/UI/Footer/Footer';
import Content from './components/Path/Content/Content';
import { MenuContext } from '../src/context/MenuContext';
import '../src/translate/i18n'; 
import { AuthProvider } from './context/context';

import AppClasses from './App.module.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { isMenuOpen, closeMenu } = useContext(MenuContext);

  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <div className={isMenuOpen ? AppClasses.blurred : ''} onClick={closeMenu}>
          <Content />
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;