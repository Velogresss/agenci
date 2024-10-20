import React from 'react';
import classes from './LinksFooter.module.css';

import imgGoogle from '../../../img/footer/imageGoogle.png';
import imgFacebook from '../../../img/footer/imageFacebook.png';
import imgApple from '../../../img/footer/imageApple.png';

const Footer = ({ onNavigate }) => {
  return (
    <div className={classes.socialIcons}>
      <a href="https://www.facebook.com">
        <img className={classes.img1} src={imgFacebook} alt="Facebook" />
      </a>
      <a href="https://www.google.com">
        <img className={classes.img2} src={imgGoogle} alt="Google" />
      </a>
      <a href="https://www.Apple.com">
        <img className={classes.img3} src={imgApple} alt="Apple" />
      </a>
    </div>
  );
};

export default Footer;
