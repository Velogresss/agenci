// src/ContactPage.js

import React, { useState } from 'react';
import classes from './contacts.module.css'; 
import imgMap from '../img/Contacts/map.png'
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
  <div className={classes.wrapper}>
    <img src={imgMap} alt="" />
    <div className={classes.contactContainer}>
      <div className={classes.contactInfo}>
        <h2>{t('contactsPage.title')}</h2>
        <p>{t('contactsPage.titleSub')}</p>
        <p>(099) 142 38 76 (094) 778 77 77</p>
        <p>(096) 558 73 83 (097) 265 48 84</p>
        <p>Instagram: @All_in_one</p>
        <p>Email: All_in_one@gmail.com</p>
        <p>{t('contactsPage.titleEnd')}</p>
      </div>
      <div className={classes.contactForm}>
        <h2>{t('contactsPage.titleForm')}</h2>
        <form onSubmit={handleSubmit}>
          <label>Ім’я</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Тема</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <label>Повідомлення</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">{t('contactsPage.formButton')}</button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default ContactPage;
