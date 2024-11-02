import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from "./AviaTrails.module.css";

import $ from 'jquery';
import 'daterangepicker/daterangepicker.css';
import moment from 'moment';
import 'daterangepicker';

import Bus from '../img/AviaTrails/Bus.jpg';
import Eko from '../img/AviaTrails/Eko.jpg';
import Fir from '../img/AviaTrails/First.jpg';
import Prem from '../img/AviaTrails/Prem.png';

const FlightSearch = () => {
  const today = new Date();
  const [flightType, setFlightType] = useState('roundTrip');
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);

  useEffect(() => {
    $('input[name="daterange"]').daterangepicker({
      startDate: moment(startDate, 'MM/DD/YYYY'),
      endDate: moment(endDate, 'MM/DD/YYYY'),
      singleDatePicker: false,
      showShortcuts: false,
      showTopbar: false,
      locale: {
        format: 'MM/DD/YYYY',
        applyLabel: 'Застосувати',
        cancelLabel: 'Скасувати',
        fromLabel: 'Від',
        toLabel: 'До',
        weekLabel: 'Нд',
        customRangeLabel: 'Власний діапазон',
      },
    }, function(start, end) {
      setStartDate(start.format('MM/DD/YYYY'));
      setEndDate(end.format('MM/DD/YYYY'));
    });
  }, [startDate, endDate]);

    return (
      <div className={styles.aviaTrailsCont}>
        <h2 className={styles.title}>Переліт</h2>

        <div className={styles.options}>
          <label className={styles.label}>
            <input
              type="radio"
              name="flightType"
              value="roundTrip"
              checked={flightType === 'roundTrip'}
              onChange={() => setFlightType('roundTrip')}
            />
            В обидва кінці
          </label>
          <label className={styles.label}>
            <input
              type="radio"
              name="flightType"
              value="oneWay"
              checked={flightType === 'oneWay'}
              onChange={() => setFlightType('oneWay')}
            />
            В один кінець
          </label>
          <label className={styles.label}>
            <input
              type="radio"
              name="flightType"
              value="multiCity"
              checked={flightType === 'multiCity'}
              onChange={() => setFlightType('multiCity')}
            />
            Складний маршрут
          </label>
        </div>

        <div className={styles.inputs}>
          <div className={styles.inputsInner}>
            <input className={styles.input} type="text" placeholder="Місто" />
            <input className={styles.input} type="text" placeholder="Місто прибуття" />
            {flightType == 'roundTrip' && <input
              type="text"
              name="daterange"
              defaultValue={`${startDate} - ${endDate}`}
              className={`${styles.input}`}
            />}
            {flightType !== 'roundTrip' && <input className={styles.input} type="date" />}
            <select className={`${styles.select} ${styles.input}`}>
              <option value="1">1 дорослий</option>
              <option value="2">2 дорослих</option>
            </select>
          </div>

          {flightType === 'multiCity' && (
            <div className={styles.inputsInner}>
              <input className={styles.input} type="text" placeholder="Місто" />
              <input className={styles.input} type="text" placeholder="Місто прибуття" />
              <input className={styles.input} type="date" placeholder="Виберіть дату" />
              <div className={`${styles.select} ${styles.input} ${styles.invisible}`}></div>
            </div>
          )}

          <div className={styles.inputsButton}>
            <button className={`${styles.searchButton} ${styles.input}`}>&#128269; Пошук</button>
          </div>
        </div>

        <div className={styles.classOptions}>
        <Link to='/flights/premium'>
          <div className={styles.option}>
            <img src={Prem} alt="Преміум-економ" />
            <div className={styles.veil}></div>
              <p>Преміум - економ</p>
          </div>
        </Link>
        <Link to='/flights/first'>
          <div className={styles.option}>
            <img src={Fir} alt="Перший клас" />
            <div className={styles.veil}></div>
              <p>Перший клас</p>
          </div>
        </Link>
        <Link to='/flights/econom'>
          <div className={styles.option}>
            <img src={Eko} alt="Економ" />
            <div className={styles.veil}></div>
              <p>Економ</p>
          </div>
        </Link>
        <Link to='/flights/business'>
          <div className={styles.option}>
            <img src={Bus} alt="Бізнес клас" />
            <div className={styles.veil}></div>
              <p>Бізнес клас</p>
          </div>
          </Link>
        </div>
      </div>
    );
  };

export default FlightSearch;