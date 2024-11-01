import React from 'react';
import { useSelector } from 'react-redux';
import styles from './HotelInfo.module.css';

const HotelInfo = ({ data }) => {
  const roomSearchData = useSelector((state) => state.roomSearch);

  const residenceData = useSelector((state) => state.residence.residenceData);

  console.log(roomSearchData); 
  console.log(roomSearchData.bads)

  const calculateDaysBetween = (startDateStr, endDateStr) => {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
  
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const differenceInMs = endDate - startDate;
  
    return Math.floor(differenceInMs / millisecondsPerDay);
  };

  const daysBetween = calculateDaysBetween(roomSearchData.startDate, roomSearchData.endDate);

  if (!data) {
    return <p>Дані не завантажено</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <img src={residenceData.img} alt="" className={styles.image} />
        <div className={styles.info}>
          <h2>{residenceData.name}</h2>
          <p>{residenceData.apart_name}</p>
          <p>Дорослі: {roomSearchData.adults} Діти: {roomSearchData.childr}</p>
          <p>{residenceData.bads}</p>
        </div>
      </div>
      <div className={styles.container2}>
        <p>{roomSearchData.startDate} - {roomSearchData.endDate}</p>
        <p>{daysBetween} ночей</p>
      </div>
    </div>
  );
}

export default HotelInfo;
