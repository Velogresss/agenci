import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import 'daterangepicker/daterangepicker.css';
import moment from 'moment';
import 'daterangepicker';
import styles from './RoomSearch.module.css';
import RoomSearchPeople from '../RoomSearchPeople/RoomSearchPeople';
import { useDispatch, useSelector } from 'react-redux';
import { setRoomSearchData } from '../../../Redux/roomSearchSlice';

const RoomSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const { search: reduxSearch, startDate: reduxStartDate, endDate: reduxEndDate, adults: reduxAdults, children: reduxChildren, rooms: reduxRooms } = useSelector(state => state.roomSearch);

  const [search, setSearch] = useState(reduxSearch || '');
  const [maxPeople, setMaxPeople] = useState((reduxAdults || 1) + (reduxChildren || 0));

  const [startDate, setStartDate] = useState(reduxStartDate || new Date());
  const [endDate, setEndDate] = useState(reduxEndDate || tomorrow);

  const [adults, setAdults] = useState(reduxAdults || 1);
  const [childr, setChildren] = useState(reduxChildren || 0);

  const [room, setRooms] = useState(reduxRooms || 1);

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

    const queryString = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');

    console.log('queryString:', {queryString}); 

    const data = { search, startDate, endDate, adults, childr, room };
    dispatch(setRoomSearchData(data));
    
    try {
      const response = await fetch(`http://localhost:5084?${queryString}`);
      const data = await response.json();

      navigate('/results', { state: { data } });

    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handlePeopleChange = (info) => {
    setAdults(info.adults);
    setChildren(info.children);
    setMaxPeople(info.adults + info.children);
    setRooms(info.rooms);
  }

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
        <RoomSearchPeople onPeopleChange={handlePeopleChange}/>
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