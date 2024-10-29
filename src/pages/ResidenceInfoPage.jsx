import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchResidenceInfo } from '../components/API/Accomodation/fetchResidenceInfo';
import classes from './ResidenceInfoPage.module.css';
import RatingComponent  from '../components/UI/RatingComponent/RatingComponent'
import RatingComponentMini from '../components/UI/RatingComponentMini/RatingComponentMini'

const ResidenceInfoPage = () => {
  const { id } = useParams();
  const [residenceInfo, setResidenceInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [priceForCont, setPriceForCont] = useState(null);

  const handleBookingClick = (price) => {
    setPriceForCont(price);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchResidenceInfo('http://localhost:5084', id);
        setResidenceInfo(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;
  
  const goBack = () => {
    window.history.back();
  }
  

  return (
    <div className={classes.container}>
      <h1>{residenceInfo.residence.residence_name}</h1>
      <div className={classes.residenceInfo}>
      <div className={classes.imageBox}>
        <img
          src={`http://localhost:5084/residence/${residenceInfo.photos[0].url}`}
          alt="Main photo"
          className={classes.mainPhoto}
        />
        <div className={classes.photoGallery}>
          {residenceInfo.photos.slice(1).map((photo) => (
            <img
              key={photo.number}
              src={`http://localhost:5084/residence/${photo.url}`}
              alt={`Photo ${photo.number}`}
              className={classes.galleryPhoto}
            />
          ))}
        </div>
      </div>
        <div className={classes.infoBox}>
          <div className={classes.ratingContainer}>
            <RatingComponentMini rate={residenceInfo.residence.rate}/>
            <a href="#" className={classes.reviewsLink}>Відгуки&gt;</a> 
          </div>
          <div className={classes.advantagesContainer}>
            <h3>Переваги</h3>
            <ul>
              {residenceInfo.advantages.map((advantage) => (
                <li key={advantage.id} className={classes.advantageItem}>
                  {advantage.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.confirmContainer}> 
          {priceForCont && (
            <div className={classes.confirmContainer}>
            <p>Ціна: {priceForCont} UAH за 1 ніч</p>
            <button className={classes.selectButton}>Обрати номер</button>
          </div>
      )}
          </div>
        </div>
      </div>

      {residenceInfo.apartments.map((apartment) => (
      <div key={apartment.info.id} className={classes.apartmentCard}>
        <div classes={classes.apartmentCardH3Con}>
          <h3 classes={classes.apartmentCardH3}>{apartment.info.apartment_name}</h3>
        </div>
        <div className={classes.apartmentCardAll}>
          <div className={classes.apartmentCardImageText}>
            <img
              src={`http://localhost:5084/apartment/${apartment.info.image}`}
              alt={apartment.info.apartment_name}
              className={classes.apartmentImage}
            />
              <div className={classes.tagsContainer}>
              <ul>
                {apartment.tags.map((tag) => (
                  <li key={tag.id} className={classes.tagItem}>
                    {tag.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={classes.apartmentDetails}>
            <div className={classes.detailsSection}>
              <div className={classes.detailsSectionCon}>
                <p>Зведені дані:</p>
              </div>
              <div className={classes.detailsSectionMain}>
              <ul>
                {apartment.summary.map((item) => (
                  <li key={item.id}>{item.summary_info_name}</li>
                ))}
              </ul>
              </div>
            </div>
            <div className={classes.peopleIcon}>
              <div className={classes.detailsSectionCon}>
                <p>Місця</p>
              </div>
              <span>👥{apartment.info.max_people}</span>
            </div>
            <div className={classes.price}>
              <div className={classes.detailsSectionCon}>
                <p>Ціна</p>
              </div>
              <div className={classes.priceText}>
                <p>{apartment.info.price} UAH за 1 ніч</p>
                <button 
                  className={classes.selectButton}
                  onClick={() => handleBookingClick(apartment.info.price)}
                >Забронювати
                </button>
              </div>
            </div>           
          </div>
        </div>
      </div>
      ))}
      <div className={classes.rateComponent}>
        <RatingComponent rate={residenceInfo.residence.rate} />
      </div>
      <div className={classes.buttonContainer}>
        <button onClick={goBack} className={classes.returnButton}>Відмінити</button>
        <button className={classes.proceedButton}>Продовжити</button>
      </div>
    </div>
  );
};

export default ResidenceInfoPage;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { fetchResidenceInfo } from '../components/API/Accomodation/fetchResidenceInfo';
// import classes from './ResidenceInfoPage.module.css';

// const ResidenceInfoPage = () => {
//   const { id } = useParams();
//   const { t, i18n } = useTranslation();
//   const [residenceInfo, setResidenceInfo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await fetchResidenceInfo('http://localhost:5084', id);

//         i18n.addResourceBundle(i18n.language, 'translation', {
//           residence_name: result.residence.residence_name,
//           cleanliness: "Чистота",
//           advantages: result.advantages.map((advantage) => advantage.name),
//           price_per_night: `${result.residence.price} UAH за 1 ніч`,
//           very_good: "Дуже добре",
//           select_room: "Обрати номер",
//           reviews_link: "Відгуки",
//           summary: "Зведені дані",
//           places: "Місця",
//           apartment_name: result.apartments.map((apartment) => apartment.info.apartment_name),
//           tags: result.apartments.flatMap((apartment) => apartment.tags.map((tag) => tag.name)),
//           max_people: result.apartments.map((apartment) => apartment.info.max_people),
//           apartment_price: result.apartments.map((apartment) => `${apartment.info.price} UAH за 1 ніч`),
//         }, true, true);

//         setResidenceInfo(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id, i18n]);

//   if (loading) return <p>{t('loading', 'Завантаження...')}</p>;
//   if (error) return <p>{t('error', 'Помилка')}: {error}</p>;

//   const calculateAverageRating = (rate) => {
//     return Math.round(rate / 1000);
//   };

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <span key={index} className={index < rating ? classes.filledStar : classes.emptyStar}>
//         ★
//       </span>
//     ));
//   };

//   const averageRating = calculateAverageRating(residenceInfo.residence.rate);

//   return (
//     <div className={classes.container}>
//       <h1>{t('residence_name', residenceInfo.residence.residence_name)}</h1>
//       <div className={classes.residenceInfo}>
//         <div className={classes.imageBox}>
//           <img
//             src={`http://localhost:5084/residence/${residenceInfo.photos[0].url}`}
//             alt="Main photo"
//             className={classes.mainPhoto}
//           />
//           <div className={classes.photoGallery}>
//             {residenceInfo.photos.slice(1).map((photo) => (
//               <img
//                 key={photo.number}
//                 src={`http://localhost:5084/residence/${photo.url}`}
//                 alt={`Photo ${photo.number}`}
//                 className={classes.galleryPhoto}
//               />
//             ))}
//           </div>
//         </div>
//         <div className={classes.infoBox}>
//           <div className={classes.ratingContainer}>
//             <div className={classes.ratingContainerH}>
//               <p className={classes.ratingText}>{t('very_good', 'Дуже добре')}</p>
//               <div className={classes.stars}>{renderStars(averageRating)}</div>
//             </div>
//             <p className={classes.cleanliness}>{t('cleanliness', 'Чистота')}</p>
//             <a href="#" className={classes.reviewsLink}>{t('reviews_link', 'Відгуки')} &gt;</a>
//           </div>
//           <div className={classes.advantagesContainer}>
//             <h3>{t('advantages_title', 'Переваги')}</h3>
//             <ul>
//               {residenceInfo.advantages.map((advantage, index) => (
//                 <li key={index} className={classes.advantageItem}>
//                   {t(`advantage_${index}`, advantage.name)}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className={classes.confirmContainer}>
//             <p>{t('price_per_night')}</p>
//             <button className={classes.selectButton}>{t('select_room', 'Обрати номер')}</button>
//           </div>
//         </div>
//       </div>

//       {residenceInfo.apartments.map((apartment, index) => (
//         <div key={apartment.info.id} className={classes.apartmentCard}>
//           <div className={classes.apartmentCardH3Con}>
//             <h3 className={classes.apartmentCardH3}>{t(`apartment_name_${index}`, apartment.info.apartment_name)}</h3>
//           </div>
//           <div className={classes.apartmentCardAll}>
//             <div className={classes.apartmentCardImageText}>
//               <img
//                 src={`http://localhost:5084/apartment/${apartment.info.image}`}
//                 alt={apartment.info.apartment_name}
//                 className={classes.apartmentImage}
//               />
//               <div className={classes.tagsContainer}>
//                 <ul>
//                   {apartment.tags.map((tag, tagIndex) => (
//                     <li key={tag.id} className={classes.tagItem}>
//                       {t(`tag_${index}_${tagIndex}`, tag.name)}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <div className={classes.apartmentDetails}>
//               <div className={classes.detailsSection}>
//                 <div className={classes.detailsSectionCon}>
//                   <p>{t('summary', 'Зведені дані')}</p>
//                 </div>
//                 <div className={classes.detailsSectionMain}>
//                   <ul>
//                     {apartment.summary.map((item) => (
//                       <li key={item.id}>{t(`summary_info_${item.id}`, item.summary_info_name)}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className={classes.peopleIcon}>
//                 <div className={classes.detailsSectionCon}>
//                   <p>{t('places', 'Місця')}</p>
//                 </div>
//                 <span>👥{apartment.info.max_people}</span>
//               </div>
//               <div className={classes.price}>
//                 <div className={classes.detailsSectionCon}>
//                   <p>{t('price', 'Ціна')}</p>
//                 </div>
//                 <div className={classes.priceText}>
//                   <p>{t(`apartment_price_${index}`, `${apartment.info.price} UAH за 1 ніч`)}</p>
//                   <button className={classes.selectButton}>{t('book', 'Забронювати')}</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ResidenceInfoPage;