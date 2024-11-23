import React from 'react';
import { Routes, Route } from 'react-router-dom';
import All from '../../../pages/all';
import About from '../../../pages/about';
import Register from '../../../pages/register';
import Login from '../../../pages/login';
import Contacts from '../../../pages/contacts';
import Leisure from '../../../pages/leisure';
import AviaTrails from '../../../pages/AviaTrails';
import Accommodation from '../../../pages/accomodation';
import ResidenceInfoPage from '../../../pages/ResidenceInfoPage';
import PersonalPage from '../../../pages/PersonalPage';
import CreditCardForm from '../../../pages/CreditCardForm'

import Results from '../../../pages/Results'

import Business from '../../../pages/flightPages/business';
import Econom from '../../../pages/flightPages/econom';
import Premium from '../../../pages/flightPages/premium';
import First from '../../../pages/flightPages/first';

import ResidentObsPage from '../../../pages/ResidentObsPage'

import Cart from '../../../pages/cart'

const Content = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/accommodation" element={<Accommodation/>} />
      <Route path="/residence/:id" element={<ResidenceInfoPage/>} />
      <Route path="/results" element={<Results />} />
      <Route path="/residence-observe/:id" element={<ResidentObsPage />} />
      <Route path="/personal-page" element={<PersonalPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<CreditCardForm />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/flights" element={<AviaTrails />} />
      <Route path="/leisure" element={<Leisure />} />
      <Route path="/airport-taxi" element={<div>Таксі з/до аеропорту</div>} />
      <Route path="/support" element={<div>Служба підтримки клієнтів</div>} />
      <Route path="/guarantee" element={<div>Гарантія обслуговування</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/flights/business" element={<Business />} />
      <Route path="/flights/econom" element={<Econom />} />
      <Route path="/flights/premium" element={<Premium />} />
      <Route path="/flights/first" element={<First />} />
      <Route path="/all" element={<All />} />
      <Route path="*" element={<All />} />
    </Routes>
  );
};

export default Content;