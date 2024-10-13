import React from 'react'
import bannerImage from '../img/lake.png'
import PaginationRestCardsComponent from '../components/UI/PaginationRestCardsComponent/PaginationRestCardsComponent'
import PaginationOfferCardComponent from '../components/UI/PaginationOfferCardComponent/PaginationOfferCardComponent'
import AboutUs from '../components/UI/AboutUsMainComponent/AboutUs'
import classes from './all.module.css'
import CardList from '../components/UI/PopularTourMain/CardList'

function All() {
  return (
    <div className='App'>
      <div>
        <img className={classes.bannerImage} src={bannerImage} alt="" />
      </div>
      <div>
        <PaginationOfferCardComponent/>
      </div>
      <CardList/>
      <AboutUs/>
    </div>
  );  
}

export default All;