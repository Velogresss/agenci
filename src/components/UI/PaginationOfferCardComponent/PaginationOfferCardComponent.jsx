import React, { useState, useEffect } from 'react';
import OfferCard from '../OfferCard/OfferCard';
import classes from './PaginationOfferCardComponent.module.css';

import myImage1 from '../../../img/Offer/offer-1.png'
import myImage2 from '../../../img/Offer/galata-4043037_1280 2.png'
import myImage3 from '../../../img/Offer/japan-1805865_1280 2.png'

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
];

const PaginationComponent = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const offset = (currentPage - 1) * itemsPerPage;
    setCurrentItems(data.slice(offset, offset + itemsPerPage));
  }, [currentPage, data, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Акційні пропозиції</h1>
      <div className={classes.grid}>
        {currentItems.map((item, index) => (
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
      <div className={classes.pagination}>
        <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
          &lt;&lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={page === currentPage ? classes.active : ''}
          >
            {page}
          </button>
        ))}
        <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

const PaginationOfferCardsComponent = () => {
  return <PaginationComponent data={dataOffer} itemsPerPage={10} />;
};

export default PaginationOfferCardsComponent;
