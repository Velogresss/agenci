import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTotalPrice } from '../../../../Redux/priceActions';
import styles from './PriceInfo.module.css';

function PriceInfo() {
  const dispatch = useDispatch();
  const roomSearchData = useSelector((state) => state.roomSearch);
  const residenceData = useSelector((state) => state.residence.residenceData);
  const discount = useSelector((state) => state.promo.discount);

  const calculateDaysBetween = (startDateStr, endDateStr) => {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
  
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const differenceInMs = endDate - startDate;
  
    return Math.floor(differenceInMs / millisecondsPerDay);
  };

  const taxRate = 0.1; 
  const discountRate = discount;

  const daysBetween = calculateDaysBetween(roomSearchData.startDate, roomSearchData.endDate);
  const basePrice = daysBetween * residenceData.apart_price;

  const taxAmount = basePrice * taxRate;
  const discountAmount = basePrice * discountRate;
  const totalPrice = basePrice + taxAmount - discountAmount; 
  
  dispatch(setTotalPrice(totalPrice.toFixed(2)));

  const handleButtonClick = () => {
    sessionStorage.setItem('totalPrice', totalPrice.toFixed(2)); 
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <h3>Інформація про ціну</h3>
        <p>Ціна за {daysBetween} днів: {basePrice} UAH</p>
        <p>Податки: {taxAmount.toFixed(2)} UAH</p>
        <p>Спеціальна знижка: {discountAmount.toFixed(2)} UAH</p>
        <h3>Усього: {totalPrice.toFixed(2)} UAH</h3>
      </div>
      <div className={styles.containerInner2}>
        <button onClick={handleButtonClick}>Продовжити</button> 
      </div>
    </div>
  );
}

export default PriceInfo;