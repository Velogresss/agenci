import React from 'react';
import classes from './LinksFooter.module.css';

import imgGoogle from '../../../img/footer/imageGoogle.png';
import imgFacebook from '../../../img/footer/imageFacebook.png';
import imgApple from '../../../img/footer/imageApple.png';

import AuthGoogle from '../../API/AuthGoolge/AuthGoogle'

const LinksFooter = () => {
  return (
    <div className={classes.socialIcons}>
      <div className={classes.a}>
        <img className={classes.img1} src={imgFacebook} alt="Facebook" />
      </div>
      <div className={classes.a}>    
        <AuthGoogle connection={"http://localhost:5083"} className={classes.img2}/>
      </div>
      <div className={classes.a}>
        <img className={classes.img3} src={imgApple} alt="Apple" />
      </div>
    </div>
  );
};

export default LinksFooter;