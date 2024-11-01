import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPromoSlice } from '../../../../Redux/promoSlice';
import styles from './PromoCode.module.css';
import promoCodes from './promoCodes';

const PromoCode = () => {
  const [promoInput, setPromoInput] = useState('');
  const dispatch = useDispatch();

  const handlePromoChange = (e) => {
    setPromoInput(e.target.value);
  };

  const applyPromoCode = () => {
    const discount = promoCodes[promoInput];
    if (discount) {
      dispatch(setPromoSlice(discount));
    } else {
      alert("Промокод недійсний");
    }
  };

  return (
    <div className={styles.container}>
      <h3>Промокод</h3>
      <input
        type="text"
        value={promoInput}
        onChange={handlePromoChange}
      />
      <button onClick={applyPromoCode}>Застосувати</button>
    </div>
  );
};

export default PromoCode;