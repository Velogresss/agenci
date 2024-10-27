import React from 'react';
import classes from './RatingComponent.module.css';

const RatingComponent = ({ rate }) => {
  const ratingsArray = rate.toString().split('').map(Number);

  const averageRating = Math.round(
    ratingsArray.reduce((acc, num) => acc + num, 0) / ratingsArray.length
  );

  const getRatingText = (rating) => {
    switch (rating) {
      case 5:
        return "Відмінно";
      case 4:
        return "Дуже добре";
      case 3:
        return "Добре";
      case 2:
        return "Задовільно";
      case 1:
      default:
        return "Погано";
    }
  };

  const sliders = [
    { name: "Чистота", value: ratingsArray[0] || 1 },
    { name: "Зручність", value: ratingsArray[1] || 1 },
    { name: "Розташування", value: ratingsArray[2] || 1 },
    { name: "Сервіс", value: ratingsArray[3] || 1 },
  ];

  return (
    <div className={classes.ratingContainer}>
      <div className={classes.overallRating}>
        <p className={classes.ratingText}>{getRatingText(averageRating)}</p>
        <div className={classes.stars}>
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < averageRating ? classes.filledStar : classes.emptyStar}>
              ★
            </span>
          ))}
        </div>
      </div>

      <div className={classes.sliders}>
        {sliders.map((slider, index) => (
          <div key={index} className={classes.sliderContainer}>
            <p>{slider.name}</p>
            <input
              type="range"
              min="1"
              max="5"
              value={slider.value}
              className={classes.slider}
              readOnly
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingComponent;