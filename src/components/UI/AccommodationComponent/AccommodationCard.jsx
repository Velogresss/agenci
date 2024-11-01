import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../../API/Accomodation/fetchCategories';
import { useNavigate } from 'react-router-dom';
import classes from './AccommodationCard.module.css';

const AccommodationCard = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const handleSearch = async (search_id) => {
    const params = {
      count: encodeURIComponent(10),
      category: encodeURIComponent(search_id)
    };

    const queryString = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');

    console.log('queryString:', {queryString}); 

    try {
      const response = await fetch(`http://localhost:5084?${queryString}`);
      const data = await response.json();

      navigate('/results', { state: { data } });

    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  if (error) return <p>Помилка: {error}</p>;

  return (
    <div className={classes.accommodatioGridContainer}>
      {categories.map((category) => (
        <div
          key={category.id}
          className={classes.accommodationCard}
          onClick={() => handleSearch(category.id)}
        >
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