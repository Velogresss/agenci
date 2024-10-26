// import React, { useContext, useState } from 'react';
// import classes from './Navigation.module.css';
// import logoImage from '../../../img/logoImage.png';
// import cartIcon from '../../../img/cartIcon.png'; 
// import { useTranslation } from 'react-i18next';
// import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
// import { AuthContext } from '../../../context/context'; 
// import { MenuContext } from '../../../context/MenuContext';
// import hamb from '../../../img/Navigation/Vector.png';

// const Navigation = ({ navigate }) => {
//   const { t } = useTranslation();
//   const { isAuthenticated, logout } = useContext(AuthContext);
//   const { isMenuOpen, toggleMenu, closeMenu } = useContext(MenuContext);

//   const [activeLink, setActiveLink] = useState(null);

//   const handleClick = (link) => {
//     setActiveLink(link);
//     closeMenu();
//   };

//   return (
//     <>
//       <nav className={classes.navigation}>
//         <div className={classes.logo}>
//           <img
//             className={classes.logoImage}
//             src={logoImage}
//             alt="LOGO"
//             onClick={() => {
//               navigate('/all');
//               handleClick(null);
//             }}
//           />
//         </div>
//         <div className={classes.rows_box}>
//           <div className={classes.rows}>
//             <ul className={classes.nav_links}>
//               <li>
//                 <p
//                   onClick={() => {handleClick('contacts'); navigate('/contacts')}}
//                   className={activeLink === 'contacts' ? classes.active : ''}
//                 >
//                   {t('header.contacts')}
//                 </p>
//               </li>
//               <li>
//                 <p
//                   onClick={() => {handleClick('about'); navigate('/about')}}
//                   className={activeLink === 'about' ? classes.active : ''}
//                 >
//                   {t('header.about')}
//                 </p>
//               </li>
//               {isAuthenticated ? (
//                 <>
//                   <li>
//                     <p
//                       onClick={() => {handleClick('personal-page'); navigate('/personal-page')}}
//                       className={activeLink === 'personal-page' ? classes.active : ''}
//                     >
//                       {t('header.personal_page')}
//                     </p>
//                   </li>
//                   <li>
//                     <p onClick={logout}>{t('header.logout')}</p>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li>
//                     <p
//                       onClick={() => {handleClick('login'); navigate('/login')}}
//                       className={activeLink === 'login' ? classes.active : ''}
//                     >
//                       {t('header.login')}
//                     </p>
//                   </li>
//                   <li>
//                     <p
//                       onClick={() => {handleClick('register'); navigate('/register')}}
//                       className={activeLink === 'register' ? classes.active : ''}
//                     >
//                       {t('header.register')}
//                     </p>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </div>
//           <div className={classes.rows}>
//             <ul className={classes.nav_links}>
//               <li>
//                 <p
//                   onClick={() => {handleClick('flights'); navigate('/flights')}}
//                   className={activeLink === 'flights' ? classes.active : ''}
//                 >
//                   {t('header.flights')}
//                 </p>
//               </li>
//               <li>
//                 <p
//                   onClick={() => {handleClick('accommodation'); navigate('/accommodation')}}
//                   className={activeLink === 'accommodation' ? classes.active : ''}
//                 >
//                   {t('header.accommodation')}
//                 </p>
//               </li>
//               <li>
//                 <p
//                   onClick={() => {handleClick('leisure'); navigate('/leisure')}}
//                   className={activeLink === 'leisure' ? classes.active : ''}
//                 >
//                   {t('header.leisure')}
//                 </p>
//               </li>
//               <li>
//                 <p
//                   onClick={() => {handleClick('airport-taxi'); navigate('/airport-taxi')}}
//                   className={activeLink === 'airport-taxi' ? classes.active : ''}
//                 >
//                   {t('header.airport_taxi')}
//                 </p>
//               </li>
//             </ul>
//           </div>
//         </div>  
//       <div className={classes.actions}>
//         <div className={classes.actionsIC}>
//           <img
//             src={cartIcon}
//             alt="Cart"
//             className={classes.cart}
//             onClick={() => {navigate('/cart'); navigate('/cart')}}
//           />
//           <div className={classes.LanguageSwitcherCon}>
//             <LanguageSwitcher />
//           </div>
//       </div>
//         </div>       
//         <img className={classes.hamburger} onClick={toggleMenu} src={hamb} alt="" />
//       </nav>
//       {isMenuOpen && (
//         <div className={classes.menu_dropdown}>
//           <ul>
//             <li>
//               <p
//                 onClick={() => {handleClick('contacts'); navigate('/contacts')}}
//                 className={activeLink === 'contacts' ? classes.active : ''}
//               >
//                 {t('header.contacts')}
//               </p>
//             </li>
//             <li>
//               <p
//                 onClick={() => {handleClick('about'); navigate('/about')}}
//                 className={activeLink === 'about' ? classes.active : ''}
//               >
//                 {t('header.about')}
//               </p>
//             </li>
//             <li>
//               <p
//                 onClick={() => {handleClick('flights'); navigate('/flights')}}
//                 className={activeLink === 'flights' ? classes.active : ''}
//               >
//                 {t('header.flights')}
//               </p>
//             </li>
//             <li>
//               <p
//                 onClick={() => {handleClick('accommodation'); navigate('/accommodation')}}
//                 className={activeLink === 'accommodation' ? classes.active : ''}
//               >
//                 {t('header.accommodation')}
//               </p>
//             </li>
//             <li>
//               <p
//                 onClick={() => {handleClick('leisure'); navigate('/leisure')}}
//                 className={activeLink === 'leisure' ? classes.active : ''}
//               >
//                 {t('header.leisure')}
//               </p>
//             </li>
//             <li>
//               <p
//                 onClick={() => {handleClick('airport-taxi'); navigate('/airport-taxi')}}
//                 className={activeLink === 'airport-taxi' ? classes.active : ''}
//               >
//                 {t('header.airport_taxi')}
//               </p>
//             </li>
//             {isAuthenticated ? (
//               <>
//                 <li>
//                   <p
//                     onClick={() => {handleClick('personal-page'); navigate('/personal-page')}}
//                     className={activeLink === 'personal-page' ? classes.active : ''}
//                   >
//                     {t('header.personal_page')}
//                   </p>
//                 </li>
//                 <li>
//                   <p onClick={logout}>{t('header.logout')}</p>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <p
//                     onClick={() => {handleClick('login'); navigate('/login')}}
//                     className={activeLink === 'login' ? classes.active : ''}
//                   >
//                     {t('header.login')}
//                   </p>
//                 </li>
//                 <li>
//                   <p
//                     onClick={() => {handleClick('register'); navigate('/register')}}
//                     className={activeLink === 'register' ? classes.active : ''}
//                   >
//                     {t('header.register')}
//                   </p>
//                 </li>
//               </>
//             )}
//             <div className={classes.actions}>
//               <img
//                 src={cartIcon}
//                 alt="Cart"
//                 className={classes.cartInList}
//                 onClick={() => {
//                   navigate('/cart');
//                   closeMenu();
//                 }}
//               />
//             </div>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navigation;

