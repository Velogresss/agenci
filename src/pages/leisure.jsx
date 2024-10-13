import React from 'react';
import PaginationRestCardsComponent from '../components/UI/PaginationRestCardsComponent/PaginationRestCardsComponent'
import ImageGallery from '../components/UI/ImageGalleryLeisure/ImageGalleryLeisure'

import classes from './leisure.module.css'

const CardList = () => {
    return (
        <div className={classes.wrapper}>
            <ImageGallery/>
            <PaginationRestCardsComponent/> 
        </div>
    );
};
  
export default CardList;