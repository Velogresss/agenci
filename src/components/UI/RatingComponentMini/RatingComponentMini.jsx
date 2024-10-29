import React from 'react';
import classes from './RatingComponentMini.module.css';

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
    </div>
  );
};

export default RatingComponent;