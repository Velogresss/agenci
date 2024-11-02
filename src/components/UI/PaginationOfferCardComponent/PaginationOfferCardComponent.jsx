import React from 'react';
import OfferCard from '../OfferCard/OfferCard';
import classes from './PaginationOfferCardComponent.module.css';

import { useTranslation } from 'react-i18next';

import myImage1 from '../../../img/Offer/offer-1.png';
import myImage2 from '../../../img/Offer/galata-4043037_1280 2.png';
import myImage3 from '../../../img/Offer/japan-1805865_1280 2.png';
import myImage4 from '../../../img/Offer/7_img-190812-1434393501.jpg';
import myImage5 from '../../../img/Offer/img-210201-1540293782.jpg';
import myImage6 from '../../../img/Offer/dubai-4044183_1280 2.png';

const OfferCardsComponent = () => {
const { t } = useTranslation();

const dataOffer = [
  {
    imgUrl: myImage1,
    discount: 39,
    oldPrice: t('offers.0.oldPrice'),
    newPrice: t('offers.0.newPrice'),
    title: t('offers.0.title'),
    description: t('offers.0.description'),
  },
  {
    imgUrl: myImage2,
    discount: 55,
    oldPrice: t('offers.1.oldPrice'),
    newPrice: t('offers.1.newPrice'),
    title: t('offers.1.title'),
    description: t('offers.1.description'),
  },
  {
    imgUrl: myImage3,
    discount: 12,
    oldPrice: t('offers.2.oldPrice'),
    newPrice: t('offers.2.newPrice'),
    title: t('offers.2.title'),
    description: t('offers.2.description'),
  },
  {
    imgUrl: myImage4,
    discount: 29,
    oldPrice: t('offers.3.oldPrice'),
    newPrice: t('offers.3.newPrice'),
    title: t('offers.3.title'),
    description: t('offers.3.description'),
  },
  {
    imgUrl: myImage5,
    discount: 50,
    oldPrice: t('offers.4.oldPrice'),
    newPrice: t('offers.4.newPrice'),
    title: t('offers.4.title'),
    description: t('offers.4.description'),
  },
  {
    imgUrl: myImage6,
    discount: 60,
    oldPrice: t('offers.5.oldPrice'),
    newPrice: t('offers.5.newPrice'),
    title: t('offers.5.title'),
    description: t('offers.5.description'),
  },
];

  return (
    <div className={classes.POCCWrapper}>
      <h1>{t('POCC.title')}</h1>
      <div className={classes.grid}>
        {dataOffer.map((item, index) => (
          <OfferCard
            key={index}
            imgUrl={item.imgUrl}
            discount={item.discount}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferCardsComponent;