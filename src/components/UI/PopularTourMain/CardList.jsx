import React, { useState } from 'react';
import Card from './Card';
import styles from './CardList.module.css';

import franceImage from '../../../img/PopularTour/france.jpg'
import dubaiImage from '../../../img/PopularTour/dubai.jpg'
import japanImage from '../../../img/PopularTour/japan.jpg'
import koreaImage from '../../../img/PopularTour/korea.jpg'
import turkeyImage from '../../../img/PopularTour/turk.jpg'

import { useTranslation } from 'react-i18next';

const rawData = [
  {
    image: franceImage,
    titleKey: 'CardListAll.France',
    descriptionKey: 'CardListAll.DetailsFrance'
  },
  {
    image: turkeyImage,
    titleKey: 'CardListAll.Turkey',
    descriptionKey: 'CardListAll.DetailsTurkey'
  },
  {
    image: japanImage,
    titleKey: 'CardListAll.Japan',
    descriptionKey: 'CardListAll.DetailsJapan'
  },
  {
    image: dubaiImage,
    titleKey: 'CardListAll.Dubai',
    descriptionKey: 'CardListAll.DetailsDubai'
  },
  {
    image: koreaImage,
    titleKey: 'CardListAll.Korea',
    descriptionKey: 'CardListAll.DetailsKorea'
  }
];

const CardList = () => {
  const { t } = useTranslation(); 
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const translatedData = rawData.map(item => ({
    image: item.image,
    title: t(item.titleKey),
    description: t(item.descriptionKey)
  }));

  const handleCardClick = (index) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

  return (
  <div className={styles.cardListContainer}> 
  <h1>Популярні тури</h1>
    <div className={styles.cardList}>
      {translatedData.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          isSelected={selectedCardIndex === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  </div>
  );
};

export default CardList;