import React, { useState } from "react";
import styles from "./CreditCardForm.module.css";

const CreditCardForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    saveCard: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className={styles.cardFormAll}>
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <div className={styles.cardIcons}>
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="cardNumber"
          placeholder="Номер картки"
          value={formData.cardNumber}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="cardHolder"
          placeholder="Ім’я власника картки"
          value={formData.cardHolder}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>
      <div className={styles.inlineFields}>
        <div className={styles.inlineField}>
          <input
            type="text"
            name="expiryMonth"
            placeholder="MM"
            value={formData.expiryMonth}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inlineField}>
          <input
            type="text"
            name="expiryYear"
            placeholder="PP"
            value={formData.expiryYear}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inlineField}>
          <input
            type="text"
            name="cvv"
            placeholder="CV2/CW"
            value={formData.cvv}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>
      </div>
      <button type="submit" className={styles.submitButton}>
        Оплатити
      </button>
    </form>
    </div>
  );
};

export default CreditCardForm;