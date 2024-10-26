import React from 'react';
import AccommodationCard from '../components/UI/AccommodationComponent/AccommodationCard'
import styles from './accomodation.module.css'

const Accommodation = () => {
  return (
    <div className={styles.container}>
      <h1>Пошук за типом помешкання</h1>
      <AccommodationCard/>
    </div>
  );
};

export default Accommodation;