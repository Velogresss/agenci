import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Results.module.css';
import { fetchCategories } from '../components/API/Accomodation/fetchCategories';

const Results = () => {
  const location = useLocation();
  const results = location.state?.data?.data;
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadResidences = async () => {
      try {
        const response = await fetchCategories('http://localhost:5084');
        setError(null);
      } catch (error) {
        setError("Не вдалося завантажити резиденції");
      }
    };

    loadResidences();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/residence/${id}`);
  };

  return (
    <div className={styles.container}>
      <h1>Результат пошуку</h1>
      <div className={styles.accommodatioGridContainer}>
        {Array.isArray(results) ? (
          results.map((item) => (
            <div
              key={item.id}
              className={styles.accommodationCard}
              onClick={() => handleCardClick(item.id)}
            >
              <img
                src={`http://localhost:5084/residence/${item.imageUrl}`}
                alt={item.residenceName}
                className={styles.image}
              />
              <p className={styles.text}>{item.residenceName}</p>
            </div>
          ))
        ) : (
          <p>No results available or data is not in the expected format.</p>
        )}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Results;
