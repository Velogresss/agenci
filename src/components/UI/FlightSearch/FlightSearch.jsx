import React, { useState } from 'react';
import styles from './FlightSearch.module.css';

const FlightSearch = () => {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = () => {
    console.log('Searching for flights from', departureCity, 'to', arrivalCity, 'between', startDate, 'and', endDate);
  };

  return (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Місто вильоту"
        value={departureCity}
        onChange={(e) => setDepartureCity(e.target.value)}
        className={`${styles.input} ${styles.inputBox}`}
      />
      <input
        type="text"
        placeholder="Місто прибуття"
        value={arrivalCity}
        onChange={(e) => setArrivalCity(e.target.value)}
        className={`${styles.input} ${styles.inputBox}`}
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className={`${styles.input} ${styles.inputBox}`}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className={`${styles.input} ${styles.inputBox}`}
      />
    </div>
    <div className={styles.buttonContainer}>
        <button
        onClick={handleSearch}
        className={`${styles.button} ${styles.inputBox}`}
      >
        Пошук
      </button>
    </div>
  </div>
  );
};

export default FlightSearch;