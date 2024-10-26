import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../../API/Accomodation/fetchCategories';
import classes from './AccommodationCard.module.css'

const AccommodationCard = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCategories('http://localhost:5084');
        setCategories(result.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;

  return (
    <div className={classes.accommodatioGridContainer}>
      {categories.map((category) => (
        <div key={category.id} className={classes.accommodationCard}>
          <img
            className={classes.image}
            src={`http://localhost:5084/categories/${category.image}`}
            alt={category.categories_name}
          />
          <p className={classes.text}>{category.categories_name}</p>
        </div>
      ))}
    </div>
  );
};

export default AccommodationCard;