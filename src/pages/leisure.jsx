import React from 'react';
import PaginationRestCardsComponent from '../components/UI/PaginationRestCardsComponent/PaginationRestCardsComponent'
import ImageGallery from '../components/UI/ImageGalleryLeisure/ImageGalleryLeisure'

import classes from './leisure.module.css'

const Leisure = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.ImageGalleryCon}>
                <ImageGallery/>
            </div>
            <div className={classes.PaginationRestCardsComponentCon}>
                <PaginationRestCardsComponent/> 
            </div>
        </div>
    );
};
  
export default Leisure;