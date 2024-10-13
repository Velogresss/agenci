// import React from 'react';
// import classes from './Footer.module.css';

// const Footer = ({ onNavigate }) => {
//   return (
//     <footer className={classes.footer}>
//       <div className={classes.section}>
//         <h3>Про нас</h3>
//         <ul>
//           <li onClick={() => onNavigate('/contacts')}>Контакти</li>
//           <li onClick={() => onNavigate('/flights')}>Авіарейси</li>
//           <li onClick={() => onNavigate('/about')}>Про нас</li>
//           <li onClick={() => onNavigate('/accommodation')}>Помешкання</li>
//           <li onClick={() => onNavigate('/leisure')}>Дозвілля</li>
//           <li onClick={() => onNavigate('/airport-taxi')}>Таксі з/до аеропорту</li>
//         </ul>
//       </div>

//       <div className={classes.section}>
//         <h3>Інші послуги</h3>
//         <ul>
//           <li>Планування та проведення заходів для клієнтів та партнерів.</li>
//           <li>Підтримка клієнтів до та після подорожі</li>
//           <li>Консультації та надання інформації про туристичні послуги</li>
//         </ul>
//       </div>

//       <div className={classes.section}>
//         <h3>Про нас</h3>
//         <ul>
//           <li onClick={() => onNavigate('/support')}>Служба підтримки клієнтів</li>
//           <li onClick={() => onNavigate('/guarantee')}>Гарантія обслуговування</li>
//         </ul>
//       </div>

//       <div className={classes.paymentSection}>
//         <h3>Способи оплати</h3>
//         <div className={classes.paymentIcons}>
//           <img src="/path/to/mastercard-icon.png" alt="Mastercard" />
//           <img src="/path/to/uatp-icon.png" alt="UATP" />
//           <img src="/path/to/visa-icon.png" alt="Visa" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import classes from './Footer.module.css';

import imgMC from '../../../img/footer/imageMasterCard.png';
import imgUATP from '../../../img/footer/imageUATP.png';
import imgVisa from '../../../img/footer/imageVisa.png';

import imgGoogle from '../../../img/footer/imageGoogle.png';
import imgFacebook from '../../../img/footer/imaageFacebook.png';

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
        <div className={classes.socialIcons}>
          <a href="https://www.facebook.com">
            <img src={imgFacebook} alt="Facebook" />
          </a>
          <a href="https://www.google.com">
            <img src={imgGoogle} alt="Google" />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
