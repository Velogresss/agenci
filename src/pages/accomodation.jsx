import React from 'react';
import AccommodationCard from '../components/UI/AccommodationComponent/AccommodationCard'
import styles from './accomodation.module.css'
import bannerImage from '../img/accomodation/2.jpg'

import RoomSearch from '../components/UI/RoomSearch/RoomSearch'

import CategoriesGrid from '../components/UI/AccomodationCoastA/CategoriesGrid'
import CategoriesGridD from '../components/UI/AccomodationCoastD/CategoriesGrid'

const Accommodation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerImageWrapper}>
        <img className={styles.bannerImage} src={bannerImage} alt="" />
        <div className={styles.FlightSearchWrapper}>
          <RoomSearch/>
      </div>
      </div>
      <h1>Пошук за типом помешкання</h1>
      <AccommodationCard/>
      <h1>Недорогі помешкання</h1>
      <CategoriesGrid/>
      <h1>Популярні помешкання</h1>
      <CategoriesGridD/>
    </div>
  );
};

export default Accommodation;