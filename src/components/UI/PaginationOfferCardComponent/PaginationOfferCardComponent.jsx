import React from 'react';
import OfferCard from '../OfferCard/OfferCard';
import classes from './PaginationOfferCardComponent.module.css';

import myImage1 from '../../../img/Offer/offer-1.png';
import myImage2 from '../../../img/Offer/galata-4043037_1280 2.png';
import myImage3 from '../../../img/Offer/japan-1805865_1280 2.png';

const dataOffer = [
  {
    imgUrl: myImage1,
    discount: 39,
    oldPrice: '400$',
    newPrice: '302$',
    title: 'Авіатур до Праги',
    description: 'Це найбільший замковий комплекс у світі, символ чеської держави вже понад тисячу років. Він включений до списку Всесвітньої спадщини ЮНЕСКО та книги рекордів Гіннеса...',
  },
  {
    imgUrl: myImage2,
    discount: 55,
    oldPrice: '400$',
    newPrice: '190$',
    title: 'Дві столиці: Єреван та Тбілісі',
    description: 'Відкрийте для себе чарівність і багатство культурних традицій Єревану і Тбілісі в одному незабутньому подорожі!',
  },
  {
    imgUrl: myImage3,
    discount: 12,
    oldPrice: '400$',
    newPrice: '372$',
    title: 'Лаванда в Прованс',
    description: 'Зануртеся в атмосферу Провансу, де розкішні поля лаванди розстилаються до горизонту, створюючи неймовірні пейзажі, що зачаровують своїм фіолетовим сяйвом',
  },
  {
    imgUrl: myImage1,
    discount: 39,
    oldPrice: '400$',
    newPrice: '302$',
    title: 'Авіатур до Праги',
    description: 'Це найбільший замковий комплекс у світі, символ чеської держави вже понад тисячу років. Він включений до списку Всесвітньої спадщини ЮНЕСКО та книги рекордів Гіннеса...',
  },
  {
    imgUrl: myImage2,
    discount: 55,
    oldPrice: '400$',
    newPrice: '190$',
    title: 'Дві столиці: Єреван та Тбілісі',
    description: 'Відкрийте для себе чарівність і багатство культурних традицій Єревану і Тбілісі в одному незабутньому подорожі!',
  },
  {
    imgUrl: myImage3,
    discount: 12,
    oldPrice: '400$',
    newPrice: '372$',
    title: 'Лаванда в Прованс',
    description: 'Зануртеся в атмосферу Провансу, де розкішні поля лаванди розстилаються до горизонту, створюючи неймовірні пейзажі, що зачаровують своїм фіолетовим сяйвом',
  },
];

const OfferCardsComponent = () => {
  return (
    <div className={classes.POCCWrapper}>
      <h1>Акційні пропозиції</h1>
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