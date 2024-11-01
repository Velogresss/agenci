import React, { useState, useEffect } from 'react';
import styles from './RoomSearchPeople.module.css';

import { useSelector } from 'react-redux';

const RoomSearchPeople = ({onPeopleChange}) => {
  const roomSearchData = useSelector((state) => state.roomSearch);
  const [adults, setAdults] = useState(roomSearchData.adults);
  const [children, setChildren] = useState(roomSearchData.childr);
  const [rooms, setRooms] = useState(1);
  const [isOpen, setIsOpen] = useState(false); 

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    onPeopleChange({ adults, children, rooms });
  }, [adults, children, rooms, onPeopleChange]);

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  return (
    <div className={`${styles.container}`}>
      <button onClick={toggleOpen} className={styles.button}>
        <span className={styles.summary}>{adults} дорослих · {children} дітей · {rooms} номер</span>
        <span className={styles.icon}>▼</span>
      </button>

      {isOpen && (
        <div className={`${styles.dropdown}`}>
          <div className={styles.field}>
            <span className={styles.span}>Дорослі</span>
            <button onClick={() => decrement(setAdults, adults)} className={styles.counterButton}>-</button>
            <span className={styles.count}>{adults}</span>
            <button onClick={() => increment(setAdults, adults)} className={styles.counterButton}>+</button>
          </div>
          <div className={styles.field}>
            <span className={styles.span}>Діти</span>
            <button onClick={() => decrement(setChildren, children)} className={styles.counterButton}>-</button>
            <span className={styles.count}>{children}</span>
            <button onClick={() => increment(setChildren, children)} className={styles.counterButton}>+</button>
          </div>
          <div className={styles.field}>
            <span className={styles.span}>Номери</span>
            <button onClick={() => decrement(setRooms, rooms)} className={styles.counterButton}>-</button>
            <span className={styles.count}>{rooms}</span>
            <button onClick={() => increment(setRooms, rooms)} className={styles.counterButton}>+</button>
          </div>
          <button onClick={() => setIsOpen(false)} className={styles.confirmButton}>Готово</button>
        </div>
      )}
    </div>
  );
};

export default RoomSearchPeople;