import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Navigation.module.css';
import logoImage from '../../../img/logoImage.png';
import cartIcon from '../../../img/cartIcon.png';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { AuthContext } from '../../../context/context';
import { MenuContext } from '../../../context/MenuContext';
import hamb from '../../../img/Navigation/Vector.png';

const Navigation = () => {
  const { t } = useTranslation();
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { isMenuOpen, toggleMenu, closeMenu } = useContext(MenuContext);
  
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path ? classes.active : '';

  return (
    <>
      <nav className={classes.navigation}>
        <div className={classes.logo}>
          <Link to="/all" className={isActive('/all')} onClick={closeMenu}>
            <img className={classes.logoImage} src={logoImage} alt="LOGO" />
          </Link>
        </div>

        <div className={classes.rows_box}>
          <div className={classes.rows}>
            <ul className={classes.nav_links}>
              <li>
                <Link
                  to="/contacts"
                  className={isActive('/contacts')}
                  onClick={closeMenu}
                >
                  <p className={classes.LinkP}>{t('header.contacts')}</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={isActive('/about')}
                  onClick={closeMenu}
                >
                  <p className={classes.LinkP}>{t('header.about')}</p>
                </Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link
                      to="/personal-page"
                      className={isActive('/personal-page')}
                      onClick={closeMenu}
                    >
                      <p className={classes.LinkP}>{t('header.personal_page')}</p>
                    </Link>
                  </li>
                  <li>
                    <p onClick={logout}>{t('header.logout')}</p>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className={isActive('/login')}
                      onClick={closeMenu}
                    >
                      <p className={classes.LinkP}>{t('header.login')}</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className={isActive('/register')}
                      onClick={closeMenu}
                    >
                      <p className={classes.LinkP}>{t('header.register')}</p>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className={classes.rows}>
            <ul className={classes.nav_links}>
              <li>
                <Link
                  to="/flights"
                  className={isActive('/flights')}
                  onClick={closeMenu}
                >
                  <p className={classes.LinkP}>{t('header.flights')}</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/accommodation"
                  className={isActive('/accommodation')}
                  onClick={closeMenu}
                >
                  <p className={classes.LinkP}>{t('header.accommodation')}</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/leisure"
                  className={isActive('/leisure')}
                  onClick={closeMenu}
                >
                  <p className={classes.LinkP}>{t('header.leisure')}</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/airport-taxi"
                  className={isActive('/airport-taxi')}
                  onClick={closeMenu}
                >
                  <p className={classes.LinkP}>{t('header.airport_taxi')}</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.actions}>
          <div className={classes.actionsIC}>
            <Link to="/cart">
              <img src={cartIcon} alt="Cart" className={classes.cart} />
            </Link>
            <div className={classes.LanguageSwitcherCon}>
              <LanguageSwitcher />
            </div>
          </div>
          <img className={classes.hamburger} onClick={toggleMenu} src={hamb} alt="" />
        </div>
      </nav>

      {isMenuOpen && (
        <div className={classes.menu_dropdown}>
          <ul>
            <li>
              <Link
                to="/contacts"
                className={isActive('/contacts')}
                onClick={closeMenu}
              >
                <p className={classes.LinkP}>{t('header.contacts')}</p>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isActive('/about')}
                onClick={closeMenu}
              >
                <p className={classes.LinkP}>{t('header.about')}</p>
              </Link>
            </li>
            <li>
              <Link
                to="/flights"
                className={isActive('/flights')}
                onClick={closeMenu}
              >
                <p className={classes.LinkP}>{t('header.flights')}</p>
              </Link>
            </li>
            <li>
              <Link
                to="/accommodation"
                className={isActive('/accommodation')}
                onClick={closeMenu}
              >
                <p className={classes.LinkP}>{t('header.accommodation')}</p>
              </Link>
              <Link
                to="/leisure"
                className={isActive('/leisure')}
                onClick={closeMenu}
              >
                <p className={classes.LinkP}>{t('header.leisure')}</p>
              </Link>
              <Link
                to="/airport-taxi"
                className={isActive('/airport-taxi')}
                onClick={closeMenu}
              >
                <p className={classes.LinkP}>{t('header.airport_taxi')}</p>
              </Link>
            </li>
            {isAuthenticated ? (
                <>
                  <li>
                    <Link
                      to="/personal-page"
                      className={isActive('/personal-page')}
                      onClick={closeMenu}
                    >
                      <p className={classes.LinkP}>{t('header.personal_page')}</p>
                    </Link>
                  </li>
                  <li>
                    <p className={classes.LinkP} onClick={logout}>{t('header.logout')}</p>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className={isActive('/login')}
                      onClick={closeMenu}
                    >
                      <p className={classes.LinkP}>{t('header.login')}</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className={isActive('/register')}
                      onClick={closeMenu}
                    >
                      <p className={classes.LinkP}>{t('header.register')}</p>
                    </Link>
                  </li>
                </>
              )}
              <Link to="/register">
              <div className={classes.actions}>
                <img
                  src={cartIcon}
                  alt="Cart"
                  className={classes.cartInList}
                  onClick={() => {closeMenu();}}
                />
              </div>
              </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
