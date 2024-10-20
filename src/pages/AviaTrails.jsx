// import React, { useState, useEffect } from "react";
// import styles from "./AviaTrails.module.css";

// import Bus from '../img/AviaTrails/Bus.jpg';
// import Eko from '../img/AviaTrails/Eko.jpg';
// import First from '../img/AviaTrails/First.jpg';
// import Prem from '../img/AviaTrails/Prem.png';

// const FlightSearch = () => {
//   const [flightType, setFlightType] = useState('roundTrip');
//   const [route, setRoute] = useState(window.location.pathname);

//   useEffect(() => {
//     const handlePopState = () => {
//       setRoute(window.location.pathname);
//     };

//     window.addEventListener('popstate', handlePopState);

//     return () => {
//       window.removeEventListener('popstate', handlePopState);
//     };
//   }, []);

//   const navigate = (path) => {
//     window.history.pushState({}, '', path); 
//     setRoute(path);
//   };

//   const renderPage = () => {
//     switch (route) {
//       case '/premium':
//         return <div><h2>Преміум - економ клас</h2></div>;
//       case '/first':
//         return <div><h2>Перший клас</h2></div>;
//       case '/econom':
//         return <div><h2>Економ клас</h2></div>;
//       case '/business':
//         return <div><h2>Бізнес клас</h2></div>;
//       default:
//         return (
//           <div>
//             <h2 className={styles.title}>Переліт</h2>

//             <div className={styles.options}>
//               <label className={styles.label}>
//                 <input
//                   type="radio"
//                   name="flightType"
//                   value="roundTrip"
//                   checked={flightType === 'roundTrip'}
//                   onChange={() => setFlightType('roundTrip')}
//                 />
//                 В обидва кінці
//               </label>
//               <label className={styles.label}>
//                 <input
//                   type="radio"
//                   name="flightType"
//                   value="oneWay"
//                   checked={flightType === 'oneWay'}
//                   onChange={() => setFlightType('oneWay')}
//                 />
//                 В один кінець
//               </label>
//               <label className={styles.label}>
//                 <input
//                   type="radio"
//                   name="flightType"
//                   value="multiCity"
//                   checked={flightType === 'multiCity'}
//                   onChange={() => setFlightType('multiCity')}
//                 />
//                 Складний маршрут
//               </label>
//             </div>

//             <div className={styles.inputs}>
//               <div className={styles.inputsInner}>
//                 <input className={styles.input} type="text" placeholder="Місто" />
//                 <input className={styles.input} type="text" placeholder="Місто прибуття" />
//                 <input className={styles.input} type="date" />
//                 {flightType !== 'oneWay' && <input className={styles.input} type="date" />}
//                 <select className={`${styles.select} ${styles.input}`}>
//                   <option value="1">1 дорослий</option>
//                   <option value="2">2 дорослих</option>
//                 </select>
//               </div>

//               {flightType === 'multiCity' && (
//                 <div className={styles.inputsInnerSecond}>
//                   <input className={styles.input} type="text" placeholder="Місто" />
//                   <input className={styles.input} type="text" placeholder="Місто прибуття" />
//                   <input className={styles.input} type="date" placeholder="Виберіть дату" />
//                 </div>
//               )}

//               <div className={styles.inputsButton}>
//                 <button className={`${styles.searchButton} ${styles.input}`}>&#128269; Пошук</button>
//               </div>
//             </div>

//             <div className={styles.classOptions}>
//               <div className={styles.option} onClick={() => navigate('/premium')}>
//                 <img src={Prem} alt="Преміум-економ" />
//                 <div className={styles.veil}></div>
//                 <p>Преміум - економ</p>
//               </div>
//               <div className={styles.option} onClick={() => navigate('/first')}>
//                 <img src={First} alt="Перший клас" />
//                 <div className={styles.veil}></div>
//                 <p>Перший клас</p>
//               </div>
//               <div className={styles.option} onClick={() => navigate('/econom')}>
//                 <img src={Eko} alt="Економ" />
//                 <div className={styles.veil}></div>
//                 <p>Економ</p>
//               </div>
//               <div className={styles.option} onClick={() => navigate('/business')}>
//                 <img src={Bus} alt="Бізнес клас" />
//                 <div className={styles.veil}></div>
//                 <p>Бізнес клас</p>
//               </div>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className={styles.container}>
//       {renderPage()}
//     </div>
//   );
// };

