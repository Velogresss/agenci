import React from 'react';
import { useDispatch } from 'react-redux';
import { setGuestInfo } from '../../../../Redux/guestSlice';
import styles from './GuestInfo.module.css';

function GuestInfo() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setGuestInfo({ field: name, value }));
  };

  return (
    <div className={styles.container}>
      <h3>Інформація про гостя</h3>
      <p>"Імена гостей повинні відповідати даним в дійсному посвідченні особи, яке буде використовуватися для реєстрації."</p>
      <input
        type="text"
        name="firstName"
        placeholder="Ім'я та по батькові"
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Прізвище (введіть англійськими буквами)"
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Електронна пошта"
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Моб. телефон"
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
}

export default GuestInfo;

// Getting info from another

// import { useSelector } from 'react-redux';

// const GuestSummary = () => {
//   const guest = useSelector((state) => state.guest);

//   return (
//     <div>
//       <h4>Інформація про гостя</h4>
//       <p>Ім'я: {guest.firstName}</p>
//       <p>Прізвище: {guest.lastName}</p>
//       <p>Електронна пошта: {guest.email}</p>
//       <p>Моб. телефон: {guest.phone}</p>
//     </div>
//   );
// };

// export default GuestSummary;