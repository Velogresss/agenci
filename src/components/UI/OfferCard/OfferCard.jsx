import React from 'react'
import classes from './OfferCard.module.css'

const OfferCard = ({ imgUrl, discount, oldPrice, newPrice, title, description }) => {
  return (
    <div className={classes.offer_card}>
      <img className={classes.image} src={imgUrl} alt={title} />
      <div className={classes.discount_circle}>
        {discount}%
      </div>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
      <div className={classes.price_container}>
        <span className={classes.old_price}><s>{oldPrice}</s></span>
        <span className={classes.new_price}>{newPrice}</span>
      </div>
    </div>
  );
};

export default OfferCard;