// export default FlightSearch;


import React, { useState, useEffect } from "react";
import styles from "./AviaTrails.module.css";

import Bus from '../img/AviaTrails/Bus.jpg';
import Eko from '../img/AviaTrails/Eko.jpg';
import Fir from '../img/AviaTrails/First.jpg';
import Prem from '../img/AviaTrails/Prem.png';

import Business from '../pages/flightPages/business'
import Econom from '../pages/flightPages/econom'
import Premium from '../pages/flightPages/premium'
import First from '../pages/flightPages/first'

const FlightSearch = () => {
  const [flightType, setFlightType] = useState('roundTrip');
  const [route, setRoute] = useState(window.location.pathname); 

  useEffect(() => {
    const handlePopState = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (path) => {
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}${path}`; 
    window.history.pushState({}, '', newPath); 
    setRoute(newPath); 
  };

  const renderPage = () => {
    if (route.includes('/premium')) {
      return <Premium />;
    }
    if (route.includes('/first')) {
      return <First />;
    }
    if (route.includes('/econom')) {
      return <Econom />;
    }
    if (route.includes('/business')) {
      return <Business />;
    }
    return (
      <div>
        <h2 className={styles.title}>Переліт</h2>

        <div className={styles.options}>
          <label className={styles.label}>
            <input
              type="radio"
              name="flightType"
              value="roundTrip"
              checked={flightType === 'roundTrip'}
              onChange={() => setFlightType('roundTrip')}
            />
            В обидва кінці
          </label>
          <label className={styles.label}>
            <input
              type="radio"
              name="flightType"
              value="oneWay"
              checked={flightType === 'oneWay'}
              onChange={() => setFlightType('oneWay')}
            />
            В один кінець
          </label>
          <label className={styles.label}>
            <input
              type="radio"
              name="flightType"
              value="multiCity"
              checked={flightType === 'multiCity'}
              onChange={() => setFlightType('multiCity')}
            />
            Складний маршрут
          </label>
        </div>

        <div className={styles.inputs}>
          <div className={styles.inputsInner}>
            <input className={styles.input} type="text" placeholder="Місто" />
            <input className={styles.input} type="text" placeholder="Місто прибуття" />
            <input className={styles.input} type="date" />
            {flightType !== 'oneWay' && <input className={styles.input} type="date" />}
            <select className={`${styles.select} ${styles.input}`}>
              <option value="1">1 дорослий</option>
              <option value="2">2 дорослих</option>
            </select>
          </div>

          {flightType === 'multiCity' && (
            <div className={styles.inputsInnerSecond}>
              <input className={styles.input} type="text" placeholder="Місто" />
              <input className={styles.input} type="text" placeholder="Місто прибуття" />
              <input className={styles.input} type="date" placeholder="Виберіть дату" />
            </div>
          )}

          <div className={styles.inputsButton}>
            <button className={`${styles.searchButton} ${styles.input}`}>&#128269; Пошук</button>
          </div>
        </div>

        <div className={styles.classOptions}>
          <div className={styles.option} onClick={() => navigate('/premium')}>
            <img src={Prem} alt="Преміум-економ" />
            <div className={styles.veil}></div>
            <p>Преміум - економ</p>
          </div>
          <div className={styles.option} onClick={() => navigate('/first')}>
            <img src={Fir} alt="Перший клас" />
            <div className={styles.veil}></div>
            <p>Перший клас</p>
          </div>
          <div className={styles.option} onClick={() => navigate('/econom')}>
            <img src={Eko} alt="Економ" />
            <div className={styles.veil}></div>
            <p>Економ</p>
          </div>
          <div className={styles.option} onClick={() => navigate('/business')}>
            <img src={Bus} alt="Бізнес клас" />
            <div className={styles.veil}></div>
            <p>Бізнес клас</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {renderPage()}
    </div>
  );
};

export default FlightSearch;