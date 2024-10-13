import React, { useContext } from 'react';
import classes from './Navigation.module.css';
import logoImage from '../../../img/logoImage.png';
import cartIcon from '../../../img/cartIcon.png'; 
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { AuthContext } from '../../../context/context'; 

const Navigation = ({ navigate }) => {
  const { t } = useTranslation();
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className={classes.navigation}>
      <div className={classes.logo}>
        <img src={logoImage} alt="LOGO" />
      </div>
      <div className={classes.rows_box}>
        <div className={classes.rows}>
          <ul className={classes.nav_links}>
            <li><p onClick={() => navigate('/contacts')}>{t('header.contacts')}</p></li>
            <li><p onClick={() => navigate('/about')}>{t('header.about')}</p></li>
            {isAuthenticated ? (
              <>
                <li><p onClick={() => navigate('/personal-page')}>{t('header.personal_page')}</p></li>
                <li><p onClick={logout}>{t('header.logout')}</p></li>
              </>
            ) : (
              <>
                <li><p onClick={() => navigate('/login')}>{t('header.login')}</p></li>
                <li><p onClick={() => navigate('/register')}>{t('header.register')}</p></li>
              </>
            )}
          </ul>
        </div>
        <div className={classes.rows}>
          <ul className={classes.nav_links}>
            <li><p onClick={() => navigate('/flights')}>{t('header.flights')}</p></li>
            <li><p onClick={() => navigate('/accommodation')}>{t('header.accommodation')}</p></li>
            <li><p onClick={() => navigate('/leisure')}>{t('header.leisure')}</p></li>
            <li><p onClick={() => navigate('/airport-taxi')}>{t('header.airport_taxi')}</p></li>
          </ul>
        </div>
      </div>
        <div className={classes.actions}>
          <img src={cartIcon} alt="Cart" className={classes.cart} onClick={() => navigate('/cart')} />
        </div>
        <LanguageSwitcher />
    </nav>
  );
}

export default Navigation;