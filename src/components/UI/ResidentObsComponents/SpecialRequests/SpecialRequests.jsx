import React from 'react';
import styles from './SpecialRequests.module.css';

function SpecialRequests() {
  return (
    <div className={styles.container}>
      <h3>Запити щодо спеціального обслуговування</h3>
      <p>Персонал об'єкта розміщення докладе всіх зусиль, але не може гарантувати задоволення всіх ваших запитів.</p>
      <textarea placeholder="Введіть усі свої запити (необов'язково)" />
    </div>
  );
}

export default SpecialRequests;
