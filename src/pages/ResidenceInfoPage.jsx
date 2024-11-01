import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { fetchResidenceInfo } from '../components/API/Accomodation/fetchResidenceInfo';
import classes from './ResidenceInfoPage.module.css';
import RatingComponent  from '../components/UI/RatingComponent/RatingComponent'
import RatingComponentMini from '../components/UI/RatingComponentMini/RatingComponentMini'

import { useDispatch } from 'react-redux';
import { setResidenceData } from '../Redux/residenceSlice';

import RoomSearch from '../components/UI/RoomSearch/RoomSearch'

const ResidenceInfoPage = () => {  
  const { id } = useParams();
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [residenceInfo, setResidenceInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [priceForCont, setPriceForCont] = useState(null);
  const [roomSearchData, setRoomSearchData] = useState(null);
  const [selectedApartmentId, setSelectedApartmentId] = useState('');
  const [selectedNameApart, setSelectedNameApart] = useState('');

  const handleBookingClick = (price, apartmentId, nameApart) => {
    setPriceForCont(price);
    setSelectedApartmentId(apartmentId);
    setSelectedNameApart(nameApart);
  };
  
  const handleRoomSearchData = (data) => {
    setRoomSearchData(data);
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
  };

  const handleCardClick = () => {
    const data = {
      id: residenceInfo.residence.id_residence,
      name: residenceInfo.residence.residence_name,
      img: `http://localhost:5084/residence/${residenceInfo.photos[0].url}`,
      bads: selectedApartmentId,
      apart_name: selectedNameApart,
      apart_price: priceForCont,
    };

    dispatch(setResidenceData(data));
    navigate(`/residence-observe/${residenceInfo.residence.id_residence}`, { state: { data } });
  };

  return (
    <div className={classes.container}>
        <div className={classes.containerRoomSearch}>
          <RoomSearch onSearchData={handleRoomSearchData}/>
        </div>
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
          <>
            <p>Ціна: {priceForCont} UAH за 1 ніч</p>
            <button onClick={handleCardClick} className={classes.selectButton}>Обрати номер</button>
          </>
          )}
          </div>
        </div>
      </div>

      {residenceInfo.apartments.map((apartment) => (
      <div key={apartment.info.id} className={classes.apartmentCard}>
        <div className={classes.apartmentCardH3Con}>
          <h3 className={classes.apartmentCardH3}>{apartment.info.apartment_name}</h3>
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
                {apartment.summary
                  .filter(item => item.summary_info_name !== "Безкоштовне скасування до  21 лип")
                  .map((item) => (
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
                  onClick={() => handleBookingClick(apartment.info.price, apartment.tags[0].name, apartment.info.apartment_name)}
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