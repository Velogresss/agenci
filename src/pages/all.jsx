import bannerImage from '../img/lake.png'
import PaginationOfferCardComponent from '../components/UI/PaginationOfferCardComponent/PaginationOfferCardComponent'
import AboutUs from '../components/UI/AboutUsMainComponent/AboutUs'
import classes from './all.module.css'
import CardList from '../components/UI/PopularTourMain/CardList'

import FlightSearch from '../components/UI/FlightSearch/FlightSearch'

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
    <div className={classes.CardListCont}>
      <CardList/>
    </div> 
      <div className={classes.AboutUsC}>
        <AboutUs/> 
      </div>
    </div>
  );                                  
}

export default All;