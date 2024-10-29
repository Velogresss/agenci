// import React, { useState, useEffect } from 'react'; 
// import $ from 'jquery';
// import 'daterangepicker/daterangepicker.css';
// import moment from 'moment';
// import 'daterangepicker';
// import styles from './RoomSearch.module.css';
// import RoomSearchPeople from '../RoomSearchPeople/RoomSearchPeople';

// const RoomSearch = () => {
//   const today = new Date();
//   const [search, setSearch] = useState(''); // The 'search' field
//   const [maxPeople, setMaxPeople] = useState(1); // The 'max_people' field
//   const [startDate, setStartDate] = useState(today);
//   const [endDate, setEndDate] = useState(today);

//   useEffect(() => {
//     $('input[name="daterange"]').daterangepicker({
//       startDate: moment(startDate, 'MM/DD/YYYY'),
//       endDate: moment(endDate, 'MM/DD/YYYY'),
//       singleDatePicker: false,
//       showShortcuts: false,
//       showTopbar: false,
//     }, function(start, end) {
//       setStartDate(start.format('MM/DD/YYYY'));
//       setEndDate(end.format('MM/DD/YYYY'));
//     });
//   }, [startDate, endDate]);

//   const handleSearch = () => {
//     // Prepare the parameters
//     const params = {
//       search: encodeURIComponent(search),
//       max_people: encodeURIComponent(maxPeople)
//     };

//     // Convert params to query string
//     const queryString = Object.keys(params)
//       .map(key => `${key}=${params[key]}`)
//       .join('&');

//     // Fetch data with query parameters
//     fetch(`http://localhost:5084?${queryString}`, {
//       method: 'GET',
//       headers: {},
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Search Results:', data);
//       })
//       .catch(error => {
//         console.error('Error fetching search results:', error);
//       });
//   };

//   const handlePeopleChange = (peopleInfo) => {
//     setMaxPeople(peopleInfo.adults + peopleInfo.children);
//   };

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.container}>
//         <input
//           type="text"
//           placeholder="Місто прибуття"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className={`${styles.input} ${styles.inputBox}`}
//         />
//         <input
//           type="text"
//           name="daterange"
//           defaultValue={`${startDate} - ${endDate}`}
//           className={`${styles.input} ${styles.inputBox}`}
//         />
//         <RoomSearchPeople onPeopleChange={handlePeopleChange} />
//       </div>
//       <div className={styles.buttonContainer}>
//         <button
//           onClick={handleSearch}
//           className={`${styles.button} ${styles.inputBox}`}
//         >
//           Пошук
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RoomSearch;

import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import 'daterangepicker/daterangepicker.css';
import moment from 'moment';
import 'daterangepicker';
import styles from './RoomSearch.module.css';
import RoomSearchPeople from '../RoomSearchPeople/RoomSearchPeople';

const RoomSearch = () => {
  const [search, setSearch] = useState('');
  const [maxPeople, setMaxPeople] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate(); 

  useEffect(() => {
    $('input[name="daterange"]').daterangepicker({
      startDate: moment(startDate, 'MM/DD/YYYY'),
      endDate: moment(endDate, 'MM/DD/YYYY'),
      singleDatePicker: false,
      showShortcuts: false,
      showTopbar: false,
    }, function(start, end) {
      setStartDate(start.format('MM/DD/YYYY'));
      setEndDate(end.format('MM/DD/YYYY'));
    });
  }, [startDate, endDate]);

  const handleSearch = async () => {
    const params = {
      count: encodeURIComponent(10),
      search: encodeURIComponent(search),
      people: encodeURIComponent(maxPeople)
    };

    console.log('max_people:', {maxPeople}); 

    const queryString = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');

      console.log('queryString:', {queryString}); 

    try {
      const response = await fetch(`http://localhost:5084?${queryString}`);
      const data = await response.json();
      
      navigate('/results', { state: { data } });
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <input
              type="text"
              placeholder="Місто прибуття"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`${styles.input} ${styles.inputBox}`}
            />
            <input
              type="text"
              name="daterange"
              defaultValue={`${startDate} - ${endDate}`}
              className={`${styles.input} ${styles.inputBox}`}
            />
            <RoomSearchPeople onPeopleChange={(info) => setMaxPeople(info.adults + info.children)} />
          </div>
          <div className={styles.buttonContainer}>
            <button
              onClick={handleSearch}
              className={`${styles.button} ${styles.inputBox}`}
            >
              Пошук
            </button>
          </div>
        </div>
      );
};

export default RoomSearch;