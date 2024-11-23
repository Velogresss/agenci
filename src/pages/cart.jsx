import React from 'react';
import classes from './cart.module.css'

import { useNavigate } from 'react-router-dom';

function Cart() {
const navigate = useNavigate();

let totalPrice = sessionStorage.getItem('totalPrice'); 
let startDate = sessionStorage.getItem('startDate');
let endDate = sessionStorage.getItem('endDate');
let daysBetweenV = sessionStorage.getItem('daysBetween');
let imgHotel = sessionStorage.getItem('img');

let residenceName = sessionStorage.getItem('residenceName');
let roomSearchDataA = sessionStorage.getItem('roomSearchDataA');
let roomSearchDataC = sessionStorage.getItem('roomSearchDataC');
let residenceDataBads = sessionStorage.getItem('residenceDataBads');


  return (
    <div className={classes.cartHotelConatinerAll}>
    <div className={classes.cartHotelConatiner}>
      <div>
       <h1>Заброньовані готелі</h1>
      </div>
      <div className={classes.cartHotelConatinerInner}>
        <div>
          <img src={imgHotel} alt="" className={classes.cartHotelConatinerInnerImage} />
        </div>
        <div className={classes.cartHotelConatinerInner2}>
          <h2>{residenceName}</h2>
          <p><span>{startDate} - {endDate}</span> Кількість ночей: <span>{daysBetweenV}</span></p>
          <p>Дорослі: <span>{roomSearchDataA}</span> Діти: <span>{roomSearchDataC}</span></p>
          <p>{residenceDataBads}</p>
          <p>Ціна за бронювання: <span>{totalPrice}  UAH</span></p>
        </div>
      </div>
    </div>
      <div className={classes.cartHotelConatinerButton}>
        <button onClick={navigate('/about')}>Сплатити</button>
      </div>
    </div>
  );
}

export default Cart;