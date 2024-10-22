import React, { useState } from 'react';
import styles from './Card.module.css';

const Card = ({ image, title, description, isSelected, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hovered : ''} ${isSelected ? styles.selected : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3>{title}</h3>
        {isSelected && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Card;