// import React, { useContext, useState } from 'react';
// import classes from './Navigation.module.css';
// import logoImage from '../../../img/logoImage.png';
// import cartIcon from '../../../img/cartIcon.png'; 
// import { useTranslation } from 'react-i18next';
// import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
// import { AuthContext } from '../../../context/context'; 
// import { MenuContext } from '../../../context/MenuContext';
// import hamb from '../../../img/Navigation/Vector.png'


// const Navigation = ({ navigate }) => {
//   const { t } = useTranslation();
//   const { isAuthenticated, logout } = useContext(AuthContext);
//   const { isMenuOpen, toggleMenu, closeMenu } = useContext(MenuContext);

//   const [activeLink, setActiveLink] = useState(null);

//   const handleClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <>
//     <nav className={classes.navigation}>
//       <div className={classes.logo}>
//         <img className={classes.logoImage} src={logoImage} alt="LOGO" onClick={() => {navigate('/all'); closeMenu();}}/>
//       </div>
//       <div className={classes.rows_box}>
//         <div className={classes.rows}>
//           <ul className={classes.nav_links}>
//             <li><p onClick={() => {navigate('/contacts'); closeMenu();}}>{t('header.contacts')}</p></li>
//             <li><p onClick={() => {navigate('/about'); closeMenu();}}>{t('header.about')}</p></li>
//             {isAuthenticated ? (
//               <>
//                 <li><p onClick={() => {navigate('/personal-page'); closeMenu();}}>{t('header.personal_page')}</p></li>
//                 <li><p onClick={logout}>{t('header.logout')}</p></li>
//               </>
//             ) : (
//               <>
//                 <li><p onClick={() => {navigate('/login'); closeMenu();}}>{t('header.login')}</p></li>
//                 <li><p onClick={() => {navigate('/register'); closeMenu();}}>{t('header.register')}</p></li>
//               </>
//             )}
//           </ul>
//         </div>
//         <div className={classes.rows}>
//           <ul className={classes.nav_links}>
//             <li><p onClick={() => { navigate('/flights'); closeMenu();} }>{t('header.flights')}</p></li>
//             <li><p onClick={() => { navigate('/accommodation'); closeMenu();} }>{t('header.accommodation')}</p></li>
//             <li><p onClick={() => { navigate('/leisure'); closeMenu();} }>{t('header.leisure')}</p></li>
//             <li><p onClick={() => { navigate('/airport-taxi'); closeMenu();} }>{t('header.airport_taxi')}</p></li>
//           </ul>
//         </div>
//       </div>
//         <div className={classes.actions}>
//           <img src={cartIcon} alt="Cart" className={classes.cart} onClick={() => navigate('/cart')} />
//         </div>
//         <LanguageSwitcher />
//         {/* <div className={classes.hamburger} onClick={toggleMenu}>&#9776;</div> */}
//         <img className={classes.hamburger} onClick={toggleMenu} src={hamb} alt="" />
//     </nav>
//     {isMenuOpen && (
//       <div className={classes.menu_dropdown}>
//         <ul>
//           <li><p onClick={() => {navigate('/contacts'); closeMenu();}}>{t('header.contacts')}</p></li>
//           <li><p onClick={() => {navigate('/about'); closeMenu();}}>{t('header.about')}</p></li>
//           <li><p onClick={() => {navigate('/flights'); closeMenu();}}>{t('header.flights')}</p></li>
//           <li><p onClick={() => {navigate('/accommodation'); closeMenu();}}>{t('header.accommodation')}</p></li>
//           <li><p onClick={() => {navigate('/leisure'); closeMenu();}}>{t('header.leisure')}</p></li>
//           <li><p onClick={() => {navigate('/airport-taxi'); closeMenu();}}>{t('header.airport_taxi')}</p></li>
//           {isAuthenticated ? (
//             <>
//               <li><p onClick={() => {navigate('/personal-page'); closeMenu();}}>{t('header.personal_page')}</p></li>
//               <li><p onClick={logout}>{t('header.logout')}</p></li>
//             </>
//           ) : (
//             <>
//               <li><p onClick={() => {navigate('/login'); closeMenu();}}>{t('header.login')}</p></li>
//               <li><p onClick={() => {navigate('/register'); closeMenu();}}>{t('header.register')}</p></li>
//             </>
//           )}
//           <div className={classes.actions}>
//             <img src={cartIcon} alt="Cart" className={classes.cartInList} onClick={() => {navigate('/cart'); closeMenu();}} />
//           </div>
//         </ul>
//       </div>
//     )}
//     </>
//   );
// }

// export default Navigation;

import React, { useContext, useState } from 'react';
import classes from './Navigation.module.css';
import logoImage from '../../../img/logoImage.png';
import cartIcon from '../../../img/cartIcon.png'; 
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { AuthContext } from '../../../context/context'; 
import { MenuContext } from '../../../context/MenuContext';
import hamb from '../../../img/Navigation/Vector.png';


