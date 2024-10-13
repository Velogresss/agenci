import React from 'react'
import classes from './RestCards.module.css'
import url from '../../../img/Offer/offer-1.png'

const RestCard = ({url, alt, text}) => {
  return (
    <div className={classes.rest_card}>
        <img className={classes.image} src={url} alt={alt}/>
        <p className={classes.text}>{text}</p>
    </div>
  );
}

export default RestCard;

// import React from 'react'
// import classes from './RestCards.module.css'
// // import url from '../../../img/Offer/offer-1.png'

// const RestCard = ({alt, text}) => {
//   return (
//     <div className={classes.rest_card}>
//         {/* <img className={classes.image} src={url} alt={alt}/> */}
//         <img className={classes.image} src={url} alt={alt}/>
//         <p className={classes.text}>{text}</p>
//     </div>
//   );
// }

// export default RestCard;