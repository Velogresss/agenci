import React from 'react';
import classes from './Footer.module.css';
import LinksFooter from '../LinksFooter/LinksFooter'

import imgMC from '../../../img/footer/imageMasterCard.png';
import imgUATP from '../../../img/footer/imageUATP.png';
import imgVisa from '../../../img/footer/imageVisa.png';

import imgGoogle from '../../../img/footer/imageGoogle.png';
import imgFacebook from '../../../img/footer/imageFacebook.png';
import imgApple from '../../../img/footer/imageApple.png';

const Footer = ({ onNavigate }) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.section}>
        <h3>Про нас</h3>
        <ul>
          <li onClick={() => onNavigate('/contacts')}>Контакти</li>
          <li onClick={() => onNavigate('/flights')}>Авіарейси</li>
          <li onClick={() => onNavigate('/about')}>Про нас</li>
          <li onClick={() => onNavigate('/accommodation')}>Помешкання</li>
          <li onClick={() => onNavigate('/leisure')}>Дозвілля</li>
          <li onClick={() => onNavigate('/airport-taxi')}>Таксі з/до аеропорту</li>
        </ul>
      </div>

      <div className={classes.section}>
        <h3>Інші послуги</h3>
        <ul>
          <li>Планування та проведення заходів для клієнтів та партнерів</li>
          <li>Підтримка клієнтів до та після подорожі</li>
          <li>Консультації та надання інформації про туристичні послуги</li>
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
          <li onClick={() => onNavigate('/support')}>Служба підтримки клієнтів</li>
          <li onClick={() => onNavigate('/guarantee')}>Гарантія обслуговування</li>
        </ul>
        <LinksFooter/>
      </div>
    </footer>
  );
};

export default Footer;