const Navigation = ({ navigate }) => {
  const { t } = useTranslation();
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { isMenuOpen, toggleMenu, closeMenu } = useContext(MenuContext);

  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  return (
    <>
      <nav className={classes.navigation}>
        <div className={classes.logo}>
          <img
            className={classes.logoImage}
            src={logoImage}
            alt="LOGO"
            onClick={() => {
              navigate('/all');
              handleClick(null);
            }}
          />
        </div>
        <div className={classes.rows_box}>
          <div className={classes.rows}>
            <ul className={classes.nav_links}>
              <li>
                <p
                  onClick={() => {handleClick('contacts'); navigate('/contacts')}}
                  className={activeLink === 'contacts' ? classes.active : ''}
                >
                  {t('header.contacts')}
                </p>
              </li>
              <li>
                <p
                  onClick={() => {handleClick('about'); navigate('/about')}}
                  className={activeLink === 'about' ? classes.active : ''}
                >
                  {t('header.about')}
                </p>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <p
                      onClick={() => {handleClick('personal-page'); navigate('/personal-page')}}
                      className={activeLink === 'personal-page' ? classes.active : ''}
                    >
                      {t('header.personal_page')}
                    </p>
                  </li>
                  <li>
                    <p onClick={logout}>{t('header.logout')}</p>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <p
                      onClick={() => {handleClick('login'); navigate('/login')}}
                      className={activeLink === 'login' ? classes.active : ''}
                    >
                      {t('header.login')}
                    </p>
                  </li>
                  <li>
                    <p
                      onClick={() => {handleClick('register'); navigate('/register')}}
                      className={activeLink === 'register' ? classes.active : ''}
                    >
                      {t('header.register')}
                    </p>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className={classes.rows}>
            <ul className={classes.nav_links}>
              <li>
                <p
                  onClick={() => {handleClick('flights'); navigate('/flights')}}
                  className={activeLink === 'flights' ? classes.active : ''}
                >
                  {t('header.flights')}
                </p>
              </li>
              <li>
                <p
                  onClick={() => {handleClick('accommodation'); navigate('/accommodation')}}
                  className={activeLink === 'accommodation' ? classes.active : ''}
                >
                  {t('header.accommodation')}
                </p>
              </li>
              <li>
                <p
                  onClick={() => {handleClick('leisure'); navigate('/leisure')}}
                  className={activeLink === 'leisure' ? classes.active : ''}
                >
                  {t('header.leisure')}
                </p>
              </li>
              <li>
                <p
                  onClick={() => {handleClick('airport-taxi'); navigate('/airport-taxi')}}
                  className={activeLink === 'airport-taxi' ? classes.active : ''}
                >
                  {t('header.airport_taxi')}
                </p>
              </li>
            </ul>
          </div>
        </div>  
      <div className={classes.actions}>
        <div className={classes.actionsIC}>
          <img
            src={cartIcon}
            alt="Cart"
            className={classes.cart}
            onClick={() => {navigate('/cart'); navigate('/cart')}}
          />
          <div className={classes.LanguageSwitcherCon}>
            <LanguageSwitcher />
          </div>
      </div>
        </div>       
        <img className={classes.hamburger} onClick={toggleMenu} src={hamb} alt="" />
      </nav>
      {isMenuOpen && (
        <div className={classes.menu_dropdown}>
          <ul>
            <li>
              <p
                onClick={() => {handleClick('contacts'); navigate('/contacts')}}
                className={activeLink === 'contacts' ? classes.active : ''}
              >
                {t('header.contacts')}
              </p>
            </li>
            <li>
              <p
                onClick={() => {handleClick('about'); navigate('/about')}}
                className={activeLink === 'about' ? classes.active : ''}
              >
                {t('header.about')}
              </p>
            </li>
            <li>
              <p
                onClick={() => {handleClick('flights'); navigate('/flights')}}
                className={activeLink === 'flights' ? classes.active : ''}
              >
                {t('header.flights')}
              </p>
            </li>
            <li>
              <p
                onClick={() => {handleClick('accommodation'); navigate('/accommodation')}}
                className={activeLink === 'accommodation' ? classes.active : ''}
              >
                {t('header.accommodation')}
              </p>
            </li>
            <li>
              <p
                onClick={() => {handleClick('leisure'); navigate('/leisure')}}
                className={activeLink === 'leisure' ? classes.active : ''}
              >
                {t('header.leisure')}
              </p>
            </li>
            <li>
              <p
                onClick={() => {handleClick('airport-taxi'); navigate('/airport-taxi')}}
                className={activeLink === 'airport-taxi' ? classes.active : ''}
              >
                {t('header.airport_taxi')}
              </p>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <p
                    onClick={() => {handleClick('personal-page'); navigate('/personal-page')}}
                    className={activeLink === 'personal-page' ? classes.active : ''}
                  >
                    {t('header.personal_page')}
                  </p>
                </li>
                <li>
                  <p onClick={logout}>{t('header.logout')}</p>
                </li>
              </>
            ) : (
              <>
                <li>
                  <p
                    onClick={() => {handleClick('login'); navigate('/login')}}
                    className={activeLink === 'login' ? classes.active : ''}
                  >
                    {t('header.login')}
                  </p>
                </li>
                <li>
                  <p
                    onClick={() => {handleClick('register'); navigate('/register')}}
                    className={activeLink === 'register' ? classes.active : ''}
                  >
                    {t('header.register')}
                  </p>
                </li>
              </>
            )}
            <div className={classes.actions}>
              <img
                src={cartIcon}
                alt="Cart"
                className={classes.cartInList}
                onClick={() => {
                  navigate('/cart');
                  closeMenu();
                }}
              />
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;