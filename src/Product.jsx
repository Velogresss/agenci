import React from 'react';

const Product = ({ name, price, description }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Ціна: {price} грн</p>
      <p>Опис: {description}</p>
    </div>
  );
};

export default Product;