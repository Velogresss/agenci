import React from 'react'
import bannerImage from '../img/lake.png'
import PaginationRestCardsComponent from '../components/UI/PaginationRestCardsComponent/PaginationRestCardsComponent'
import PaginationOfferCardComponent from '../components/UI/PaginationOfferCardComponent/PaginationOfferCardComponent'
import AboutUs from '../components/UI/AboutUsMainComponent/AboutUs'
import classes from './all.module.css'
import CardList from '../components/UI/PopularTourMain/CardList'
import FlightSearch from '../components/UI/FlightSearch/FlightSearch'

import Calenda from '../components/UI/Calendar/Calendar'

function All() {
  return (
    <div className='App'>
      <div className={classes.bannerImageWrapper}>
        <img className={classes.bannerImage} src={bannerImage} alt="" />
        <div className={classes.FlightSearchWrapper}>
          <FlightSearch/>
        </div>
      </div>
    <div className={classes.PaginationOfferCardComponentC}>
      <PaginationOfferCardComponent/>
    </div> 
      <CardList/>
      <div className={classes.AboutUsC}>
        <AboutUs/> 
      </div>
      <Calenda/>
    </div>
  );                                  
}

export default All;