import React, { useState, createContext } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
