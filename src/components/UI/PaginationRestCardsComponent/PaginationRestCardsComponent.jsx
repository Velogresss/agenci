// import React, { useState, useEffect } from 'react';
// import RestCard from '../RestCards/RestCards.jsx';
// import classes from './PaginationRestCardsComponent.module.css'


// const PaginationComponent = ({ data, itemsPerPage }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentItems, setCurrentItems] = useState([]);

//   useEffect(() => {
//     const offset = (currentPage - 1) * itemsPerPage;
//     setCurrentItems(data.slice(offset, offset + itemsPerPage));
//   }, [currentPage, data, itemsPerPage]);

//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   const handleClick = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <div className={classes.grid}>
//         {currentItems.map((item, index) => (
//           <RestCard key={index} url={item.url} alt={item.alt} text={item.text} />
//         ))}
//       </div>
//       <div className={classes.pagination}>
//         <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
//           &lt;&lt;
//         </button>
//         {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//           <button
//             key={page}
//             onClick={() => handleClick(page)}
//             className={page === currentPage ? classes.active : ''}
//           >
//             {page}
//           </button>
//         ))}
//         <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
//           &gt;&gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaginationComponent;

import React, { useState, useEffect } from 'react';
import RestCard from '../RestCards/RestCards.jsx';
import classes from './PaginationRestCardsComponent.module.css';

import myImage from '../../../img/Offer/offer-1.png';

const dataRest = [
  { url: myImage, alt: 'Сеул', text: 'Сеул' },
  { url: myImage, alt: 'Лондон', text: 'Лондон' },
  { url: myImage, alt: 'Рим', text: 'Рим' },
  { url: myImage, alt: 'Париж', text: 'Париж' },
  { url: myImage, alt: 'Токіо', text: 'Токіо' },
  { url: myImage, alt: 'Шанхай', text: 'Шанхай' },
  { url: myImage, alt: 'Франкфурт', text: 'Франкфурт' },
  { url: myImage, alt: 'Стамбул', text: 'Стамбул' },
  { url: myImage, alt: 'Нью-Йорк', text: 'Нью-Йорк' },
  { url: myImage, alt: 'Чикаго', text: 'Чикаго' },
  { url: myImage, alt: 'Торонто', text: 'Торонто' },
  { url: myImage, alt: 'Ванкувер', text: 'Ванкувер' },
  { url: myImage, alt: 'Амстердам', text: 'Амстердам' },
  { url: myImage, alt: 'Сінгапур', text: 'Сінгапур' },
  { url: myImage, alt: 'Сан-Франциско', text: 'Сан-Франциско' },
  { url: myImage, alt: 'Люксембург', text: 'Люксембург' }
];

const PaginationComponent = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const offset = (currentPage - 1) * itemsPerPage;
    setCurrentItems(data.slice(offset, offset + itemsPerPage));
  }, [currentPage, data, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className={classes.grid}>
        {currentItems.map((item, index) => (
          <RestCard key={index} url={item.url} alt={item.alt} text={item.text} />
        ))}
      </div>
      <div className={classes.pagination}>
        <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
          &lt;&lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            className={page === currentPage ? classes.active : ''}
          >
            {page}
          </button>
        ))}
        <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

const PaginationRestCardsComponent = () => {
  return <PaginationComponent data={dataRest} itemsPerPage={10} />;
};

export default PaginationRestCardsComponent;