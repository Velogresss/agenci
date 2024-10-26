import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Footer.module.css';
import LinksFooter from '../LinksFooter/LinksFooter';

import imgMC from '../../../img/footer/imageMasterCard.png';
import imgUATP from '../../../img/footer/imageUATP.png';
import imgVisa from '../../../img/footer/imageVisa.png';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path ? classes.active : '';

  return (
    <footer className={classes.footer}>
      <div className={classes.section}>
        <h3>Про нас</h3>
        <ul>
          <li className={isActive('/contacts')}>
            <Link to="/contacts" className={isActive('/about')}>
              <p className={classes.LinkPAboutUs}>Контакти</p>
            </Link>
          </li>
          <li className={isActive('/flights')}>
            <Link to="/flights" className={isActive('/about')}>
              <p className={classes.LinkPAboutUs}>Авіарейси</p>
            </Link>
          </li>
          <li className={isActive('/about')}>
            <Link to="/about" className={isActive('/about')}>
              <p className={classes.LinkPAboutUs}>Про нас</p>
            </Link>
          </li>
          <li className={isActive('/accommodation')}>
            <Link to="/accommodation" className={isActive('/about')}>
              <p className={classes.LinkPAboutUs}>Помешкання</p>
            </Link>
          </li>
          <li className={isActive('/leisure')}>
            <Link to="/leisure" className={isActive('/about')}>
              <p className={classes.LinkPAboutUs}>Дозвілля</p>
            </Link>
          </li>
          <li className={isActive('/airport-taxi')}>
            <Link to="/airport-taxi" className={isActive('/about')}>
              <p className={classes.LinkPAboutUs}>Таксі з/до аеропорту</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className={classes.section}>
        <h3>Інші послуги</h3>
        <ul>
          <li>
            <Link to="/all" className={isActive('/about')}>
              <p className={classes.LinkP}>Планування та проведення заходів для клієнтів та партнерів</p>
            </Link>            
          </li>
          <li>
            <Link to="/all" className={isActive('/about')}>
              <p className={classes.LinkP}>Підтримка клієнтів до та після подорожі</p>
            </Link> 
          </li>
          <li>
            <Link to="/all" className={isActive('/about')}>
              <p className={classes.LinkP}>Консультації та надання інформації про туристичні послуги</p>
            </Link>
          </li>
        </ul>

        <div className={classes.paymentSection}>
          <h3>Способи оплати</h3>
          <div className={classes.paymentIcons}>
            <img src={imgMC} alt="Mastercard" />
            <img src={imgUATP} alt="UATP" />
            <img src={imgVisa} alt="Visa" />
          </div>
        </div>
      </div>

      <div className={classes.section}>
        <h3>Підтримка</h3>
        <ul>
          <li className={isActive('/support')}>
            <Link to="/support" >
              <p className={classes.LinkP}>Служба підтримки клієнтів</p>
            </Link>
          </li>
          <li className={isActive('/guarantee')}>
            <Link to="/guarantee">
              <p className={classes.LinkP}>Гарантія обслуговування</p>
            </Link>
          </li>
        </ul>
        <LinksFooter />
      </div>
    </footer>
  );
};

export default Footer;