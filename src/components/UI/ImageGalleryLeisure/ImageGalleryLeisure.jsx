import React from 'react';
import { useTranslation } from 'react-i18next';

import hongkongImage from '../../../img/Leisures/hongkong.jpg'
import rainforestImage from '../../../img/Leisures/rainforest.jpg'
import zebrasImage from '../../../img/Leisures/zebras.jpg'

import classes from './ImageGalleryLeisure.module.css'

const ImageGallery = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={classes.gallery}>
        <div className={classes.imageItem}>
          <img src={rainforestImage} alt="Jungle" />
          <div className={classes.trans}></div>
          <p>{t('ImageGalleryLesure.jungleTitle')}</p>
        </div>
        <div className={classes.imageItem}>
          <img src={zebrasImage} alt="Africa" />
          <div className={classes.trans}></div>
          <p>{t('ImageGalleryLesure.africaTitle')}</p>
        </div>
        <div className={classes.imageItem}>
          <img src={hongkongImage} alt="China" />
          <div className={classes.trans}></div>
          <p>{t('ImageGalleryLesure.chinaTitle')}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
