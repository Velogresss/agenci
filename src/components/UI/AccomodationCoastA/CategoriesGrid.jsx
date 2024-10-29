import React, { useEffect, useState } from 'react';
import { fetchByPriceOrder } from '../../API/Accomodation/fetchByPriceOrder';
import classes from './CategoriesGrid.module.css';
import { fetchCategories } from '../../API/Accomodation/fetchCategories';
import { useNavigate } from 'react-router-dom';

function CategoriesGrid() {
  const [categories, setCategories] = useState([]);
  const [residences, setResidences] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadResidences = async () => {
      try {
        const url = "http://localhost:5084"; 
        const response = await fetchByPriceOrder(url);
        setResidences(response.data);
      } catch (error) {
        setError("Не вдалося завантажити резиденції");
      }
    };

    loadResidences();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCategories('http://localhost:5084');
        setCategories(result.data || []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/residence/${id}`);
  };

  return (
    <div className={classes.accommodatioGridContainer}>
      {error && <p className={classes.errorText}>{error}</p>}
      {residences.map((residence) => (
        <div
          key={residence.id}
          className={classes.accommodationCard}
          onClick={() => handleCardClick(residence.id)}
        >
          <img
            className={classes.image}
            src={residence.imageUrl ? `http://localhost:5084/residence/${residence.imageUrl}` : 'default-image-path.png'}
            alt={residence.residenceName}
          />
          <p className={classes.text}>{residence.residenceName}</p>
          <p className={classes.address}>Адреса: {residence.address}</p>
          <p className={classes.price}>Ціна: {residence.price} UAH</p>
          {residence.promotionalPrice > 0 && (
            <p className={classes.promotionalPrice}>Акційна ціна: {residence.promotionalPrice} UAH</p>
          )}
          <p className={classes.rate}>Рейтинг: {residence.rate}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoriesGrid;
