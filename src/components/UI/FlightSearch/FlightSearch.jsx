import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import 'daterangepicker/daterangepicker.css';
import moment from 'moment';
import 'daterangepicker';
import styles from './FlightSearch.module.css';

const FlightSearch = () => {
  const today = new Date();
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);

  useEffect(() => {
    $('input[name="daterange"]').daterangepicker({
      startDate: moment(startDate, 'MM/DD/YYYY'),
      endDate: moment(endDate, 'MM/DD/YYYY'),
      singleDatePicker: false,
      showShortcuts: false,
      showTopbar: false,
    }, function(start, end) {
      setStartDate(start.format('MM/DD/YYYY'));
      setEndDate(end.format('MM/DD/YYYY'));
    });
  }, [startDate, endDate]);

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
          type="text"
          name="daterange"
          defaultValue={`${startDate} - ${endDate}`}
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