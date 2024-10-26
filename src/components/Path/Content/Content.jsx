// import React from 'react';
// import All from '../../../pages/all';
// import About from '../../../pages/about';
// import Register from '../../../pages/register';
// import Login from '../../../pages/login'
// import Contacts from '../../../pages/contacts'
// import Leisure from '../../../pages/leisure'
// import AviaTrails from '../../../pages/AviaTrails'

// import Business from '../../../pages/flightPages/business'
// import Econom from '../../../pages/flightPages/econom'
// import Premium from '../../../pages/flightPages/premium'
// import First from '../../../pages/flightPages/first'

// const Content = ({ currentPath }) => {
//   switch (currentPath) {
//     case '/about':
//       return <About />;
//     case '/accommodation':
//       return <div>Помешкання</div>;
//     case '/contacts':
//       return <Contacts/>;
//     case '/flights':
//       return <AviaTrails/>;
//     case '/leisure':
//       return <Leisure/>;
//     case '/airport-taxi':
//       return <div>Таксі з/до аеропорту</div>;
//     case '/support':
//       return <div>Служба підтримки клієнтів</div>;
//     case '/guarantee':
//       return <div>Гарантія обслуговування</div>;
//     case '/login':
//       return <Login/>;
//     case '/register':
//       return <Register />;
//     case '/cart':
//       // return <Cart />;
      
//     case '/flights/business':
//       return <Business />;
//     case '/flights/econom':
//       return <Econom />;
//     case '/flights/premium':
//       return <Premium />;
//     case '/flights/first':
//       return <First />;

//     case '/all':
//       return <All />;
//     default:
//       return <All />;
//   }
// };

// export default Content;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import All from '../../../pages/all';
import About from '../../../pages/about';
import Register from '../../../pages/register';
import Login from '../../../pages/login';
import Contacts from '../../../pages/contacts';
import Leisure from '../../../pages/leisure';
import AviaTrails from '../../../pages/AviaTrails';
import Accommodation from '../../../pages/accomodation'

import Business from '../../../pages/flightPages/business';
import Econom from '../../../pages/flightPages/econom';
import Premium from '../../../pages/flightPages/premium';
import First from '../../../pages/flightPages/first';

const Content = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/accommodation" element={<Accommodation/>} />
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
      <Route path="*" element={<All />} /> {/* Рендерить All за замовчуванням */}
    </Routes>
  );
};

export default Content;